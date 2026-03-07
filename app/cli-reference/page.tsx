import DocsLayout from '../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Terminal, Zap, Shield, Activity, Settings, Download, Check, AlertTriangle, Monitor, Radio, Users, Layers, Wifi, Play, GitBranch, Server, ChevronRight } from 'lucide-react';
import CopyBlock from '../components/CopyBlock';

/* ─────────────────────────── command data ─────────────────────────── */

interface CommandFlag {
  flag: string;
  desc: string;
}

interface SubCommand {
  name: string;
  desc: string;
  flags?: CommandFlag[];
}

interface Command {
  name: string;
  description: string;
  usage: string;
  flags: CommandFlag[];
  subcommands?: SubCommand[];
  icon: React.ComponentType<{ className?: string }>;
  example: string;
}

/* ─── Getting Started ─── */

const gettingStartedCommands: Command[] = [
  {
    name: 'ekkos',
    description:
      'The default command. Just typing ekkos starts Claude Code with ekkOS memory — no subcommand needed. Equivalent to ekkos run.',
    usage: 'ekkos',
    flags: [],
    icon: Zap,
    example: `$ ekkos

  ╔══════════════════════════════════════╗
  ║  ekkOS_Pulse v1.1.9                 ║
  ╚══════════════════════════════════════╝
  Session: bright-falcon-soars
  Memory:  connected (68 tools)

  Launching Claude Code...`,
  },
  {
    name: 'ekkos init',
    description:
      'Interactive setup wizard. Authenticates via device code flow (opens your browser), detects installed IDEs, and configures the MCP server, hooks, skills, agents, plugins, and CLAUDE.md.',
    usage: 'ekkos init [options]',
    flags: [
      { flag: '-i, --ide <ide>', desc: 'IDE to set up (claude, cursor, windsurf, all)' },
      { flag: '-k, --key <key>', desc: 'Use API key instead of device auth (skip browser)' },
      { flag: '-f, --force', desc: 'Force re-authentication and overwrite existing config' },
      { flag: '--skip-hooks', desc: 'Skip hook deployment' },
      { flag: '--skip-skills', desc: 'Skip skills deployment' },
    ],
    icon: Settings,
    example: `$ ekkos init

  🧠 ekkOS Memory Setup
  ─────────────────────

  → Opening browser for authentication...
  → Device code: ABCD-1234
  ✓ Authenticated as user@example.com (Pro tier)

  Select IDEs to configure:
    ☑ Claude Code
    ☑ Cursor
    ☐ Windsurf

  Deploying configuration...
    ✓ MCP server configured       (~/.claude.json)
    ✓ Hooks installed              (~/.claude/hooks/)
    ✓ Settings registered          (~/.claude/settings.json)
    ✓ Skills deployed              (~/.claude/skills/)
    ✓ Agents registered            (~/.claude/agents/)
    ✓ Plugins installed            (~/.claude/plugins/ekkos/)
    ✓ CLAUDE.md deployed           (~/.claude/CLAUDE.md)

  Verifying deployment...
    ✓ All 7 components verified

  ┌──────────────────────────────────┐
  │  ✓ ekkOS is ready!              │
  │  Next step: ekkos run           │
  └──────────────────────────────────┘`,
  },
];

/* ─── Running ─── */

const runningCommands: Command[] = [
  {
    name: 'ekkos run',
    description:
      'Start Claude Code with ekkOS memory. This is the default command — also triggered by just typing ekkos. Routes all API calls through the ekkOS proxy for context management, generates a unique 3-word session name, and fires hooks on every turn to capture memory.',
    usage: 'ekkos run [options]',
    flags: [
      { flag: '-s, --session <name>', desc: 'Session name to restore on clear' },
      { flag: '-b, --bypass', desc: 'Enable bypass permissions mode (skip all permission checks)' },
      { flag: '-v, --verbose', desc: 'Show debug output' },
      { flag: '-d, --doctor', desc: 'Run diagnostics before starting' },
      { flag: '-r, --research', desc: 'Auto-run research agent on startup' },
      { flag: '--skip-inject', desc: 'Monitor-only mode' },
      { flag: '--skip-dna', desc: 'Skip ccDNA injection' },
      { flag: '--skip-proxy', desc: 'Skip API proxy (use direct Anthropic API)' },
      { flag: '--dashboard', desc: 'Launch with live usage dashboard in tmux split' },
      { flag: '--add-dir <dirs...>', desc: 'Additional directories Claude Code can access' },
    ],
    icon: Play,
    example: `$ ekkos run --bypass --verbose

  ╔══════════════════════════════════════╗
  ║  ekkOS_Pulse v1.1.9                 ║
  ╚══════════════════════════════════════╝
  Session: cosmic-penguin-runs
  Proxy:   proxy.ekkos.dev ✓
  Memory:  connected (68 tools)
  Bypass:  enabled

  Launching Claude Code...`,
  },
  {
    name: 'ekkos test-claude',
    description:
      'Launch Claude Code with proxy only — no ccDNA, no session binding, no injections. Useful for debugging whether an issue is in ekkOS or in Claude Code itself.',
    usage: 'ekkos test-claude [options]',
    flags: [
      { flag: '--no-proxy', desc: 'Skip proxy too (completely vanilla Claude)' },
      { flag: '--no-hooks', desc: 'Temporarily disable all hooks' },
      { flag: '-v, --verbose', desc: 'Show debug output' },
    ],
    icon: Terminal,
    example: `$ ekkos test-claude --no-hooks

  🧪 Test Mode
  ─────────────
  Proxy:  proxy.ekkos.dev ✓
  ccDNA:  skipped
  Hooks:  disabled
  Session: disabled

  Launching vanilla Claude Code with proxy...`,
  },
];

/* ─── Monitoring ─── */

const monitoringCommands: Command[] = [
  {
    name: 'ekkos doctor',
    description:
      'System health checker. Verifies environment prerequisites including Node.js version, Claude Code installation, session support, hook integrity, and MCP configuration.',
    usage: 'ekkos doctor [options]',
    flags: [
      { flag: '-f, --fix', desc: 'Attempt safe auto-fixes and show commands for manual fixes' },
      { flag: '-j, --json', desc: 'Output machine-readable JSON report' },
    ],
    icon: Activity,
    example: `$ ekkos doctor

  🩺 ekkOS Doctor
  ─────────────────────

  ✓ PASS  Node.js >= 18 (v22.2.0)
  ✓ PASS  Claude Code installed (v2.1.6)
  ✓ PASS  Session binding available
  ✓ PASS  Hooks verified (6/6 checksums match)
  ✓ PASS  MCP configuration valid
  ⚠ WARN  ccDNA not installed (optional)

  Result: Ready to run`,
  },
  {
    name: 'ekkos status',
    description:
      'Shows your ekkOS memory statistics and installation info — pattern count, directive count, episodes captured, and account tier.',
    usage: 'ekkos status',
    flags: [],
    icon: Activity,
    example: `$ ekkos status

  📊 ekkOS Memory Status
  ──────────────────────────

  Account:    user@example.com (Pro)
  Patterns:   247 active, 12 quarantined
  Directives: 34 rules
  Episodes:   1,203 captured
  Secrets:    8 stored`,
  },
  {
    name: 'ekkos test',
    description:
      'Tests connection to the ekkOS memory API. Runs four checks: API health, pattern query, memory capture endpoint, and IDE configuration verification.',
    usage: 'ekkos test',
    flags: [],
    icon: Wifi,
    example: `$ ekkos test

  🔌 ekkOS Connection Test
  ────────────────────────────

  1. API health check        ✓ 200 OK (42ms)
  2. Pattern query            ✓ 247 patterns found
  3. Memory capture           ✓ Endpoint accepts writes
  4. IDE configuration        ✓ MCP server configured

  All tests passed.`,
  },
  {
    name: 'ekkos usage',
    description:
      'Token usage and cost tracking. View daily, weekly, monthly, or per-session breakdowns of your token consumption and costs.',
    usage: 'ekkos usage <daily|weekly|monthly|session>',
    flags: [],
    subcommands: [
      { name: 'daily', desc: "Today's usage" },
      { name: 'weekly', desc: "This week's usage" },
      { name: 'monthly', desc: "This month's usage" },
      { name: 'session', desc: 'Current session usage' },
    ],
    icon: Monitor,
    example: `$ ekkos usage daily

  📈 Usage — Today (Feb 21, 2026)
  ────────────────────────────────

  Input tokens:   1,247,832
  Output tokens:  312,456
  Cache reads:    943,211
  Cache writes:   304,621
  Estimated cost: $4.72

  Sessions: 3 active`,
  },
  {
    name: 'ekkos dashboard',
    description:
      'Live TUI dashboard for real-time session monitoring. Shows token usage, cache hit rates, memory operations, and session timeline in your terminal.',
    usage: 'ekkos dashboard',
    flags: [],
    icon: Monitor,
    example: `$ ekkos dashboard

  ┌─ ekkOS Dashboard ──────────────────────┐
  │                                         │
  │  Session: cosmic-penguin-runs           │
  │  Uptime:  1h 23m                        │
  │  Turns:   47                            │
  │                                         │
  │  Tokens   ████████████░░░░  72%         │
  │  Cache    ██████████████░░  89% hits    │
  │  Memory   ██████░░░░░░░░░░  38% used    │
  │                                         │
  └─────────────────────────────────────────┘`,
  },
  {
    name: 'ekkos sessions',
    description:
      'List active Claude Code sessions. Useful for multi-session and swarm workflows where multiple instances run in parallel.',
    usage: 'ekkos sessions [options]',
    flags: [
      { flag: '-j, --json', desc: 'Output machine-readable JSON' },
    ],
    icon: Users,
    example: `$ ekkos sessions

  🧵 Active Sessions
  ──────────────────────

  1. cosmic-penguin-runs   (1h 23m, 47 turns)
  2. bright-falcon-soars   (0h 12m, 8 turns)
  3. swift-river-flows     (0h 03m, 2 turns)`,
  },
];

/* ─── Configuration ─── */

const configCommands: Command[] = [
  {
    name: 'ekkos hooks',
    description:
      'Manage Claude Code hook installation. Hooks enable the Golden Loop — automatic memory capture and retrieval on every interaction.',
    usage: 'ekkos hooks <install|verify|status>',
    flags: [],
    subcommands: [
      { name: 'install', desc: 'Install hooks to ~/.claude/hooks/' },
      { name: 'verify', desc: 'Verify hook checksums' },
      { name: 'status', desc: 'Show hook enablement status' },
    ],
    icon: Settings,
    example: `$ ekkos hooks verify

  🔗 Hook Verification
  ──────────────────────────

  ✓ user-prompt-submit.sh  (checksum: OK)
  ✓ stop.sh                (checksum: OK)
  ✓ lib/contract.sh        (checksum: OK)

  All hooks verified.`,
  },
  {
    name: 'ekkos stream',
    description:
      'Stream capture management. View the status of real-time stream capture and list sessions that have stream data recorded.',
    usage: 'ekkos stream <status|list>',
    flags: [],
    subcommands: [
      { name: 'status', desc: 'Show capture status' },
      { name: 'list', desc: 'List sessions with stream data' },
    ],
    icon: Radio,
    example: `$ ekkos stream status

  📡 Stream Capture
  ──────────────────────

  Status:   active
  Session:  cosmic-penguin-runs
  Captured: 1,847 events
  Storage:  cloud (synced)`,
  },
];

/* ─── Advanced ─── */

const advancedCommands: Command[] = [
  {
    name: 'ekkos setup-remote',
    description:
      'Set up remote terminal access — run Claude Code on your PC and connect from anywhere. Pairs your machine with the ekkOS remote agent service.',
    usage: 'ekkos setup-remote [options]',
    flags: [
      { flag: '-f, --force', desc: 'Force re-pairing' },
      { flag: '--skip-service', desc: 'Skip installing background service' },
      { flag: '-v, --verbose', desc: 'Show detailed output' },
    ],
    icon: Wifi,
    example: `$ ekkos setup-remote

  🌐 Remote Terminal Setup
  ─────────────────────────

  → Generating device pairing code...
  → Pair code: MEGA-BYTE-3947
  → Waiting for platform confirmation...
  ✓ Paired to account user@example.com

  → Installing background agent service...
  ✓ Agent service installed (launchd)
  ✓ Agent running on port 8377

  Remote access is ready.
  Connect at: platform.ekkos.dev/terminal`,
  },
  {
    name: 'ekkos agent',
    description:
      'Manage the remote terminal agent. The agent runs as a background service and maintains the connection between your local machine and the ekkOS platform.',
    usage: 'ekkos agent <subcommand>',
    flags: [],
    subcommands: [
      { name: 'start', desc: 'Start the agent service' },
      { name: 'stop', desc: 'Stop the agent service' },
      { name: 'restart', desc: 'Restart the agent service' },
      { name: 'status', desc: 'Check agent status' },
      { name: 'logs', desc: 'Show agent logs (-f to follow)' },
      { name: 'health', desc: 'Diagnose connection issues' },
      { name: 'uninstall', desc: 'Remove agent and unpair' },
    ],
    icon: Server,
    example: `$ ekkos agent status

  🤖 ekkOS Agent
  ────────────────────

  Status:     running
  PID:        48291
  Uptime:     3d 14h 22m
  Connection: WebSocket (healthy)
  Latency:    32ms
  Sessions:   2 active`,
  },
  {
    name: 'ekkos swarm',
    description:
      'Multi-agent parallel workers with Q-learning routing. Launch multiple Claude Code instances that work on subtasks in parallel, coordinated by a queen agent.',
    usage: 'ekkos swarm <subcommand>',
    flags: [],
    subcommands: [
      { name: 'launch -t "task"', desc: 'Launch parallel workers for a task' },
      { name: 'setup', desc: 'Interactive TUI wizard for swarm configuration' },
      { name: 'status', desc: 'Q-table stats and worker routing data' },
      { name: 'reset', desc: 'Clear the Q-table' },
      { name: 'export', desc: 'Export Q-table data' },
      { name: 'import', desc: 'Import Q-table data' },
      { name: 'dashboard', desc: 'Swarm monitoring TUI' },
    ],
    icon: Users,
    example: `$ ekkos swarm launch -t "Refactor auth module" -w 4

  🐝 ekkOS Swarm
  ────────────────────

  Task: "Refactor auth module"
  Strategy: queen-coordinated
  Workers: 4

  Decomposing task...
    → Worker 1: Extract auth middleware
    → Worker 2: Update token validation
    → Worker 3: Migrate session store
    → Worker 4: Update test suite

  Launching workers...
    ✓ Worker 1 started (swift-river-flows)
    ✓ Worker 2 started (bold-eagle-soars)
    ✓ Worker 3 started (calm-ocean-hums)
    ✓ Worker 4 started (keen-wolf-hunts)

  Queen coordinator active. Use 'ekkos swarm dashboard' to monitor.`,
  },
];

/* ─── Section groupings ─── */

const commandSections = [
  {
    title: 'Getting Started',
    description: 'Install and configure ekkOS for the first time.',
    commands: gettingStartedCommands,
  },
  {
    title: 'Running',
    description: 'Launch Claude Code with ekkOS memory enhancements.',
    commands: runningCommands,
  },
  {
    title: 'Monitoring',
    description: 'Check system health, view usage, and track sessions.',
    commands: monitoringCommands,
  },
  {
    title: 'Configuration',
    description: 'Manage hooks, streams, and deployment artifacts.',
    commands: configCommands,
  },
  {
    title: 'Advanced',
    description: 'Remote access, multi-agent swarms, and agent management.',
    commands: advancedCommands,
  },
];

/* ─── Swarm launch flags (for inline detail) ─── */

const swarmLaunchFlags: CommandFlag[] = [
  { flag: '-t, --task <task>', desc: 'Task description (required)' },
  { flag: '-w, --workers <count>', desc: 'Number of workers (2-8)' },
  { flag: '--no-bypass', desc: 'Disable bypass mode' },
  { flag: '--no-decompose', desc: 'Skip AI task decomposition' },
  { flag: '--queen-strategy <strategy>', desc: 'Queen coordinator strategy' },
];

/* ─── Environment variables ─── */

const envVars = [
  { name: 'EKKOS_API_KEY', desc: 'Your ekkOS API key. Set automatically by ekkos init. Required for all API calls.', required: true },
  { name: 'EKKOS_PROXY_MODE', desc: 'Proxy routing mode. Set to "direct" to bypass the proxy and call Anthropic directly.', required: false },
  { name: 'EKKOS_DISABLE_EVICTION', desc: 'Set to "1" to disable context eviction entirely. Context will grow until the model limit.', required: false },
  { name: 'EKKOS_SMART_EVICTION', desc: 'Set to "1" to enable AI-powered intelligent context eviction instead of simple truncation.', required: false },
  { name: 'EKKOS_DEBUG', desc: 'Set to "1" for verbose debug logging from all ekkOS components.', required: false },
];

/* ─────────────────────────── page ─────────────────────────── */

export default function CLIReferencePage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* ─── Header ─── */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00f0ff]/10 to-[#ffb800]/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <Terminal className="w-4 h-4" />
            <span>CLI Reference</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">CLI Reference</h1>
          <p className="text-xl text-[#7a7a8e]">
            The{' '}
            <code className="bg-[#111118]/60 backdrop-blur-xl px-2 py-1 rounded text-[#00f0ff]">
              ekkos
            </code>{' '}
            CLI manages your memory-enhanced development environment.
            15 commands across 5 categories.
          </p>
        </div>

        {/* ─── Installation ─── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Download className="w-6 h-6 text-green-400" />
            Installation
          </h2>
          <CopyBlock code="npm install -g @ekkos/cli" className="text-[#e8e8f0]" />
          <p className="text-[#7a7a8e] text-sm mt-3">
            Requires Node.js 18 or later. After installing, run{' '}
            <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
              ekkos init
            </code>{' '}
            to authenticate and configure your environment.
          </p>
        </section>

        {/* ─── Quick Start ─── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Zap className="w-6 h-6 text-yellow-400" />
            Quick Start
          </h2>
          <div className="bg-gradient-to-br from-[#00f0ff]/5 to-[#ffb800]/5 border border-[#00f0ff]/20 clip-lg p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#00f0ff]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-[#00f0ff]">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Install</h4>
                  <CopyBlock code="npm install -g @ekkos/cli" className="text-[#e8e8f0]" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#ffb800]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-[#ffb800]">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Initialize</h4>
                  <CopyBlock code="ekkos init" className="text-[#e8e8f0]" />
                  <p className="text-[#7a7a8e] text-sm mt-2">
                    Authenticate, select IDEs, and deploy configuration
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-emerald-400">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Run</h4>
                  <CopyBlock code="ekkos" className="text-[#e8e8f0]" />
                  <p className="text-[#7a7a8e] text-sm mt-2">
                    Launch Claude Code with persistent memory. That&apos;s it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">All Commands</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <div className="space-y-6">
              {commandSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-[#4a4a5e] uppercase tracking-wider mb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.commands.map((cmd) => (
                      <a
                        key={cmd.name}
                        href={`#${cmd.name.replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between px-3 py-2 clip-md text-sm hover:bg-[#111118]/80 transition-colors group"
                      >
                        <code className="text-[#00f0ff] font-mono">{cmd.name}</code>
                        <span className="text-[#7a7a8e] group-hover:text-[#e8e8f0] transition-colors text-xs truncate ml-4 max-w-[60%] text-right">
                          {cmd.description.split('.')[0]}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Command Sections ─── */}
        {commandSections.map((section) => (
          <section key={section.title} className="mb-16">
            <h2 className="text-2xl font-bold mb-2 text-white">{section.title}</h2>
            <p className="text-[#7a7a8e] mb-8">{section.description}</p>

            <div className="space-y-8">
              {section.commands.map((cmd) => {
                const Icon = cmd.icon;
                return (
                  <div
                    key={cmd.name}
                    id={cmd.name.replace(/\s+/g, '-')}
                    className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/10 clip-lg p-6"
                  >
                    {/* title bar */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 clip-md bg-[#00f0ff]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#00f0ff]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-mono">{cmd.name}</h3>
                      </div>
                    </div>

                    <p className="text-[#e8e8f0]/90 mb-4">{cmd.description}</p>

                    {/* usage */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#4a4a5e] uppercase tracking-wider mb-2">
                        Usage
                      </h4>
                      <code className="bg-[#0d0d14]/50 backdrop-blur-md px-4 py-2 clip-md text-emerald-400 text-sm block">
                        {cmd.usage}
                      </code>
                    </div>

                    {/* flags */}
                    {cmd.flags.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-[#4a4a5e] uppercase tracking-wider mb-2">
                          Options
                        </h4>
                        <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4 space-y-2">
                          {cmd.flags.map((f) => (
                            <div key={f.flag} className="flex items-start gap-4">
                              <code className="text-[#00f0ff] text-sm font-mono whitespace-nowrap">
                                {f.flag}
                              </code>
                              <span className="text-[#7a7a8e] text-sm">{f.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* subcommands */}
                    {cmd.subcommands && cmd.subcommands.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-[#4a4a5e] uppercase tracking-wider mb-2">
                          Subcommands
                        </h4>
                        <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4 space-y-2">
                          {cmd.subcommands.map((sc) => (
                            <div key={sc.name} className="flex items-start gap-4">
                              <code className="text-[#ffb800] text-sm font-mono whitespace-nowrap">
                                {sc.name}
                              </code>
                              <span className="text-[#7a7a8e] text-sm">{sc.desc}</span>
                            </div>
                          ))}
                        </div>

                        {/* Inline swarm launch flags */}
                        {cmd.name === 'ekkos swarm' && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-[#4a4a5e] uppercase tracking-wider mb-2">
                              Launch Options
                            </h4>
                            <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4 space-y-2">
                              {swarmLaunchFlags.map((f) => (
                                <div key={f.flag} className="flex items-start gap-4">
                                  <code className="text-[#00f0ff] text-sm font-mono whitespace-nowrap">
                                    {f.flag}
                                  </code>
                                  <span className="text-[#7a7a8e] text-sm">{f.desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* example */}
                    <div>
                      <h4 className="text-sm font-semibold text-[#4a4a5e] uppercase tracking-wider mb-2">
                        Example Output
                      </h4>
                      <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-sm text-[#e8e8f0]/90 overflow-x-auto font-mono whitespace-pre">
                        {cmd.example}
                      </pre>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* ─── How ekkos run Works ─── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Layers className="w-6 h-6 text-purple-400" />
            How <code className="text-[#00f0ff] mx-1">ekkos run</code> Works
          </h2>
          <p className="text-[#7a7a8e] mb-6">
            When you run <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">ekkos</code>,
            the CLI sets up a memory-enhanced environment around Claude Code. Here is the architecture:
          </p>

          <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 clip-lg p-6 space-y-6">
            {/* step 1 */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-purple-400">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">CLI spawns Claude Code</h4>
                <p className="text-[#7a7a8e] text-sm">
                  The CLI sets <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-[#00f0ff] text-xs">ANTHROPIC_BASE_URL</code> to
                  point at <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-[#00f0ff] text-xs">proxy.ekkos.dev</code>,
                  then launches <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-[#00f0ff] text-xs">claude</code> with session tracking.
                  A unique 3-word session name is generated (e.g., &quot;cosmic-penguin-runs&quot;).
                </p>
              </div>
            </div>

            {/* step 2 */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-purple-400">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">API calls route through the ekkOS proxy</h4>
                <p className="text-[#7a7a8e] text-sm">
                  Every Anthropic API call passes through the proxy. In passthrough mode (default),
                  messages are forwarded unmodified to maximize Anthropic&apos;s prompt cache hit rate.
                  The proxy records token usage, session metadata, and turn timing.
                </p>
              </div>
            </div>

            {/* step 3 */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-purple-400">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Context eviction at ~80%</h4>
                <p className="text-[#7a7a8e] text-sm">
                  When the context window reaches approximately 80% capacity (~160K of 200K tokens),
                  the proxy triggers intelligent eviction. With smart eviction enabled,
                  the middle of the conversation is summarized while preserving the system prompt prefix and
                  recent turns. Original messages are backed up for lossless recovery.
                </p>
              </div>
            </div>

            {/* step 4 */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-purple-400">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Hooks capture memory on every turn</h4>
                <p className="text-[#7a7a8e] text-sm">
                  Claude Code hooks fire at key lifecycle points (prompt submit, stop, pre-compact).
                  These hooks capture conversation turns, trigger pattern retrieval,
                  and preserve context before compaction — enabling the &quot;Golden Loop&quot; of
                  search &rarr; apply &rarr; forge.
                </p>
              </div>
            </div>

            {/* step 5 */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-purple-400">5</span>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Session names are 3-word identifiers</h4>
                <p className="text-[#7a7a8e] text-sm">
                  Each session gets a deterministic human-readable name derived from its UUID
                  (e.g., &quot;cosmic-penguin-runs&quot;). These names appear in the ekkOS footer,
                  are used for memory retrieval, and make it easy to reference past sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Architecture diagram (ASCII) */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-[#4a4a5e] uppercase tracking-wider mb-2">
              Architecture
            </h4>
            <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-sm text-[#e8e8f0]/80 overflow-x-auto font-mono whitespace-pre">
{`┌─────────────────────────────────────────────────────────┐
│                      ekkos run                          │
│                                                         │
│  ┌─────────┐    ┌──────────────┐    ┌────────────────┐  │
│  │  Claude  │───▶│  ekkOS Proxy │───▶│   Anthropic    │  │
│  │  Code    │◀───│  (passthru)  │◀───│   API          │  │
│  └────┬─────┘    └──────┬───────┘    └────────────────┘  │
│       │                 │                                │
│       │ hooks           │ eviction / usage               │
│       ▼                 ▼                                │
│  ┌─────────┐    ┌──────────────┐    ┌────────────────┐  │
│  │  ekkOS  │    │   Smart      │    │   Cloud        │  │
│  │  Memory │    │   Eviction   │    │   Backup       │  │
│  │  API    │    │   (optional) │    │   (lossless)   │  │
│  └─────────┘    └──────────────┘    └────────────────┘  │
└─────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </section>

        {/* ─── Environment Variables ─── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Settings className="w-6 h-6 text-blue-400" />
            Environment Variables
          </h2>
          <p className="text-[#7a7a8e] mb-6">
            These environment variables control ekkOS behavior. Most are set automatically
            by <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">ekkos init</code> and{' '}
            <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">ekkos run</code>.
          </p>
          <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-lg border border-[#1a1a2e] divide-y divide-[#1a1a2e]">
            {envVars.map((v) => (
              <div key={v.name} className="p-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <div className="flex items-center gap-2 min-w-0 sm:min-w-[260px]">
                  <code className="text-[#00f0ff] text-sm font-mono truncate">{v.name}</code>
                  {v.required && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded whitespace-nowrap">
                      required
                    </span>
                  )}
                </div>
                <span className="text-[#7a7a8e] text-sm">{v.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Troubleshooting ─── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            Troubleshooting
          </h2>
          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">&quot;Not configured&quot; error</h3>
              <p className="text-[#7a7a8e] text-sm mb-2">
                Run{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  ekkos init
                </code>{' '}
                to set up your account and configuration. As of v1.1.8,{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  ekkos run
                </code>{' '}
                automatically redirects to init if no config exists.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">Hooks out of date</h3>
              <p className="text-[#7a7a8e] text-sm mb-2">
                Run{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  ekkos hooks install
                </code>{' '}
                to update hooks to the latest version, or re-run{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  ekkos init --force
                </code>{' '}
                to redeploy everything.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">Doctor reports failures</h3>
              <p className="text-[#7a7a8e] text-sm mb-2">
                Run{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  ekkos doctor --fix
                </code>{' '}
                for auto-fixes and specific remediation commands. Most issues are resolved by ensuring
                Node.js 18+ is installed and Claude Code is up to date.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">Claude Code launches but memory is not working</h3>
              <p className="text-[#7a7a8e] text-sm mb-2">
                Use{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  ekkos test
                </code>{' '}
                to verify API connectivity. If the API is healthy but memory tools are missing, check that
                your MCP server is configured in{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  ~/.claude.json
                </code>.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">Proxy connection refused</h3>
              <p className="text-[#7a7a8e] text-sm mb-2">
                If{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  proxy.ekkos.dev
                </code>{' '}
                is unreachable, use{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  ekkos run --skip-proxy
                </code>{' '}
                or{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  ekkos test-claude --no-proxy
                </code>{' '}
                to bypass the proxy and use the Anthropic API directly. Memory and hooks still work; only context
                eviction and usage tracking are skipped.
              </p>
            </div>

            {/* Platform-specific */}
            <div className="border-t border-[#1a1a2e] pt-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Platform-Specific Issues</h3>
            </div>

            <div className="bg-gradient-to-br from-[#ffb800]/5 to-transparent border border-[#ffb800]/20 clip-lg p-5">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span>🪟</span> ENOENT error on Windows
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-2">
                Windows users may see ENOENT errors if the shell cannot find the{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  claude
                </code>{' '}
                binary. Fix:
              </p>
              <ol className="space-y-1 text-[#e8e8f0]/80 text-sm ml-4 list-decimal list-inside">
                <li>Install Claude Code globally: <code className="bg-[#111118]/60 px-1.5 py-0.5 rounded text-[#00f0ff]">npm i -g @anthropic-ai/claude-code</code></li>
                <li>Ensure your PATH includes the npm global bin directory</li>
                <li>Try running from PowerShell (not Command Prompt)</li>
              </ol>
              <p className="text-[#7a7a8e] text-xs mt-2">Fixed in CLI v1.1.2</p>
            </div>

            <div className="bg-gradient-to-br from-[#ffb800]/5 to-transparent border border-[#ffb800]/20 clip-lg p-5">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span>🪟</span> Session binding delayed on Windows
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-2">
                On some Windows setups, session binding may use a fallback mode. In this mode:
              </p>
              <ul className="space-y-1 text-[#e8e8f0]/80 text-sm ml-4 list-disc list-inside">
                <li>Session names start as &quot;_pending&quot; until the first hook fires</li>
                <li>All memory features still work — only session naming is delayed</li>
                <li>Using <code className="bg-[#111118]/60 px-1.5 py-0.5 rounded text-[#00f0ff]">ekkos run</code> gives the best experience</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 clip-lg p-5">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span>🐧</span> Headless Linux / SSH environments
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-2">
                <code className="bg-[#111118]/60 px-1.5 py-0.5 rounded text-[#00f0ff]">ekkos init</code> opens a browser for authentication by default. On headless servers:
              </p>
              <ul className="space-y-1 text-[#e8e8f0]/80 text-sm ml-4 list-disc list-inside">
                <li>Use <code className="bg-[#111118]/60 px-1.5 py-0.5 rounded text-[#00f0ff]">ekkos init --key YOUR_API_KEY</code> to skip browser auth entirely</li>
                <li>Or copy <code className="bg-[#111118]/60 px-1.5 py-0.5 rounded text-purple-400">~/.ekkos/config.json</code> from a machine where you already authenticated</li>
                <li>Use <code className="bg-[#111118]/60 px-1.5 py-0.5 rounded text-[#00f0ff]">ekkos setup-remote</code> for remote terminal agent setup</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-5">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span>🍎</span> macOS: Windsurf config path
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-2">
                Windsurf stores its MCP config at a different path than other IDEs:{' '}
                <code className="bg-[#111118]/60 px-1.5 py-0.5 rounded text-[#00f0ff]">~/.codeium/windsurf/mcp_config.json</code> (not <code className="bg-[#111118]/60 px-1.5 py-0.5 rounded text-[#7a7a8e]">~/.windsurf/</code>).
                The CLI handles this automatically — just run <code className="bg-[#111118]/60 px-1.5 py-0.5 rounded text-[#00f0ff]">ekkos init</code>.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">Session name stuck at &quot;_pending&quot;</h3>
              <p className="text-[#7a7a8e] text-sm mb-2">
                In some environments, the session name may remain &quot;_pending&quot; until the first hook fires.
                This is expected behavior. Use{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  ekkos run
                </code>{' '}
                for full session name binding from startup.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">Swarm workers not starting</h3>
              <p className="text-[#7a7a8e] text-sm mb-2">
                Run{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-[#00f0ff]">
                  ekkos swarm setup
                </code>{' '}
                to configure your swarm environment first. Workers require Claude Code with bypass mode
                and sufficient API rate limits for parallel operation.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Next Steps ─── */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/quickstart"
              className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#00f0ff]/30 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">Quick Start Guide</h3>
              <p className="text-sm text-[#7a7a8e]">Get up and running in 2 minutes</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Read guide <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link
              href="/tools"
              className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#ffb800]/30 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">All MCP Tools</h3>
              <p className="text-sm text-[#7a7a8e]">Browse every memory tool available</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                Browse tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link
              href="/integrations/claude-code"
              className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-purple-400/30 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">Claude Code Integration</h3>
              <p className="text-sm text-[#7a7a8e]">Deep dive into Claude Code + ekkOS</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link
              href="/concepts/how-it-works"
              className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-emerald-400/30 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">How It Works</h3>
              <p className="text-sm text-[#7a7a8e]">Understand the memory architecture</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-emerald-400 group-hover:gap-2 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
