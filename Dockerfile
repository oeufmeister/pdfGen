FROM node:18-slim

WORKDIR /app
COPY package*.json ./
RUN npm install

# Puppeteer dependencies
RUN apt-get update && apt-get install -y \
  chromium \
  --no-install-recommends && rm -rf /var/lib/apt/lists/*

COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
