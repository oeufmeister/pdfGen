import express from 'express';
import bodyParser from 'body-parser';
import pdfRoute from './src/routes/pdf.js';

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));

app.get("/", (req, res) => {
  res.send("🚀 PDF generation service is running!");
});

app.use('/generate-pdf', pdfRoute);

// healthcheck route
app.get('/health', (_, res) => res.send('OK'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`PDF service listening on ${PORT}`));
