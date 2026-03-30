# Mantra & Shloka Recitation App — UX Flow & UI Plan

## App Name: **Japam**

---

## Constraints

- Expo 55 + Expo Go only (no custom native binaries)
- Expo Router file-based navigation
- Reanimated for animations (already installed)
- No audio recording or playback requiring native modules outside Expo Go
- `expo-av` is supported in Expo Go — use for audio playback
- `expo-haptics` is supported in Expo Go — use for tactile feedback on bead tap
- `expo-keep-awake` — keep screen on during recitation sessions
- `expo-notifications` (local only) — daily reminders
- `AsyncStorage` for local persistence (no backend dependency for MVP)

---

## Navigation Structure

```
(tabs)
  ├── index.tsx              → Home (daily card + continue session)
  ├── library.tsx            → Browse mantras & shlokas
  ├── practice.tsx           → Mala / japa counter (standalone)
  └── profile.tsx            → Stats, streaks, settings

(stack — pushed from tabs)
  ├── mantra/[id].tsx        → Mantra detail (text, meaning, audio, start)
  ├── session.tsx            → Active recitation session (fullscreen)
  └── session-complete.tsx   → Session summary
```

---

## Screens & UX Flow

### 1. Home (`/`)

**Purpose:** Single glanceable surface — what to do today.

```
┌─────────────────────────────┐
│  Japam                 🔔   │
│                             │
│  ┌─────────────────────┐    │
│  │  🙏 Daily Mantra     │    │
│  │  Gayatri Mantra      │    │
│  │  108 recitations     │    │
│  │                      │    │
│  │  [ Start Session → ] │    │
│  └─────────────────────┘    │
│                             │
│  Continue where you left    │
│  ┌─────────────────────┐    │
│  │ Mahamrityunjaya  72/108│  │
│  │  ████████░░░  67%    │    │
│  │  [ Resume → ]        │    │
│  └─────────────────────┘    │
│                             │
│  🔥 7 day streak            │
│                             │
│  Recent                     │
│  ┌──────┐ ┌──────┐ ┌────┐  │
│  │Vishnu│ │Shiva │ │Devi│  │
│  │Sahas.│ │Tandav│ │Sukt│  │
│  └──────┘ └──────┘ └────┘  │
│                             │
│ [Home] [Library] [Mala] [Me]│
└─────────────────────────────┘
```

**Elements:**
- Daily featured mantra card (rotates daily, seeded by date)
- Resume card if an incomplete session exists
- Streak counter (flame icon + number)
- Horizontal scroll of recently practiced mantras
- Bottom tab bar

---

### 2. Library (`/library`)

**Purpose:** Browse, search, and discover mantras & shlokas.

```
┌─────────────────────────────┐
│  Library                    │
│  ┌─────────────────────┐    │
│  │ 🔍 Search mantras... │    │
│  └─────────────────────┘    │
│                             │
│  Categories                 │
│  ┌──────┐ ┌──────┐ ┌────┐  │
│  │  🕉️  │ │  🙏  │ │ 📿 │  │
│  │Vedic │ │Devo- │ │Japa│  │
│  │Mantras│ │tional│ │    │  │
│  └──────┘ └──────┘ └────┘  │
│  ┌──────┐ ┌──────┐ ┌────┐  │
│  │  📖  │ │  🔱  │ │ ☀️ │  │
│  │Shloka│ │Shiva │ │Surya│  │
│  └──────┘ └──────┘ └────┘  │
│                             │
│  All Mantras                │
│  ┌─────────────────────┐    │
│  │ Gayatri Mantra       │    │
│  │ Rig Veda · 108 reps  │    │
│  ├─────────────────────┤    │
│  │ Mahamrityunjaya      │    │
│  │ Rig Veda · 108 reps  │    │
│  ├─────────────────────┤    │
│  │ Om Namah Shivaya     │    │
│  │ Panchakshari · 108   │    │
│  └─────────────────────┘    │
│                             │
│ [Home] [Library] [Mala] [Me]│
└─────────────────────────────┘
```

**Elements:**
- Search bar (filter by name, devanagari, or transliteration)
- Category chips/cards in a 3-column grid
- Flat list of mantras grouped by category
- Each row: name, source/tradition, default rep count
- Tap row → navigates to mantra detail

---

### 3. Mantra Detail (`/mantra/[id]`)

**Purpose:** Learn about the mantra before starting a session.

```
┌─────────────────────────────┐
│  ← Back                     │
│                             │
│  Gayatri Mantra             │
│  Rig Veda 3.62.10          │
│                             │
│  ॐ भूर्भुवः स्वः            │
│  तत्सवितुर्वरेण्यं           │
│  भर्गो देवस्य धीमहि         │
│  धियो यो नः प्रचोदयात्       │
│                             │
│  oṃ bhūr bhuvaḥ svaḥ       │
│  tat savitur vareṇyaṃ      │
│  bhargo devasya dhīmahi     │
│  dhiyo yo naḥ pracodayāt    │
│                             │
│  ▶ Listen to pronunciation  │
│                             │
│  ┌─ Meaning ─────────────┐  │
│  │ We meditate on the     │  │
│  │ glory of that being    │  │
│  │ who has produced this  │  │
│  │ universe; may they     │  │
│  │ illuminate our minds.  │  │
│  └───────────────────────┘  │
│                             │
│  Recitations  [ 27 ][ 54 ][108] │
│                             │
│  [ Begin Session ────────→ ]│
│                             │
└─────────────────────────────┘
```

**Elements:**
- Devanagari text (large, readable)
- IAST transliteration below
- Audio playback button (expo-av, bundled mp3)
- Collapsible meaning/translation section
- Rep count selector (27 / 54 / 108 / custom)
- "Begin Session" CTA button

---

### 4. Active Session (`/session`)

**Purpose:** Fullscreen focused recitation. This is the core screen.

```
┌─────────────────────────────┐
│  ✕                    ⏸     │
│                             │
│         Gayatri Mantra      │
│                             │
│                             │
│     ॐ भूर्भुवः स्वः          │
│     तत्सवितुर्वरेण्यं        │
│                             │
│                             │
│            72               │
│          ─────              │
│           108               │
│                             │
│     ████████████░░░░ 67%    │
│                             │
│                             │
│        ┌─────────┐          │
│        │         │          │
│        │   ◉     │  ← tap  │
│        │  bead   │  area   │
│        │         │          │
│        └─────────┘          │
│                             │
│  elapsed: 12:34             │
│                             │
└─────────────────────────────┘
```

**Interaction:**
- Tap anywhere in lower half → increment count (+ haptic pulse)
- Swipe down → show mantra text overlay
- Pause button → pauses timer, shows resume/end options
- Close (✕) → confirm exit, saves progress
- Screen stays awake (expo-keep-awake)
- Count auto-saves to AsyncStorage every 10 taps
- On reaching target → auto-navigate to completion

**Visual details:**
- Minimal, distraction-free
- Large count number centered
- Thin circular or linear progress indicator
- Subtle bead/pulse animation on tap (Reanimated scale + opacity)
- Dark background option (easier on eyes during long sessions)

---

### 5. Session Complete (`/session-complete`)

**Purpose:** Celebrate completion, show stats.

```
┌─────────────────────────────┐
│                             │
│                             │
│           ✨ 🙏 ✨           │
│                             │
│     Session Complete        │
│                             │
│     Gayatri Mantra          │
│     108 recitations         │
│     14 min 22 sec           │
│                             │
│     ┌───────────────────┐   │
│     │ 🔥 Streak: 8 days │   │
│     │ 📿 Total: 1,296   │   │
│     │ ⏱  Avg: 7.9s/rep  │   │
│     └───────────────────┘   │
│                             │
│                             │
│  [ Practice Again ]         │
│  [ Back to Home ──→ ]       │
│                             │
└─────────────────────────────┘
```

**Elements:**
- Completion animation (Reanimated spring entrance)
- Mantra name, count, duration
- Streak update
- Lifetime total recitations
- Average pace
- Two CTAs: repeat or go home

---

### 6. Standalone Mala Counter (`/practice`)

**Purpose:** Quick-access japa counter without selecting a mantra. Digital mala beads.

```
┌─────────────────────────────┐
│  Mala Counter        ↻ Reset│
│                             │
│                             │
│                             │
│           ◉                 │
│        ◉     ◉              │
│      ◉    ●    ◉   ← 108   │
│      ◉  bead   ◉     bead  │
│      ◉  circle ◉     ring  │
│        ◉     ◉              │
│           ◉                 │
│                             │
│          42                 │
│        / 108                │
│                             │
│                             │
│  Rounds completed: 2       │
│                             │
│ [Home] [Library] [Mala] [Me]│
└─────────────────────────────┘
```

**Interaction:**
- Tap center bead → advance one bead around the ring (Reanimated rotation)
- Haptic feedback on each tap
- At 108 → rounds counter increments, ring resets with animation
- Reset button with confirmation
- No timer, no specific mantra — pure counting

---

### 7. Profile & Stats (`/profile`)

**Purpose:** Track progress, manage settings, build habit.

```
┌─────────────────────────────┐
│  Profile                ⚙️  │
│                             │
│  ┌─────────────────────┐    │
│  │  🔥 Current Streak   │    │
│  │      8 days          │    │
│  │  Best: 23 days       │    │
│  └─────────────────────┘    │
│                             │
│  This Month                 │
│  Mo Tu We Th Fr Sa Su       │
│  ●  ●  ●  ○  ●  ●  ●       │
│  ●  ●  ●  ●  ●  ○  ○       │
│  ●  ●  ◐  ○  ○  ○  ○       │
│  (● = practiced, ◐ = today) │
│                             │
│  Stats                      │
│  Total recitations  12,420  │
│  Sessions completed    94   │
│  Time spent         18h 45m │
│                             │
│  Most practiced             │
│  1. Gayatri (4,320)         │
│  2. Mahamrityunjaya (2,160) │
│  3. Om Namah Shivaya (1,944)│
│                             │
│ [Home] [Library] [Mala] [Me]│
└─────────────────────────────┘
```

**Elements:**
- Streak card (current + best)
- Monthly activity grid (GitHub-style heatmap)
- Lifetime stats
- Most practiced list
- Settings gear → daily reminder time, theme toggle, haptics toggle

---

## UI Design Language

### Colors
| Token | Light | Dark |
|---|---|---|
| background | `#FFFAF5` (warm cream) | `#1A1612` (warm black) |
| surface | `#FFF5EB` | `#252019` |
| primary | `#D4740E` (saffron) | `#E8943A` |
| accent | `#8B1A1A` (deep maroon) | `#C75050` |
| textPrimary | `#2D2015` | `#F5EDE4` |
| textSecondary | `#8A7D6F` | `#A89B8C` |
| streak | `#E06B00` | `#F09030` |
| success | `#2E7D32` | `#66BB6A` |

### Typography
- Titles: System bold, large (28-34pt)
- Devanagari text: System font (iOS renders Devanagari natively), 22-28pt
- Transliteration: System italic, 16pt
- Body: System regular, 16pt
- Counts: System bold monospace, 48-72pt

### Spacing
Use existing theme spacing scale (4/8/16/24/32/64).

### Animations (Reanimated)
- Bead tap: scale 0.95 → 1.0 spring + opacity pulse
- Count increment: slide-up number transition
- Session complete: spring entrance from bottom
- Mala bead ring: rotation interpolation as beads advance
- Streak flame: subtle loop scale animation

### Haptics (expo-haptics)
- Bead tap: `impactAsync(ImpactFeedbackStyle.Light)`
- Round complete (108): `notificationAsync(NotificationFeedbackType.Success)`
- Session complete: `notificationAsync(NotificationFeedbackType.Success)`

---

## Data Model (AsyncStorage)

```typescript
// Mantra definition (bundled JSON, not user-editable)
type Mantra = {
  id: string;
  name: string;
  nameDevanagari: string;
  text: string;              // Devanagari
  transliteration: string;   // IAST
  meaning: string;
  source: string;            // e.g. "Rig Veda 3.62.10"
  category: string;
  defaultCount: number;      // 108, 54, 27
  audioFile?: string;        // bundled asset path
};

// Session record
type Session = {
  id: string;
  mantraId: string;
  targetCount: number;
  completedCount: number;
  startedAt: string;         // ISO
  completedAt?: string;      // ISO
  durationSeconds: number;
};

// User progress
type UserProgress = {
  currentStreak: number;
  bestStreak: number;
  lastPracticeDate: string;  // YYYY-MM-DD
  totalRecitations: number;
  totalSessions: number;
  totalTimeSeconds: number;
  practiceDays: string[];    // ["2026-03-28", "2026-03-29", ...]
};

// Active (incomplete) session — resume support
type ActiveSession = {
  mantraId: string;
  targetCount: number;
  currentCount: number;
  elapsedSeconds: number;
  startedAt: string;
};
```

---

## MVP Scope (Phase 1)

1. Home screen with daily mantra + resume
2. Library with 20-30 bundled mantras across 5-6 categories
3. Mantra detail with Devanagari, transliteration, meaning
4. Session screen with tap counter, progress, timer
5. Session complete with stats
6. Standalone mala counter
7. Profile with streak, activity grid, basic stats
8. Local persistence via AsyncStorage
9. Haptic feedback on bead taps
10. Keep-awake during sessions

## Phase 2 (Later)

- Audio playback for pronunciation (expo-av)
- Local push notification reminders
- Favorites / bookmarks
- Custom mantra entry
- Multiple mala modes (27, 54, 108)
- Share session stats
- iCloud/Google backup via API
