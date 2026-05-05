---
title: Agent Platform
description: ekkOS as the AI agent operating system — chassis runtime, multi-model dispatch, private memory, witness-chain provenance.
---

# Agent Platform

ekkOS is the AI agent operating system. It sits below your AI tools and provides the runtime, the memory, the model dispatch, and the provenance.

## What it gives you

- **Chassis runtime** — multi-turn agent loop with tool use, decoupled from any specific model
- **Multi-model dispatch** — 60+ Bedrock models, switchable per task via tier registry
- **Memory layer** — 11-substrate persistent memory across sessions and across models
- **Cross-provider judge panels** — second-opinion any verdict at $0.003/call
- **Witness chains** — SHA-256 Merkle proofs over compiled outputs for tamper detection
- **Competitive intel** — nightly decompile of competitive AI tools auto-forges new patterns

## Architecture

```
                    ┌──────────────────────────┐
                    │   Your IDE / CLI / Slack  │
                    └────────────┬─────────────┘
                                 │
                    ┌────────────┴─────────────┐
                    │     ekkOS Chassis        │
                    │  (multi-turn agent loop) │
                    └────────────┬─────────────┘
                                 │
              ┌──────────────────┼─────────────────┐
              ▼                  ▼                 ▼
       ┌──────────┐       ┌──────────┐      ┌──────────┐
       │ @ekkos/  │       │ ekkOS    │      │ Witness  │
       │ llm      │       │ memory   │      │ chains   │
       │ dispatch │       │ (11      │      │ (Merkle) │
       │          │       │ layers)  │      │          │
       └────┬─────┘       └────┬─────┘      └──────────┘
            │                  │
            ▼                  ▼
       ┌──────────┐       ┌──────────┐
       │ AWS      │       │ AWS RDS  │
       │ Bedrock  │       │ pgvector │
       │ (60+     │       │ + Neo4j  │
       │ models)  │       │ Aura     │
       └──────────┘       └──────────┘
```

## Read next

- [Chassis Architecture](./chassis-architecture) — the multi-turn loop, tool registry, decorator pattern
- [Bring Your Own Model](./bring-your-own-model) — wiring custom Bedrock model IDs, tier overrides
- [Memory Substrate](./memory-substrate) — the 11 layers and what each one is for
- [Subsystem Registry](./subsystem-registry) — how named cognition surfaces map to tiers
- [Witness Chains](./witness-chains) — provenance for AI-generated knowledge

## Compare

If you're evaluating ekkOS against Cursor, Claude Code, or Cline, see [the comparison page on the marketing site](https://ekkos.dev/compare).
