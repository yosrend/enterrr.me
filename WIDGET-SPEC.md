# WIDGET SPECIFICATION DOCUMENT
## Bento-Like Profile Link Builder Platform - MVP

**Document Version:** 1.0  
**Date:** December 2025

---

## 1. WIDGET OVERVIEW

Widgets adalah building blocks dari profile page. Setiap widget adalah komponen customizable yang dapat users drag-and-drop ke profile mereka.

### 1.1 Size System

| Size | Width | Height | CSS Class | Use Case |
|------|-------|--------|-----------|----------|
| **Square** | 1 unit | 1 unit | `col-span-1 row-span-1` | Social icons, small links |
| **Rectangle (Wide)** | 2 units | 1 unit | `col-span-2 row-span-1` | Buttons, wide content |
| **Portrait (Tall)** | 1 unit | 2 units | `col-span-1 row-span-2` | Tall images, video thumbnails |
| **Landscape (Large)** | 2 units | 2 units | `col-span-2 row-span-2` | Feature widgets, embeds |
| **Full Width** | 4 units | 1 unit | `col-span-4 row-span-1` | Titles, dividers, full-width content |

**Grid System:**
- Desktop: 4-column grid
- Mobile: 2-column grid (responsive)
- Spacing: 16px gap between widgets

### 1.2 Configuration Data Structure

Setiap widget menyimpan konfigurasi dalam JSON format di database:

```typescript
interface WidgetConfig {
  // Common properties (all widgets)
  size: "square" | "rectangle" | "portrait" | "landscape" | "full";
  backgroundColor?: string;
  textColor?: string;
  
  // Widget-specific properties
  [key: string]: any;
}
```

---

## 2. WIDGET TYPES (MVP PHASE)

### WGT-001: Link Button

**Description:** Clickable button yang link ke URL external

**Properties:**
```typescript
interface LinkButtonConfig extends WidgetConfig {
  text: string;              // Button text (max 50 chars)
  url: string;               // Target URL (validated)
  icon?: string;             // Icon from library (optional)
  iconPosition?: "left" | "right"; // Default: left
  openNewTab?: boolean;      // Default: true
  utmSource?: string;        // UTM parameters (optional)
  utmMedium?: string;
  utmCampaign?: string;
  buttonStyle?: "solid" | "outline" | "gradient";
  cornerRadius?: number;     // 0-50px, default 8px
  shadow?: boolean;          // Drop shadow
}
```

**Supported Sizes:** Square, Rectangle

**Icon Library:** 
- 50+ icons dari Heroicons / Feather icons
- Categories: Social, Business, Tech, Creative, etc.

**Validation:**
- Text required, max 50 chars
- URL required, valid format
- UTF-8 allowed in text

**Preview Example:**
```
┌─────────────────────┐
│  📱 Follow on X     │
│                     │
└─────────────────────┘
```

**Database Storage:**
```json
{
  "widgetType": "link",
  "size": "rectangle",
  "config": {
    "text": "Follow on X",
    "url": "https://twitter.com/myhandle",
    "icon": "twitter",
    "openNewTab": true,
    "buttonStyle": "solid",
    "backgroundColor": "#000000",
    "textColor": "#FFFFFF"
  }
}
```

---

### WGT-002: Social Media Link

**Description:** Quick social media links dengan auto-generated icons

**Properties:**
```typescript
interface SocialMediaConfig extends WidgetConfig {
  platform: "linkedin" | "twitter" | "instagram" | "tiktok" | 
            "youtube" | "github" | "facebook" | "discord" | 
            "twitch" | "whatsapp";
  handle: string;            // @username atau URL
  displayName?: string;      // Custom display text
  showFollowers?: boolean;   // Show follower count (API dependent)
}
```

**Supported Sizes:** Square only

**Auto-Generated Data:**
- Icon dari official platform
- Brand colors
- Handle validation

**Validation:**
- Handle required
- Must be valid for platform
- Handle length: 1-30 chars

**Platform URL Mapping:**
```typescript
const platformUrls = {
  linkedin: "https://linkedin.com/in/{handle}",
  twitter: "https://twitter.com/{handle}",
  instagram: "https://instagram.com/{handle}",
  tiktok: "https://tiktok.com/@{handle}",
  youtube: "https://youtube.com/{handle}",
  github: "https://github.com/{handle}",
  // ... etc
}
```

**Preview Example:**
```
┌─────────┐
│    🐦   │ Twitter
│ @myname │
└─────────┘
```

**Database Storage:**
```json
{
  "widgetType": "social",
  "size": "square",
  "config": {
    "platform": "twitter",
    "handle": "@myhandle",
    "displayName": "Follow me"
  }
}
```

---

### WGT-003: Website/URL

**Description:** Link dengan preview/rich metadata

**Properties:**
```typescript
interface WebsiteConfig extends WidgetConfig {
  title: string;             // Link title (max 50 chars)
  url: string;               // Target URL
  description?: string;      // Short description
  imageUrl?: string;         // Custom thumbnail
  fetchMetadata?: boolean;   // Auto-fetch from URL metadata
  displayType?: "title-only" | "with-preview" | "with-description";
}
```

**Supported Sizes:** Rectangle

**Metadata Fetching:**
- Fetch OpenGraph tags: og:title, og:image, og:description
- Fallback: Website favicon + title
- Cache hasil fetch (TTL: 7 days)

**Validation:**
- URL required, must be valid
- Title required, max 50 chars

**Preview Example:**
```
┌─────────────────────────┐
│ 📄 My Blog              │
│ Read my latest posts    │
│ [Thumbnail]             │
└─────────────────────────┘
```

**Database Storage:**
```json
{
  "widgetType": "website",
  "size": "rectangle",
  "config": {
    "title": "My Blog",
    "url": "https://myblog.com",
    "description": "Read my latest posts",
    "fetchMetadata": true,
    "displayType": "with-preview"
  }
}
```

---

### WGT-004: Image

**Description:** Single image upload dengan link support

**Properties:**
```typescript
interface ImageConfig extends WidgetConfig {
  imageUrl: string;          // S3/Cloudinary URL
  alt: string;               // Alt text for accessibility
  linkUrl?: string;          // Optional link on click
  borderRadius?: number;     // 0-50px, default 8px
  objectFit?: "cover" | "contain" | "fill";
  shadow?: boolean;
}
```

**Supported Sizes:** All (Square, Rectangle, Portrait, Landscape)

**Image Upload & Optimization:**
- Max file size: 5MB
- Allowed formats: JPG, PNG, WebP, GIF
- Auto-optimize dengan Sharp:
  - Create 3 versions: thumbnail (150x150), medium (400x400), large (800x800)
  - Convert to WebP if supported
  - Compression quality: 85%
- Upload ke AWS S3 atau Cloudinary
- Return CDN URLs

**Validation:**
- Image file required
- Alt text required (accessibility)
- File size validation
- Format validation

**Preview Example:**
```
┌─────────────────────┐
│   [Image Preview]   │
│  (Responsive to size│
│                     │
└─────────────────────┘
```

**Database Storage:**
```json
{
  "widgetType": "image",
  "size": "landscape",
  "config": {
    "imageUrl": "https://cdn.example.com/image-large.webp",
    "alt": "Portfolio project screenshot",
    "borderRadius": 12,
    "objectFit": "cover",
    "shadow": true
  }
}
```

---

### WGT-005: Spotify Badge

**Description:** Show current playing track atau playlist/artist info

**Properties:**
```typescript
interface SpotifyConfig extends WidgetConfig {
  displayType: "current-track" | "top-tracks" | "playlist" | "artist";
  spotifyUri: string;        // Spotify URI (dari API)
  showImage?: boolean;       // Show album art
  showPlayButton?: boolean;  // Interactive play button
  refreshInterval?: number;  // Auto-refresh interval (seconds)
}
```

**Supported Sizes:** Rectangle, Landscape

**Spotify Integration:**
1. User authenticates dengan Spotify OAuth
2. Get access token (stored encrypted)
3. Fetch data dari Spotify API:
   - Current playing: `/me/player/currently-playing`
   - Top tracks: `/me/top/tracks`
   - Playlist: `/playlists/{id}`
4. Cache hasil (TTL: 30 seconds for current track, 1 hour for top tracks)
5. Update real-time via polling atau WebSocket

**Real-Time Updates:**
- Current track: Refresh every 5 seconds
- Top tracks: Refresh every 1 hour
- Playlist: Refresh every 30 minutes

**Fallback:**
- Jika token expired: Show "Connect with Spotify" button
- Jika API error: Show cached data atau placeholder

**Validation:**
- Spotify account required
- Token must be valid
- URI must exist on Spotify

**Preview Example:**
```
┌──────────────────────────┐
│ 🎵 Currently Playing     │
│                          │
│ [Album Art]              │
│ Song Name                │
│ Artist Name              │
│ ▶️ [Spotify Logo]        │
└──────────────────────────┘
```

**Database Storage:**
```json
{
  "widgetType": "spotify",
  "size": "rectangle",
  "config": {
    "displayType": "current-track",
    "spotifyUri": "spotify:track:...",
    "showImage": true,
    "showPlayButton": true,
    "refreshInterval": 5
  }
}
```

**API Endpoints Needed:**
- GET `/integrations/spotify/current-track`
- GET `/integrations/spotify/top-tracks`
- GET `/integrations/spotify/playlists/{id}`

---

### WGT-006: YouTube Video

**Description:** Embedded YouTube video dengan custom thumbnail

**Properties:**
```typescript
interface YouTubeConfig extends WidgetConfig {
  videoUrl: string;          // YouTube video URL atau video ID
  title?: string;            // Video title
  showTitle?: boolean;       // Show title above video
  autoplay?: boolean;        // Autoplay on load
  controls?: boolean;        // Show video controls
  aspectRatio?: "16:9" | "4:3" | "1:1";
}
```

**Supported Sizes:** Landscape (recommended), Rectangle

**URL Validation:**
- Accept formats:
  - `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
  - `https://youtu.be/dQw4w9WgXcQ`
  - `dQw4w9WgXcQ` (just video ID)
- Extract video ID
- Fetch metadata dari YouTube API

**Embed Generation:**
```typescript
const getEmbedUrl = (videoId: string) => 
  `https://www.youtube.com/embed/${videoId}?controls=1&autoplay=0`;
```

**Fallback:**
- Jika video unavailable: Show thumbnail + link
- Jika API rate limited: Use cached thumbnail

**Validation:**
- Video ID valid (11 chars)
- Video must be embeddable (check privacy settings)
- Video must be public

**Preview Example:**
```
┌──────────────────────────┐
│ My Latest Video          │
│ ┌──────────────────────┐ │
│ │  [Video Thumbnail]   │ │
│ │  ▶️  Play            │ │
│ └──────────────────────┘ │
└──────────────────────────┘
```

**Database Storage:**
```json
{
  "widgetType": "youtube",
  "size": "landscape",
  "config": {
    "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "title": "My Latest Video",
    "showTitle": true,
    "autoplay": false,
    "controls": true,
    "aspectRatio": "16:9"
  }
}
```

---

### WGT-007: Twitter/X Embed

**Description:** Embedded tweet dengan interaction support

**Properties:**
```typescript
interface TwitterConfig extends WidgetConfig {
  tweetUrl: string;          // Tweet URL
  hideThread?: boolean;      // Hide conversation thread
  hideMedia?: boolean;       // Hide embedded images/video
  align?: "left" | "center" | "right";
}
```

**Supported Sizes:** Rectangle, Landscape

**Embed Method:**
- Use Twitter Embed script: `https://platform.twitter.com/widgets.js`
- Or use oEmbed API: `https://publish.twitter.com/oembed`
- Fallback: Static embed dengan link

**URL Validation:**
- Extract tweet ID dari URL:
  - `https://twitter.com/user/status/1234567890`
  - `https://x.com/user/status/1234567890`

**Caching:**
- Cache embed HTML (TTL: 1 week)
- On refresh: Fetch latest data dari Twitter oEmbed API

**Fallback:**
- Jika embed fails: Show tweet link + preview

**Validation:**
- URL harus valid tweet URL
- Tweet must be public
- Account harus tidak suspended

**Preview Example:**
```
┌──────────────────────────┐
│ @myhandle · 2 hours ago  │
│                          │
│ Check out my latest post!│
│ [Tweet content]          │
│                          │
│ ❤️  🔄  💬  📤           │
└──────────────────────────┘
```

**Database Storage:**
```json
{
  "widgetType": "twitter",
  "size": "rectangle",
  "config": {
    "tweetUrl": "https://twitter.com/user/status/1234567890",
    "hideThread": false,
    "hideMedia": false,
    "align": "left"
  }
}
```

---

### WGT-008: Section Title

**Description:** Divider + section header untuk organize widgets

**Properties:**
```typescript
interface SectionTitleConfig extends WidgetConfig {
  title: string;             // Section title
  fontSize?: "sm" | "md" | "lg" | "xl";
  fontWeight?: 400 | 500 | 600 | 700;
  showDivider?: boolean;     // Show line above/below
  dividerPosition?: "above" | "below" | "both";
  dividerColor?: string;
  dividerStyle?: "solid" | "dashed" | "dotted";
  alignment?: "left" | "center" | "right";
}
```

**Supported Sizes:** Full Width only

**Styling Options:**
- Font sizes: 14px (sm) | 18px (md) | 24px (lg) | 32px (xl)
- Font weights: Normal | Medium | Semibold | Bold
- Divider styles: Solid | Dashed | Dotted
- Color picker untuk text dan divider

**Validation:**
- Title required, max 50 chars
- Font size must be valid
- Color must be valid hex/rgb

**Preview Example:**
```
━━━━━━━━━━━━━━━━━━━━━━
    My Projects
━━━━━━━━━━━━━━━━━━━━━━
```

**Database Storage:**
```json
{
  "widgetType": "section-title",
  "size": "full",
  "config": {
    "title": "My Projects",
    "fontSize": "lg",
    "fontWeight": 600,
    "showDivider": true,
    "dividerPosition": "both",
    "dividerStyle": "solid",
    "alignment": "center",
    "textColor": "#000000"
  }
}
```

---

### WGT-009: Maps (Optional MVP, Can be Phase 2)

**Description:** Embedded Google Maps dengan business location

**Properties:**
```typescript
interface MapsConfig extends WidgetConfig {
  address: string;           // Full address
  latitude: number;          // Coordinates
  longitude: number;
  zoomLevel?: number;        // 1-21, default 15
  markerType?: "pin" | "dot" | "custom";
  markerColor?: string;
  showAddress?: boolean;
  mapType?: "roadmap" | "satellite" | "terrain" | "hybrid";
}
```

**Supported Sizes:** Landscape, Large

**Address Autocomplete:**
- Use Google Places Autocomplete API
- Return lat/long coordinates
- Store formatted address

**Map Embed:**
- Use Google Maps Embed API (no authentication needed)
- OR use Google Maps Static API untuk static image

**Validation:**
- Address required
- Latitude/longitude valid range
- Zoom level 1-21

**Fallback:**
- Static map image if embed unavailable
- Link ke Google Maps

**Preview Example:**
```
┌──────────────────────────┐
│ [Embedded Google Map]    │
│ Our Location             │
│ 123 Main St, City        │
└──────────────────────────┘
```

**Database Storage:**
```json
{
  "widgetType": "maps",
  "size": "landscape",
  "config": {
    "address": "123 Main Street, San Francisco, CA",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "zoomLevel": 15,
    "markerType": "pin",
    "showAddress": true
  }
}
```

---

## 3. WIDGET LIFECYCLE

### 3.1 Creation Flow

```
User clicks "Add Widget"
    ↓
Select widget type from palette
    ↓
Widget added to profile (default config)
    ↓
Open configuration panel
    ↓
User fills in required fields
    ↓
Real-time preview updates
    ↓
User clicks "Save" / auto-save
    ↓
Widget config saved to database
    ↓
Profile auto-saved (draft status)
```

### 3.2 Update Flow

```
User clicks on widget in editor
    ↓
Open properties panel
    ↓
User edits config
    ↓
Real-time preview updates (debounced 300ms)
    ↓
Auto-save to database (debounced 1s)
    ↓
Show "Saved" indicator
```

### 3.3 Deletion Flow

```
User clicks delete icon on widget
    ↓
Show confirmation dialog
    ↓
User confirms deletion
    ↓
Remove from UI
    ↓
Delete from database
    ↓
Reorder remaining widgets
    ↓
Profile auto-saved
```

### 3.4 Publishing Flow

```
User clicks "Publish" button
    ↓
Validate all widgets
    ↓
Validate profile metadata
    ↓
Save to database with published_at timestamp
    ↓
Generate public URL
    ↓
Show success message
    ↓
Redirect to published profile
```

---

## 4. VALIDATION RULES

### Global Rules (All Widgets)
- [ ] Size must be valid
- [ ] Background color must be valid hex/rgb
- [ ] Text color must be valid hex/rgb
- [ ] Widget must have at least one required field filled

### Per-Widget Rules

**Link Button:**
- [ ] Text: 1-50 chars, required
- [ ] URL: Valid format, required
- [ ] Icon: Must exist in library (optional)

**Social Media:**
- [ ] Platform: Valid enum value
- [ ] Handle: 1-30 chars, required

**Website:**
- [ ] Title: 1-50 chars, required
- [ ] URL: Valid format, required

**Image:**
- [ ] Image: File required, < 5MB
- [ ] Alt text: 1-100 chars, required

**Spotify:**
- [ ] User: Must have authenticated with Spotify
- [ ] URI: Must be valid Spotify URI

**YouTube:**
- [ ] Video ID: Must be 11 chars, required
- [ ] Video: Must be embeddable

**Twitter:**
- [ ] Tweet URL: Valid format, required
- [ ] Tweet: Must be public

**Section Title:**
- [ ] Title: 1-50 chars, required
- [ ] Font size: Valid enum value

---

## 5. ERROR HANDLING

### Common Errors

| Error | Cause | User Message | Solution |
|-------|-------|--------------|----------|
| WIDGET_INVALID | Config incomplete | "Please fill in required fields" | Show validation errors |
| IMAGE_TOO_LARGE | File > 5MB | "Image too large (max 5MB)" | Resize image |
| IMAGE_INVALID_FORMAT | Not jpg/png/webp/gif | "Unsupported image format" | Convert to supported format |
| URL_INVALID | URL format error | "Invalid URL format" | Check URL format |
| SPOTIFY_UNAUTHORIZED | Token expired | "Reconnect with Spotify" | Show OAuth flow |
| YOUTUBE_NOT_EMBEDDABLE | Video private/unlisted | "This video cannot be embedded" | Choose different video |
| TWITTER_NOT_PUBLIC | Tweet private | "This tweet is not public" | Use different tweet |
| RATE_LIMIT | API rate limited | "Too many requests, please try later" | Implement exponential backoff |

---

## 6. PERFORMANCE OPTIMIZATION

### Caching Strategy

| Data | TTL | Cache Layer | Invalidation |
|------|-----|-------------|--------------|
| Widget config | 1 hour | Redis | On update |
| Profile metadata | 30 min | Redis | On update |
| Spotify data | 30 sec | Redis | On explicit refresh |
| YouTube metadata | 7 days | Redis | On manual clear |
| Twitter embed | 7 days | Redis | On manual clear |
| User session | 7 days | Redis | On logout |

### Image Optimization

- Lazy load images (Intersection Observer)
- Serve WebP when supported
- Responsive srcset für different screen sizes
- Progress image loading (blur-up effect)

### Bundle Size

- Code-split widget components
- Lazy-load widget forms (on click)
- Tree-shake unused icon library

---

## 7. TESTING CHECKLIST

For each widget, test:
- [ ] Create widget dengan valid data
- [ ] Create widget dengan invalid data (validation errors)
- [ ] Update widget config
- [ ] Delete widget
- [ ] Render widget di public profile
- [ ] Widget responsive (mobile/desktop)
- [ ] Real-time preview updates
- [ ] Auto-save functionality
- [ ] External API error handling
- [ ] Token refresh (untuk Spotify, Twitter)
- [ ] Caching behavior
- [ ] Performance (load time < 500ms)

---

**Next Steps:**

1. Review widget specifications dengan team
2. Prioritize widgets untuk MVP (start dengan core 5: Link, Social, Image, Title, YouTube)
3. Create UI mockups untuk setiap widget
4. Start frontend component development
5. Setup backend API endpoints

**Widget Priority untuk MVP:**
1. ✅ Link Button (WGT-001)
2. ✅ Social Media (WGT-002)
3. ✅ Image (WGT-004)
4. ✅ Section Title (WGT-008)
5. ✅ Website (WGT-003)

**Phase 2+ Widgets:**
- Spotify Badge (WGT-005)
- YouTube Video (WGT-006)
- Twitter Embed (WGT-007)
- Maps (WGT-009)
- Video Upload
- PDF Embed
- Contact Form
- Countdown Timer
- Image Gallery