# Style Library

Personal design system — tokens, global styles, and composable components. This is the foundation layer for all my websites. Every site built on this should look and feel identical at the base layer.

This repo is consumed as a **git submodule**. It contains source files only — no build step, no compiled output, no dependencies. The consuming app's Next.js pipeline handles all compilation.



## Setup in a new project

### 1. Add the submodule

```bash
git submodule add https://github.com/bazzle/br-web-style-library/app/ui/style-library
```

### 2. Configure import aliases

In `jsconfig.json` or `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@style-library/*": ["./app/ui/style-library/*"]
    }
  }
}
```

### 3. Configure SCSS paths

Add the following import to your .scss file

```scss
@use '@/app/ui/style-library/global/main';
```

This loads the reset, base styles, typography, layout defaults, and all tokens. That's it — the foundation is set.

### 4. Import components where needed

For example Card.

```jsx
import Card from '@style-library/components/Card';
```



## Structure

```
style-library/
  global/
    tokens/
      vars.scss           ← CSS variables (design tokens)
      mixins.scss         ← SCSS mixins and functions
    _reset.scss           ← CSS reset
    _base.scss            ← Body font, background, base element styles
    _typography.scss      ← Typographic styles
    _layout.scss          ← Layout defaults
    _utils.scss           ← Utility classes/helpers
    _misc.scss            ← Miscellaneous global styles
    main.scss             ← Single entry point, @use's everything above
  components/
    Card/
      index.jsx           ← Component
      Card.module.scss    ← Scoped styles
      Card.stories.jsx    ← Storybook story
```

Each component is **colocated** — its code, styles, and story file live together in one folder.



The style library is the base layer. Project-specific components live alongside it in `ui/` and are typically thin wrappers that import library components and wire them up to project-specific content, data, or routes.

## Storybook

Story files (`.stories.jsx`) live in this repo, colocated with each component. Storybook itself is NOT installed here — it's installed in [this repo (debazzled-showcase)](https://github.com/bazzle/debazzled-showcase) which consumes this submodule.



## Component guidelines

Components should be **pure presentational** — props in, JSX out. No data fetching, no hardcoded content, no route-specific logic.

Components that don't use React hooks (just props and JSX) work everywhere — Storybook, server rendering, client rendering. Don't add `"use client"` unless the component actually uses hooks or event handlers.

Keep styles self-contained. Each component's `.module.scss` should only reference its own scoped classes and shared tokens (`var(--*)` or `@use 'global/tokens/mixins'`). Never import styles from a sibling component.


