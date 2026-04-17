import DocsLayout from '../components/DocsLayout';
import { Terminal, Download, Zap, Rocket, Activity, Layers, Smartphone, Bot, AlertTriangle } from 'lucide-react';
import CopyBlock from '../components/CopyBlock';

type CommandDef = {
  command: string;
  description: string;
  options?: string[];
  note?: string;
  deprecated?: boolean;
};

type CommandGroup = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  commands: CommandDef[];
};

const commandGroups: CommandGroup[] = [
  {
    title: 'Core Commands',
    icon: Rocket,
    description: 'Setup, launch, diagnostics, and top-level CLI operations.',
    commands: [
      {
        command: 'ekkos',
        description: 'Default command (equivalent to `ekkos run`). See `ekkos pulse` for the recommended launch mode.',
      },
      {
        command: 'ekkos init',
        description: 'Initialize ekkOS and configure your IDE.',
        options: [
          '-i, --ide <ide>',
          '-k, --key <key>',
          '-f, --force',
          '-q, --quick',
          '--skip-hooks (deprecated no-op)',
          '--skip-skills',
        ],
      },
      {
        command: 'ekkos run',
        description: 'Launch Claude Code with ekkOS. Use `ekkos pulse` instead for the recommended experience.',
        options: [
          '-s, --session <name>',
          '-b, --bypass',
          '--model [model]',
          '--context-window <window>',
          '--continue-last',
          '--resume-session <id>',
          '-v, --verbose',
          '-d, --doctor',
          '-r, --research',
          '--skip-inject',
          '--skip-proxy',
          '--dashboard',
          '--add-dir <dirs...>',
        ],
      },
      {
        command: 'ekkos pulse',
        description: 'Launch Pulse mode — the recommended way to start ekkOS.',
        note: 'Replaces `ekkos run --dashboard` as the default launch command.',
        options: [
          '-s, --session <name>',
          '--context-window <window>',
          '--continue-last',
          '--resume-session <id>',
          '-v, --verbose',
          '--skip-inject',
          '--skip-proxy',
          '--add-dir <dirs...>',
        ],
      },
      {
        command: 'ekkos cursor',
        description: 'Launch Cursor Agent CLI with ekkOS integration.',
        options: [
          '-s, --session <name>',
          '-m, --model <model>',
          '--mode <mode>',
          '--plan',
          '--cloud',
          '-p, --print',
          '--output-format <format>',
          '--yolo',
          '--sandbox <mode>',
          '--dashboard',
          '--continue',
          '--resume [chatId]',
          '--setup-only',
          '-v, --verbose',
          '-w, --worktree [name]',
          '--worktree-base <branch>',
          '--proxy',
        ],
      },
      {
        command: 'ekkos ai',
        description: 'Launch AI assistant mode.',
        options: ['-s, --session <name>', '-v, --verbose', '--skip-proxy', '--dashboard'],
      },
      {
        command: 'ekkos codex',
        description: 'Launch Codex mode.',
        note: 'Forwards to Synk command runner.',
      },
      {
        command: 'ekkos acp',
        description: 'Launch a generic ACP-compatible agent.',
        note: 'Forwards to Synk command runner.',
      },
      {
        command: 'ekkos mcp',
        description: 'Start the ekkOS Memory MCP stdio server.',
      },
      {
        command: 'ekkos scan',
        description: 'Scan repo structure and seed ekkOS registry.',
        options: ['-c, --compile', '-n, --dry-run', '-p, --path <path>'],
      },
      {
        command: 'ekkos status',
        description: 'Show live status and memory metrics.',
        options: ['-w, --watch', '--json'],
      },
      {
        command: 'ekkos doctor',
        description: 'Check prerequisites and diagnose setup issues.',
        options: ['-f, --fix', '-j, --json'],
      },
      {
        command: 'ekkos test',
        description: 'Test connection to ekkOS memory services.',
      },
      {
        command: 'ekkos test-claude',
        description: 'Launch Claude Code in test mode.',
        options: ['--no-proxy', '--no-hooks', '-v, --verbose'],
      },
      {
        command: 'ekkos logout',
        description: 'Clear local ekkOS credentials.',
        options: ['-a, --all'],
      },
      {
        command: 'ekkos hooks',
        description: 'Deprecated compatibility command.',
        deprecated: true,
      },
    ],
  },
  {
    title: 'Monitoring & Usage',
    icon: Activity,
    description: 'Session visibility, dashboard, and token/cost reporting.',
    commands: [
      {
        command: 'ekkos dashboard [session-name]',
        description: 'Open live terminal dashboard.',
        options: ['--latest', '--wait-for-new', '--refresh <ms>', '--compact', '--provider <name>'],
      },
      {
        command: 'ekkos sessions',
        description: 'List active local sessions.',
        options: ['-j, --json'],
      },
      {
        command: 'ekkos usage',
        description: 'Usage summary (defaults to usage dashboard).',
        options: ['-j, --json'],
      },
      {
        command: 'ekkos usage daily',
        description: 'Daily usage breakdown.',
        options: ['-d, --days <n>', '-j, --json'],
      },
      {
        command: 'ekkos usage weekly',
        description: 'Weekly usage breakdown.',
        options: ['-w, --weeks <n>', '-j, --json'],
      },
      {
        command: 'ekkos usage monthly',
        description: 'Monthly usage breakdown.',
        options: ['-j, --json'],
      },
      {
        command: 'ekkos usage blocks',
        description: '5-hour billing block analysis.',
        options: ['-j, --json'],
      },
      {
        command: 'ekkos usage session [session-id]',
        description: 'Session usage detail or session list.',
        options: ['-l, --list', '-i, --instance <id>', '-j, --json'],
      },
      {
        command: 'ekkos usage dashboard',
        description: 'Composite usage dashboard output.',
        options: ['-j, --json'],
      },
      {
        command: 'ekkos stream',
        description: 'Stream capture management command group.',
      },
      {
        command: 'ekkos stream status',
        description: 'Show stream capture status for a session.',
        options: ['-s, --session <id>', '-w, --watch', '-j, --json'],
      },
      {
        command: 'ekkos stream list',
        description: 'List sessions with stream data.',
      },
    ],
  },
  {
    title: 'Docs / Cortex',
    icon: Layers,
    description: 'Manage local `ekkOS_CONTEXT.md` generation and validation.',
    commands: [
      {
        command: 'ekkos docs',
        description: 'Cortex command group.',
        note: 'Alias: `ekkos cortex`.',
      },
      {
        command: 'ekkos docs init',
        description: 'Initialize local Cortex docs for a repository.',
        note: 'Alias: `ekkos cortex init`.',
        options: ['-p, --path <path>', '--timezone <iana-tz>', '--no-seed'],
      },
      {
        command: 'ekkos docs watch',
        description: 'Watch workspace and keep docs updated.',
        note: 'Alias: `ekkos cortex watch`.',
        options: [
          '-p, --path <path>',
          '--timezone <iana-tz>',
          '--poll-interval-ms <ms>',
          '--debounce-ms <ms>',
          '--no-seed',
          '--rich',
          '--no-rich',
        ],
      },
      {
        command: 'ekkos docs workspaces',
        description: 'Manage watched workspaces.',
        note: 'Alias: `ekkos cortex workspaces`.',
        options: ['-l, --list', '-a, --add <path>', '-r, --remove <path>'],
      },
      {
        command: 'ekkos docs setup-ci',
        description: 'Generate CI workflow for docs validation.',
        note: 'Alias: `ekkos cortex setup-ci`.',
        options: ['-p, --path <path>'],
      },
      {
        command: 'ekkos docs validate',
        description: 'Validate Cortex docs in a repo.',
        note: 'Alias: `ekkos cortex validate`.',
        options: ['-p, --path <path>', '--fix', '--system <system_id>'],
      },
    ],
  },
  {
    title: 'OpenClaw Commands',
    icon: Terminal,
    description: 'OpenClaw integration commands exposed by ekkOS CLI.',
    commands: [
      {
        command: 'ekkos claw',
        description: 'OpenClaw command group.',
      },
      {
        command: 'ekkos claw status',
        description: 'Show OpenClaw + ekkOS integration status.',
        options: ['-j, --json', '--proxy-url <url>', '--model <model>', '--workspace <path>'],
      },
      {
        command: 'ekkos claw upgrade',
        description: 'Apply OpenClaw integration upgrades.',
        options: ['--apply', '--force', '-j, --json', '--proxy-url <url>', '--model <model>', '--workspace <path>'],
      },
    ],
  },
  {
    title: 'Synk Commands',
    icon: Smartphone,
    description: 'Mobile sync/auth/vendor key commands available via `ekkos` wrappers.',
    commands: [
      {
        command: 'ekkos auth',
        description: 'Authentication command group.',
      },
      {
        command: 'ekkos auth login',
        description: 'Authenticate with Synk.',
        options: ['--web'],
      },
      {
        command: 'ekkos auth logout',
        description: 'Clear Synk auth and machine data.',
      },
      {
        command: 'ekkos auth status',
        description: 'Show Synk auth status.',
      },
      {
        command: 'ekkos connect',
        description: 'Vendor key connection command group.',
      },
      {
        command: 'ekkos connect ekkos | codex | claude | ai',
        description: 'Connect vendor credentials.',
      },
      {
        command: 'ekkos connect status',
        description: 'Show connected vendor status.',
      },
      {
        command: 'ekkos sandbox',
        description: 'Sandbox command group.',
      },
      {
        command: 'ekkos sandbox configure',
        description: 'Interactive sandbox configuration.',
      },
      {
        command: 'ekkos sandbox status',
        description: 'Show current sandbox config state.',
      },
      {
        command: 'ekkos sandbox disable',
        description: 'Disable sandboxing.',
      },
      {
        command: 'ekkos daemon',
        description: 'Daemon command group.',
      },
      {
        command: 'ekkos daemon start | stop | status | list | logs | install | uninstall',
        description: 'Manage background Synk daemon.',
      },
      {
        command: 'ekkos daemon stop-session <session-id>',
        description: 'Stop a daemon-managed session.',
      },
      {
        command: 'ekkos notify',
        description: 'Send push notifications command.',
      },
      {
        command: 'ekkos notify -p <message> [-t <title>]',
        description: 'Send push notification to linked devices.',
      },
    ],
  },
  {
    title: 'Headless Agent Commands',
    icon: Bot,
    description: 'Remote agent controls under `ekkos agent ...`.',
    commands: [
      {
        command: 'ekkos agent',
        description: 'Headless agent command group.',
      },
      {
        command: 'ekkos agent auth login | logout | status',
        description: 'Manage agent authentication state.',
      },
      {
        command: 'ekkos agent list',
        description: 'List sessions.',
        options: ['--active', '--json'],
      },
      {
        command: 'ekkos agent status <session-id>',
        description: 'Get live session state.',
        options: ['--json'],
      },
      {
        command: 'ekkos agent create --tag <tag>',
        description: 'Create a new remote session.',
        options: ['--path <path>', '--json'],
      },
      {
        command: 'ekkos agent send <session-id> <message>',
        description: 'Send a message to a session.',
        options: ['--wait', '--json'],
      },
      {
        command: 'ekkos agent history <session-id>',
        description: 'Read session message history.',
        options: ['--limit <n>', '--json'],
      },
      {
        command: 'ekkos agent stop <session-id>',
        description: 'Stop a remote session.',
      },
      {
        command: 'ekkos agent wait <session-id>',
        description: 'Wait until a remote session is idle.',
        options: ['--timeout <seconds>'],
      },
    ],
  },
];

export default function CLIReferencePage() {
  return (
    <DocsLayout>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00f0ff]/10 to-[#ffb800]/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <Terminal className="w-4 h-4" />
            <span>CLI Reference</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">ekkOS CLI Commands</h1>
          <p className="text-xl text-[#7a7a8e] max-w-3xl">
            Public command reference for <code className="bg-[#111118]/60 px-2 py-1 rounded text-[#00f0ff]">@ekkos/cli</code>.
            This page lists user-available commands and options only.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-5 text-white flex items-center gap-3">
            <Download className="w-6 h-6 text-green-400" />
            Install
          </h2>
          <CopyBlock code="npm install -g @ekkos/cli@latest" className="text-[#e8e8f0]" />
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-5 text-white flex items-center gap-3">
            <Zap className="w-6 h-6 text-yellow-400" />
            Quick Start
          </h2>
          <div className="space-y-3">
            <CopyBlock code="npm install -g @ekkos/cli@latest" className="text-[#e8e8f0]" />
            <CopyBlock code="ekkos init" className="text-[#e8e8f0]" />
            <CopyBlock code="ekkos pulse" className="text-[#e8e8f0]" />
          </div>
          <p className="text-sm text-[#7a7a8e] mt-3">
            Use <code className="bg-[#111118]/60 px-1.5 py-0.5 rounded text-[#00f0ff]">ekkos &lt;command&gt; --help</code> for command-level help.
          </p>
        </section>

        {commandGroups.map((group) => {
          const Icon = group.icon;
          return (
            <section key={group.title} className="mb-14">
              <h2 className="text-2xl font-bold mb-2 text-white flex items-center gap-3">
                <Icon className="w-6 h-6 text-[#00f0ff]" />
                {group.title}
              </h2>
              <p className="text-[#7a7a8e] mb-6">{group.description}</p>

              <div className="space-y-4">
                {group.commands.map((cmd) => (
                  <div
                    key={cmd.command}
                    className={`clip-lg border p-5 ${cmd.deprecated
                      ? 'border-amber-500/30 bg-amber-500/5'
                      : 'border-[#1a1a2e] bg-[#111118]/60 backdrop-blur-xl'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <code className="text-[#00f0ff] font-mono text-sm">{cmd.command}</code>
                      {cmd.deprecated && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">
                          deprecated
                        </span>
                      )}
                    </div>

                    <p className="text-[#e8e8f0]/90 text-sm">{cmd.description}</p>

                    {cmd.note && (
                      <p className="text-[#7a7a8e] text-xs mt-2">{cmd.note}</p>
                    )}

                    {cmd.options && cmd.options.length > 0 && (
                      <div className="mt-3 bg-[#0d0d14]/60 clip-md p-3 border border-[#1a1a2e]">
                        <p className="text-[11px] uppercase tracking-wider text-[#4a4a5e] mb-2">Options</p>
                        <ul className="space-y-1">
                          {cmd.options.map((opt) => (
                            <li key={opt}>
                              <code className="text-[#ffb800] text-xs">{opt}</code>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        <section className="border-t border-[#1a1a2e] pt-8">
          <div className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-5 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
            <div>
              <h3 className="text-white font-semibold mb-1">Compatibility Note</h3>
              <p className="text-[#7a7a8e] text-sm">
                Command surface verified from local CLI sources for <code className="text-[#00f0ff]">@ekkos/cli v1.6.3</code>.
                If you upgrade versions, re-check with <code className="text-[#00f0ff]">ekkos --help</code>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
