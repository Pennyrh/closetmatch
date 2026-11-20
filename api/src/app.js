import express from 'express';
import cors from 'cors';
import clothingRouter from './routes/clothing.js';
import outfitsRouter from './routes/outfits.js';
import matchesRouter from './routes/matches.js';
import plansRouter from './routes/plans.js';
import usageRouter from './routes/usage.js';

export function createApp() {
  const app = express();

  app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
  app.use(express.json());

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'closetmatch-api' });
  });

  app.use('/api/clothing', clothingRouter);
  app.use('/api/outfits', outfitsRouter);
  app.use('/api/matches', matchesRouter);
  app.use('/api/plans', plansRouter);
  app.use('/api/usage', usageRouter);

  app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
  });

  return app;
}
