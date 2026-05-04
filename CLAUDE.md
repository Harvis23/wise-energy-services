# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for **Wise Energy Services** — an industrial services company operating in Oil & Gas, electrical infrastructure, and Industry 4.0. The site is a public marketing site with one database-backed feature: a **service request form** where visitors submit their contact info and describe the service or plan they need.

All website copy is in **Spanish**.

## Planned Stack

- **Frontend:** React.js (Vite), React Router for navigation
- **Backend:** Node.js + Express — one POST endpoint for form submissions
- **Database:** PostgreSQL — stores service requests
- **ORM:** Prisma (schema migrations, type-safe queries)
- **Styling:** TailwindCSS

## Site Structure (from design doc)

The site has six main sections, which map directly to routes or scroll sections:

| Section | Spanish Label | Notes |
|---|---|---|
| Home | Inicio | Hero with tagline + technology differentiator callout |
| Services | Soluciones | Four sub-areas (A–D below) |
| Sectors | Sectores | Oil & Gas, Electric Generation, Mining |
| Brands | Marcas y Suministros | Strategic alliances, smart logistics |
| About | Quiénes Somos | Company summary + HSEQ commitment |
| Contact | Contacto | Service request form (name, company, email, phone, service needed) |

### Four Service Areas (sub-sections of /services or accordion)

- **A. Gas & Crude Treatment** — separation equipment, crude treatment, water handling, gas conditioning, storage, heat exchange, micro-LNG, rental inventory
- **B. Energy Solutions** — strategic consulting, power infrastructure (substations/lines), generation & backup systems
- **C. Predictive Maintenance & Telematics** — motor overhaul, ML-based predictive maintenance, GPS/IoT fleet management, CAN bus telemetry, driver behavior analytics
- **D. Technology & Industry 4.0** — OT cybersecurity, digital maturity diagnostics, ERP integration consulting, smart dashcams, QR-based asset management, video/access control, data infrastructure

## Key Assets

- `PAGINA WEB-WISE ENERGY SERVICES VER3.docx` — all copy/content for the site (Spanish)
- `PHOTO-2026-05-04-16-17-36.jpg` — image asset (likely hero or about section photo)

## Dev Commands (once scaffolded)

```bash
# Frontend (inside /client)
npm run dev       # Vite dev server
npm run build     # Production build

# Backend (inside /server)
node index.js     # Start Express server
npm run dev       # If nodemon is configured

# From root (if monorepo with concurrently)
npm run dev       # Starts both client and server
```

## Database Schema

```
service_requests — name, company, email, phone, service_type, message, created_at
```

## Architecture Notes

- All routes are public — no auth anywhere.
- The only API endpoint is `POST /api/contact`, which saves the form submission to the DB and optionally sends a notification email (Nodemailer or Resend).
- Everything else is static React content.
