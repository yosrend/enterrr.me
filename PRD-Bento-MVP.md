# Product Requirements Document (PRD)
## Bento-Like Profile Link Builder Platform - MVP

**Document Version:** 1.0  
**Date:** December 2025  
**Status:** MVP Phase

---

## 1. EXECUTIVE SUMMARY

**Product Name:** enterrr.me

**Vision:** Membangun platform "link-in-bio" yang memungkinkan content creators dan users untuk membuat profil online yang beautiful, customizable, dan fully responsive dengan berbagai widget types.

**MVP Scope:** Fokus pada core functionality dengan scalable architecture untuk future features.

---

## 2. PRODUCT OVERVIEW

### 2.1 What We're Building
Sebuah platform web yang memungkinkan users untuk:
- Membuat custom profile page dengan URL yang dipersonalisasi
- Menambahkan berbagai jenis widgets (links, images, videos, social media, Spotify, maps, dll)
- Customize ukuran dan tata letak widgets (square, rectangle, portrait, landscape, large)
- Preview responsif (mobile & desktop)
- Publish dan share profile mereka

### 2.2 Target Users
1. **Content Creators** - YouTubers, TikTokers, Instagrammers
2. **Freelancers & Professionals** - Portfolio showcase
3. **Small Business Owners** - Product & service showcase
4. **Artists & Designers** - Portfolio presentation
5. **Newsletter Writers & Bloggers** - Content aggregation

### 2.3 Key Differentiators
- Free tier (vs Bento.me yang mulai sunset)
- Simple, intuitive drag-and-drop interface
- Rich media support (Spotify, YouTube, Twitter embeds, dll)
- Custom domain support
- Analytics basic (MVP)
- No coding required

---

## 3. CORE FEATURES - MVP PHASE

### 3.1 User Account & Authentication
**Feature ID:** AUTH-001

#### Requirements:
- [ ] Sign up dengan email/password atau OAuth (Google, GitHub)
- [ ] Email verification
- [ ] Login/Logout functionality
- [ ] Password reset
- [ ] User profile management (name, avatar, bio, email)
- [ ] Profile privacy settings (public/private)

#### Success Criteria:
- Registration < 2 minutes
- Email verification < 5 minutes
- Seamless OAuth integration

---

### 3.2 Profile Management
**Feature ID:** PROF-001

#### Requirements:
- [ ] Create custom profile page dengan unique URL slug (e.g., bento.example.com/username)
- [ ] Edit profile metadata:
  - Profile name/title
  - Bio/description
  - Avatar image
  - Banner/header image
  - Link color theme (5-10 preset colors + custom color picker)
- [ ] Profile URL slug customization (available domain check)
- [ ] Custom domain support (DNS setup guide)
- [ ] Profile visibility (public/private/password protected)

#### Success Criteria:
- Profile creation < 3 minutes
- Real-time preview of changes
- Slug availability check via API

---

### 3.3 Drag-and-Drop Widget Builder
**Feature ID:** WIDGET-001

#### Requirements:
- [ ] Drag-and-drop canvas interface
- [ ] Add/remove widgets easily
- [ ] Reorder widgets with drag-and-drop
- [ ] Real-time preview (desktop & mobile)
- [ ] Undo/Redo functionality (last 10 actions)

#### Widget Types (MVP Phase):

| Widget Type | ID | Description | Size Options |
|-----------|---|-------------|--------------|
| Link Button | WGT-001 | Clickable link with custom text & icon | Square, Rectangle |
| Social Media Link | WGT-002 | LinkedIn, Twitter, Instagram, TikTok, YouTube icons | Square |
| Website/URL | WGT-003 | Generic link with custom title | Rectangle |
| Image | WGT-004 | Single image upload/embed | All sizes |
| Spotify Badge | WGT-005 | Show current playing track or playlist | Rectangle, Large |
| YouTube Video | WGT-006 | Embedded YouTube video | Large, Landscape |
| Twitter/X Embed | WGT-007 | Embedded tweet | Rectangle |
| Section Title | WGT-008 | Divider + title for content organization | Full width |
| Text Block | WGT-009 | Rich text content | Rectangle, Full width |
| Image Gallery | WGT-010 | Multiple images in grid | Large |
| Maps | WGT-011 | Google Maps embed (business location) | Large |

#### Widget Size Options:
- **Square** - 1x1 unit
- **Rectangle** - 2x1 unit (wide)
- **Portrait** - 1x2 unit (tall)
- **Landscape** - 2x2 unit (large square)
- **Full Width** - Spans entire width

#### Success Criteria:
- Drag-and-drop works smoothly (60 FPS)
- Add widget < 2 seconds
- Real-time validation of widget content

---

### 3.4 Widget Configuration & Customization
**Feature ID:** WIDGET-002

#### Requirements:

**Link Button Widget (WGT-001):**
- [ ] Custom link text
- [ ] URL input with validation
- [ ] Icon selection (50+ icons dari library)
- [ ] Button text color
- [ ] Button background color
- [ ] Icon size
- [ ] Open in new tab option
- [ ] Add UTM parameters (optional)

**Social Media Link (WGT-002):**
- [ ] Select platform (LinkedIn, Twitter, Instagram, TikTok, YouTube, GitHub, etc.)
- [ ] Auto-fetch icon (no custom URL needed)
- [ ] Display name
- [ ] Auto-open in new tab

**Image Widget (WGT-004):**
- [ ] Image upload (max 5MB, optimize for web)
- [ ] Alt text
- [ ] Link destination (optional)
- [ ] Border radius
- [ ] Shadow effect (optional)

**Spotify Badge (WGT-005):**
- [ ] Spotify API integration
- [ ] Show current playing track (real-time)
- [ ] Show top tracks
- [ ] Show playlists
- [ ] Custom styling

**YouTube Video (WGT-006):**
- [ ] YouTube URL input
- [ ] Auto-embed
- [ ] Custom thumbnail
- [ ] Play button overlay

**Maps Widget (WGT-011):**
- [ ] Google Maps API integration
- [ ] Address input with autocomplete
- [ ] Latitude/Longitude coordinates
- [ ] Zoom level
- [ ] Marker customization

**Section Title (WGT-008):**
- [ ] Custom title text
- [ ] Font size
- [ ] Text color
- [ ] Show divider line
- [ ] Divider color

#### Success Criteria:
- All widgets load preview within 1 second
- Form validation in real-time
- Clear error messages

---

### 3.5 Responsive Design & Preview
**Feature ID:** RESP-001

#### Requirements:
- [ ] Live preview panel (desktop view)
- [ ] Mobile preview toggle (iPhone 12 / Galaxy S21 dimensions)
- [ ] Tablet preview (optional for MVP)
- [ ] Responsive breakpoints:
  - Mobile: 375px - 667px
  - Tablet: 768px - 1024px
  - Desktop: 1025px+
- [ ] All widgets responsive by default
- [ ] Touch-friendly tap targets (48px minimum)

#### Success Criteria:
- Mobile preview renders correctly
- Layout adapts to all screen sizes
- No horizontal scroll on mobile

---

### 3.6 Profile Publishing & Sharing
**Feature ID:** PUB-001

#### Requirements:
- [ ] One-click publish (save changes)
- [ ] Public profile URL generation
- [ ] Share buttons (Copy link, WhatsApp, Twitter, etc.)
- [ ] QR code generation (link to profile)
- [ ] Preview before publish
- [ ] Draft/published status indicator

#### Success Criteria:
- Profile live within 1 second after publish
- QR code generated < 500ms
- Share links work correctly

---

### 3.7 Basic Analytics (MVP)
**Feature ID:** ANALYTICS-001

#### Requirements:
- [ ] View count (total profile visits)
- [ ] Click tracking per widget
- [ ] Traffic source (referrer)
- [ ] Device type breakdown (mobile/desktop)
- [ ] Top widgets by clicks
- [ ] Date range filter (last 7 days, 30 days, all time)
- [ ] Export analytics (CSV)

#### Success Criteria:
- Analytics updated in real-time
- Dashboard loads < 2 seconds
- Accurate click tracking

---

### 3.8 Settings & Account Management
**Feature ID:** SETTING-001

#### Requirements:
- [ ] Account settings (email, password change)
- [ ] Privacy settings (profile visibility)
- [ ] Notification preferences
- [ ] Delete account option
- [ ] API token generation (for future integrations)
- [ ] Connected integrations management

#### Success Criteria:
- Settings changes reflect immediately
- Account deletion takes < 5 minutes

---

## 4. TECHNICAL REQUIREMENTS

### 4.1 Performance
- [ ] Page load time < 2 seconds (desktop)
- [ ] Mobile page load time < 3 seconds
- [ ] API response time < 300ms
- [ ] Real-time preview update < 100ms
- [ ] Drag-and-drop 60 FPS

### 4.2 Scalability
- [ ] Support 10,000+ concurrent users in MVP
- [ ] Database design for horizontal scaling
- [ ] CDN for static assets
- [ ] Image optimization & resizing on-the-fly
- [ ] Caching strategy (Redis)

### 4.3 Security
- [ ] HTTPS only
- [ ] CSRF protection
- [ ] XSS prevention
- [ ] SQL injection prevention
- [ ] Rate limiting (100 requests/minute per IP)
- [ ] Input validation & sanitization
- [ ] Secure password hashing (bcrypt)
- [ ] OAuth token security

### 4.4 Browser Compatibility
- [ ] Chrome 90+
- [ ] Firefox 88+
- [ ] Safari 14+
- [ ] Edge 90+
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### 4.5 Accessibility (WCAG 2.1 Level AA)
- [ ] Keyboard navigation support
- [ ] Screen reader compatible
- [ ] Color contrast ratio 4.5:1
- [ ] Alt text untuk semua images
- [ ] Form labels accessibility

---

## 5. PHASED DEVELOPMENT ROADMAP

### Phase 1: MVP (Months 1-3)
**Core deliverables:**
- User authentication
- Basic profile creation
- Drag-and-drop widget builder (5 essential widgets)
- Responsive preview
- Publishing & analytics (basic)
- Custom domain support
- Deployment to production

### Phase 2: Extended Features (Months 4-6)
**Additional features:**
- More widget types (15+ total)
- Advanced customization (CSS injection for paid tier)
- Team collaboration
- Template library
- Advanced analytics
- A/B testing

### Phase 3: Monetization & Growth (Months 7-12)
**Business features:**
- Premium tier ($5-10/month)
- Custom domain (paid)
- Priority support
- Advanced analytics
- Affiliate program
- Email export

### Phase 4: Scale & Enterprise (Months 13+)
**Enterprise features:**
- Multi-user teams
- White-label solution
- API access
- Webhooks
- Advanced integrations
- SLA support

---

## 6. MONETIZATION STRATEGY (Future Phases)

### Free Tier
- 5 profiles
- Basic widgets (WGT-001, WGT-002, WGT-003, WGT-004, WGT-008)
- Basic analytics
- Bento.example.com subdomain
- Limited storage (10MB)

### Pro Tier ($4.99/month or $49.99/year)
- Unlimited profiles
- All widget types
- Advanced analytics
- Custom domain
- 1GB storage
- Priority support
- Remove "Powered by Bento" footer

### Business Tier ($14.99/month or $149.99/year)
- Everything in Pro +
- Team collaboration (up to 5 users)
- Advanced integrations
- API access
- Webhook support
- Custom branding

---

## 7. SUCCESS METRICS (KPIs)

### User Acquisition
- [ ] 1,000 users dalam 1 bulan
- [ ] 5,000 users dalam 3 bulan
- [ ] 10,000 users dalam 6 bulan

### Engagement
- [ ] 60% active users (create profile)
- [ ] Average 10+ widgets per profile
- [ ] Daily active users (DAU) rate

### Retention
- [ ] Day 7 retention > 40%
- [ ] Day 30 retention > 25%
- [ ] Monthly churn rate < 10%

### Revenue (Phase 3+)
- [ ] 10% Pro tier conversion
- [ ] $10K MRR dalam bulan ke-6
- [ ] Customer acquisition cost < $5

---

## 8. CONSTRAINTS & ASSUMPTIONS

### Constraints
- [ ] Budget terbatas untuk MVP
- [ ] Tim kecil (3-5 developers)
- [ ] Timeline 3 bulan untuk MVP
- [ ] No initial marketing budget

### Assumptions
- [ ] Users prefer visual/drag-and-drop over code
- [ ] Mobile traffic akan 60% dari total
- [ ] Free tier akan drive user acquisition
- [ ] Integrations (Spotify, YouTube, Maps) APIs available & stable

---

## 9. RISK ASSESSMENT

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| API rate limiting (Spotify, YouTube) | High | Medium | Implement caching, queue system |
| Data privacy regulations (GDPR) | High | High | Implement privacy policy, data protection |
| User learning curve (drag-and-drop) | Medium | Medium | In-app tutorial, video guide |
| Server scalability issues | Medium | High | Design for horizontal scaling from start |
| Competition from Linktree, Bento | Medium | Medium | Focus on niche, better UX |

---

## 10. GLOSSARY

| Term | Definition |
|------|-----------|
| Widget | Customizable component/element pada profile page |
| Slug | URL-friendly version of profile name (e.g., john-doe) |
| Canvas | Drag-and-drop editor area |
| OAuth | Open authentication protocol |
| CDN | Content Delivery Network |
| UTM | Urchin Tracking Module (analytics parameter) |

---

## 11. APPENDIX

### 11.1 Competitive Analysis Summary
- **Bento.me** - Free, beautiful, sunsetting soon
- **Linktree** - Popular, paid-first model
- **Beacons** - All-in-one tool with analytics
- **Stan Store** - E-commerce focused
- **Carrd** - Simple, affordable

### 11.2 Feature Comparison Matrix
| Feature | enterrr.me | Bento.me | Linktree |
|---------|-----------|----------|----------|
| Free Tier | Yes | Yes | Yes |
| Drag-Drop | Yes | Yes | Yes |
| Custom Domain | Yes | Yes | Yes (Paid) |
| Analytics | Basic | Yes | Yes |
| Widgets | 15+ | 10+ | 20+ |
| API | Future | No | Yes (Paid) |
| Team Collab | Future | No | Yes (Paid) |

---

**Document Version History:**
- v1.0 - Initial MVP scope (Dec 2025)