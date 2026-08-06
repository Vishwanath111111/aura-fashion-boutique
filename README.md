# AURA – Luxury Fashion Boutique | Flagship Portfolio Project

**Agency**: VJ Web Studio  
**Project Name**: AURA – Luxury Haute Couture & Fashion Boutique  
**Status**: Production-Ready Flagship Portfolio Project  

---

## 🌟 Executive Overview
**AURA** is an enterprise-grade digital experience for a high-end international luxury clothing brand. Built for **VJ Web Studio** to demonstrate top-tier web engineering, aesthetic mastery, and enterprise architecture, it presents a complete luxury digital salon capable of converting affluent visitors into private consultation patrons and paying customers.

---

## 🛠️ Technology Stack

### Frontend Architecture
- **Framework**: Next.js 15 (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS v4, Custom Luxury Theme Tokens
- **Animations**: Framer Motion, Animated Micro-counters, Smooth Scroll
- **Icons**: Lucide Icons & Custom SVG Luxury Vector Assets
- **Forms & Validation**: React Hook Form, Zod
- **SEO & Metadata**: JSON-LD Structured Data (`Organization`, `ClothingStore`), OpenGraph, Twitter Cards, `robots.txt`, `sitemap.xml`

### Backend Architecture
- **Framework**: Spring Boot 3 (Java 21, Maven)
- **Database**: H2 (In-Memory PostgreSQL compatibility mode for instant zero-config dev) / PostgreSQL (Production Profile)
- **ORM & Data**: Spring Data JPA, Hibernate
- **Validation**: Spring Boot Starter Validation
- **Utilities**: Lombok

---

## 📁 Repository Structure
```
01-Fashion-Boutique/
├── frontend/                   # Next.js 15 Web Application
│   ├── public/                 # Favicon, robots.txt, sitemap.xml, assets
│   ├── src/
│   │   ├── app/                # All 15 Production Routes
│   │   │   ├── page.tsx        # Home (14 Luxury Sections)
│   │   │   ├── about/          # About Maison
│   │   │   ├── collections/    # Catalog & Interactive Filtering
│   │   │   ├── new-arrivals/   # Seasonal Drops
│   │   │   ├── featured/       # Iconic Masterpieces
│   │   │   ├── lookbook/       # Editorial Gallery with Lightbox
│   │   │   ├── size-guide/     # Interactive Sizing Calculator
│   │   │   ├── story/          # Heritage & Sustainability Ethos
│   │   │   ├── testimonials/   # VIP Client Quotes
│   │   │   ├── faq/            # Boutique Assistance Accordion
│   │   │   ├── contact/        # Private Fitting Appointment Booking
│   │   │   ├── privacy/        # Privacy Policy
│   │   │   ├── terms/          # Terms of Service
│   │   │   ├── success/        # Booking Confirmation Screen
│   │   │   └── not-found.tsx   # Custom Luxury 404 Page
│   │   ├── components/
│   │   │   ├── home/           # Hero, BrandStory, LimitedEdition, etc.
│   │   │   ├── layout/         # Navbar, Footer, MegaMenu, MobileNav
│   │   │   ├── ui/             # WhatsAppButton, ContactForm, QuickViewModal, SizeGuideModal
│   │   │   └── seo/            # StructuredData
│   │   ├── config/             # Site configuration & branding
│   │   ├── data/               # Products, Lookbook, Testimonials datasets
│   │   ├── lib/                # API client with automatic fallback
│   │   └── types/              # TypeScript interfaces & DTOs
│   └── package.json
└── backend/                    # Spring Boot 3 Java 21 REST API Server
    ├── src/
    │   ├── main/
    │   │   ├── java/com/aura/boutique/
    │   │   │   ├── AuraBoutiqueApplication.java
    │   │   │   ├── config/ (CorsConfig)
    │   │   │   ├── controller/ (ContactController, NewsletterController, ProductController, TestimonialController)
    │   │   │   ├── dto/ (ContactRequestDto, NewsletterRequestDto, ProductDto, TestimonialDto, ApiResponse)
    │   │   │   ├── entity/ (ContactMessage, NewsletterSubscriber, Product, Testimonial)
    │   │   │   ├── repository/ (ProductRepository, TestimonialRepository, ContactRepository, NewsletterRepository)
    │   │   │   └── service/ (ProductService, TestimonialService, ContactService, NewsletterService)
    │   │   └── resources/
    │   │       ├── application.yml
    │   │       ├── application-prod.yml
    │   │       └── data.sql
    └── pom.xml
```

---

## ⚡ Quick Start & Local Execution

### 1. Running the Frontend (Next.js 15)
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

> Note: The frontend contains built-in API client fallback data so it operates seamlessly with or without the backend running!

### 2. Running the Backend (Spring Boot 3)
```bash
cd backend
mvn spring-boot:run
```
The REST API server will start at [http://localhost:8080](http://localhost:8080).  
H2 Console available at: [http://localhost:8080/h2-console](http://localhost:8080/h2-console) (JDBC URL: `jdbc:h2:mem:auradb`).

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/products` | Fetch complete product catalog |
| `GET` | `/api/v1/products/{id}` | Fetch single product by ID |
| `GET` | `/api/v1/products/category/{cat}` | Fetch products by category |
| `GET` | `/api/v1/products/featured` | Fetch featured iconic products |
| `GET` | `/api/v1/testimonials` | Fetch VIP client testimonials |
| `POST` | `/api/v1/contact` | Submit private fitting consultation form |
| `POST` | `/api/v1/newsletter` | Subscribe to VIP Privé newsletter |

---

## 🚀 Deployment Instructions

### Frontend (Vercel)
1. Import `frontend/` folder into Vercel.
2. Set Environment Variable `NEXT_PUBLIC_API_URL` to your production backend URL.
3. Deploy!

### Backend (Docker / Render / AWS)
1. Set active profile to `prod` via `SPRING_PROFILES_ACTIVE=prod`.
2. Provide PostgreSQL environment variables: `JDBC_DATABASE_URL`, `JDBC_DATABASE_USERNAME`, `JDBC_DATABASE_PASSWORD`.
3. Build executable JAR with `mvn clean package` and launch with `java -jar target/aura-boutique-backend-1.0.0-RELEASE.jar`.

---

## 🎨 Designed by VJ Web Studio
Crafted with enterprise excellence to elevate luxury fashion brands globally.
