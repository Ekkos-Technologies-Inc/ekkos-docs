import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import {
  ArrowRight,
  Download,
  Settings,
  Check,
  AlertCircle,
  Zap,
  Shield,
  BarChart3,
  RefreshCw,
  Terminal,
  Wand2,
  Activity,
} from 'lucide-react';

export default function VSCodeExtensionPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <Download className="w-4 h-4" />
            <span>VS Code Extension</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">ekkOS_Connect Extension</h1>
          <p className="text-xl text-[#7a7a8e]">
            Universal AI Memory Gateway &mdash; one-click setup for persistent memory across
            Cursor, Claude Code, VS Code, Windsurf, and Codex.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <p className="text-[#e8e8f0]/90 mb-4">
              <strong className="text-white">ekkOS_Connect</strong> is the official VS Code extension
              that turns any AI coding assistant into one with persistent memory. It auto-configures
              MCP for every supported IDE, provides real-time session diagnostics, and a
              one-click setup wizard.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00f0ff]">v3.0.2</div>
                <div className="text-xs text-[#7a7a8e]">Current Version</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">Free</div>
                <div className="text-xs text-[#7a7a8e]">Beta Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffb800]">6</div>
                <div className="text-xs text-[#7a7a8e]">IDEs Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">32</div>
                <div className="text-xs text-[#7a7a8e]">MCP Tools</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 clip-md bg-[#00f0ff]/20">
                  <BarChart3 className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <h3 className="font-semibold text-white">Activity Dashboard</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm">
                Real-time monitoring of memory operations &mdash; searches, retrievals, forged
                patterns, and directive creation tracked in the sidebar.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 clip-md bg-indigo-500/20">
                  <Zap className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-white">One-Click OAuth</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm">
                Seamless Google OAuth authentication. No manual API key copying &mdash; connect
                your account in one click and start using memory instantly.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 clip-md bg-[#ffb800]/20">
                  <Settings className="w-5 h-5 text-[#ffb800]" />
                </div>
                <h3 className="font-semibold text-white">Auto MCP Deployment</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm">
                One click deploys MCP configuration to Cursor, Claude Code, Claude Desktop,
                Windsurf, Codex, and VS Code Continue.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 clip-md bg-green-500/20">
                  <Activity className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-semibold text-white">Session Context Panel</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm">
                Real-time sidebar showing active sessions, applied patterns, turn count, and
                memory operations as they happen.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 clip-md bg-yellow-500/20">
                  <Wand2 className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-white">Setup Wizard</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm">
                3-gate preflight system checks Claude Code, session support, and MCP configuration. Auto-fixes
                common issues with platform-specific guides.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 clip-md bg-red-500/20">
                  <Shield className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-semibold text-white">Secure Credentials</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm">
                OAuth authentication with optional on-disk key storage (chmod 600). Scoped hook
                keys with strict file permissions.
              </p>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Installation</h2>
          <div className="space-y-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-[#00f0ff]" />
                VS Code / Cursor Marketplace
              </h3>
              <ol className="space-y-3 text-[#7a7a8e] text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-xs">1</span>
                  Open Extensions (<kbd className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-xs">Cmd/Ctrl + Shift + X</kbd>)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-xs">2</span>
                  Search for <code className="bg-[#111118]/60 backdrop-blur-xl px-2 py-0.5 rounded text-[#00f0ff]">ekkOS_Connect</code>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-xs">3</span>
                  Click Install &mdash; works in VS Code, Cursor, and Windsurf
                </li>
              </ol>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#ffb800]" />
                CLI Companion (Optional)
              </h3>
              <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4 font-mono text-sm text-[#e8e8f0]">
                <div className="text-[#4a4a5e] mb-1"># Install the ekkOS CLI globally</div>
                <div>npm install -g @ekkos/cli</div>
                <div className="mt-2 text-[#4a4a5e]"># Launch Claude Code with infinite context</div>
                <div>ekkos run</div>
              </div>
              <p className="text-[#7a7a8e] text-xs mt-3">
                The CLI provides <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">ekkos run</code> for
                infinite context mode with ccDNA compaction. Not required for the extension.
                See the <Link href="/cli-reference" className="text-[#00f0ff] hover:text-[#00f0ff]">CLI Reference</Link> for full documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Getting Started</h2>
          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm">1</span>
                Open the ekkOS Sidebar
              </h3>
              <p className="text-[#7a7a8e] text-sm">
                Click the ekkOS icon in the activity bar (left sidebar) to open the control panel.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm">2</span>
                Connect Your Account
              </h3>
              <p className="text-[#7a7a8e] text-sm">
                Click &ldquo;Connect Account&rdquo; and sign in with Google OAuth. No manual API
                key copying required.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm">3</span>
                Auto MCP Deployment
              </h3>
              <p className="text-[#7a7a8e] text-sm">
                MCP configuration is automatically deployed to all detected IDEs. The sidebar
                shows per-IDE connection status.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm">4</span>
                Setup Project Rules (Optional)
              </h3>
              <p className="text-[#7a7a8e] text-sm">
                Run <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 rounded text-[#00f0ff]">ekkOS: Setup Rules for Current Project</code> to
                deploy <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">.claude.md</code> and{' '}
                <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">.cursorrules</code> to your workspace.
              </p>
            </div>
          </div>
        </section>

        {/* Two Installation Paths */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Claude Code: Two Modes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#00f0ff]/20 clip-lg p-6">
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-[#00f0ff]/10 text-xs text-[#00f0ff] mb-4">
                Recommended
              </div>
              <h3 className="font-bold text-white text-lg mb-2">ekkos run</h3>
              <p className="text-[#7a7a8e] text-sm mb-4">Infinite Context Mode</p>
              <ul className="space-y-2 text-[#7a7a8e] text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Infinite context via ccDNA compaction
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Proxy routing through mcp.ekkos.dev
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Auto-clear + auto-continue
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Zero knowledge loss on compaction
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Full hooks, skills &amp; MCP tools
                </li>
              </ul>
              <div className="mt-4 bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 font-mono text-xs text-[#e8e8f0]/90">
                npx @ekkos/cli run
              </div>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-[#111118]/60 backdrop-blur-xl text-xs text-[#7a7a8e] mb-4">
                Standard
              </div>
              <h3 className="font-bold text-white text-lg mb-2">Vanilla Claude</h3>
              <p className="text-[#7a7a8e] text-sm mb-4">Standard 200k Window</p>
              <ul className="space-y-2 text-[#7a7a8e] text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ffb800]" />
                  Standard 200k token context
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ffb800]" />
                  Direct Anthropic API calls
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ffb800]" />
                  Full hooks, skills &amp; MCP tools
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ffb800]" />
                  Patterns, directives &amp; recall
                </li>
                <li className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400" />
                  No auto-compaction
                </li>
              </ul>
              <div className="mt-4 bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 font-mono text-xs text-[#e8e8f0]/90">
                brew install claude
              </div>
            </div>
          </div>
          <p className="text-[#4a4a5e] text-xs mt-3">
            Both paths share hooks (<code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">~/.claude/hooks/</code>),
            skills (<code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">~/.claude/skills/</code>), and MCP
            configuration. Switch between them freely.
          </p>
        </section>

        {/* Supported IDEs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Supported IDEs</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#111118]/60 backdrop-blur-xl">
                <tr>
                  <th className="text-left p-4 text-white font-medium">IDE</th>
                  <th className="text-left p-4 text-white font-medium">Config Location</th>
                  <th className="text-left p-4 text-white font-medium">Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-4 text-[#e8e8f0]/90">Cursor</td>
                  <td className="p-4 text-[#7a7a8e] font-mono text-xs">~/.cursor/mcp.json</td>
                  <td className="p-4 text-[#7a7a8e]">JSON</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#e8e8f0]/90">Claude Code CLI</td>
                  <td className="p-4 text-[#7a7a8e] font-mono text-xs">~/.claude/settings.json</td>
                  <td className="p-4 text-[#7a7a8e]">JSON</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#e8e8f0]/90">Claude Desktop</td>
                  <td className="p-4 text-[#7a7a8e] font-mono text-xs">~/Library/Application Support/Claude/</td>
                  <td className="p-4 text-[#7a7a8e]">JSON</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#e8e8f0]/90">Windsurf</td>
                  <td className="p-4 text-[#7a7a8e] font-mono text-xs">~/.codeium/windsurf/mcp_config.json</td>
                  <td className="p-4 text-[#7a7a8e]">JSON</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#e8e8f0]/90">Codex CLI</td>
                  <td className="p-4 text-[#7a7a8e] font-mono text-xs">~/.codex/config.toml</td>
                  <td className="p-4 text-[#7a7a8e]">TOML</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#e8e8f0]/90">VS Code (Continue)</td>
                  <td className="p-4 text-[#7a7a8e] font-mono text-xs">Continue extension config</td>
                  <td className="p-4 text-[#7a7a8e]">JSON</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Commands */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">All Commands</h2>

          {/* Account & Connection */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-[#4a4a5e] uppercase tracking-wider mb-3">Account &amp; Connection</h3>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs w-1/2">ekkOS: Connect Account</td>
                    <td className="p-3 text-[#7a7a8e]">Start OAuth flow and authenticate</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Disconnect Account</td>
                    <td className="p-3 text-[#7a7a8e]">Remove credentials and sign out</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Open Sidebar</td>
                    <td className="p-3 text-[#7a7a8e]">Open the ekkOS control panel</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Open Dashboard</td>
                    <td className="p-3 text-[#7a7a8e]">Open platform.ekkos.dev</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Refresh Status</td>
                    <td className="p-3 text-[#7a7a8e]">Refresh connection and activity status</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Deployment */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-[#4a4a5e] uppercase tracking-wider mb-3">Deployment</h3>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs w-1/2">ekkOS: Deploy MCP Config to All IDEs</td>
                    <td className="p-3 text-[#7a7a8e]">Deploy MCP configuration everywhere</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Deploy AI Instructions to Project</td>
                    <td className="p-3 text-[#7a7a8e]">Deploy .claude.md and .cursorrules</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Deploy Custom Agents to Claude Code</td>
                    <td className="p-3 text-[#7a7a8e]">Deploy agent plugins to ~/.claude/</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Setup Rules for Current Project</td>
                    <td className="p-3 text-[#7a7a8e]">Setup ekkOS rules in workspace</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Setup Global Hooks</td>
                    <td className="p-3 text-[#7a7a8e]">One-time global hooks for all projects</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Validate Templates</td>
                    <td className="p-3 text-[#7a7a8e]">Validate template files for correctness</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Setup & Diagnostics */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-[#4a4a5e] uppercase tracking-wider mb-3">Setup &amp; Diagnostics</h3>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs w-1/2">ekkOS: Setup Wizard (Recommended)</td>
                    <td className="p-3 text-[#7a7a8e]">One-button setup with auto-fix</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Run System Check</td>
                    <td className="p-3 text-[#7a7a8e]">3-gate preflight (Claude, Session, MCP)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: macOS Setup Guide</td>
                    <td className="p-3 text-[#7a7a8e]">Platform-specific setup instructions</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Windows Setup Guide</td>
                    <td className="p-3 text-[#7a7a8e]">Windows-specific setup + quick fix</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Linux Setup Guide</td>
                    <td className="p-3 text-[#7a7a8e]">Linux-specific setup instructions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Session Context */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-[#4a4a5e] uppercase tracking-wider mb-3">Session Context</h3>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs w-1/2">ekkOS: Show Session Context</td>
                    <td className="p-3 text-[#7a7a8e]">Open session context panel</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Refresh Session Context</td>
                    <td className="p-3 text-[#7a7a8e]">Refresh session data</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00f0ff] font-mono text-xs">ekkOS: Focus Active Session</td>
                    <td className="p-3 text-[#7a7a8e]">Jump to the active session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Configuration</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#111118]/60 backdrop-blur-xl">
                <tr>
                  <th className="text-left p-4 text-white font-medium">Setting</th>
                  <th className="text-left p-4 text-white font-medium">Default</th>
                  <th className="text-left p-4 text-white font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-4 text-[#00f0ff] font-mono text-xs">ekkos.apiUrl</td>
                  <td className="p-4 text-[#7a7a8e] font-mono text-xs">https://mcp.ekkos.dev</td>
                  <td className="p-4 text-[#7a7a8e]">ekkOS API endpoint</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#00f0ff] font-mono text-xs">ekkos.platformUrl</td>
                  <td className="p-4 text-[#7a7a8e] font-mono text-xs">https://platform.ekkos.dev</td>
                  <td className="p-4 text-[#7a7a8e]">Platform dashboard URL</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#00f0ff] font-mono text-xs">ekkos.autoDeployMcp</td>
                  <td className="p-4 text-[#7a7a8e] font-mono text-xs">true</td>
                  <td className="p-4 text-[#7a7a8e]">Auto-deploy MCP after authentication</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#00f0ff] font-mono text-xs">ekkos.showStatusBar</td>
                  <td className="p-4 text-[#7a7a8e] font-mono text-xs">true</td>
                  <td className="p-4 text-[#7a7a8e]">Show ekkOS status bar item</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#00f0ff] font-mono text-xs">ekkos.autoSetup</td>
                  <td className="p-4 text-[#7a7a8e] font-mono text-xs">true</td>
                  <td className="p-4 text-[#7a7a8e]">Auto-setup rules in new workspaces</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#00f0ff] font-mono text-xs">ekkos.allowDiskApiKey</td>
                  <td className="p-4 text-[#7a7a8e] font-mono text-xs">true</td>
                  <td className="p-4 text-[#7a7a8e]">Store scoped hook key on disk (chmod 600)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dashboard Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Sidebar Panels</h2>
          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                Connect Panel
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                Main dashboard showing account status, setup score, IDE detection, and quick
                actions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3">
                  <div className="text-lg font-bold text-[#ffb800]">Searches</div>
                  <div className="text-xs text-[#7a7a8e]">Memory queries</div>
                </div>
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3">
                  <div className="text-lg font-bold text-green-400">Retrieved</div>
                  <div className="text-xs text-[#7a7a8e]">Patterns found</div>
                </div>
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3">
                  <div className="text-lg font-bold text-yellow-400">Forged</div>
                  <div className="text-xs text-[#7a7a8e]">Patterns stored</div>
                </div>
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3">
                  <div className="text-lg font-bold text-[#00f0ff]">Directives</div>
                  <div className="text-xs text-[#7a7a8e]">Rules created</div>
                </div>
              </div>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#ffb800]" />
                Session Context Panel
              </h3>
              <p className="text-[#7a7a8e] text-sm">
                Real-time view of active sessions with turn count, applied patterns, file changes,
                and memory operations. Updates live as you work.
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Troubleshooting</h2>
          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">MCP not loading in your IDE?</h4>
                  <ul className="text-[#7a7a8e] text-sm space-y-1">
                    <li>&bull; Check Node.js version: <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">node --version</code> (must be 18+)</li>
                    <li>&bull; Run <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">ekkOS: Run System Check</code> for 3-gate diagnostics</li>
                    <li>&bull; Verify config exists at the correct path (see IDE table above)</li>
                    <li>&bull; Restart your IDE completely after deployment</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Extension not detecting installed IDEs?</h4>
                  <ul className="text-[#7a7a8e] text-sm space-y-1">
                    <li>&bull; Verify IDE installation paths match OS defaults</li>
                    <li>&bull; Run the Setup Wizard for auto-detection and fix</li>
                    <li>&bull; On Windows, use the Windows Quick Fix command</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">CLI diagnostics</h4>
                  <div className="mt-2 bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 font-mono text-xs text-[#e8e8f0]/90">
                    <div>npx @ekkos/cli doctor        <span className="text-[#4a4a5e]"># Run 3-gate check</span></div>
                    <div>npx @ekkos/cli doctor --json  <span className="text-[#4a4a5e]"># Machine-readable</span></div>
                    <div>npx @ekkos/cli doctor --fix   <span className="text-[#4a4a5e]"># Auto-fix safe issues</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="https://marketplace.visualstudio.com/items?itemName=ekkostech.ekkos-connect"
               target="_blank" rel="noopener noreferrer"
               className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4 hover:bg-[#111118]/60 transition-colors">
              <div className="font-medium text-white mb-1">VS Code Marketplace</div>
              <div className="text-sm text-[#7a7a8e]">Install from marketplace</div>
            </a>
            <a href="https://github.com/ekkostech/ekkos-connect"
               target="_blank" rel="noopener noreferrer"
               className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4 hover:bg-[#111118]/60 transition-colors">
              <div className="font-medium text-white mb-1">GitHub Repository</div>
              <div className="text-sm text-[#7a7a8e]">Source code &amp; issues</div>
            </a>
            <a href="https://discord.gg/w2JGepq9qZ"
               target="_blank" rel="noopener noreferrer"
               className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4 hover:bg-[#111118]/60 transition-colors">
              <div className="font-medium text-white mb-1">Discord Community</div>
              <div className="text-sm text-[#7a7a8e]">Get help &amp; feedback</div>
            </a>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">All 32 MCP Tools</h3>
              <p className="text-sm text-[#7a7a8e]">Complete reference for every memory tool</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/claude-code" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Claude Code Integration</h3>
              <p className="text-sm text-[#7a7a8e]">Deep dive into Claude Code + ekkOS</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
