---
name: Kinetic Admin
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#45464e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777e'
  outline-variant: '#c6c6ce'
  surface-tint: '#525e7f'
  primary: '#182442'
  on-primary: '#ffffff'
  primary-container: '#2e3a59'
  on-primary-container: '#98a4c9'
  inverse-primary: '#bac6ec'
  secondary: '#555f6d'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f1'
  on-secondary-container: '#596372'
  tertiary: '#002c1b'
  on-tertiary: '#ffffff'
  tertiary-container: '#00442d'
  on-tertiary-container: '#17bb83'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#bac6ec'
  on-primary-fixed: '#0d1a38'
  on-primary-fixed-variant: '#3a4666'
  secondary-fixed: '#d9e3f4'
  secondary-fixed-dim: '#bdc7d8'
  on-secondary-fixed: '#121c28'
  on-secondary-fixed-variant: '#3e4755'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  data-num:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 16px
  gutter: 12px
---

## Brand & Style

The design system is engineered for high-performance administrative environments on mobile devices. The brand personality is **authoritative yet agile**, prioritizing clarity and rapid data digestion. It targets professional operators who require a reliable, high-contrast interface that feels "mission-control" in its precision but "consumer-grade" in its ease of use.

The visual style is **Corporate Modern with a Kinetic Edge**. It utilizes deep, grounding tones to establish a sense of security, paired with vibrant accent colors that draw the eye toward critical status changes. The aesthetic is clean and structured, removing unnecessary ornamentation to focus entirely on task completion and data accuracy.

## Colors

The palette is anchored by **Deep Indigo** (#2E3A59) for primary interactions and brand-heavy elements, providing a professional "Pro" feel. **Slate** (#4B5563) handles secondary actions and UI chrome, ensuring a sophisticated hierarchy.

Backgrounds utilize a tiered system of subtle greys to separate content areas without the use of heavy lines. Status accents are intentionally vibrant: **Emerald Green** for positive growth or success, **Amber** for cautionary states, and **Coral** for immediate errors. This high-contrast approach ensures that even in outdoor or high-glare mobile environments, the system remains legible and accessible.

## Typography

The system uses a pairing of **Plus Jakarta Sans** for headlines and **Inter** for functional body text and data points. Plus Jakarta Sans provides a friendly yet modern character to the dashboard's headers, while Inter’s high x-height and neutral design ensure maximum legibility for dense administrative data.

For mobile-first optimization, large display sizes are capped at 30px to prevent awkward text wrapping. A specialized `data-num` role is defined for metric cards, ensuring that key performance indicators (KPIs) are immediately scannable. Labels use uppercase styling and increased letter-spacing when appropriate to distinguish them from standard body copy.

## Layout & Spacing

This design system employs a **fluid 4-column grid** specifically optimized for mobile viewports. The layout relies on a strict 4px baseline shift to maintain vertical rhythm. 

Standard page layouts use a **16px side margin** to maximize horizontal real estate while keeping touch targets away from the screen edges. Content is organized into vertical stacks with 16px (md) spacing between related items and 24px (lg) spacing between distinct sections. Horizontal scrolling areas (carousels) are encouraged for metric cards to allow high-density data viewing without excessive vertical scrolling.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** combined with soft, directional shadows. Surfaces are not purely flat; they sit on a #F3F4F6 background.

- **Level 0 (Background):** The base canvas.
- **Level 1 (Cards):** Pure white (#FFFFFF) background with a 1px subtle border (#E5E7EB) and a soft ambient shadow (Y: 4, Blur: 12, Opacity: 0.05).
- **Level 2 (Modals/Popovers):** Higher elevation with a more pronounced shadow (Y: 8, Blur: 24, Opacity: 0.1) and a backdrop blur of 8px to focus the user on the task.

Interactive elements like buttons use a slight "press-in" effect (reducing elevation) to provide tactile feedback on mobile devices.

## Shapes

The shape language is defined by **pronounced, friendly radii**. A base roundedness of **16px (1rem)** is applied to all primary cards and large containers to soften the professional aesthetic and make the UI feel modern and approachable.

- **Small elements (Checkboxes, mini-chips):** 4px radius.
- **Buttons and Inputs:** 8px radius for a balanced, structural feel.
- **Cards and Modals:** 16px radius for the signature "dynamic" dashboard look.
- **Status Indicators:** Full pill-shaped (999px) for chips and badges.

## Components

### Buttons & Inputs
Buttons utilize the Deep Indigo primary color with white text for high contrast. Touch targets are a minimum of 48px in height. Input fields feature a 1px Slate border that thickens and changes to Indigo on focus, accompanied by a soft outer glow.

### Cards
Dashboard cards are the primary container. They must include a title in `headline-sm` and use 16px internal padding. Backgrounds are strictly white to pop against the grey canvas.

### Chips & Badges
Used for status (e.g., "Active", "Pending"). These use a "light tint" background (10% opacity of the accent color) with a dark version of the same color for the text to ensure WCAG AA accessibility.

### Data Visualization
Charts should use the Primary Indigo for the main data series and Emerald/Amber/Coral for comparative or status-driven data. Lines should be 2px thick with smoothed (rounded) joints.

### Lists
Interactive lists use chevron-right icons to indicate drill-down capability. Each row has a minimum height of 64px to accommodate comfortable thumb tapping. Separators are light #F3F4F6 lines, 1px thick.