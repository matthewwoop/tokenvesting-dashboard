# ParaFi Token Vesting Dashboard

A comprehensive web application for tracking and visualizing unlocking token positions with DLOM (Discount for Lack of Marketability) calculations.

## Features

- **Real-time Market Data**: Integrates with CoinGecko API for live token prices and volatility
- **DLOM Calculations**: Uses Black-Scholes option pricing to calculate fair value discounts
- **Flexible Vesting Schedules**: Support for cliffs, daily, weekly, and monthly unlock patterns
- **Interactive Dashboard**: Charts and tables showing portfolio composition and unlock timelines
- **Comprehensive Metrics**: Track unlocked/locked amounts, current values, and discount percentages

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

ISC License