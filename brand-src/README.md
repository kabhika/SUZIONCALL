# Brand source assets

Master files live here and are gitignored (multi-MB originals, never shipped
to the client bundle):

- `suzioncall-logo-v3-side-profile-8k.png` — full horizontal lockup: amber
  shield icon + "SuziOnCall" wordmark. Wordmark is WHITE + AMBER, so this
  file is only usable on dark backgrounds. Never place it on light surfaces.
- `suzioncall-icon-v3-side-profile-4k.png` — standalone amber shield icon,
  works on light or dark backgrounds.

## Regenerating production assets

```
node scripts/prep-brand.mjs
```

Trims transparent padding, downscales, and writes optimized files to
`public/brand/` plus `public/favicon.ico`, `public/apple-touch-icon.png`,
and `public/og-default.png`. It also prints the sampled brand colors
(`--brand-amber` / `--brand-ink` tokens in `app/globals.css`).

Components reference asset paths via `siteConfig.brand.assets` in
`site.config.ts` — never hardcode file names.
