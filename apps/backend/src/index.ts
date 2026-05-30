import cors from 'cors';
import { config } from 'dotenv';
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';

config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'AfriDollar Backend API is running' });
});

// API routes
app.get('/api/v1', (_req, res) => {
  res.json({
    name: 'AfriDollar API',
    version: '0.1.0',
    description: 'Stellar-powered financial infrastructure API',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AfriDollar Backend API running on port ${PORT}`);
});
