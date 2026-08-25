# GRANDMONT GROUP

Corporate one-page website built with Next.js, React, TypeScript, Tailwind CSS and Vinext.

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

The `.openai/hosting.json` file is optional for DigitalOcean. The Vite
configuration safely falls back to no OpenAI Sites storage bindings when this
hidden file is not present.
