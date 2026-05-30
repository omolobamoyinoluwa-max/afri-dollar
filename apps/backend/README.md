# AfriDollar Backend

Express.js backend API for AfriDollar.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
cp .env.example .env
```

3. Run the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:3001`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/v1` - API information

## Tech Stack

- Express.js
- TypeScript
- Helmet (security headers)
- CORS
