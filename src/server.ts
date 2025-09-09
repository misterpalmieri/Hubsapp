import express from 'express';
import { env } from './env';

const app = express();
app.disable('x-powered-by');
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ ok: true, ts: new Date().toISOString() });
});

app.get('/', (_req, res) => {
  res.json({ message: 'Hubsapp online!' });
});

if (require.main === module) {
  app.listen(env.PORT, () => {
    console.log(`Hubsapp ouvindo em http://localhost:${env.PORT} (${env.NODE_ENV})`);
  });
}

export default app;
