import express from 'express';
import bodyParser from 'body-parser';
import pdfRoute from './src/routes/pdf.js';
import dotenv from 'dotenv';
import { apiKeyAuth } from './src/middleware/auth.js';

dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: '10mb' }));

app.use(apiKeyAuth);
app.get("/", (req, res) => {
  res.send("🚀 PDF generation service is running!");
});

app.use('/generate-pdf', pdfRoute);

// healthcheck route
app.get('/health', (_, res) => res.send('OK'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`PDF service listening on ${PORT}`));
