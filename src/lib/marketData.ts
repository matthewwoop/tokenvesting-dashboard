/**
 * marketData.ts
 *
 * Token market data feeds with real API integration and fallback to stubbed data.
 * Supports CoinGecko API for real-time prices and volatility calculations.
 */

interface TokenData {
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

interface HistoricalData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

/**
 * Returns the current spot price (in USD) for a given token symbol.
 * Attempts to fetch from CoinGecko API, falls back to stubbed data.
 *
 * @param {string} symbol - The token symbol (e.g., "SOL").
 * @returns {Promise<number>} The spot price in USD.
 */
export async function getSpotPriceUSD(symbol: string): Promise<number> {
  try {
    // Map common symbols to CoinGecko IDs
    const symbolToId: Record<string, string> = {
      'SOL': 'solana',
      'ETH': 'ethereum',
      'BTC': 'bitcoin',
      'USDC': 'usd-coin',
      'USDT': 'tether',
      'MATIC': 'matic-network',
      'AVAX': 'avalanche-2',
      'DOT': 'polkadot',
      'ADA': 'cardano',
      'LINK': 'chainlink'
    };

    const coinId = symbolToId[symbol.toUpperCase()];
    if (!coinId) {
      throw new Error(`Unsupported symbol: ${symbol}`);
    }

    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_24hr_change=true`
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data[coinId].usd;
  } catch (error) {
    console.warn(`Failed to fetch real price for ${symbol}, using stub:`, error);
    
    // Fallback to stubbed data
    switch (symbol.toUpperCase()) {
      case "SOL":
        return 150;
      case "ETH":
        return 3000;
      case "BTC":
        return 45000;
      case "USDC":
        return 1;
      case "USDT":
        return 1;
      case "MATIC":
        return 0.8;
      case "AVAX":
        return 25;
      case "DOT":
        return 7;
      case "ADA":
        return 0.5;
      case "LINK":
        return 15;
      default:
        throw new Error(`No spot price data for symbol "${symbol}"`);
    }
  }
}

/**
 * Returns the annualized implied volatility (decimal) for a given token symbol.
 * Calculates from historical price data, falls back to stubbed data.
 *
 * @param {string} symbol - The token symbol (e.g., "SOL").
 * @returns {Promise<number>} The annualized volatility (e.g., 0.75 for 75%).
 */
export async function getAnnualizedVolatility(symbol: string): Promise<number> {
  try {
    // Map common symbols to CoinGecko IDs
    const symbolToId: Record<string, string> = {
      'SOL': 'solana',
      'ETH': 'ethereum',
      'BTC': 'bitcoin',
      'USDC': 'usd-coin',
      'USDT': 'tether',
      'MATIC': 'matic-network',
      'AVAX': 'avalanche-2',
      'DOT': 'polkadot',
      'ADA': 'cardano',
      'LINK': 'chainlink'
    };

    const coinId = symbolToId[symbol.toUpperCase()];
    if (!coinId) {
      throw new Error(`Unsupported symbol: ${symbol}`);
    }

    // Get 365 days of historical data
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - (365 * 24 * 60 * 60); // 365 days ago

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart/range?vs_currency=usd&from=${startDate}&to=${endDate}`
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data: HistoricalData = await response.json();
    
    // Calculate daily returns
    const prices = data.prices.map(([timestamp, price]) => price);
    const returns: number[] = [];
    
    for (let i = 1; i < prices.length; i++) {
      const dailyReturn = Math.log(prices[i] / prices[i - 1]);
      returns.push(dailyReturn);
    }

    // Calculate annualized volatility
    const meanReturn = returns.reduce((sum, ret) => sum + ret, 0) / returns.length;
    const variance = returns.reduce((sum, ret) => sum + Math.pow(ret - meanReturn, 2), 0) / returns.length;
    const dailyVolatility = Math.sqrt(variance);
    const annualizedVolatility = dailyVolatility * Math.sqrt(365);

    return Math.min(annualizedVolatility, 2.0); // Cap at 200% for sanity
  } catch (error) {
    console.warn(`Failed to fetch real volatility for ${symbol}, using stub:`, error);
    
    // Fallback to stubbed data
    switch (symbol.toUpperCase()) {
      case "SOL":
        return 0.87;
      case "ETH":
        return 0.65;
      case "BTC":
        return 0.55;
      case "USDC":
        return 0.01;
      case "USDT":
        return 0.01;
      case "MATIC":
        return 0.75;
      case "AVAX":
        return 0.85;
      case "DOT":
        return 0.70;
      case "ADA":
        return 0.80;
      case "LINK":
        return 0.75;
      default:
        throw new Error(`No volatility data for symbol "${symbol}"`);
    }
  }
}

/**
 * Gets comprehensive token information including price, market cap, and 24h change.
 *
 * @param {string} symbol - The token symbol.
 * @returns {Promise<TokenData>} Token market data.
 */
export async function getTokenData(symbol: string): Promise<TokenData> {
  try {
    const symbolToId: Record<string, string> = {
      'SOL': 'solana',
      'ETH': 'ethereum',
      'BTC': 'bitcoin',
      'USDC': 'usd-coin',
      'USDT': 'tether',
      'MATIC': 'matic-network',
      'AVAX': 'avalanche-2',
      'DOT': 'polkadot',
      'ADA': 'cardano',
      'LINK': 'chainlink'
    };

    const coinId = symbolToId[symbol.toUpperCase()];
    if (!coinId) {
      throw new Error(`Unsupported symbol: ${symbol}`);
    }

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      symbol: symbol.toUpperCase(),
      name: data.name,
      current_price: data.market_data.current_price.usd,
      price_change_percentage_24h: data.market_data.price_change_percentage_24h,
      market_cap: data.market_data.market_cap.usd,
      total_volume: data.market_data.total_volume.usd
    };
  } catch (error) {
    console.warn(`Failed to fetch token data for ${symbol}, using stub:`, error);
    
    // Fallback to stubbed data
    const price = await getSpotPriceUSD(symbol);
    return {
      symbol: symbol.toUpperCase(),
      name: symbol,
      current_price: price,
      price_change_percentage_24h: 0,
      market_cap: 0,
      total_volume: 0
    };
  }
}