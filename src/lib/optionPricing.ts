/**
 * optionPricing.ts
 *
 * Contains option-pricing formulas used for DLOM calculations.
 * Implements the Black–Scholes ATM European put premium and DLOM calculations.
 */

/**
 * Standard normal cumulative distribution function (CDF).
 * Uses the Abramowitz and Stegun approximation for browser reliability.
 * 
 * @param {number} x - The value to evaluate the CDF at.
 * @returns {number} The probability that a standard normal random variable is ≤ x.
 */
function normCdf(x: number): number {

  // Transform for polynomial approximation of tail probability
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  // Standard normal PDF at x
  const d = 0.3989423 * Math.exp(-x * x / 2);

  let probability = d * t * (
    0.3193815 +
    t * (
      -0.3565638 +
      t * (
        1.781478 +
        t * (
          -1.821256 +
          t * 1.330274
        )
      )
    )
  );

  if (x > 0) {
    probability = 1 - probability;
  }

  return probability;
}

/**
 * Computes the Black–Scholes price of an at-the-money (ATM) European put option.
 *
 * @param {number} S     - Current spot price of the underlying.
 * @param {number} K     - Strike price (for ATM, K should equal S).
 * @param {number} r     - Annual risk-free interest rate (decimal, e.g. 0.03 for 3%).
 * @param {number} sigma - Annual volatility (decimal, e.g. 0.75 for 75%).
 * @param {number} T     - Time to expiry in years (e.g. 0.5 for 6 months).
 * @returns {number} The option premium in the same units as S.
 */
export function blackScholesPut(S: number, K: number, r: number, sigma: number, T: number): number {
  
  if (T <= 0) {
    return Math.max(K - S, 0);
  }

  const sqrtT = Math.sqrt(T);
  const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * sqrtT);
  const d2 = d1 - sigma * sqrtT;

  const Nd1 = normCdf(-d1);
  const Nd2 = normCdf(-d2);

  return K * Math.exp(-r * T) * Nd2 - S * Nd1;
}

/**
 * Calculates the Discount for Lack of Marketability (DLOM) for a locked token position.
 * DLOM is calculated as the premium of an at-the-money European put option.
 *
 * @param {number} spotPrice - Current spot price of the token.
 * @param {number} volatility - Annualized volatility of the token.
 * @param {number} timeToUnlock - Time to unlock in years.
 * @param {number} riskFreeRate - Risk-free interest rate (default: 0.05 for 5%).
 * @returns {number} The DLOM discount amount per token.
 */
export function calculateDLOM(
  spotPrice: number, 
  volatility: number, 
  timeToUnlock: number, 
  riskFreeRate: number = 0.05
): number {
  return blackScholesPut(spotPrice, spotPrice, riskFreeRate, volatility, timeToUnlock);
}

/**
 * Calculates the discounted value of a locked token position.
 *
 * @param {number} quantity - Number of tokens.
 * @param {number} spotPrice - Current spot price per token.
 * @param {number} dlom - DLOM discount per token.
 * @returns {number} The discounted value of the position.
 */
export function calculateDiscountedValue(
  quantity: number, 
  spotPrice: number, 
  dlom: number
): number {
  const discountedPrice = spotPrice - dlom;
  return quantity * discountedPrice;
}

/**
 * Calculates the percentage discount applied to the position.
 *
 * @param {number} spotPrice - Current spot price per token.
 * @param {number} dlom - DLOM discount per token.
 * @returns {number} The percentage discount (0-100).
 */
export function calculateDiscountPercentage(spotPrice: number, dlom: number): number {
  return (dlom / spotPrice) * 100;
}

/**
 * Calculates time to unlock in years from a given date.
 *
 * @param {Date} unlockDate - The date when tokens unlock.
 * @returns {number} Time to unlock in years.
 */
export function calculateTimeToUnlock(unlockDate: Date): number {
  const now = new Date();
  const timeDiff = unlockDate.getTime() - now.getTime();
  const daysDiff = timeDiff / (1000 * 3600 * 24);
  return Math.max(daysDiff / 365, 0); // Return 0 if already unlocked
}

/**
 * Interface for vesting schedule calculation results.
 */
export interface VestingCalculation {
  totalQuantity: number;
  unlockedQuantity: number;
  lockedQuantity: number;
  spotPrice: number;
  dlom: number;
  discountedPrice: number;
  totalValue: number;
  discountedValue: number;
  discountPercentage: number;
  timeToUnlock: number;
}

/**
 * Calculates comprehensive vesting schedule metrics.
 *
 * @param {number} totalQuantity - Total tokens in position.
 * @param {number} unlockedQuantity - Currently unlocked tokens.
 * @param {number} spotPrice - Current spot price.
 * @param {number} volatility - Token volatility.
 * @param {Date} nextUnlockDate - Next unlock date.
 * @param {number} riskFreeRate - Risk-free rate.
 * @returns {VestingCalculation} Comprehensive calculation results.
 */
export function calculateVestingMetrics(
  totalQuantity: number,
  unlockedQuantity: number,
  spotPrice: number,
  volatility: number,
  nextUnlockDate: Date,
  riskFreeRate: number = 0.05
): VestingCalculation {
  const lockedQuantity = totalQuantity - unlockedQuantity;
  const timeToUnlock = calculateTimeToUnlock(nextUnlockDate);
  const dlom = calculateDLOM(spotPrice, volatility, timeToUnlock, riskFreeRate);
  const discountedPrice = spotPrice - dlom;
  const totalValue = totalQuantity * spotPrice;
  const discountedValue = unlockedQuantity * spotPrice + lockedQuantity * discountedPrice;
  const discountPercentage = calculateDiscountPercentage(spotPrice, dlom);

  return {
    totalQuantity,
    unlockedQuantity,
    lockedQuantity,
    spotPrice,
    dlom,
    discountedPrice,
    totalValue,
    discountedValue,
    discountPercentage,
    timeToUnlock
  };
}