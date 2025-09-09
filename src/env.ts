import 'dotenv/config';

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: parseInt(process.env.PORT || '3000', 10)
  // Adicione aqui o que precisar: DATABASE_URL, tokens, etc.
  // DATABASE_URL: process.env.DATABASE_URL ?? ''
};
