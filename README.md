# Smart College Attendance Tracker

A modern, high-performance web application engineered for college students to track attendance, optimize routines, calculate cut-offs, and receive predictive warnings with a sleek **Hybrid Liquid Glass** design.

---

## 🛠 Tech Stack

- **Runtime & Tooling:** [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling & UI Tokens:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) tokens + Hybrid Liquid Glass System
- **Animation & Graphics:** [Framer Motion](https://www.framer.com/motion/)
- **Visuals & Charts:** [Recharts](https://recharts.org/) + [Lucide React](https://lucide.dev/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Backend & Cloud:** [Firebase v11](https://firebase.google.com/) (Auth & Cloud Firestore)
- **Date Utilities:** [date-fns](https://date-fns.org/)
- **Testing:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/) + JSDOM

---

## 🚀 Getting Started

### 1. Installation

Ensure [Node.js](https://nodejs.org/) (v18+) is installed. Install all dependencies:

```bash
npm install
```

### 2. Environment Configuration

Copy the example environment file to `.env`:

```bash
cp .env.example .env
```

Open `.env` and provide your Firebase project credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> **Security Note:** `.env*` files (except `.env.example`) are ignored by Git. No secret keys or credentials are ever committed.

### 3. Development Server

Start Vite's local dev server:

```bash
npm run dev
```

Navigate to [http://localhost:5173](http://localhost:5173).

### 4. Running Tests

Run the test suite via Vitest:

```bash
npm test
```

### 5. Production Build

To build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📂 Project Architecture

```
src/
├── app/                  # Application bootstrap, routing, and top-level pages
│   ├── pages/            # Placeholder pages (HomePage, Attendance, Routine, Analytics, Profile)
│   ├── App.tsx           # App root with ThemeProvider
│   └── AppRouter.tsx     # Route definitions
├── components/
│   ├── glass/            # Hybrid Liquid Glass components (GlassCard, GlassButton)
│   ├── layout/           # AppLayout with floating glass bottom navigation
│   └── ui/               # shadcn/ui components
├── engine/               # Attendance computation, margin & cut-off prediction engines
├── features/             # Modular feature slices
│   ├── alerts/           # Critical shortage and risk warnings
│   ├── analytics/        # Recharts trends and statistics
│   ├── attendance/       # Daily logs and record tracking
│   ├── auth/             # Firebase Authentication logic
│   ├── calendar/         # Academic term calendar
│   ├── dashboard/        # Overview KPIs and quick mark actions
│   ├── eca/              # Extracurricular duty/activity allowances
│   ├── history/          # Historical attendance logs
│   ├── holidays/         # College holiday registries
│   ├── planner/          # Safe bunks and skip planner
│   ├── profile/          # User criteria and academic configs
│   ├── routine/          # Timetables and schedule management
│   └── subjects/         # Course and subject configurations
├── hooks/                # Custom React hooks
├── lib/                  # Utilities, Firebase client, ThemeContext
├── styles/               # CSS variables and design tokens (tokens.css)
└── types/                # Strict TypeScript interfaces and type declarations
```

---

## 🎨 Hybrid Liquid Glass Design System

Tokens are declared in `src/styles/tokens.css`:
- **Ambient Gradients:** Dual blue/violet radial background backdrops in light and dark modes.
- **Glass Surfaces:** Translucent background blur (`backdrop-filter: blur(16px)` + saturation boost), subtle luminous border on hover, and realistic depth shadows.
- **Accessibility & Fallbacks:** Solid-color surface fallback via `@supports not (backdrop-filter: blur(1px))` and motion suppression via `@media (prefers-reduced-motion: reduce)`.
- **Status Tokens:** Semantic tokens for `--status-critical` (red), `--status-warning` (orange), `--status-caution` (yellow), and `--status-safe` (green).
