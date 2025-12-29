# MVP PHASES & DEVELOPMENT ROADMAP
## enterrr.me - Incremental Development Strategy

**Document Version:** 1.0  
**Date:** December 29, 2025  
**Purpose:** Define MVP terkecil dan development bertahap

---

## 🎯 PHILOSOPHY: "Ship Fast, Iterate Faster"

**Prinsip Development:**
1. ✅ Launch **minimum viable** product ASAP
2. ✅ Validate dengan real users
3. ✅ Iterate berdasarkan feedback
4. ✅ Add features incrementally
5. ✅ Each phase = shippable product

---

## 📊 OVERVIEW - 5 PHASES

```
MVP 1.0 (Week 1-6)  →  MVP 1.1 (Week 7-8)  →  MVP 1.2 (Week 9-10)
    ↓                        ↓                        ↓
  CORE                  ENHANCED               COMPLETE MVP
  FEATURES              FEATURES               + ANALYTICS
    ↓
                    ↓                         ↓
            Phase 2 (Month 2-3)      Phase 3 (Month 4-6)
                    ↓                         ↓
              ADVANCED WIDGETS      BUSINESS FEATURES
```

---

## 🚀 MVP 1.0 - ABSOLUTE MINIMUM (Week 1-6)

**Goal:** Prove the concept works. Get first 50 users.

### Scope: "Can I create a basic profile page?"

#### ✅ DALAM SCOPE (MUST HAVE)

**1. Authentication (Basic)**
```
✅ Email + password signup
✅ Email + password login
✅ Logout
✅ JWT tokens (access token only, 7 days)
❌ NO email verification (manual approval untuk beta)
❌ NO password reset (manual reset untuk beta)
❌ NO OAuth (Google, GitHub - defer)
❌ NO refresh tokens (use long-lived access token)
```
**Dev Time:** 3-4 days

**2. Profile Management (Basic)**
```
✅ Create ONE profile per user
✅ Edit profile:
   - Profile name/title
   - Bio (max 200 chars)
   - Avatar upload
   - Custom slug (username)
✅ Slug availability check
✅ Profile visibility (public only)
❌ NO banner image
❌ NO theme colors (use default theme)
❌ NO multiple profiles
❌ NO custom domains
```
**Dev Time:** 2-3 days

**3. Widgets (ONLY 3 TYPES)**
```
✅ Widget 1: Link Button
   - Text (max 50 chars)
   - URL
   - Icon (10 preset icons only)
   - Fixed style (no customization)

✅ Widget 2: Social Media Link
   - Platform: Instagram, Twitter, LinkedIn (3 only)
   - Handle
   - Auto icon + color

✅ Widget 3: Section Title
   - Text (max 50 chars)
   - Fixed style (no customization)

❌ NO Image widget
❌ NO YouTube widget
❌ NO other widgets
```
**Dev Time:** 4-5 days (all 3 widgets)

**4. Editor (Ultra Simple)**
```
✅ Add widget (dari palette)
✅ Delete widget
✅ Reorder widgets (UP/DOWN buttons, NO drag-drop yet)
✅ Edit widget (inline form)
✅ Preview (desktop only)
✅ Auto-save (5 second debounce)
❌ NO drag-and-drop (too complex for MVP 1.0)
❌ NO undo/redo
❌ NO mobile preview
❌ NO widget resize
```
**Dev Time:** 5-6 days

**5. Public Profile Page**
```
✅ Accessible via: username.enterrr.me
✅ Show all widgets
✅ Click tracking (basic counter)
✅ Responsive (mobile + desktop)
✅ Basic SEO (title, description meta tags)
❌ NO custom themes
❌ NO animations
❌ NO QR code
❌ NO share buttons
```
**Dev Time:** 2-3 days

**6. Infrastructure**
```
✅ PostgreSQL database (Supabase)
✅ Frontend: React + Vite
✅ Backend: Vercel Serverless API
✅ Image upload: Cloudinary (avatar only)
✅ Deployment: Vercel
❌ NO Redis
❌ NO analytics service
❌ NO email service
```
**Dev Time:** 2-3 days (setup)

---

### 📋 MVP 1.0 - FEATURE LIST (Checklist)

**Authentication:**
- [ ] Sign up form (email, password, username)
- [ ] Login form
- [ ] Logout button
- [ ] Protected routes
- [ ] JWT token storage (localStorage)

**Profile:**
- [ ] Create profile (one-time, auto-created on signup)
- [ ] Edit profile form (name, bio, slug)
- [ ] Avatar upload
- [ ] Slug validation (unique check)

**Widgets:**
- [ ] Link Button widget form
- [ ] Social Media widget form
- [ ] Section Title widget form
- [ ] Widget list display
- [ ] Add widget button
- [ ] Delete widget button
- [ ] Edit widget inline
- [ ] Reorder widget (up/down arrows)

**Editor:**
- [ ] Editor page layout
- [ ] Widget palette (3 types)
- [ ] Preview panel (desktop)
- [ ] Auto-save (debounced)
- [ ] Publish button

**Public Profile:**
- [ ] Profile route: /:username
- [ ] Widget rendering (all 3 types)
- [ ] Responsive layout
- [ ] Click tracking
- [ ] Basic SEO meta tags

**Database:**
- [ ] User table
- [ ] Profile table
- [ ] Widget table
- [ ] Analytics table (basic)
- [ ] Migrations

---

### 🎯 MVP 1.0 - SUCCESS CRITERIA

**Technical:**
```
✅ User dapat sign up dan login
✅ User dapat create profile dengan custom slug
✅ User dapat add minimal 3 widgets (link, social, title)
✅ User dapat reorder widgets
✅ Public profile accessible via subdomain
✅ Mobile responsive
✅ Page load < 3 seconds
✅ No critical bugs
```

**User Metrics:**
```
Target: 50 beta users
Goal: Validate "can people create profile pages?"
Success: 30+ users publish their profile
KPI: 60% publish rate
```

---

### 🚫 MVP 1.0 - EXPLICIT NO-GOs

**Features to SKIP for MVP 1.0:**
```
❌ Email verification (manual for beta)
❌ Password reset (support handles manually)
❌ OAuth login (Google, GitHub)
❌ Drag-and-drop editor
❌ Image widget, YouTube widget
❌ Analytics dashboard
❌ Custom themes/colors
❌ Banner images
❌ QR codes
❌ Share buttons
❌ Multiple profiles
❌ Custom domains
❌ Undo/redo
❌ Mobile preview toggle
❌ Widget animations
❌ Advanced styling
```

**Why skip?** 
- Focus on core value: "Create linkable profile page"
- Each adds 2-7 days development
- Can add in MVP 1.1, 1.2

---

### ⏱️ MVP 1.0 - TIMELINE

**Total: 6 weeks**

```
Week 1: Setup + Auth
├── Days 1-2: Project setup, database schema
├── Days 3-4: Auth API (signup, login, JWT)
└── Days 5:   Auth UI (forms, protected routes)

Week 2: Profile + Database
├── Days 1-2: Profile API (CRUD)
├── Day 3:    Avatar upload (Cloudinary)
├── Days 4-5: Profile UI (forms, slug check)

Week 3: Widgets (Backend + UI)
├── Days 1-2: Widget API (CRUD, reorder)
├── Days 3-4: Widget forms (3 types)
└── Day 5:    Widget validation & testing

Week 4: Editor Page
├── Days 1-2: Editor layout (palette + preview)
├── Days 3-4: Add/edit/delete/reorder logic
└── Day 5:    Auto-save + publish

Week 5: Public Profile + Polish
├── Days 1-2: Public profile page
├── Days 3-4: Widget rendering (3 types)
└── Day 5:    Responsive design, SEO

Week 6: Testing + Beta Launch
├── Days 1-2: Bug fixes
├── Days 3-4: Manual testing (all flows)
└── Day 5:    Deploy + invite 50 beta users
```

**Contingency:** +1 week buffer

---

### 💰 MVP 1.0 - COST ESTIMATE

**Infrastructure:**
```
Vercel (Free tier)           : $0
Supabase (Free tier)         : $0 (upgrade to $25 if needed)
Cloudinary (Free tier)       : $0
Domain (enterrr.me)          : $12/year
─────────────────────────────────
Total                        : $0-25/month
```

**Development (3 devs × 6 weeks):**
```
$100/hour × 40h/week × 6 weeks × 3 = $72,000
```

---

## 🔄 MVP 1.1 - ESSENTIAL IMPROVEMENTS (Week 7-8)

**Goal:** Make it production-ready. Get to 200 users.

### What Changes from MVP 1.0?

#### ✅ ADD (New Features)

**1. Email Verification**
```
✅ Send verification email on signup
✅ Email verification link (token-based)
✅ Resend verification email
✅ Block actions until verified
```
**Why now?** Can't scale without email verification (spam prevention)
**Dev Time:** 2 days

**2. Password Reset**
```
✅ Forgot password form
✅ Reset password email
✅ Reset password page (token-based)
✅ Password strength indicator
```
**Why now?** Users will forget passwords
**Dev Time:** 2 days

**3. Drag-and-Drop Editor**
```
✅ Replace up/down arrows with drag-drop
✅ Use dnd-kit library
✅ Smooth animations
✅ Touch support (mobile)
```
**Why now?** Better UX, feels more premium
**Dev Time:** 3-4 days

**4. Image Widget**
```
✅ Upload image
✅ Alt text
✅ Optional link on click
✅ Auto-optimization (Cloudinary)
```
**Why now?** Visual creators need this (high demand)
**Dev Time:** 2 days

**5. Mobile Preview Toggle**
```
✅ Desktop/Mobile preview switch
✅ Accurate mobile viewport (375px)
```
**Why now?** Most traffic is mobile
**Dev Time:** 1 day

---

### 📋 MVP 1.1 - FEATURE LIST (Additions)

**Auth Improvements:**
- [ ] Email verification flow
- [ ] Email verification table
- [ ] Password reset flow
- [ ] Password reset table
- [ ] Email templates (SendGrid/Resend)

**Editor Improvements:**
- [ ] dnd-kit integration
- [ ] Drag handles on widgets
- [ ] Drop zone indicators
- [ ] Reorder via drag-drop
- [ ] Mobile preview toggle

**New Widget:**
- [ ] Image widget form
- [ ] Image upload + preview
- [ ] Image optimization
- [ ] Image widget rendering

---

### 🎯 MVP 1.1 - SUCCESS CRITERIA

**Technical:**
```
✅ Email verification working (>95% delivery rate)
✅ Password reset working
✅ Drag-drop smooth (60 FPS)
✅ Image uploads < 5 seconds
✅ Mobile preview accurate
```

**User Metrics:**
```
Target: 200 users
Goal: Reduce support burden (self-service auth)
Success: <5 support tickets per week
KPI: 80% email verification rate
```

---

### ⏱️ MVP 1.1 - TIMELINE

**Total: 2 weeks**

```
Week 7: Auth + Drag-Drop
├── Days 1-2: Email verification (backend + frontend)
├── Days 3-4: Password reset (backend + frontend)
└── Day 5:    Drag-drop editor (dnd-kit setup)

Week 8: Image Widget + Polish
├── Days 1-2: Drag-drop completion + testing
├── Days 3-4: Image widget (upload + render)
└── Day 5:    Mobile preview toggle + bug fixes
```

---

## 📈 MVP 1.2 - ANALYTICS & SHARING (Week 9-10)

**Goal:** Understand user behavior. Enable viral growth.

### What Changes from MVP 1.1?

#### ✅ ADD (New Features)

**1. Basic Analytics Dashboard**
```
✅ Total profile views
✅ Total widget clicks
✅ Views per widget
✅ Device type breakdown (mobile vs desktop)
✅ Last 7 days chart (simple line chart)
```
**Why now?** Users want to see impact
**Dev Time:** 3-4 days

**2. Share & QR Code**
```
✅ Share modal
✅ Copy link button
✅ QR code generation (qrcode package)
✅ Download QR code
✅ Share to Twitter, WhatsApp (links)
```
**Why now?** Enable viral sharing
**Dev Time:** 2 days

**3. YouTube Widget**
```
✅ YouTube URL input
✅ Video ID extraction
✅ Embed iframe
✅ Responsive video player
```
**Why now?** Video creators need this (high demand)
**Dev Time:** 1-2 days

**4. Theme Colors (Basic)**
```
✅ 5 preset color themes
✅ Accent color picker
✅ Apply to buttons, links
```
**Why now?** Personalization without complexity
**Dev Time:** 2 days

---

### 📋 MVP 1.2 - FEATURE LIST (Additions)

**Analytics:**
- [ ] Analytics collection (page views, clicks)
- [ ] Analytics aggregation queries
- [ ] Analytics dashboard page
- [ ] Charts (views over time)
- [ ] Device type breakdown

**Sharing:**
- [ ] Share modal component
- [ ] Copy to clipboard
- [ ] QR code generation
- [ ] Social share links (Twitter, WhatsApp)

**New Widget:**
- [ ] YouTube widget form
- [ ] Video URL validation
- [ ] Embed player
- [ ] Responsive iframe

**Theming:**
- [ ] Color theme selector
- [ ] 5 preset themes
- [ ] Custom accent color picker
- [ ] Apply theme to widgets

---

### 🎯 MVP 1.2 - SUCCESS CRITERIA

**Technical:**
```
✅ Analytics track accurately (99%+ accuracy)
✅ Dashboard loads < 2 seconds
✅ QR code generates < 500ms
✅ YouTube embeds work (all videos)
✅ Theme colors apply correctly
```

**User Metrics:**
```
Target: 500 users
Goal: Understand usage patterns
Success: 50%+ users check analytics weekly
KPI: 20% share via QR code
```

---

### ⏱️ MVP 1.2 - TIMELINE

**Total: 2 weeks**

```
Week 9: Analytics + YouTube
├── Days 1-3: Analytics (tracking + dashboard)
├── Days 4-5: YouTube widget

Week 10: Sharing + Theming
├── Days 1-2: Share modal + QR code
├── Days 3-4: Theme colors
└── Day 5:    Testing + bug fixes
```

---

## 🎉 END OF MVP PHASE (After Week 10)

**Status:** Production-ready product with core features

**What We Have:**
```
✅ Complete authentication (signup, login, email verify, password reset)
✅ Profile management (with avatar, custom slug)
✅ 5 widget types (Link, Social, Image, YouTube, Section Title)
✅ Drag-drop editor
✅ Mobile-responsive preview
✅ Analytics dashboard
✅ Share & QR code
✅ Basic theming
✅ Public profiles (username.enterrr.me)
```

**User Count Target:** 500-1,000 users
**Revenue Target:** $0 (free tier only, validate PMF first)

---

## 🚀 PHASE 2 - ADVANCED FEATURES (Month 3-4)

**Goal:** Monetization-ready. Scale to 5,000 users.

### Major Features (Pick 3-4)

**1. OAuth Login (Google + GitHub)**
```
Benefit: Faster signup, lower friction
Dev Time: 1 week
Priority: HIGH (conversion rate improvement)
```

**2. Custom Domains**
```
Benefit: Professional users will pay for this
Dev Time: 2 weeks (DNS verification, SSL setup)
Priority: HIGH (monetization unlock)
```

**3. Multiple Profiles**
```
Benefit: Power users with multiple brands
Dev Time: 1 week
Priority: MEDIUM
```

**4. More Widgets:**
```
- Spotify Badge (OAuth + API)     : 1 week
- Twitter/X Embed                 : 3 days
- Maps (Google Maps)              : 1 week
- Text Block (rich text)          : 4 days
- Image Gallery                   : 5 days

Pick 2-3 based on user requests
Priority: MEDIUM
```

**5. Advanced Analytics**
```
- Traffic sources (referrer analysis)
- Click-through rates
- Conversion funnels
- CSV export
- Date range filters (custom)

Dev Time: 1 week
Priority: MEDIUM (nice-to-have for paid users)
```

**6. Pro Tier (Monetization)**
```
Features:
- Custom domain
- Advanced analytics
- Remove "Powered by enterrr.me"
- Priority support
- All widget types

Pricing: $7.99/month or $75/year
Dev Time: 1 week (payment integration + tier logic)
Priority: HIGH (revenue)
```

---

### Phase 2 - Timeline

**Total: 8 weeks (2 months)**

```
Month 3 (Weeks 11-14):
├── Week 11: OAuth login (Google + GitHub)
├── Week 12: Custom domains (DNS + SSL)
├── Week 13: Multiple profiles support
└── Week 14: 2 new widgets (user-requested)

Month 4 (Weeks 15-18):
├── Week 15: Advanced analytics
├── Week 16: Pro tier setup + payment (Stripe)
├── Week 17: Marketing push + onboarding
└── Week 18: Testing + optimization
```

**Target by End of Phase 2:**
- 5,000 total users
- 500 paid users (10% conversion)
- $3,500 MRR

---

## 🏢 PHASE 3 - BUSINESS FEATURES (Month 5-6)

**Goal:** Enterprise-ready. Scale to 20,000 users.

### Major Features

**1. Team Collaboration**
```
- Multiple users per account
- Role-based access (admin, editor, viewer)
- Activity log
- Shared profiles

Dev Time: 3 weeks
Priority: HIGH (business tier feature)
```

**2. API Access**
```
- REST API for profile/widget management
- API key generation
- Rate limiting
- Documentation

Dev Time: 2 weeks
Priority: MEDIUM (developer tier)
```

**3. White-Label**
```
- Remove all enterrr.me branding
- Custom branding upload
- Custom domain with SSL

Dev Time: 1 week
Priority: LOW (enterprise only)
```

**4. Advanced Integrations**
```
- Webhooks (profile updated, widget clicked)
- Zapier integration
- Email collection widget
- Newsletter signup widget

Dev Time: 2-3 weeks
Priority: MEDIUM
```

**5. Business Tier**
```
Pricing: $24.99/month
Features:
- Everything in Pro
- Team collaboration (5 users)
- API access
- Webhooks
- White-label option
- SLA support

Dev Time: 1 week (tier setup)
```

---

### Phase 3 - Timeline

**Total: 8 weeks (2 months)**

```
Month 5 (Weeks 19-22):
├── Week 19-21: Team collaboration (3 weeks)
└── Week 22: API development (1 week)

Month 6 (Weeks 23-26):
├── Week 23-24: Webhooks + integrations (2 weeks)
├── Week 25: Business tier setup
└── Week 26: Marketing + sales push
```

**Target by End of Phase 3:**
- 20,000 total users
- 2,000 paid users (10%)
- 50 business tier users
- $18,000 MRR

---

## 📊 SUMMARY - FEATURE PROGRESSION

### Widget Count by Phase

```
MVP 1.0:  3 widgets (Link, Social, Section Title)
MVP 1.1:  4 widgets (+ Image)
MVP 1.2:  5 widgets (+ YouTube)
Phase 2:  8-10 widgets (+ Spotify, Twitter, Maps, Text, Gallery)
Phase 3:  12+ widgets (+ Email form, Newsletter, Custom HTML)
```

### User Target by Phase

```
MVP 1.0:      50 users (beta)
MVP 1.1:     200 users
MVP 1.2:     500 users
End of MVP: 1,000 users
Phase 2:    5,000 users
Phase 3:   20,000 users
```

### Revenue by Phase

```
MVP 1.0-1.2:  $0 (validation)
Phase 2:   $3,500 MRR
Phase 3:  $18,000 MRR
Month 12: $25,000+ MRR
```

---

## 🎯 DECISION CHECKPOINTS

### After MVP 1.0 (Week 6)
```
REVIEW:
- Did we get 50 beta users?
- Did 60%+ publish their profile?
- What's the #1 user complaint?
- What feature do they ask for most?

DECIDE:
- Continue to MVP 1.1 as planned?
- OR pivot based on feedback?
- OR add emergency feature (not in plan)?
```

### After MVP 1.2 (Week 10)
```
REVIEW:
- Did we reach 500-1,000 users?
- What's the retention rate (day 7, day 30)?
- What widgets are used most?
- Are users willing to pay?

DECIDE:
- Launch Pro tier (Phase 2)?
- OR continue free tier to grow?
- Which Phase 2 features to prioritize?
```

### After Phase 2 (Month 4)
```
REVIEW:
- Did we reach 5,000 users?
- Did we get 500 paid users ($3,500 MRR)?
- What's the conversion rate?
- What do paid users want next?

DECIDE:
- Build Phase 3 (business features)?
- OR focus on growth (marketing)?
- OR improve existing features?
```

---

## 🔧 TECHNICAL DEBT TRACKING

### MVP 1.0 - Known Shortcuts
```
⚠️ Long-lived JWT (7 days, no refresh token)
   Fix in: MVP 1.1 (add refresh token system)

⚠️ No email verification (manual approval)
   Fix in: MVP 1.1 (required for scaling)

⚠️ No widget resize (fixed sizes only)
   Fix in: Phase 2 (if users request it)

⚠️ No caching (Redis)
   Fix in: Phase 2 (when > 5K users)

⚠️ No image CDN optimization
   Fix in: Already using Cloudinary ✅
```

---

## 📋 FINAL CHECKLIST - MVP 1.0 READINESS

**Before Launch MVP 1.0:**
```
Technical:
[ ] All 3 widgets working
[ ] Auth flow complete (signup, login, logout)
[ ] Profile creation works
[ ] Public profile accessible
[ ] Mobile responsive
[ ] Database migrations applied
[ ] Deployed to Vercel
[ ] Domain configured (enterrr.me)
[ ] SSL certificate active
[ ] Error tracking (Sentry)

UX:
[ ] Onboarding flow clear
[ ] No confusing UI elements
[ ] Error messages helpful
[ ] Loading states present
[ ] Success confirmations clear

Legal:
[ ] Privacy policy published
[ ] Terms of service published
[ ] Cookie consent (if needed)

Launch:
[ ] 50 beta users invited
[ ] Feedback form ready
[ ] Support email setup (support@enterrr.me)
[ ] Bug tracking system (GitHub Issues)
[ ] Analytics tracking (PostHog/Google Analytics)
```

---

## 🚦 GO / NO-GO CRITERIA

### MVP 1.0 Launch - GO Criteria
```
✅ All MUST HAVE features working
✅ Zero CRITICAL bugs
✅ <5 HIGH priority bugs
✅ Page load < 3 seconds
✅ Mobile responsive working
✅ Can create profile in <5 minutes
✅ Public profile accessible
✅ Team agrees quality acceptable
```

### MVP 1.0 Launch - NO-GO Criteria
```
🚫 Critical bugs exist (data loss, security)
🚫 Auth system broken
🚫 Can't create/publish profile
🚫 Public profiles not accessible
🚫 Not mobile responsive
🚫 Page crashes/errors frequently
```

---

## 📞 QUESTIONS FOR REVIEW

**For You to Answer:**

1. **MVP 1.0 Scope:**
   - [ ] Is 3 widgets enough? Or need 4-5?
   - [ ] Skip drag-drop in 1.0? Or must-have?
   - [ ] Timeline: 6 weeks realistic untuk team Anda?

2. **MVP 1.1 Priorities:**
   - [ ] Is email verification critical? Or can wait?
   - [ ] Drag-drop priority high? Or defer to 1.2?
   - [ ] Image widget must-have? Or optional?

3. **Phase 2 Focus:**
   - [ ] Monetization first (Pro tier)? Or growth first (free tier)?
   - [ ] Which widgets to add first? (based on target users)
   - [ ] Custom domains priority? (technical complexity vs value)

4. **Timeline:**
   - [ ] 10 weeks to MVP complete OK? Or need faster?
   - [ ] Phase 2 in 2 months realistic? Or need longer?

5. **Team:**
   - [ ] How many developers available?
   - [ ] Full-time atau part-time?
   - [ ] Need designer? Or use component library?

---

**Next Step:** Review this doc dan beri feedback/koreksi!

**Format untuk feedback:**
```
Section: [e.g., MVP 1.0 - Widgets]
Change: [what to change]
Reason: [why]
```

---

_Document Version: 1.0_  
_Created: December 29, 2025_  
_Ready for Review: YES ✅_
