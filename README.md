# scomm-well-known-worker

Cloudflare Worker for serving `.well-known/apple-app-site-association` and `.well-known/assetlinks.json` with correct `application/json` content-type.

## Files

- **`.well-known/apple-app-site-association`** - Apple App Site Association for iOS app verification
  - Team ID: `WA7GC3J8GA`
  - Bundle ID: `ai.scomm.mail`
  - OAuth paths: `/oauth2/*`

- **`.well-known/assetlinks.json`** - Digital Asset Links for Android app verification
  - Package name: `ai.scomm`
  - SHA256: `67:F3:76:0B:D4:D5:65:26:EE:66:9D:CC:59:D3:F1:D3:CF:B4:D9:84:3E:88:90:63:4C:EB:F8:E9:E8:34:EA:F2`

## Deploy

```bash
npm install
wrangler deploy
```

## Development

```bash
wrangler dev
```

Then visit `http://localhost:8787/.well-known/apple-app-site-association`

## Deployment

- Worker URL: `summer-heart-ed70.dev1-advcomm.workers.dev`
- Public Domain: `public.scomm.ai` (via Cloudflare DNS CNAME)
