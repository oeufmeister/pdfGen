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

Expects requests on port 3000
