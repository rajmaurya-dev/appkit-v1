# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Full-stack SaaS boilerplate monorepo: React 19 web app + Hono API on Cloudflare Workers + Expo React Native app. Uses Bun as package manager and workspace tool.

## Commands

```bash
# Development
bun install               # Install dependencies
bun dev                   # Run all apps (web :3000 + api :8787)
bun dev:web               # Web frontend only
bun dev:api               # API backend only

# Build & Deploy
bun build                 # Build all apps
bun build:api             # Deploy API to Cloudflare Workers

# Code Quality
bun lint                  # Lint all workspaces (Biome)
bun format                # Format all workspaces (Biome)
bun check                 # Full Biome check
bun test                  # Run tests (Vitest)

# Database (run from apps/api/)
bun prisma:dev            # Watch mode for Prisma schema changes
bun migrate               # Create Prisma migrations
bun db:seed               # Seed database
bun studio                # Open Prisma Studio
```

## Architecture

**Monorepo workspaces:** `apps/web`, `apps/api`, `apps/native`, `packages/*`

### Web (`apps/web`)
- React 19 SPA bundled with Vite
- **Routing:** TanStack Router (file-based, auto-generates `routeTree.gen.ts`)
- **Server state:** TanStack Query with definitions in `src/lib/queries.ts`
- **API client:** Axios configured in `src/lib/api.ts`
- **Auth client:** Better Auth React client in `src/lib/auth-client.ts`
- **UI:** Tailwind CSS v4 + Radix UI primitives (shadcn pattern)
- **Path alias:** `@/*` maps to `./src/*`
- Routes live in `src/routes/`, components in `src/components/`

### API (`apps/api`)
- Hono framework running on Cloudflare Workers
- **Auth:** Better Auth with Prisma adapter, Google OAuth, role-based (business_owner, admin, user)
- **Database:** PostgreSQL via Prisma ORM (Cloudflare-compatible runtime, Prisma Accelerate)
- **File storage:** Cloudflare R2 (bound as `MEDIA_BUCKET`)
- **Validation:** Zod schemas + `@hono/zod-openapi`
- Auth middleware in `src/middleware/auth.ts`, routes mounted from `src/routes/index.ts`
- Prisma schema at `prisma/schema.prisma`, generated client output to `src/generated/client`

### Native (`apps/native`)
- Expo 55 + React Native 0.83 with Expo Router

## Code Style

- **Formatter/Linter:** Biome with tab indentation and double quotes for JS/TS
- Biome ignores: `routeTree.gen.ts`, `styles.css`, `components/ui/*`, `components/magicui/*`
- Add new shadcn components via: `pnpm dlx shadcn@latest add <component>` (from `apps/web`)
