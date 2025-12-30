# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Forgio is a multilingual marketing website for an ERP & CRM system targeting Thai manufacturers. Built with Next.js 15 App Router, it features Thai/English localization and a premium gold-themed design system.

## Development Commands

**Start development server:**
```bash
bun run dev
```
Runs on http://localhost:4321

**Build for production:**
```bash
bun run build
```

**Start production server:**
```bash
bun run start
```

**Lint:**
```bash
bun run lint
```

**Clean build cache (useful for resolving build issues):**
```bash
rm -rf .next && bun run dev
```

## Architecture

### Internationalization (i18n)

The site uses `next-intl` for Thai/English bilingual support:

- **Default locale:** Thai (`th`)
- **Supported locales:** `th`, `en` (defined in `i18n.ts`)
- **Translation files:** `messages/th.json` and `messages/en.json`
- **Middleware:** Automatic locale detection and routing via `middleware.ts`
- **URL structure:** `/{locale}/{page}` (e.g., `/th/product`, `/en/about`)

**Key patterns:**
- Server components: Use `const t = await getTranslations()`
- Client components: Use `const t = useTranslations()`
- Access locale in server components: `const { locale } = await params`
- Translation keys are nested (e.g., `t('nav.home')`, `t('product.hero.title')`)

### Route Structure

```
app/
├── layout.tsx                    # Root layout (wraps locale layouts)
└── [locale]/
    ├── layout.tsx                # Locale-specific layout with metadata generation
    ├── page.tsx                  # Home page
    ├── product/page.tsx          # Features page
    ├── about/page.tsx            # About/Story page
    └── contact/page.tsx          # Contact page
```

**Important:** Always use the `locale` parameter from `params` when building links:
```tsx
// Correct:
href={`/${locale}/contact`}

// Incorrect:
href={`/${t('locale')}/contact`}  // This will cause build errors
```

### SEO & Metadata

Metadata is dynamically generated in `app/[locale]/layout.tsx` using Next.js 15's `generateMetadata`:
- Locale-specific titles and descriptions
- Open Graph tags for social sharing
- Twitter cards (no creator specified - Brainfried doesn't have Twitter)
- Canonical URLs with language alternates
- Author/publisher attribution to "Brainfried.co"

### Design System

**Brand Colors (Tailwind):**
- Primary gold: `gold-500` (#FFAF00)
- Secondary gold: `gold-600` (#FFBF33)
- Full palette: 50-900 scale defined in `tailwind.config.ts`
- Safelisted classes ensure gold colors are always included in build

**Typography:**
- Font stack: Noto Sans Thai → Noto Sans → system-ui
- Weight hierarchy: 300 (light), 400 (regular), 600 (semibold), 700 (bold), 900 (black)
- Loaded via Google Fonts in layout with `display: 'swap'`

**Responsive Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px (desktop/large tablets)

**Mobile-First Patterns:**
- Single column layouts until `lg:` breakpoint
- Progressive text sizing: `text-base sm:text-lg md:text-xl lg:text-2xl`
- Full-width buttons on mobile: `w-full sm:w-auto`
- Stack to row: `flex-col sm:flex-row`

### Component Organization

**Shared Components (`components/`):**
- `Navigation.tsx` - Header with hamburger menu (mobile/tablet) and language toggle
- `Footer.tsx` - Footer with Brainfried.co backlink
- `LanguageToggle.tsx` - Client component for locale switching
- `ContactForm.tsx` - Contact form (if implemented)

**Navigation Behavior:**
- Desktop (≥1024px): Horizontal nav links visible
- Mobile/Tablet (<1024px): Hamburger menu with dropdown panel
- Backdrop: Subtle `bg-black/5` with minimal blur

### Translation Guidelines

When adding new translation keys:
1. Add to both `messages/en.json` and `messages/th.json`
2. Use nested structure matching existing patterns
3. Test build to catch missing keys early

**Branding Language Rules:**
- Use "Brainfried.co" (not "Brainfried Co., Ltd." or "Brainfried Company")
- Avoid "we/our" language - speak about the product objectively
- Location: "Salaya, Thailand" (EN) / "ณ ศาลายา" (TH)

### External Links

- **LINE Official:** `https://line.me/ti/p/~bobroach` (note the tilde)
- **Brainfried backlink:** `https://brainfried.co` with `rel="noopener noreferrer nofollow"`

### Common Patterns

**Server Component Page Template:**
```tsx
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations()

  return (
    <main>
      <Navigation />
      {/* Page content */}
      <Footer />
    </main>
  )
}
```

**Link with Locale:**
```tsx
<Link href={`/${locale}/contact`}>
  {t('nav.contact')}
</Link>
```

**Responsive Text Sizing:**
```tsx
<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl">
  {t('hero.title')}
</h1>
```

## Contact Form & Email Setup

The contact form sends submissions to `askpurin@pm.me` using Resend.

**Setup:**
1. Create a `.env.local` file in the project root
2. Get your Resend API key from https://resend.com/api-keys
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

**Files:**
- `app/api/contact/route.ts` - API route for handling form submissions
- `components/ContactForm.tsx` - Client component with form UI and submission logic
- Contact email is displayed on `/[locale]/contact` page

**Important Notes:**
- Resend requires verifying your domain before sending from a custom email address
- Currently using `onboarding@resend.dev` as the "from" address (Resend's test domain)
- Update the `from` field in `app/api/contact/route.ts` once you have a verified domain
- All submissions are sent to: `askpurin@pm.me`

**Testing:**
The form will work in development mode with a valid Resend API key. Without the API key, the form will show an error alert.

## Troubleshooting

**Build errors about missing translations:**
- Check both `en.json` and `th.json` for missing keys
- Ensure keys match exactly (case-sensitive)
- Restart dev server after adding new keys

**Locale-related errors:**
- Always use `const { locale } = await params` in server components
- Never use `t('locale')` for building URLs
- Check middleware.ts if routes aren't working

**Port conflicts:**
- Dev server runs on port 4321
- Use `lsof -ti:4321 | xargs kill -9` to free the port if needed
