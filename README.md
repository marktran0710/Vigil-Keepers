# Vigil Keepers - Elder Care Application

A React + TypeScript application designed for elder-friendly interface and multi-language support.

## Features

- **Elder-Friendly UI**: Large fonts, high contrast, accessible design
- **Multi-Language Support**: Chinese (Traditional), English, Vietnamese
- **Responsive Design**: Works on desktop and tablet devices
- **Health Monitoring**: Track health metrics and wellness
- **Family Dashboard**: Monitor elderly family members
- **Tailwind CSS**: Modern styling with utility-first approach

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   └── LanguageSwitcher.tsx
│   ├── context/
│   │   └── LanguageContext.tsx
│   ├── pages/
│   │   ├── ElderHome.tsx
│   │   ├── FamilyDashboard.tsx
│   │   └── Presentation.tsx
│   ├── App.tsx
│   └── routes.tsx
├── styles/
│   └── globals.css
└── main.tsx
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Open http://localhost:5173 in your browser.

### Build

```bash
npm run build
# or
pnpm build
```

## Tech Stack

- **React 18.3**: UI library
- **TypeScript**: Type safety
- **React Router 7**: Client-side routing
- **Tailwind CSS 4**: Styling
- **Radix UI**: Accessible components
- **Lucide React**: Icons
- **Vite**: Build tool and dev server

## Languages Supported

- 繁體中文 (Traditional Chinese)
- English
- Tiếng Việt (Vietnamese)

## License

MIT
