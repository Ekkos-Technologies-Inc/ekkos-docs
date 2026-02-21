import { AlertCircle, ArrowRight, Check, Package, Settings, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../components/DocsLayout';
import CopyBlock from '../components/CopyBlock';

export default function InstallationPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400 mb-6">
            <Package className="w-4 h-4" />
            <span>Installation</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Installation</h1>
          <p className="text-xl text-[#7a7a8e]">
            Install the ekkOS CLI or MCP server for your development environment.
          </p>
        </div>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Prerequisites</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#e8e8f0]/90">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span><strong className="text-white">Node.js 18+</strong> — Required for the CLI and MCP server</span>
              </li>
              <li className="flex items-center gap-3 text-[#e8e8f0]/90">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span><strong className="text-white">npm</strong> — Included with Node.js</span>
              </li>
              <li className="flex items-center gap-3 text-[#e8e8f0]/90">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span><strong className="text-white">Claude Code, Cursor, or Windsurf</strong> — At least one AI coding tool</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Installation Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Installation Methods</h2>

          <div className="space-y-6">
            {/* CLI (Recommended) */}
            <div className="bg-gradient-to-br from-[#00f0ff]/10 to-transparent border-2 border-[#00f0ff]/30 clip-lg p-6 relative">
              <div className="absolute top-4 right-4">
                <span className="px-2 py-0.5 text-xs bg-[#00f0ff]/20 text-[#00f0ff] rounded font-bold">RECOMMENDED</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-5 h-5 text-[#00f0ff]" />
                <h3 className="font-semibold text-white text-lg">ekkOS CLI</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm mb-4">
                The CLI provides everything you need: automated setup, API proxy, hooks, session tracking, context management, and usage analytics. This is the recommended way to use ekkOS with Claude Code.
              </p>
              <CopyBlock code="npm install -g @ekkos/cli" />
              <div className="mt-4 space-y-2">
                <p className="text-[#7a7a8e] text-sm">After installing, run:</p>
                <CopyBlock code={`ekkos init    # authenticate & configure your IDEs
ekkos run     # launch Claude Code with memory`} />
              </div>
              <div className="mt-4 bg-[#0d0d14]/40 clip-md p-4">
                <p className="text-xs text-[#7a7a8e] mb-2 font-semibold uppercase tracking-wider">What the CLI deploys</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-[#e8e8f0]/70">
                  <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#00f0ff]" /> MCP server config</span>
                  <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#00f0ff]" /> Hook scripts</span>
                  <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#00f0ff]" /> Skills & agents</span>
                  <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#00f0ff]" /> CLAUDE.md instructions</span>
                  <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#00f0ff]" /> API proxy routing</span>
                  <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#00f0ff]" /> Context eviction</span>
                </div>
              </div>
            </div>

            {/* MCP Server (NPX) */}
            <div className="bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/20 clip-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white text-lg">MCP Server Only (NPX)</h3>
                <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded">Zero install</span>
              </div>
              <p className="text-[#7a7a8e] text-sm mb-4">
                If you only want the MCP memory tools (no proxy, no hooks, no context management), you can configure the MCP server directly in your IDE. No global install needed — npx runs it on demand.
              </p>
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-sm font-mono text-green-400 overflow-x-auto">
npx @ekkos/mcp-server</pre>
              <p className="text-[#7a7a8e] text-sm mt-4">
                See the <Link href="/quickstart#manual-setup" className="text-[#00f0ff] hover:underline">manual setup guide</Link> for IDE-specific config files.
              </p>
            </div>

            {/* Global MCP Server */}
            <div className="bg-gradient-to-br from-[#ffb800]/5 to-transparent border border-[#ffb800]/20 clip-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-5 h-5 text-[#ffb800]" />
                <h3 className="font-semibold text-white text-lg">MCP Server (Global Install)</h3>
                <span className="px-2 py-0.5 text-xs bg-[#ffb800]/20 text-[#ffb800] rounded">Faster startup</span>
              </div>
              <p className="text-[#7a7a8e] text-sm mb-4">
                Install the MCP server globally for faster startup (avoids npx download each time):
              </p>
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-sm font-mono text-[#ffb800] overflow-x-auto">
npm install -g @ekkos/mcp-server</pre>
            </div>

            {/* SDK */}
            <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 clip-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white text-lg">TypeScript SDK</h3>
                <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-400 rounded">Custom integration</span>
              </div>
              <p className="text-[#7a7a8e] text-sm mb-4">
                For building custom integrations or using ekkOS memory in your own applications:
              </p>
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-sm font-mono text-purple-400 overflow-x-auto">
npm install @ekkos/sdk</pre>
              <p className="text-[#7a7a8e] text-sm mt-4">
                The SDK provides typed access to all ekkOS APIs for Node.js/TypeScript applications.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Feature Comparison</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1a1a2e]">
                  <th className="px-6 py-3 text-left text-[#7a7a8e] font-medium">Feature</th>
                  <th className="px-6 py-3 text-center text-[#00f0ff] font-medium">CLI</th>
                  <th className="px-6 py-3 text-center text-green-400 font-medium">MCP Only</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Memory tools (Search, Forge, Directive...)', true, true],
                  ['Automatic IDE detection & config', true, false],
                  ['API proxy (cost tracking, cache optimization)', true, false],
                  ['Intelligent context eviction at ~80%', true, false],
                  ['Session naming & tracking', true, false],
                  ['Hooks (auto-capture on every turn)', true, false],
                  ['Skills & agents deployment', true, false],
                  ['Usage analytics (daily/weekly/monthly)', true, false],
                  ['Multi-session / swarm support', true, false],
                  ['Works with Cursor & Windsurf', true, true],
                ].map(([feature, cli, mcp], i) => (
                  <tr key={i} className="border-b border-[#1a1a2e]/50">
                    <td className="px-6 py-3 text-[#e8e8f0]/90">{feature as string}</td>
                    <td className="px-6 py-3 text-center">
                      {cli ? <Check className="w-4 h-4 text-[#00f0ff] inline" /> : <span className="text-[#4a4a5e]">—</span>}
                    </td>
                    <td className="px-6 py-3 text-center">
                      {mcp ? <Check className="w-4 h-4 text-green-400 inline" /> : <span className="text-[#4a4a5e]">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Platform Notes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Platform Notes</h2>
          <p className="text-[#7a7a8e] mb-6">
            ekkOS works on macOS, Windows, and Linux. The CLI handles platform differences automatically, but here are some things to know.
          </p>

          <div className="space-y-4">
            {/* macOS */}
            <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg">🍎</span>
                <h3 className="font-semibold text-white text-lg">macOS</h3>
                <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded">Full support</span>
              </div>
              <ul className="space-y-2 text-sm text-[#e8e8f0]/80 ml-8">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Full session tracking from startup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Hooks deploy as <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-[#00f0ff]">.sh</code> scripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Config paths: <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-[#00f0ff]">~/.claude/</code>, <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-[#00f0ff]">~/.ekkos/</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Install Node.js via <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-[#00f0ff]">brew install node</code> or <Link href="https://nodejs.org" className="text-[#00f0ff] hover:underline">nodejs.org</Link></span>
                </li>
              </ul>
            </div>

            {/* Windows */}
            <div className="bg-gradient-to-br from-[#ffb800]/5 to-transparent border border-[#ffb800]/20 clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg">🪟</span>
                <h3 className="font-semibold text-white text-lg">Windows</h3>
                <span className="px-2 py-0.5 text-xs bg-[#ffb800]/20 text-[#ffb800] rounded">Supported</span>
              </div>
              <ul className="space-y-2 text-sm text-[#e8e8f0]/80 ml-8">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Hooks deploy as <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-[#ffb800]">.cmd</code> batch scripts (handled automatically)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Native Windows shell integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>If you see <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-yellow-400">ENOENT</code> errors, ensure <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-[#ffb800]">claude</code> is in your PATH or install Claude Code globally</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Session binding may use fallback mode — all features still work, session naming is slightly delayed</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Config paths: <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-[#ffb800]">%USERPROFILE%\.claude\</code>, <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-[#ffb800]">%USERPROFILE%\.ekkos\</code></span>
                </li>
              </ul>
            </div>

            {/* Linux */}
            <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg">🐧</span>
                <h3 className="font-semibold text-white text-lg">Linux</h3>
                <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded">Full support</span>
              </div>
              <ul className="space-y-2 text-sm text-[#e8e8f0]/80 ml-8">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Full session tracking from startup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Hooks deploy as <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-purple-400">.sh</code> scripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Config paths: <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-purple-400">~/.claude/</code>, <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-purple-400">~/.ekkos/</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Headless/SSH environments: use <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-purple-400">ekkos init --key YOUR_KEY</code> to skip browser auth</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Remote setup: use <code className="bg-[#111118]/60 px-1 py-0.5 rounded text-purple-400">ekkos setup-remote</code> for headless server deployments</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Environment Variables */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Environment Variables</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1a1a2e]">
                  <th className="px-6 py-3 text-left text-[#7a7a8e] font-medium">Variable</th>
                  <th className="px-6 py-3 text-left text-[#7a7a8e] font-medium">Required</th>
                  <th className="px-6 py-3 text-left text-[#7a7a8e] font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="px-6 py-3"><code className="text-[#00f0ff]">EKKOS_API_KEY</code></td>
                  <td className="px-6 py-3 text-green-400">Yes*</td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">Your ekkOS API key. <span className="text-[#7a7a8e]">*CLI handles this automatically via <code>ekkos init</code></span></td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="px-6 py-3"><code className="text-[#00f0ff]">EKKOS_API_URL</code></td>
                  <td className="px-6 py-3 text-[#4a4a5e]">No</td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">API endpoint (default: https://mcp.ekkos.dev)</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="px-6 py-3"><code className="text-[#00f0ff]">EKKOS_PROXY_MODE</code></td>
                  <td className="px-6 py-3 text-[#4a4a5e]">No</td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">Proxy mode: <code className="text-[#ffb800]">passthrough</code> (default) or <code className="text-[#ffb800]">active</code></td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="px-6 py-3"><code className="text-[#00f0ff]">EKKOS_DISABLE_EVICTION</code></td>
                  <td className="px-6 py-3 text-[#4a4a5e]">No</td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">Set to <code className="text-[#ffb800]">1</code> to disable automatic context eviction</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="px-6 py-3"><code className="text-[#00f0ff]">EKKOS_SMART_EVICTION</code></td>
                  <td className="px-6 py-3 text-[#4a4a5e]">No</td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">Set to <code className="text-[#ffb800]">1</code> to enable AI-powered intelligent context compression</td>
                </tr>
                <tr>
                  <td className="px-6 py-3"><code className="text-[#00f0ff]">EKKOS_DEBUG</code></td>
                  <td className="px-6 py-3 text-[#4a4a5e]">No</td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">Enable debug logging (set to <code className="text-[#ffb800]">true</code>)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Verify */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Verify Installation</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 space-y-4">
            <p className="text-[#e8e8f0]/90">If you installed the CLI:</p>
            <CopyBlock code="ekkos doctor" />
            <p className="text-[#7a7a8e] text-sm">
              This runs diagnostic checks on Node.js, Claude Code, session support, hooks, and MCP configuration.
            </p>

            <div className="border-t border-[#1a1a2e] pt-4 mt-4">
              <p className="text-[#e8e8f0]/90">If you installed the MCP server only:</p>
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-sm font-mono text-[#e8e8f0]/90 overflow-x-auto mt-2">
EKKOS_API_KEY=your_key npx @ekkos/mcp-server</pre>
              <p className="text-[#7a7a8e] text-sm mt-2">
                You should see output indicating the server is ready to accept MCP connections.
              </p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 clip-md p-4 mt-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-[#e8e8f0]/90 text-sm">
                  The MCP server is designed to be started by your AI tool, not run standalone. The test above just verifies the package works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/quickstart" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-green-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-sm text-[#7a7a8e]">Get up and running in 2 minutes</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-green-400 group-hover:gap-2 transition-all">
                Read guide <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/cli-reference" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">CLI Reference</h3>
              <p className="text-sm text-[#7a7a8e]">All 15 commands with flags & examples</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                View reference <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/claude-code" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Claude Code Setup</h3>
              <p className="text-sm text-[#7a7a8e]">Detailed Claude Code integration guide</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                Configure <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
