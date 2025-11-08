import express from 'express';
import { generatePdf } from '../utils/pdfGen.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { html } = req.body;
    if (!html) return res.status(400).send('Missing HTML input');

    const pdfBuffer = await generatePdf(html);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="export.pdf"',
    });

    res.send(pdfBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).send('PDF generation failed');
  }
});

export default router;
