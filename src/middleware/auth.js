import dotenv from 'dotenv';
dotenv.config();

export const apiKeyAuth = (req, res, next) => {
  const clientKey = req.header('x-api-key');
  if (!clientKey || clientKey !== process.env.API_KEY) {
    return res.status(403).json({ error: 'Forbidden: Invalid API key' });
  }
  next();
};
