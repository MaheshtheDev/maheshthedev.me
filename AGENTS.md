# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 14 (App Router)** personal portfolio site. Single service, no database, no Docker.

### Running the app

- **Dev server:** `pnpm dev` (port 3000)
- **Lint:** `pnpm lint`
- **Build:** `pnpm build`

See `package.json` `scripts` for all available commands.

### External APIs (all optional for local dev)

The site gracefully degrades when these env vars are absent — pages render fine, the data sections just show nothing:

| Env Var | Feature |
|---|---|
| `POSTHOG_PERSONAL_API_KEY`, `POSTHOG_PROJECT_ID`, `POSTHOG_HOST` | `/recent-users` API route (analytics) |
| `NOTION_API_KEY`, `NOTION_DATABASE_ID` | "Recent solved problem" section |
| `VERCEL_API_KEY` | "Site last updated" timestamp |

### Gotchas

- During `pnpm build`, you will see a `DYNAMIC_SERVER_USAGE` error for the `/recent-users` route — this is expected behavior (it's a dynamic API route that can't be statically rendered).
- No automated test suite exists in this repo; `pnpm lint` is the only code quality check.
