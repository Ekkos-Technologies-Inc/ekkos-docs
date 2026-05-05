---
title: Chassis Architecture
description: How the @ekkos/cortex-chassis multi-turn agent runtime works — tool registry, model dispatch, decorator pattern over open-claude-code.
---

# Chassis Architecture

The chassis is the part of ekkOS that turns "give me a model and a prompt" into "give me a multi-turn agent that can use tools, read files, search memory, and produce structured output."

## The clean-room foundation

The chassis is built as a **decorator overlay** on `ekkostech/open-claude-code`, a clean-room rebuild of Claude Code's CLI runtime. We pin the vendor at a specific SHA in `packages/cortex-chassis-vendor/` (a git submodule) and **never modify vendor files**. All ekkOS-specific behavior lives in `packages/cortex-chassis/src/`, applied through injection seams.

This matters for three reasons:

1. **Upstream merges stay clean** — the weekly chassis-upstream-sync script (`scripts/ops/chassis-upstream-sync.sh`) advances the vendor SHA without merge conflicts.
2. **Vendor licensing stays intact** — open-claude-code is its own license. Our overlay is its own license.
3. **Diff'ability** — when something breaks, you can `git diff` the vendor pin and immediately see what changed.

## The runtime loop

```typescript
import { runAgent } from '@ekkos/cortex-chassis';

const result = await runAgent({
  systemPrompt: '...',
  userPrompt: '...',
  cwd: '/workspace',
  subsystem: 'CONTEXT_COMPILER',  // → looks up tier → looks up model
  tools: ['Read', 'Glob', 'Grep', 'ekkOS_Search'],
  maxTurns: 10,
  injectEkkosContext: true,  // walks CLAUDE.md + nearest ekkOS_CONTEXT.md
});

// result.text — final assistant text
// result.turns — how many turns were used
// result.inputTokens / outputTokens — for cost roll-up
// result.toolCalls / toolUsage — per-tool call counts
// result.sessionId — for telemetry correlation
```

The loop:

1. Build the system prompt (chassis injects CLAUDE.md walking + ekkOS_CONTEXT.md if `injectEkkosContext`)
2. Dispatch to the model via `@ekkos/llm` (subsystem → tier → model registry)
3. If model emits tool_use, execute the tool, append result, loop
4. If model emits stop_reason='end_turn' (or maxTurns hit), return

## Tool registry

Built-in tools live in `packages/cortex-chassis/src/tools/`:

- **`Read`** — reads files inside `cwd` (path-traversal-safe)
- **`Glob`** — pattern-based file enumeration
- **`Grep`** — content search
- **`ekkOS_Search`** / `ekkOS_Forge` / `ekkOS_Outcome` / `ekkOS_Track` — memory ops via the MCP gateway

Add a custom tool:

```typescript
import { runAgent, type ChassisTool } from '@ekkos/cortex-chassis';

const myTool: ChassisTool = {
  name: 'MyTool',
  description: 'Does something useful',
  inputSchema: { /* Zod or JSON Schema */ },
  execute: async (input, ctx) => { /* ... */ },
};

const result = await runAgent({
  /* ... */
  tools: [myTool],  // mix string tool names + custom tool objects
});
```

## Tier-to-model dispatch

The chassis doesn't know about specific models. It knows about **subsystems** (`CONTEXT_COMPILER`, `NERVE_PLANNER`, etc.), which map to **tiers** (`LITE`, `CHEAP`, `PRO`, `OPUS`), which map to **models**.

```
SUBSYSTEM           TIER          MODEL
─────────────────  ──────────  ────────────────────────────────
CONTEXT_COMPILER → LITE      → us.amazon.nova-lite-v1:0
NERVE_PLANNER    → PRO       → us.anthropic.claude-sonnet-4-5
PROMETHEUS_AGENT → PRO       → us.anthropic.claude-sonnet-4-5
JUDGE_PRO        → PRO       → us.anthropic.claude-sonnet-4-5
ASI_REVIEWER     → OPUS      → us.anthropic.claude-opus-4-5
```

Override at runtime:

```typescript
const result = await runAgent({
  subsystem: 'CONTEXT_COMPILER',
  tierOverride: 'PRO',  // bump this one call to PRO regardless of registry
  /* ... */
});
```

## Read next

- [Subsystem Registry](./subsystem-registry) — full tier mapping
- [Bring Your Own Model](./bring-your-own-model) — custom model IDs
- [Witness Chains](./witness-chains) — adding provenance to chassis outputs
