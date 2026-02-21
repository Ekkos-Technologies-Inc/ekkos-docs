# ekkOS Documentation Site

This repository contains the **official, canonical documentation** for ekkOS — the persistent memory layer for AI coding assistants.

> **Note:** Forks or mirrors of this repository may be outdated. For the most current documentation, always refer to [docs.ekkos.dev](https://docs.ekkos.dev).

---

## Documentation Scope

This documentation describes:
- **What users can do** — Available tools, integrations, and workflows
- **What users will observe** — Behaviors, outputs, and guarantees
- **How to integrate** — Setup instructions for supported platforms

This documentation intentionally does **not** describe:
- Internal implementation details
- Scoring algorithms or ranking logic
- Learning mechanisms or pipelines
- System architecture internals

This boundary is deliberate. The documentation serves as an **operator manual** — it tells you how to use the system, not how the system works internally.

---

## About ekkOS

ekkOS provides persistent memory for AI coding assistants. It remembers patterns, directives, and context across sessions so your AI assistant doesn't start from scratch every time.

**Supported Integrations:**
- Claude Code (Anthropic CLI)
- Cursor IDE
- VS Code Extension
- Custom agents via REST API

---

## Development

```bash
# Install dependencies (from monorepo root)
cd ../..
yarn install

# Run dev server (from apps/docs)
cd apps/docs
yarn dev
```

The dev server runs at `http://localhost:3000`.

---

## Build & Production

```bash
# Build for production (from monorepo root)
cd ../..
yarn workspace @ekkos/docs build

# Start production server (from apps/docs)
cd apps/docs
yarn start
```

---

## Project Structure

```
apps/docs/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout with ekkOS branding
│   ├── page.tsx            # Docs homepage
│   ├── introduction/       # Introduction page
│   ├── quickstart/         # Quickstart guide
│   ├── concepts/           # Core concepts (patterns, directives)
│   ├── integrations/       # Platform integration guides
│   └── api-reference/      # API and MCP tools reference
├── components/             # Custom React components
│   └── DocsLayout.tsx      # Shared documentation layout
├── content/docs/           # MDX documentation files
└── source.ts               # Fumadocs configuration
```

---

## Adding Documentation

1. Create a new `.mdx` file in `content/docs/` or a new `page.tsx` in `app/`
2. Add frontmatter (for MDX):
   ```mdx
   ---
   title: Your Page Title
   description: Brief description
   ---
   ```
3. Write content following the documentation philosophy:
   - Describe what users can do
   - Describe what users will observe
   - Do not explain internal mechanisms
4. The page will be automatically available at the corresponding route

---

## Deployment

The site is deployed to **docs.ekkos.dev** via Vercel.

**Vercel Configuration:**
- Root directory: `apps/docs`
- Build command: `cd ../.. && yarn install && yarn workspace @ekkos/docs build`
- Output directory: `.next`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete setup instructions.

---

## Styling

The site uses ekkOS brand guidelines:

| Element | Value |
|---------|-------|
| Background | `void` (#050508) |
| Purple accent | #8b5cf6 |
| Blue accent | #3b82f6 |
| Pink accent | #d946ef |
| Glass effect | `bg-white/[0.02-0.08]` with `backdrop-blur` |
| Display font | Inter |
| Code font | JetBrains Mono |

---

## License & Trademarks

**ekkOS** and the ekkOS logo are trademarks of ekkOS Technologies Inc.

This documentation is provided under the same license as the main ekkOS project. Unauthorized reproduction or distribution of ekkOS documentation, trademarks, or branding assets is prohibited.

For licensing inquiries: [ekkoslabs.com](https://ekkoslabs.com)

---

## Links

- **Documentation:** [docs.ekkos.dev](https://docs.ekkos.dev)
- **Platform:** [platform.ekkos.dev](https://platform.ekkos.dev)
- **Website:** [ekkos.dev](https://ekkos.dev)
- **Labs:** [ekkoslabs.com](https://ekkoslabs.com)
