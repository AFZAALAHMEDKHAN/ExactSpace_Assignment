# Stage 1: Scraping
FROM node:18-slim as scraper
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
RUN apt-get update && apt-get install -y --no-install-recommends chromium fonts-liberation && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package.json ./
RUN npm install
COPY scrape.js ./
ARG SCRAPE_URL=https://example.com
# Use it to set an ENV
ENV SCRAPE_URL=${SCRAPE_URL}
RUN node scrape.js


# Stage 2: Hosting
FROM python:3.10-slim
WORKDIR /app
COPY --from=scraper /app/scraped_data.json ./
COPY server.py requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 5000
CMD ["python", "/app/server.py"]
