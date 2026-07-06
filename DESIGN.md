---
name: Pro-Service Velocity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2550db'
  primary: '#002b95'
  on-primary: '#ffffff'
  primary-container: '#003dcb'
  on-primary-container: '#afbdff'
  inverse-primary: '#b8c4ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#004117'
  on-tertiary: '#ffffff'
  tertiary-container: '#005b23'
  on-tertiary-container: '#72d480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#0037b9'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#94f9a0'
  tertiary-fixed-dim: '#78db87'
  on-tertiary-fixed: '#002108'
  on-tertiary-fixed-variant: '#00531f'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
  badge-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style
The design system is built on a foundation of reliability, efficiency, and professional trust. It targets a dual audience: homeowners seeking immediate solutions and service professionals looking for growth. The aesthetic is **Corporate / Modern**, characterized by a clean, systematic layout that prioritizes clarity and ease of use.

The visual language balances high-authority navy tones with vibrant royal blue accents to signal both stability and modern technology. Whitespace is used strategically to prevent information density from overwhelming the user, ensuring the "instant" nature of the brand is reflected in the speed of information processing.

## Colors
This design system utilizes a structured blue-centric palette to evoke confidence.
- **Primary (Royal Blue):** Used for primary actions, active states, and brand emphasis.
- **Secondary (Navy/Slate):** Used for headlines and high-contrast text to ensure maximum readability and a premium feel.
- **Tertiary (Forest Green):** Reserved specifically for provider-side calls to action and success states, creating a clear functional distinction between user types.
- **Neutral (Slate Gray):** Employed for body copy, secondary labels, and subtle borders.
- **Surface Accents:** Soft blue tints are used for badges ("Coming Soon") and secondary container backgrounds to soften the interface.

## Typography
The system uses **Plus Jakarta Sans** for its modern, clean, and highly legible characteristics. The type scale is optimized for a hierarchy that leads with bold, impactful headlines followed by comfortable, breathable body text. 

- **Headlines:** Use heavy weights (700-800) and tight letter spacing for a "blocky" and authoritative look.
- **Secondary Branding:** Text that highlights specific keywords (e.g., "in minutes") uses the Primary color to draw the eye.
- **Semantic Labels:** Small, uppercase or bolded labels are used for badges and category names to improve scannability.

## Layout & Spacing
The layout follows a **Fluid Grid** system within a max-width container. 
- **Desktop:** A 12-column grid with 24px gutters. Sections are separated by significant vertical padding (stack-xl) to allow the "Pro-Service" aesthetic to breathe.
- **Mobile:** Elements collapse into a single column. Horizontal margins reduce to 16px.
- **Alignment:** Content is generally center-aligned for marketing sections and left-aligned for functional search/input areas to mimic professional dashboard layouts.

## Elevation & Depth
Depth is conveyed through a combination of **Tonal Layers** and **Ambient Shadows**.
- **Cards:** Use a very subtle, highly diffused shadow (Blur 20px, Spread 0, Opacity 4%) against a white background to create a "lifted" effect without heavy borders.
- **Floating Elements:** Mobile device mockups and feature cards use multi-layered shadows to simulate a physical presence on the page.
- **Inputs:** Feature a 1px neutral-200 border that transforms into a Primary color glow or stroke when focused.

## Shapes
The shape language is **Soft** but structured. 
- **Standard Radius:** 6px to 8px for buttons and input fields to maintain a professional, slightly technical feel.
- **Card Radius:** 12px to 16px (rounded-lg) for larger containers to soften the overall UI.
- **Avatar/Icons:** Circular shapes (full round) are reserved for profile images and status indicators to provide visual contrast against the rectangular grid.

## Components
- **Buttons:**
    - *Primary:* Solid Royal Blue with white text. High-contrast, no shadow.
    - *Secondary:* Ghost style with a 1px Primary color border.
    - *Provider:* Solid Forest Green to distinguish "Work" from "Hire".
- **Coming Soon Badge:** Small, uppercase, bold text within a light-blue tinted container with an 8px radius.
- **Service Chips:** Horizontal scrolling or grid-based containers with a leading icon, a subtle border, and center-aligned text.
- **Waitlist Inputs:** Large, clean fields with 16px horizontal padding. The label sits above or as a placeholder in a neutral tone.
- **Provider Cards:** High-white background, soft shadow, featuring a circular avatar, star ratings, and a clear "From [Price]" label for transparency.