# PDF Generation Service

A lightweight microservice that converts HTML content into PDF files using **Node.js**, **Express**, and **Puppeteer (Chromium)**.  
Designed to be fast, containerized, and easily integrated into any web app — for example, a T3 stack frontend calling this backend to generate downloadable PDFs.

---

## 🚀 Features

- Converts raw HTML + CSS into a PDF file
- Stateless: no persistent file storage (returns PDF directly)
- Can be scaled up with the addition of Kafka and all that

---

## 🧩 API Usage

### **POST** `/generate`
Generate a PDF from an HTML string.

**Request**
```json
{
  "html": "<html><body><h1>Hello, PDF!</h1></body></html>"
}
```

## Required Headers
```json
x-api-key: your-secret-api-key
Content-Type: application/json
```

Success Response
- Content-Type: application/pdf
- Content-Disposition: inline; filename="output.pdf"
- Body: Binary PDF stream

## Example test
```bash
curl -X POST https://pdf.example.com/generate-pdf \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-secret-key" \
  -d '{"html":"<h1>Hello World</h1>"}' \
  --output output.pdf
```

## Dev Use
Install dependencies
```bash
npm install
```

Run locally
```bash
npm run dev
```

| Status Code | Response Type     | Description                                                                          |
| ----------- | ----------------- | ------------------------------------------------------------------------------------ |
| 200         | PDF file (binary) | Successfully generated PDF, returns pdf directly                                     |
| 400         | JSON              | `{ "error": "Missing HTML content" }` — request body does not include HTML           |
| 401         | JSON              | `{ "error": "Unauthorized: Missing or invalid API key" }` — API key missing or wrong |
| 403         | JSON              | `{ "error": "Forbidden: Invalid API key" }` — if you choose 403 for invalid keys     |
| 500         | JSON              | `{ "error": "Failed to generate PDF" }` — server or Puppeteer error                  |


## Usage
To use, copy over the .env.example into a .env, and fill in the:
- API Key (generate one, and then give the app access to it)
- CF Tunnels Token (generate a tunnel and copy over the token from CF)
