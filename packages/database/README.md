# @afri-dollar/database

Database package for AfriDollar using Prisma ORM.

## Installation

```bash
npm install @afri-dollar/database
```

## Setup

1. Copy `.env.example` to `.env` and configure your database URL:

```bash
cp .env.example .env
```

2. Generate Prisma client:

```bash
npm run generate
```

3. Run migrations:

```bash
npm run migrate
```

## Usage

```typescript
import { prisma } from '@afri-dollar/database';

// Query users
const users = await prisma.user.findMany();

// Create a user
const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'Doe',
  },
});
```

## Available Scripts

- `npm run generate` - Generate Prisma client
- `npm run migrate` - Create and run migrations
- `npm run migrate:deploy` - Deploy migrations (production)
- `npm run migrate:reset` - Reset database
- `npm run studio` - Open Prisma Studio
- `npm run seed` - Seed database with test data
- `npm run type-check` - Run TypeScript type checking

## Database Schema

The schema includes models for:

- Users
- Businesses
- Wallets
- Wallet Balances
- Transactions
- KYC Records
- Exchange Rates
- Audit Logs

See `prisma/schema.prisma` for the complete schema definition.
