# TECH STACK RECOMMENDATION
## Bento-Like Profile Link Builder Platform - MVP

**Document Version:** 1.0  
**Date:** December 2025

---

## 1. ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                               │
│                     (Web Browser - React SPA)                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Frontend: React 18 + TypeScript + Tailwind CSS              │   │
│  │ State: Redux Toolkit / Zustand                              │   │
│  │ Components: Headless UI / Radix UI                          │   │
│  │ Editor: React DnD / Dnd-kit (Drag & Drop)                  │   │
│  │ Build: Vite (Fast bundling)                                 │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
                              │
                         HTTPS/WSS
                              │
┌─────────────────────────────────────────────────────────────────────┐
│                        API GATEWAY LAYER                            │
│              (Load Balancer, Rate Limiting, Auth)                   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Nginx / CloudFlare (CDN + DDoS Protection)                  │   │
│  │ API Rate Limiting (100 req/min per IP)                      │   │
│  │ JWT Token Validation                                         │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
                              │
                         REST API / GraphQL
                              │
┌─────────────────────────────────────────────────────────────────────┐
│                       APPLICATION LAYER                             │
│                   (Node.js + Express / FastAPI)                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Backend: Node.js 18+ LTS (Express.js / Fastify)             │   │
│  │ Language: TypeScript                                          │   │
│  │ API Routes: RESTful + GraphQL (Apollo Server optional)       │   │
│  │ Authentication: JWT + OAuth2 (Google, GitHub)               │   │
│  │ File Upload: Multer + Sharp (image optimization)            │   │
│  │ Validation: Zod / Joi                                        │   │
│  │ Logging: Winston / Pino                                      │   │
│  │ Error Handling: Custom middleware + Sentry                  │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
        │                     │                     │
        │                     │                     │
    DATABASE           CACHE LAYER            STORAGE & APIS
        │                     │                     │
┌───────────────────┐  ┌──────────────┐  ┌──────────────────────────┐
│  Data Layer       │  │ Cache Layer  │  │  External Integrations   │
├───────────────────┤  ├──────────────┤  ├──────────────────────────┤
│ PostgreSQL        │  │ Redis        │  │ Spotify API              │
│ (Primary DB)      │  │ (Session,    │  │ YouTube Data API         │
│                   │  │  Real-time   │  │ Google Maps API          │
│ Prisma ORM        │  │  updates,    │  │ Twitter Embed API        │
│ (Type-safe)       │  │  analytics)  │  │ Stripe (payment)         │
│                   │  │              │  │ SendGrid (email)         │
│ Migrations:       │  │ TTL: 1h-24h  │  │ AWS S3 (image storage)   │
│ Knex.js / Prisma  │  │              │  │ Cloudinary (optimization)│
│                   │  │ Pub/Sub:     │  │                          │
│ Backup:           │  │ Real-time    │  │ Analytics:               │
│ AWS RDS           │  │ notifications│  │ PostHog / Mixpanel       │
│ Replication       │  │              │  │                          │
└───────────────────┘  └──────────────┘  └──────────────────────────┘
```

---

## 2. DETAILED TECH STACK RECOMMENDATION

### 2.1 FRONTEND STACK

#### Core Framework
- **React 18.x** - UI library
  - Why: Large ecosystem, reusable components, VirtualDOM optimization
  - Alternative: Vue 3 (lighter, faster learning curve)
  
- **TypeScript 5.x** - Type safety
  - Why: Catch errors at compile time, better IDE support, self-documenting code
  
- **Vite** - Build tool
  - Why: 10-100x faster than Webpack, instant HMR, optimized build output
  - Config: `vite.config.ts`

#### State Management
- **Redux Toolkit** - Global state (if complex)
  - For: User auth, profile data, widgets management
  - Alternative: Zustand (lighter), Jotai (granular)
  
OR

- **TanStack Query (React Query)** - Server state
  - For: API data fetching, caching, synchronization
  - Why: Automatic cache invalidation, background refetch, pagination

#### UI & Styling
- **Tailwind CSS 3.x** - Utility-first CSS
  - Why: Fast development, consistent design, small bundle size
  - Config: `tailwind.config.js`
  
- **Radix UI** - Unstyled, accessible components
  - For: Buttons, modals, dropdowns, tooltips
  - Alternative: Headless UI
  
- **Shadcn/ui** - Pre-styled Radix UI components
  - Why: Copy-paste components, full control, TypeScript support

#### Drag & Drop
- **dnd-kit** - Modern drag & drop library
  - Why: Lightweight, accessible, smooth animations, good mobile support
  - Alternative: React Beautiful DnD (less active development)

#### Editor & Rich Components
- **Framer Motion** - Animation library
  - For: Smooth preview updates, widget transitions
  
- **React Hot Toast** - Toast notifications
  - For: User feedback (save, error, success messages)
  
- **React Hook Form** - Form management
  - For: Widget configuration forms
  - Why: Minimal re-renders, easy validation with Zod

#### Development Tools
- **ESLint** - Code linting
  - Config: `.eslintrc.cjs`
  
- **Prettier** - Code formatting
  - Config: `.prettierrc`
  
- **Vitest** - Unit testing
  - For: Component testing, utility testing
  
- **Cypress / Playwright** - E2E testing
  - For: User flow testing

---

### 2.2 BACKEND STACK

#### Runtime & Framework
- **Node.js 18+ LTS** - JavaScript runtime
  - Why: Single language full-stack (JS/TS), large ecosystem, good performance
  - Alternative: Python (FastAPI) - if more data science heavy
  
- **Express.js** or **Fastify**
  - Express: Mature, large ecosystem, simple
  - Fastify: Faster, better TypeScript support, built-in schema validation
  - **Recommendation for MVP: Express.js** (faster to prototype)

#### Language & Type Safety
- **TypeScript 5.x** - Type safety
  - Config: `tsconfig.json`
  - Compilation: `ts-node` (development), compiled JS (production)

#### ORM & Database
- **Prisma 5.x** - Next-gen ORM
  - Why: Type-safe, auto-generated types, excellent migrations, introspection
  - Alternatives: Sequelize, TypeORM (more complex)
  
  **Prisma Schema example:**
  ```prisma
  model User {
    id              String    @id @default(cuid())
    email           String    @unique
    username        String    @unique
    passwordHash    String
    avatar          String?
    bio             String?
    createdAt       DateTime  @default(now())
    updatedAt       DateTime  @updatedAt
    
    profiles        Profile[]
    integrations    Integration[]
    
    @@index([email, username])
  }
  
  model Profile {
    id              String    @id @default(cuid())
    userId          String
    user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)
    slug            String    @unique
    title           String
    description     String?
    bannerImage     String?
    themeColor      String    @default("#3B82F6")
    isPublic        Boolean   @default(true)
    isDeleted       Boolean   @default(false)
    createdAt       DateTime  @default(now())
    updatedAt       DateTime  @updatedAt
    
    widgets         Widget[]
    customDomain    CustomDomain?
    analytics       Analytics[]
    
    @@index([userId, slug])
  }
  
  model Widget {
    id              String    @id @default(cuid())
    profileId       String
    profile         Profile   @relation(fields: [profileId], references: [id], onDelete: Cascade)
    widgetType      String    // "link", "image", "spotify", "youtube", etc
    size            String    @default("square") // square, rectangle, portrait, landscape, large
    positionOrder   Int
    configJson      Json      // Store widget-specific config
    createdAt       DateTime  @default(now())
    updatedAt       DateTime  @updatedAt
    
    analytics       Analytics[]
    
    @@index([profileId, positionOrder])
  }
  
  model Analytics {
    id              String    @id @default(cuid())
    profileId       String
    profile         Profile   @relation(fields: [profileId], references: [id], onDelete: Cascade)
    widgetId        String?
    widget          Widget?   @relation(fields: [widgetId], references: [id], onDelete: SetNull)
    eventType       String    // "page_view", "widget_click"
    referrer        String?
    deviceType      String    // "mobile", "desktop", "tablet"
    userAgent       String?
    ipAddress       String?
    createdAt       DateTime  @default(now())
    
    @@index([profileId, createdAt])
    @@index([widgetId, createdAt])
  }
  
  model CustomDomain {
    id              String    @id @default(cuid())
    profileId       String    @unique
    profile         Profile   @relation(fields: [profileId], references: [id], onDelete: Cascade)
    domain          String    @unique
    verificationToken String?
    isVerified      Boolean   @default(false)
    createdAt       DateTime  @default(now())
    updatedAt       DateTime  @updatedAt
  }
  
  model Integration {
    id              String    @id @default(cuid())
    userId          String
    user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)
    type            String    // "spotify", "github", "twitter", etc
    oauthToken      String
    refreshToken    String?
    tokenExpiresAt  DateTime?
    isActive        Boolean   @default(true)
    createdAt       DateTime  @default(now())
    updatedAt       DateTime  @updatedAt
    
    @@index([userId, type])
  }
  ```

#### Database
- **PostgreSQL 15+** - Relational database
  - Why: ACID compliant, JSONB support, great for structured data
  - Hosting: AWS RDS / Supabase / DigitalOcean
  - Backup: Automated daily backups
  - Replication: For scaling

#### Validation & Parsing
- **Zod** - TypeScript-first schema validation
  - For: Request/response validation, type inference
  - Alternative: Joi (more verbose), Yup (older)
  
  **Example:**
  ```typescript
  import { z } from "zod";
  
  const CreateWidgetSchema = z.object({
    profileId: z.string().cuid(),
    widgetType: z.enum(["link", "image", "spotify", "youtube"]),
    size: z.enum(["square", "rectangle", "portrait", "landscape", "large"]),
    config: z.record(z.any()),
  });
  
  type CreateWidgetInput = z.infer<typeof CreateWidgetSchema>;
  ```

#### Authentication & Authorization
- **JWT (JSON Web Tokens)** - Stateless auth
  - Token format: Bearer {token}
  - TTL: 1 hour access token, 7 days refresh token
  - Library: `jsonwebtoken`
  
- **OAuth2** - Social login
  - Providers: Google, GitHub
  - Library: `passport.js` or `next-auth` (if using Next.js)
  
- **bcrypt** - Password hashing
  - Cost factor: 12 rounds
  - Library: `bcryptjs`

#### File Handling & Image Optimization
- **Multer** - File upload middleware
  - Max file size: 5MB per image
  - Allowed types: jpg, png, webp, gif
  
- **Sharp** - Image processing
  - For: Resize, compress, convert to WebP
  - Optimization: Auto-resize to 3 sizes (thumbnail, medium, large)
  
- **AWS S3** or **Cloudinary** - Cloud storage
  - Why: Scalable, CDN included (Cloudinary), automatic optimization
  - Alternative: Google Cloud Storage, DigitalOcean Spaces

#### API Documentation
- **Swagger/OpenAPI 3.0** - API documentation
  - Tool: `swagger-ui-express`, `swagger-jsdoc`
  - Live docs: `/api-docs`
  
- **Postman** - API testing & collection
  - For: Team API testing, documentation

#### Real-time Features
- **Socket.io** (Optional for MVP, future phases)
  - For: Real-time collaboration, live analytics updates
  - For now: WebSocket connection for analytics polling

#### Logging & Monitoring
- **Pino** or **Winston** - Structured logging
  - Format: JSON (for better log aggregation)
  - Levels: error, warn, info, debug
  
- **Sentry** - Error tracking
  - For: Production error monitoring, stack traces
  
- **PostHog** or **Mixpanel** - Analytics
  - For: User behavior tracking, funnel analysis

#### Testing
- **Jest** - Unit testing
  - Config: `jest.config.js`
  - Coverage: Aim for 70%+ coverage
  
- **Supertest** - HTTP assertion
  - For: API endpoint testing
  
- **ts-jest** - Jest TypeScript support

---

### 2.3 DATABASE & INFRASTRUCTURE

#### Primary Database
- **PostgreSQL 15+**
  - Connection pooling: PgBouncer (max 50 connections per app)
  - Backup: Daily snapshots, 30-day retention
  - Monitoring: AWS CloudWatch
  
#### Caching Layer
- **Redis 7+**
  - For: Session storage, rate limiting, real-time counters
  - TTL: 1 hour (sessions), 1 day (analytics)
  - Library: `ioredis` (Node.js client)
  - Data structure:
    ```
    session:{token} -> JSON (user_id, email)
    profile:{id}:views -> integer (page views count)
    widget:{id}:clicks -> integer (click count)
    ratelimit:{ip} -> integer (request count)
    ```

#### Message Queue (Optional for MVP, Phase 2)
- **Bull** (Node.js) or **Celery** (Python)
  - For: Async jobs (send emails, image optimization, analytics processing)
  - Queue: Redis-backed

---

### 2.4 DEPLOYMENT & INFRASTRUCTURE

#### Hosting Options (Choose One)

**Option A: Vercel (Recommended for MVP)**
- Pros: Zero-config deployment, serverless functions, auto-scaling, free tier, great DX
- Cons: Cold start issues, vendor lock-in
- Cost: Free tier + $20/month for production

**Option B: Railway / Render**
- Pros: Simple deployment, free tier, good for startups
- Cost: $5-20/month

**Option C: AWS (More Control)**
- Services:
  - EC2 / ECS: Application servers (t3.small = $8/month)
  - RDS: PostgreSQL (db.t3.micro = $15/month)
  - ElastiCache: Redis (cache.t3.micro = $12/month)
  - S3: File storage ($0.023 per GB)
  - CloudFront: CDN
  - Route53: DNS
- Cost: $50-100+/month
- Setup complexity: High (use Terraform/IaC)

**Option D: DigitalOcean (Balanced)**
- Services: Droplets, Managed DB, Spaces, App Platform
- Cost: $12-50/month
- DX: Good, simple interface

**Recommendation for MVP: Vercel + Supabase (PostgreSQL + Auth)**

#### CI/CD Pipeline
- **GitHub Actions** (free for public repos)
  - Workflows:
    1. Lint & test on PR
    2. Build on main branch
    3. Auto-deploy to production
    4. Run E2E tests after deploy
  
  **Example workflow:**
  ```yaml
  name: Deploy
  on:
    push:
      branches: [main]
  
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - uses: actions/setup-node@v3
          with:
            node-version: '18'
        - run: npm install
        - run: npm run test
        - run: npm run build
        - run: npm run deploy # Vercel CLI
  ```

#### Monitoring & Observability
- **Vercel Analytics** (if using Vercel)
- **Sentry** - Error tracking
- **NewRelic** or **DataDog** - Application performance monitoring
- **Uptime Robot** - Uptime monitoring (free tier)

#### DNS & CDN
- **CloudFlare** (free tier)
  - Benefits: DDoS protection, caching, SSL, analytics
  
- **Route53** (AWS)
  - For: Custom domain management

---

## 3. PROJECT STRUCTURE

### 3.1 Frontend Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── Editor/
│   │   │   ├── Canvas.tsx
│   │   │   ├── WidgetPalette.tsx
│   │   │   ├── PropertiesPanel.tsx
│   │   │   └── PreviewPane.tsx
│   │   ├── Profile/
│   │   │   ├── ProfileHeader.tsx
│   │   │   ├── WidgetRenderer.tsx
│   │   │   └── ResponseiveView.tsx
│   │   ├── Auth/
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignUpForm.tsx
│   │   └── Common/
│   │       ├── Header.tsx
│   │       ├── Sidebar.tsx
│   │       └── Toast.tsx
│   ├── pages/
│   │   ├── AuthPage.tsx
│   │   ├── EditorPage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── SettingsPage.tsx
│   │   └── AnalyticsPage.tsx
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useProfile.ts
│   │   ├── useWidgets.ts
│   │   └── useDragDrop.ts
│   ├── store/
│   │   ├── authSlice.ts
│   │   ├── profileSlice.ts
│   │   ├── widgetSlice.ts
│   │   └── store.ts
│   ├── api/
│   │   ├── authApi.ts
│   │   ├── profileApi.ts
│   │   ├── widgetApi.ts
│   │   └── analyticsApi.ts
│   ├── utils/
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   └── constants.ts
│   ├── types/
│   │   ├── user.ts
│   │   ├── profile.ts
│   │   ├── widget.ts
│   │   └── api.ts
│   └── App.tsx
├── public/
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### 3.2 Backend Structure
```
backend/
├── src/
│   ├── routes/
│   │   ├── auth.ts
│   │   ├── profiles.ts
│   │   ├── widgets.ts
│   │   ├── analytics.ts
│   │   └── integrations.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── profileController.ts
│   │   ├── widgetController.ts
│   │   └── analyticsController.ts
│   ├── services/
│   │   ├── authService.ts
│   │   ├── profileService.ts
│   │   ├── widgetService.ts
│   │   ├── imageService.ts
│   │   ├── analyticsService.ts
│   │   └── integrationService.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── validation.ts
│   │   ├── errorHandler.ts
│   │   └── rateLimit.ts
│   ├── models/
│   │   └── (Prisma generates these)
│   ├── utils/
│   │   ├── jwt.ts
│   │   ├── bcrypt.ts
│   │   ├── logger.ts
│   │   └── validators.ts
│   ├── config/
│   │   ├── database.ts
│   │   ├── redis.ts
│   │   └── env.ts
│   ├── integrations/
│   │   ├── spotify.ts
│   │   ├── youtube.ts
│   │   ├── googleMaps.ts
│   │   ├── s3.ts
│   │   └── sendgrid.ts
│   └── app.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.example
├── docker-compose.yml
├── tsconfig.json
└── package.json
```

---

## 4. DEVELOPMENT WORKFLOW

### 4.1 Local Development Setup
```bash
# Frontend
cd frontend
npm install
npm run dev  # Vite dev server on localhost:5173

# Backend (separate terminal)
cd backend
npm install
npm run dev  # Express on localhost:3000

# Database (Docker)
docker-compose up -d
npm run db:migrate
npm run db:seed (optional demo data)
```

### 4.2 Environment Variables

**Frontend (.env.local)**
```
VITE_API_URL=http://localhost:3000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

**Backend (.env)**
```
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/bento_dev
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_secret_key_here
SPOTIFY_CLIENT_ID=your_spotify_id
SPOTIFY_CLIENT_SECRET=your_spotify_secret
GOOGLE_MAPS_API_KEY=your_maps_api_key
AWS_S3_BUCKET=your_bucket_name
AWS_REGION=us-east-1
SENDGRID_API_KEY=your_sendgrid_key
```

---

## 5. TECHNOLOGY COMPARISON MATRIX

| Aspect | Recommended | Alternatives | Why |
|--------|------------|--------------|-----|
| Frontend | React 18 | Vue 3, Svelte | Large ecosystem, job market |
| State Management | Redux Toolkit | Zustand, Jotai | Scalability, middleware |
| Styling | Tailwind CSS | CSS-in-JS, Bootstrap | Utility-first, performance |
| Build Tool | Vite | esbuild, Turbopack | Speed, modern features |
| Backend | Express.js | Fastify, NestJS | Fast to prototype, simple |
| Language | TypeScript | JavaScript, Python | Type safety, DX |
| ORM | Prisma | TypeORM, Sequelize | Type-safe, migrations |
| Database | PostgreSQL | MySQL, MongoDB | ACID, JSON support |
| Cache | Redis | Memcached | Rich data structures |
| Hosting | Vercel | Railway, AWS | DX, pricing, scaling |
| Deployment | GitHub Actions | GitLab CI, CircleCI | Free, integrated |

---

## 6. IMPLEMENTATION PHASES

### Phase 1: MVP (Months 1-3)
**Tech Stack Minimal:**
- Frontend: React + Tailwind CSS + dnd-kit
- Backend: Express.js + Prisma + PostgreSQL
- Hosting: Vercel + Supabase
- No Redis (can use simple in-memory cache)
- Basic analytics (database queries)

**Estimated lines of code:** 15,000-20,000 LOC

### Phase 2: Extended Features (Months 4-6)
**Add to stack:**
- Redux Toolkit (more complex state)
- Redis (caching, sessions)
- Real-time: Socket.io or Supabase Realtime
- Advanced analytics: PostHog or Mixpanel

### Phase 3: Scale (Months 7+)
**Add to stack:**
- Message queue: Bull + Redis
- CDN: CloudFlare or AWS CloudFront
- Microservices (optional): Separate image processing service
- GraphQL: Apollo Server (alongside REST)

---

## 7. SECURITY CHECKLIST

- [ ] HTTPS only (enforced)
- [ ] CORS configured correctly
- [ ] CSRF protection (tokens)
- [ ] XSS prevention (sanitize input)
- [ ] SQL injection prevention (Prisma parameterized queries)
- [ ] Rate limiting (express-rate-limit)
- [ ] Authentication: JWT with refresh tokens
- [ ] Password hashing: bcrypt (12 rounds)
- [ ] Environment variables: Never commit .env
- [ ] Database backups: Automated daily
- [ ] Secrets management: GitHub Secrets for CI/CD
- [ ] Dependency scanning: npm audit, Snyk
- [ ] GDPR compliance: Privacy policy, data deletion
- [ ] PII handling: Encrypt sensitive data if needed

---

## 8. PERFORMANCE TARGETS

| Metric | Target | Tool |
|--------|--------|------|
| First Contentful Paint (FCP) | < 1.5s | Lighthouse |
| Largest Contentful Paint (LCP) | < 2.5s | Lighthouse |
| Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse |
| Time to Interactive (TTI) | < 3s | Lighthouse |
| API Response Time | < 300ms | Custom monitoring |
| Database Query Time | < 100ms | pgAdmin / slow query log |
| Image Load Time | < 500ms | Cloudinary analytics |
| Lighthouse Score | > 90 | Google Lighthouse |

---

## 9. ESTIMATED COSTS (Monthly)

| Service | MVP | Phase 2 | Note |
|---------|-----|---------|------|
| Vercel (Frontend) | $0-20 | $20 | Free for hobby |
| Supabase (DB) | $25 | $100 | 500MB free, then $0.125/GB |
| Redis | $0 | $15 | Supabase Redis |
| AWS S3 (Storage) | $1-5 | $10-20 | First 1GB free |
| Cloudinary | $0 | $99 | Free tier covers MVP |
| Spotify API | $0 | $0 | Free tier |
| SendGrid (Email) | $0 | $20 | 100 emails/day free |
| Sentry (Errors) | $0 | $29 | Free tier |
| Monitoring | $0 | $15 | Custom / DataDog |
| **Total** | **$25-50** | **$250-300** | Cost per month |

---

## 10. MIGRATION PATH STRATEGY

### From MVP to Phase 2
1. **Database Optimization**
   - Add indices for frequently queried columns
   - Implement query caching with Redis
   - Archive old analytics data

2. **Backend Scaling**
   - Load balancer (nginx)
   - Separate API servers (horizontal scaling)
   - Async job queue for heavy operations

3. **Frontend Optimization**
   - Code splitting by route
   - Image lazy loading
   - Service Worker (PWA)

### From Phase 2 to Phase 3
1. **Microservices (if needed)**
   - Image processing service
   - Analytics processing service
   - Email service

2. **Message Queue**
   - Bull (Redis-backed)
   - Process heavy operations asynchronously

3. **GraphQL**
   - Apollo Server alongside REST
   - Auto-generated types

---

## 11. RECOMMENDED LEARNING PATH

**For Team:**
1. **Weeks 1-2:** Setup development environment, understand Prisma/PostgreSQL
2. **Weeks 3-4:** Build auth flow (JWT, OAuth)
3. **Weeks 5-6:** Drag-and-drop editor (React + dnd-kit)
4. **Weeks 7-8:** Widget system + configuration
5. **Weeks 9-10:** Analytics & preview system
6. **Weeks 11-12:** Polish, testing, deployment

---

## 12. USEFUL RESOURCES

### Documentation Links
- React: https://react.dev
- Prisma: https://www.prisma.io/docs
- Tailwind CSS: https://tailwindcss.com/docs
- dnd-kit: https://docs.dndkit.com
- Express.js: https://expressjs.com
- PostgreSQL: https://www.postgresql.org/docs

### Community & Support
- Discord communities for each tech
- Stack Overflow for specific issues
- GitHub discussions for open-source libraries

### Tools & Extensions
- VS Code: ESLint, Prettier, Thunder Client (API testing)
- Database: DBeaver, pgAdmin
- API Documentation: Swagger UI, Postman

---

**Tech Stack Summary:**
- **Frontend:** React 18 + TypeScript + Tailwind CSS + dnd-kit + Vite
- **Backend:** Node.js + Express.js + TypeScript + Prisma + PostgreSQL
- **Hosting:** Vercel + Supabase + Cloudinary
- **DevOps:** GitHub Actions + Docker (local development)
- **Monitoring:** Sentry + PostHog (Phase 2+)

**Estimated MVP development time:** 12-16 weeks (3-4 developers)

---

**Document Version History:**
- v1.0 - Initial tech stack recommendation (Dec 2025)