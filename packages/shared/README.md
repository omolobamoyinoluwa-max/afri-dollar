# @afri-dollar/shared

Shared utilities, types, and constants for AfriDollar applications.

## Installation

```bash
npm install @afri-dollar/shared
```

## Usage

```typescript
import { formatCurrency, formatDate, TRANSACTION_TYPES } from '@afri-dollar/shared';

// Format currency
const amount = formatCurrency('1000.50', 'USD');

// Format date
const date = formatDate(new Date());

// Use constants
const type = TRANSACTION_TYPES.DEPOSIT;
```

## Available Exports

### Types

- `User`
- `Business`
- `Wallet`
- `Transaction`
- `ApiResponse`
- `PaginationParams`
- `PaginatedResponse`

### Constants

- `STELLAR_NETWORKS`
- `STELLAR_HORIZON_URLS`
- `ASSET_CODES`
- `TRANSACTION_TYPES`
- `TRANSACTION_STATUS`
- `WALLET_TYPES`
- `ERROR_CODES`
- `HTTP_STATUS`

### Utilities

- `formatCurrency()`
- `formatDate()`
- `formatDateTime()`
- `generateRandomString()`
- `isValidEmail()`
- `isValidPhoneNumber()`
- `truncateAddress()`
- `sleep()`
- `retry()`
