# ParaFi Token Vesting Dashboard

A comprehensive web application for tracking and visualizing unlocking token positions with DLOM (Discount for Lack of Marketability) calculations.

## Features

- **Real-time Market Data**: Integrates with CoinGecko API for live token prices and volatility
- **DLOM Calculations**: Uses Black-Scholes option pricing to calculate fair value discounts
- **Flexible Vesting Schedules**: Support for cliffs, daily, weekly, and monthly unlock patterns
- **Schedule Visualizations**: Charts and tables showing portfolio composition and unlock timelines
- **Position Metrics**: Track unlocked/locked amounts, current values, and discount percentages

## Supported Tokens

- SOL (Solana)
- ETH (Ethereum)
- BTC (Bitcoin)
- USDC (USD Coin)
- USDT (Tether)
- MATIC (Polygon)
- AVAX (Avalanche)
- DOT (Polkadot)
- ADA (Cardano)
- LINK (Chainlink)

## Setup Instructions

### 1. Database Setup

The application uses PostgreSQL. You can set it up using Docker:

```bash
# Start the database
docker-compose up -d

# Or manually create a PostgreSQL database and update the DATABASE_URL
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5444/tokenvesting_mvp"
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Database Migration

```bash
npx prisma migrate dev
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Usage

### Creating a Vesting Schedule

1. Navigate to the dashboard
2. Click "New Schedule"
3. Fill in the schedule details:
   - **Name**: Descriptive name for the schedule
   - **Token Symbol**: Select from supported tokens
   - **Total Quantity**: Total tokens in the position
   - **Purchase Price**: Optional purchase price for reference
   - **Purchase Date**: When the tokens were acquired

4. Add unlock events:
   - **Cliff Events**: One-time unlocks on specific dates
   - **Recurring Events**: Daily, weekly, or monthly unlocks over a duration

5. Ensure the total allocated tokens equals the total quantity
6. Click "Create Schedule"

### Understanding DLOM Calculations

The application calculates the Discount for Lack of Marketability (DLOM) using:

- **Black-Scholes Put Option**: At-the-money European put option premium
- **Volatility**: Annualized volatility calculated from historical price data
- **Time to Unlock**: Years until the next unlock event
- **Risk-free Rate**: 5% annual rate (configurable)

The DLOM represents the value forfeited by being unable to sell locked tokens immediately.

### Dashboard Features

- **Portfolio Overview**: Total value, unlocked/locked amounts, average discount
- **Charts**: Portfolio composition pie chart, token price comparison, unlock timeline
- **Schedule Table**: Detailed view of all vesting schedules with key metrics
- **Real-time Updates**: Refresh market data to get current prices and recalculate DLOM

## API Endpoints

- `GET /api/vesting-schedules` - List all schedules
- `POST /api/vesting-schedules` - Create new schedule
- `GET /api/vesting-schedules/[id]` - Get specific schedule
- `POST /api/vesting-schedules/[id]/unlock-events` - Add unlock events
- `POST /api/vesting-schedules/[id]/calculate` - Calculate DLOM
- `GET /api/vesting-schedules/[id]/calculations` - Get calculation history

## Example Vesting Schedules

The application supports various vesting patterns:

1. **Six-month cliff**: All tokens unlock after 6 months
2. **Gradual unlocks**: Daily unlocks over 3 years
3. **Multiple cliffs**: Different amounts unlock on different dates
4. **Mixed schedules**: Combination of cliffs and recurring unlocks

## Technical Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Charts**: Recharts for data visualization
- **Database**: PostgreSQL with Prisma ORM
- **Market Data**: CoinGecko API integration
- **Option Pricing**: Black-Scholes implementation

## Reflections

### 1. What assumptions did you make, and how did you validate them?

- **Market Data Availability**: Assumed CoinGecko API would be reliable, implemented fallback to stubbed data if API failed.
- **Premium Calculation**: Assumed Black-Scholes w/ risk-free rate of 5% provided a sufficient estimation of ATM put premium, used current 10Y Treasury rate and ran test calculations to confirm reasonable DLOM values.
- **Token Price History**: Assumed vesting tokens have +1 year of price data

### 2. What was the hardest technical or product hurdle and how did you tackle it?

**Modeling & Representing Unlock Events**
- **Challenges**: Corraling the space of possible vesting schedules, creating a simple data model, composing an intuitive UX/UI for the form
- **Approach**: Developed an initial feel for them in Excel, selected an initial scope to cover with cliffs and recurring intervals, researched various form examples to mock up basic wireframes, incorporated real-time input validation with visual feedback, helpful error messages, and dynamic button states that guide users through the process.

### 3. What trade-offs or limitations did you accept?

- **API Dependency**: Relying on external CoinGecko API for market data
- **Asset Support**: Supporting a fixed set of tokens rather than an arbitrary ticker
- **Vesting Schedules**: Focusing on cliffs and date-based unlocks
- **Form Complexity**: More complex form for better validation vs simpler but less robust approach
- **Single-User Support**: Simpler approach for demo purposes


### 4. Are there vulnerabilities or operational concerns in your approach?

**Security Vulnerabilities:**
- **Input Validation**: Limited front-end input and server-side validation of vesting schedule data
- **DB Access**: No authentication or authorization for API endpoints

**Operational Concerns:**
- **API Rate Limits**: CoinGecko has rate limits that could affect production usage
- **Scalability**: Deployed on basic free tiers for Vercel & Prisma
- **DB Backups**: No automated database backup solution

**Solution Strategies:**
- Implement server-side validation
- Move DLOM calc off the front-end
- Add authentication and authorization
- Implement API rate limiting
- Add database constraints and validation

### 5. What additional features would you implement with more time?

**Immediate Enhancements (1-2 weeks):**
- **Editing & Deleting Schedules**: Enable the user to fully manage vesting schedules via the app
- **Improve UI**: Fix chart issues, improve vesting schedules table
- **Expand Schedule Types**: Support duration-based vesting schedules and revamp form flow
- **Authentication & Authorization**: User login, role-based access, audit trails

**Medium-term Features (1-2 months):**
- **Exporting Schedules**: Export vesting schedules w/ token amounts, discounts, etc. via CSV/Excel
- **Expand Assets**: Handle arbitrary ticker/contract address, support DEX markets
- **Email Notifications**: Alerts for upcoming unlock events
- **Advanced DLOM Models**: Support for different volatility models and risk-free rates
- **Advanced Reporting**: Role-based UI/UX to support the unique needs of separate internal teams