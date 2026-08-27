# GRANDMONT GROUP

Corporate one-page website built with Next.js, React, TypeScript and Tailwind CSS.

## Local development

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

## Production build

```bash
pnpm install --frozen-lockfile
pnpm build
```

## DigitalOcean App Platform

Create a **Web Service** from the GitHub repository and use:

- Node.js version: `22.13.0` or newer
- Build command: `corepack enable && pnpm install --frozen-lockfile && pnpm build`
- Run command: `pnpm start`
- HTTP port: use the port provided in the `PORT` environment variable

Set `NEXT_PUBLIC_CONTACT_EMAIL` in DigitalOcean to the address that should
receive messages from the single contact form.

DigitalOcean uses the standard Next.js build and does not load `vite.config.ts`
or `.openai/hosting.json`. Those files are retained only for optional OpenAI
Sites deployment. If DigitalOcean has a manually configured build command,
replace it with the command above and trigger a deployment with cache cleared.
