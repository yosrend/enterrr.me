# MVP IMPLEMENTATION CHECKLIST & QUICK START GUIDE
## Bento-Like Profile Link Builder Platform

**Document Version:** 1.0  
**Date:** December 2025

---

## 1. PRE-DEVELOPMENT SETUP (Week 0)

### 1.1 Team & Infrastructure Setup
- [ ] Create GitHub organization / repository
- [ ] Setup CI/CD pipeline (GitHub Actions)
- [ ] Create project board (GitHub Projects / Jira)
- [ ] Setup communication (Discord / Slack)
- [ ] Schedule weekly standup meetings

### 1.2 Local Development Environment
- [ ] Install Node.js 18 LTS
- [ ] Install Git
- [ ] Install Docker & Docker Compose
- [ ] Install VS Code + extensions (ESLint, Prettier, Postman)
- [ ] Install PostgreSQL client tools (DBeaver or pgAdmin)

### 1.3 Cloud Services Setup
- [ ] Create Vercel account (frontend hosting)
- [ ] Create Supabase account (PostgreSQL + Auth)
- [ ] Create Cloudinary account (image optimization)
- [ ] Create GitHub OAuth app (for testing)
- [ ] Create Spotify API keys (developer portal)
- [ ] Create Google Maps API key (Google Cloud Console)

### 1.4 Project Initialization
```bash
# Create monorepo structure
mkdir bento-app
cd bento-app

# Frontend
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install -D dnd-kit react-hook-form zod axios
npm install @reduxjs/toolkit react-redux react-query

# Backend
cd ../
npm init -y
npm install express cors dotenv
npm install -D @types/express @types/node typescript ts-node
npm install prisma @prisma/client
```

---

## 2. FRONTEND IMPLEMENTATION (Weeks 1-4)

### 2.1 Project Setup & Configuration
- [ ] Initialize Vite + React + TypeScript
- [ ] Configure Tailwind CSS
- [ ] Setup environment variables (.env.local)
- [ ] Setup Git pre-commit hooks (Husky + Lint-staged)
- [ ] Configure ESLint + Prettier
- [ ] Create folder structure
- [ ] Setup Redux store (Redux Toolkit)

### 2.2 Authentication Flow
- [ ] Create login page with email/password form
- [ ] Create signup page with validation
- [ ] Implement JWT token storage (localStorage or secure cookies)
- [ ] Create auth context / hook (useAuth)
- [ ] Implement password reset flow
- [ ] Add OAuth login (Google)
- [ ] Implement auth guards (ProtectedRoute)
- [ ] Add logout functionality

**Checklist:**
- [ ] Sign up < 2 minutes
- [ ] Login works with saved credentials
- [ ] Token refresh on expiry
- [ ] Redirect to login on 401

### 2.3 Layout Components
- [ ] Create Header component
- [ ] Create Sidebar navigation
- [ ] Create layout wrapper
- [ ] Create responsive navigation (mobile menu)
- [ ] Add loading skeletons
- [ ] Add error boundaries

### 2.4 Editor Page (Core Feature)
- [ ] Setup dnd-kit integration
- [ ] Create Canvas component (drag-drop area)
- [ ] Create Widget Palette sidebar
- [ ] Implement add widget functionality
- [ ] Implement remove widget functionality
- [ ] Implement reorder widgets (drag-drop)
- [ ] Implement widget resize logic
- [ ] Add undo/redo functionality

### 2.5 Widget Configuration Forms
- [ ] Create form components for each widget type
  - [ ] Link Button form
  - [ ] Social Media form
  - [ ] Image upload form
  - [ ] Spotify integration form
  - [ ] YouTube embed form
  - [ ] Maps integration form
  - [ ] Section title form
- [ ] Implement real-time form validation (Zod)
- [ ] Add image upload preview
- [ ] Add icon selector component

### 2.6 Preview & Responsive View
- [ ] Create responsive preview component
- [ ] Implement desktop view
- [ ] Implement mobile view toggle
- [ ] Implement tablet view (optional)
- [ ] Real-time sync between editor and preview
- [ ] Show device dimensions
- [ ] Add zoom controls (optional)

### 2.7 Profile Management Page
- [ ] Create profile settings form
  - [ ] Profile name/title
  - [ ] Bio/description
  - [ ] Avatar upload
  - [ ] Banner image upload
  - [ ] Theme color picker
- [ ] Implement slug customization
- [ ] Add slug availability check
- [ ] Implement profile visibility toggle
- [ ] Add custom domain form

### 2.8 Publish & Sharing
- [ ] Create publish button (save changes)
- [ ] Add publish status indicator
- [ ] Create share modal
- [ ] Implement copy link button
- [ ] Add share buttons (WhatsApp, Twitter, etc.)
- [ ] Generate QR code
- [ ] Preview published profile (modal or new tab)

### 2.9 Analytics Dashboard
- [ ] Create analytics page layout
- [ ] Display view count
- [ ] Show widget click breakdown
- [ ] Display traffic source chart
- [ ] Show device type breakdown
- [ ] Add date range filter
- [ ] Implement CSV export

### 2.10 Settings Page
- [ ] Account settings form
- [ ] Email change form
- [ ] Password change form
- [ ] Privacy settings
- [ ] Connected integrations list
- [ ] Delete account option

### 2.11 API Integration
- [ ] Setup axios client with interceptors
- [ ] Create API service modules
  - [ ] authApi.ts
  - [ ] profileApi.ts
  - [ ] widgetApi.ts
  - [ ] analyticsApi.ts
- [ ] Implement error handling
- [ ] Add loading states
- [ ] Add success/error notifications (Toast)

### 2.12 Testing (Frontend)
- [ ] Setup Vitest
- [ ] Write component tests (critical paths)
- [ ] Setup Cypress for E2E tests
- [ ] Write E2E test for auth flow
- [ ] Write E2E test for widget creation
- [ ] Achieve 60%+ test coverage

### 2.13 Performance Optimization
- [ ] Implement code splitting by route
- [ ] Add image lazy loading
- [ ] Optimize bundle size
- [ ] Setup performance monitoring
- [ ] Lighthouse score > 90

---

## 3. BACKEND IMPLEMENTATION (Weeks 1-4)

### 3.1 Project Setup
- [ ] Initialize Node.js + Express.js
- [ ] Setup TypeScript configuration
- [ ] Install core dependencies
- [ ] Create folder structure
- [ ] Setup environment variables (.env)
- [ ] Configure ESLint + Prettier

### 3.2 Database Setup (Prisma + PostgreSQL)
- [ ] Initialize Prisma
- [ ] Create database schema (schema.prisma)
  - [ ] User model
  - [ ] Profile model
  - [ ] Widget model
  - [ ] WidgetType model
  - [ ] Analytics model
  - [ ] CustomDomain model
  - [ ] Integration model
- [ ] Create migrations
- [ ] Seed database with demo data (optional)
- [ ] Setup database connection pooling

**Prisma commands:**
```bash
npx prisma init
npx prisma migrate dev --name init
npx prisma studio  # Visual DB browser
```

### 3.3 Authentication System
- [ ] Setup JWT utilities (sign, verify, refresh)
- [ ] Implement password hashing (bcrypt)
- [ ] Create auth controller
  - [ ] POST /auth/register
  - [ ] POST /auth/login
  - [ ] POST /auth/refresh-token
  - [ ] POST /auth/forgot-password
  - [ ] POST /auth/reset-password
  - [ ] POST /auth/logout
- [ ] Setup OAuth routes (Google)
- [ ] Implement JWT middleware (verifyToken)
- [ ] Implement password reset email (SendGrid - Phase 2)

### 3.4 User Management
- [ ] Create user service
- [ ] Implement user profile update
  - [ ] PATCH /users/profile
  - [ ] PATCH /users/avatar
  - [ ] DELETE /users (account deletion)
- [ ] Add privacy settings management
- [ ] Implement user validation

### 3.5 Profile Management API
- [ ] Create profile controller & service
- [ ] Implement endpoints:
  - [ ] POST /profiles (create profile)
  - [ ] GET /profiles/:slug (public profile)
  - [ ] GET /profiles/:id (user's profile)
  - [ ] PATCH /profiles/:id (update profile)
  - [ ] DELETE /profiles/:id (delete profile)
  - [ ] POST /profiles/:id/publish (publish changes)
  - [ ] GET /profiles/:id/share-stats (share metadata)
- [ ] Implement slug uniqueness check
- [ ] Add profile visibility logic
- [ ] Implement soft deletes

### 3.6 Widget Management API
- [ ] Create widget controller & service
- [ ] Implement endpoints:
  - [ ] POST /widgets (create widget)
  - [ ] GET /profiles/:id/widgets (list widgets)
  - [ ] PATCH /widgets/:id (update widget)
  - [ ] DELETE /widgets/:id (delete widget)
  - [ ] POST /widgets/:id/reorder (reorder widgets)
- [ ] Implement widget validation (type, config)
- [ ] Add position tracking
- [ ] Implement JSON schema validation for widget config

### 3.7 Image Upload & Optimization
- [ ] Setup Multer middleware
- [ ] Create image upload endpoint
  - [ ] POST /uploads/image
  - [ ] Max size: 5MB
  - [ ] Allowed types: jpg, png, webp, gif
- [ ] Implement Sharp for image optimization
  - [ ] Auto-resize to 3 sizes (thumbnail, medium, large)
  - [ ] Convert to WebP
  - [ ] Compress quality
- [ ] Upload to AWS S3 or Cloudinary
- [ ] Return CDN URLs
- [ ] Implement image deletion

### 3.8 Analytics API
- [ ] Create analytics service
- [ ] Implement endpoints:
  - [ ] POST /analytics/track (track view/click)
  - [ ] GET /analytics/profiles/:id (profile analytics)
  - [ ] GET /analytics/profiles/:id/widgets (widget analytics)
  - [ ] GET /analytics/profiles/:id/timeline (timeline data)
- [ ] Implement analytics data collection middleware
  - [ ] Track page views
  - [ ] Track widget clicks
  - [ ] Capture referrer
  - [ ] Capture device type
  - [ ] Capture IP address
- [ ] Implement data aggregation (hourly/daily)
- [ ] Add analytics export (CSV)

### 3.9 Custom Domain Support
- [ ] Create custom domain service
- [ ] Implement endpoints:
  - [ ] POST /custom-domains (add domain)
  - [ ] GET /custom-domains (list domains)
  - [ ] PATCH /custom-domains/:id (update)
  - [ ] DELETE /custom-domains/:id (delete)
  - [ ] POST /custom-domains/:id/verify (verify DNS)
- [ ] Implement DNS verification logic
- [ ] Add domain routing middleware

### 3.10 Integration APIs (External Services)
- [ ] **Spotify Integration**
  - [ ] OAuth flow for Spotify
  - [ ] Fetch current playing track
  - [ ] Fetch top tracks
  - [ ] Cache results (TTL: 1 min)
  
- [ ] **YouTube Integration**
  - [ ] Video metadata API
  - [ ] Thumbnail fetching
  - [ ] Embed URL generation
  
- [ ] **Google Maps Integration**
  - [ ] Geocoding API
  - [ ] Place autocomplete
  - [ ] Static maps URL generation
  
- [ ] **Twitter/X Embed**
  - [ ] Embed URL validation
  - [ ] Fallback if embed fails

### 3.11 Validation & Error Handling
- [ ] Setup Zod for request validation
- [ ] Create validation middleware
- [ ] Implement custom error handler middleware
- [ ] Add request logging (Pino/Winston)
- [ ] Implement error tracking (Sentry)
- [ ] Create consistent error response format

**Error Response Format:**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_INPUT",
    "message": "Profile slug already exists",
    "details": { "field": "slug" }
  }
}
```

### 3.12 Rate Limiting & Security
- [ ] Setup express-rate-limit
- [ ] Implement rate limits:
  - [ ] General: 100 req/min per IP
  - [ ] Auth: 5 login attempts per 15 min
  - [ ] Upload: 10 files per hour per user
- [ ] Implement CORS configuration
- [ ] Setup CSRF protection (tokens)
- [ ] Add request sanitization
- [ ] Implement helmet.js (security headers)

### 3.13 Testing (Backend)
- [ ] Setup Jest + Supertest
- [ ] Write unit tests for services
- [ ] Write integration tests for API endpoints
- [ ] Write tests for auth flow
- [ ] Write tests for widget CRUD
- [ ] Aim for 70%+ test coverage
- [ ] Setup test database

### 3.14 Database Performance
- [ ] Create database indices
- [ ] Optimize Prisma queries
- [ ] Implement query pagination
- [ ] Add caching layer (Redis - Phase 2)
- [ ] Monitor slow queries

---

## 4. DEPLOYMENT & DEVOPS (Weeks 4-5)

### 4.1 CI/CD Pipeline
- [ ] Create GitHub Actions workflows
  - [ ] Lint on PR
  - [ ] Test on PR
  - [ ] Build on merge to main
  - [ ] Deploy to staging
  - [ ] Deploy to production
- [ ] Setup environment secrets
- [ ] Configure deployment triggers

### 4.2 Frontend Deployment (Vercel)
- [ ] Connect GitHub repo to Vercel
- [ ] Configure environment variables
- [ ] Setup auto-deploy on main branch
- [ ] Configure custom domain
- [ ] Setup SSL certificate
- [ ] Enable analytics

### 4.3 Backend Deployment
**Option A: Vercel Serverless (Recommended for MVP)**
- [ ] Setup serverless functions in /api
- [ ] Deploy database to Supabase
- [ ] Configure CORS for frontend domain

**Option B: Railway**
- [ ] Connect GitHub repo
- [ ] Deploy PostgreSQL
- [ ] Deploy backend service
- [ ] Configure environment variables
- [ ] Setup custom domain

**Option C: DigitalOcean / AWS**
- [ ] Create VM instance
- [ ] Setup Docker containers
- [ ] Setup database
- [ ] Configure reverse proxy (nginx)
- [ ] Setup SSL (Let's Encrypt)
- [ ] Configure DNS

### 4.4 Monitoring & Logging
- [ ] Setup Sentry for error tracking
- [ ] Configure application logging
- [ ] Setup uptime monitoring (Uptime Robot)
- [ ] Create monitoring dashboard
- [ ] Setup alerts for critical errors
- [ ] Monitor database performance

### 4.5 Backup & Recovery
- [ ] Configure database backups (daily)
- [ ] Setup backup retention (30 days)
- [ ] Test backup restoration
- [ ] Document disaster recovery procedure
- [ ] Setup automatic backup alerts

---

## 5. TESTING & QA (Weeks 5-6)

### 5.1 Functional Testing
- [ ] Test authentication flow
- [ ] Test profile creation & management
- [ ] Test widget CRUD operations
- [ ] Test drag-and-drop functionality
- [ ] Test responsive design (mobile/desktop)
- [ ] Test image upload & optimization
- [ ] Test analytics tracking
- [ ] Test social media integration

### 5.2 Performance Testing
- [ ] Run Lighthouse audit (target > 90)
- [ ] Test page load times
- [ ] Test API response times (target < 300ms)
- [ ] Test with slow network (3G)
- [ ] Memory leak testing
- [ ] Load testing (1000+ concurrent users)

### 5.3 Security Testing
- [ ] Penetration testing
- [ ] OWASP Top 10 checks
- [ ] SQL injection testing
- [ ] XSS testing
- [ ] CSRF testing
- [ ] Authentication bypass testing
- [ ] Authorization testing
- [ ] Dependency vulnerability scan

### 5.4 Browser Compatibility
- [ ] Chrome 90+
- [ ] Firefox 88+
- [ ] Safari 14+
- [ ] Edge 90+
- [ ] iOS Safari
- [ ] Chrome Mobile

### 5.5 User Testing
- [ ] Beta testing with real users
- [ ] Collect feedback
- [ ] Measure task completion rate
- [ ] Record session time
- [ ] Identify UI/UX issues
- [ ] Gather feature requests

---

## 6. LAUNCH PREPARATION (Weeks 6-7)

### 6.1 Documentation
- [ ] Write API documentation (Swagger)
- [ ] Create user guide / tutorial
- [ ] Write deployment documentation
- [ ] Create troubleshooting guide
- [ ] Document project architecture
- [ ] Create developer onboarding guide

### 6.2 Marketing Preparation
- [ ] Create landing page
- [ ] Write product copy
- [ ] Create demo video
- [ ] Prepare social media posts
- [ ] Create email templates
- [ ] Prepare press release
- [ ] Setup analytics for tracking
- [ ] Create feedback form

### 6.3 Support Infrastructure
- [ ] Create FAQ page
- [ ] Setup email support (support@example.com)
- [ ] Create feedback form / survey
- [ ] Setup bug reporting system (GitHub Issues)
- [ ] Create knowledge base
- [ ] Setup status page (StatusPage.io)

### 6.4 Legal & Compliance
- [ ] Create Privacy Policy
- [ ] Create Terms of Service
- [ ] Setup GDPR compliance
- [ ] Setup cookie consent
- [ ] Create cookie policy
- [ ] Review third-party service ToS

### 6.5 Final QA Checklist
- [ ] All features implemented ✓
- [ ] All bugs fixed ✓
- [ ] Performance targets met ✓
- [ ] Security tests passed ✓
- [ ] Browser compatibility verified ✓
- [ ] Mobile responsiveness tested ✓
- [ ] Analytics working ✓
- [ ] Backup & recovery tested ✓
- [ ] Monitoring alerts configured ✓
- [ ] Documentation complete ✓

---

## 7. LAUNCH & POST-LAUNCH (Week 7+)

### 7.1 Launch Strategy
- [ ] Soft launch (closed beta with 100 users)
- [ ] Monitor for critical issues
- [ ] Fix urgent bugs
- [ ] Gather early feedback
- [ ] Public beta (1000+ users)
- [ ] Public launch

### 7.2 Post-Launch Monitoring
- [ ] Monitor error rates in Sentry
- [ ] Check API performance metrics
- [ ] Monitor database performance
- [ ] Track user behavior analytics
- [ ] Monitor server costs
- [ ] Check daily active users (DAU)
- [ ] Review user feedback

### 7.3 Post-Launch Support
- [ ] Respond to user feedback
- [ ] Fix critical bugs ASAP
- [ ] Plan feature updates
- [ ] Monitor performance
- [ ] Optimize based on analytics
- [ ] Communicate updates to users

---

## 8. FEATURE CHECKLIST BY COMPONENT

### Authentication & User Management
- [ ] Email/password signup
- [ ] Email/password login
- [ ] Google OAuth login
- [ ] Password reset
- [ ] Email verification
- [ ] User profile management
- [ ] Profile picture upload
- [ ] Account deletion

### Profile Management
- [ ] Create profile
- [ ] Edit profile metadata
- [ ] Custom slug
- [ ] Theme color picker
- [ ] Profile visibility toggle
- [ ] Custom domain support
- [ ] Profile preview
- [ ] Publish/draft status

### Widget Editor
- [ ] Drag-and-drop canvas
- [ ] Widget palette
- [ ] Add widget
- [ ] Remove widget
- [ ] Reorder widgets
- [ ] Resize widgets
- [ ] Undo/redo (10 actions)
- [ ] Real-time preview

### Widget Types (MVP: 8-10 core widgets)
- [ ] Link Button
- [ ] Social Media Link (LinkedIn, Twitter, Instagram, etc.)
- [ ] Website/URL
- [ ] Image
- [ ] Spotify Badge
- [ ] YouTube Video
- [ ] Twitter Embed
- [ ] Section Title
- [ ] Text Block (optional)
- [ ] Maps (optional)

### Responsive Design
- [ ] Mobile preview (375px)
- [ ] Desktop preview (1920px)
- [ ] Tablet preview (768px)
- [ ] Responsive layout
- [ ] Touch-friendly taps (48px)
- [ ] No horizontal scroll

### Publishing & Sharing
- [ ] One-click publish
- [ ] Share link
- [ ] Share buttons (WhatsApp, Twitter)
- [ ] QR code generation
- [ ] Preview before publish
- [ ] Public profile URL

### Analytics
- [ ] View count
- [ ] Widget click tracking
- [ ] Traffic source (referrer)
- [ ] Device type breakdown
- [ ] Top widgets by clicks
- [ ] Date range filter
- [ ] CSV export

### Settings
- [ ] Account settings
- [ ] Email/password change
- [ ] Privacy settings
- [ ] Connected integrations
- [ ] Delete account

---

## 9. ESTIMATED TIMELINE

| Phase | Timeline | Tasks |
|-------|----------|-------|
| Setup | Week 0 (1 week) | Infrastructure, team setup, project init |
| Development | Weeks 1-4 (4 weeks) | Frontend + Backend development in parallel |
| Testing | Weeks 5-6 (2 weeks) | QA, bug fixes, performance optimization |
| Launch Prep | Weeks 6-7 (1 week) | Documentation, marketing, final QA |
| **Total MVP** | **7-8 weeks** | Ready for production launch |

**Key milestones:**
- End of Week 2: Auth system + basic editor working
- End of Week 4: All core features implemented
- End of Week 6: Testing complete, most bugs fixed
- Week 7: Launch to public beta

---

## 10. TEAM STRUCTURE & RESPONSIBILITIES

### Recommended Team Composition (3-5 people)

**Developer 1: Frontend Lead**
- React component development
- Editor UI/UX implementation
- State management (Redux)
- Testing & optimization

**Developer 2: Backend Lead**
- API development
- Database design & migrations
- Authentication & authorization
- Integration with external services

**Developer 3: Full Stack**
- Setup infrastructure
- DevOps & deployment
- Database optimization
- General support to both teams

**Developer 4: QA Engineer (Optional)**
- Manual testing
- Test automation (E2E)
- Performance testing
- Security testing

**Product Manager (Part-time)**
- Project management
- User research
- Feature prioritization
- Analytics & metrics tracking

---

## 11. SUCCESS METRICS (KPIs)

### Technical Metrics
- [ ] Lighthouse score > 90
- [ ] API response time < 300ms
- [ ] Page load time < 2s (desktop), < 3s (mobile)
- [ ] 99.9% uptime
- [ ] Error rate < 0.1%

### User Metrics
- [ ] 1,000 users in month 1
- [ ] 60% profile creation rate
- [ ] 40% day-7 retention
- [ ] 25% day-30 retention
- [ ] 10 avg widgets per profile

### Business Metrics
- [ ] < $50/month operational cost (MVP)
- [ ] 10% free-to-paid conversion (Phase 3)
- [ ] < $5 customer acquisition cost
- [ ] > 80% customer satisfaction

---

## 12. COMMON PITFALLS TO AVOID

1. **Over-engineering**: Don't build for 1M users yet. Build for 10K.
2. **Lack of testing**: Unit tests save days of debugging later.
3. **Poor error handling**: Users get frustrated with cryptic error messages.
4. **No monitoring**: Deploy without monitoring = disaster when issues occur.
5. **Scope creep**: Stick to MVP features. Save everything else for Phase 2.
6. **Poor code organization**: Poor structure = slow development speed.
7. **Security shortcuts**: Never compromise on security for speed.
8. **No documentation**: Onboarding new team members becomes painful.
9. **Ignoring performance**: Slow app = poor user experience = high churn.
10. **Missing backups**: Losing user data = death of startup.

---

## QUICK REFERENCE COMMANDS

```bash
# Frontend
npm run dev          # Start dev server
npm run build        # Build for production
npm run test         # Run tests
npm run lint         # Run linter
npm run preview      # Preview production build

# Backend
npm run dev          # Start dev server with ts-node
npm run build        # Compile TypeScript
npm run test         # Run tests
npm start            # Start production server
npm run db:migrate   # Run Prisma migrations
npm run db:seed      # Seed database

# Database
npx prisma studio   # Open Prisma Studio
npx prisma migrate dev --name <name>  # Create migration
npx prisma db push  # Push schema changes

# Deployment
git push origin main  # Triggers GitHub Actions
# Monitor deployment in GitHub Actions tab
```

---

**Next Steps:**
1. Review all three documents (PRD, ERD, Tech Stack)
2. Adjust tech stack based on team expertise
3. Create GitHub project board
4. Start with team setup (Week 0)
5. Begin parallel frontend + backend development (Week 1)

**Questions or clarifications needed?** Please refer to the PRD and Tech Stack documentation for detailed information on each component.