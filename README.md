# 🕷️ Web Scraper & Host in Docker

This project demonstrates a multi-stage Docker build combining Node.js + Puppeteer + Chromium for web scraping and Python + Flask for hosting the scraped content. The final Docker image is only 138MB.

---
## 🚀 Features
- Scrapes data (page title and first heading) from a URL using **Puppeteer**

- Serves the scraped data as **JSON** via a **Flask** web server

- Final multi-stage Docker image is clean, production-ready, and only **138MB**.

---
## 📦 Docker Image
- **Base Image**:
   `node:18-slim` (Scraper) + `python:3.10-slim` (Host)
- **Final Size**: **138MB**

---
## 🛠️ Setup Instructions

### Build Docker Image
```bash
docker build -t web-scraper-host --build-arg SCRAPE_URL=https://xxxxxxx.com .
```

Replace https://xxxxx.com with the URL you want to scrape.

ℹ️ Note: If no --build-arg is provided, the build will use the default value defined in the Dockerfile:
- ARG SCRAPE_URL=https://example.com
- ENV SCRAPE_URL=${SCRAPE_URL}


### Run the Docker Container
```bash
docker run -d -p 5000:5000 --name container01 web-scraper-host
```


Then open your browser and go to http://localhost:5000 to view the scraped content.


---


## ⚙️ Environment Variables

SCRAPE_URL: The URL to scrape. Passed as a build argument during the docker build stage.


---

## 📁 File Structure
.
├── Dockerfile

├── scrape.js

├── server.py

├── package.json

├── requirements.txt

├── .gitignore

└── scraped_data.json  (ignored)

---
## 📃 Example Output
When scraping https://linkedin.com, the output might look like:

`{
  "heading": "Welcome to your professional community",
  
  "title": "LinkedIn: Log In or Sign Up"
}`
---
## 🛑 Notes
.gitignore includes:
 1. scraped_data.json
 2. node_modules/
 3. .env
---





