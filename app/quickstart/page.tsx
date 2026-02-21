import { AlertCircle, ArrowRight, Check, CheckCircle, ExternalLink, Terminal, Zap, Wind, Cpu, Layers } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../components/DocsLayout';
import CopyBlock from '../components/CopyBlock';

export default function QuickStartPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400 mb-6">
            <Zap className="w-4 h-4" />
            <span>2 minute setup</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Quick Start</h1>
          <p className="text-xl text-[#7a7a8e]">
            Get ekkOS memory working with your AI coding tool in under 2 minutes.
          </p>
        </div>

        {/* Two Paths */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Choose Your Setup Path</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#00f0ff]/10 to-transparent border-2 border-[#00f0ff]/30 clip-lg p-6 relative">
              <div className="absolute top-3 right-3">
                <span className="px-2 py-0.5 text-xs bg-[#00f0ff]/20 text-[#00f0ff] rounded font-bold">RECOMMENDED</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Terminal className="w-6 h-6 text-[#00f0ff]" />
                <h3 className="text-lg font-bold text-white">ekkOS CLI</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm mb-4">
                Two commands. Automatic setup for Claude Code, Cursor, and Windsurf. Includes hooks, context management, and session tracking.
              </p>
              <a href="#cli-setup" className="inline-flex items-center gap-1 text-sm text-[#00f0ff] hover:gap-2 transition-all">
                Start here <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-[#ffb800]/5 to-transparent border border-[#ffb800]/20 clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="w-6 h-6 text-[#ffb800]" />
                <h3 className="text-lg font-bold text-white">Manual MCP Config</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm mb-4">
                Add the MCP server config to your IDE manually. Good for custom setups or environments where CLI installation isn&apos;t possible.
              </p>
              <a href="#manual-setup" className="inline-flex items-center gap-1 text-sm text-[#ffb800] hover:gap-2 transition-all">
                Manual setup <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ──────────── CLI Setup Path ──────────── */}
        <section id="cli-setup" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-7 h-7 text-[#00f0ff]" />
            <h2 className="text-3xl font-bold text-white">CLI Setup</h2>
            <span className="px-2 py-0.5 text-xs bg-[#00f0ff]/20 text-[#00f0ff] rounded font-bold">RECOMMENDED</span>
          </div>

          {/* Step 1: Install */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">Install the CLI</h3>
                <p className="text-[#7a7a8e] mt-1">One-time global install</p>
              </div>
            </div>
            <div className="ml-14">
              <CopyBlock code="npm install -g @ekkos/cli" />
            </div>
          </div>

          {/* Step 2: Init */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">Initialize</h3>
                <p className="text-[#7a7a8e] mt-1">Authenticates your account, detects your IDEs, deploys everything</p>
              </div>
            </div>
            <div className="ml-14 space-y-4">
              <CopyBlock code="ekkos init" />
              <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
                <p className="text-[#7a7a8e] text-sm mb-3">This will:</p>
                <ul className="space-y-2 text-sm text-[#e8e8f0]/80">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Open your browser for authentication (device code flow)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Detect installed IDEs (Claude Code, Cursor, Windsurf)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Deploy MCP server config, hooks, skills, agents, and CLAUDE.md
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Verify everything works
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3: Run */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">Start coding with memory</h3>
                <p className="text-[#7a7a8e] mt-1">Launch Claude Code with ekkOS memory active</p>
              </div>
            </div>
            <div className="ml-14 space-y-4">
              <CopyBlock code="ekkos run" />
              <p className="text-[#7a7a8e] text-sm">
                Or just type <code className="bg-[#111118]/60 backdrop-blur-xl px-2 py-1 rounded text-[#00f0ff]">ekkos</code> — it defaults to <code className="bg-[#111118]/60 backdrop-blur-xl px-2 py-1 rounded text-[#00f0ff]">ekkos run</code>.
              </p>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-sm font-mono text-[#e8e8f0]/80 space-y-1">
                <p className="text-[#00f0ff]">  ekkOS_Pulse v1.1.9</p>
                <p className="text-[#7a7a8e]">  ─────────────────────</p>
                <p>  Session: <span className="text-[#ffb800]">cosmic-penguin-runs</span></p>
                <p>  Memory:  <span className="text-green-400">connected</span> (32 tools)</p>
                <p>  Proxy:   <span className="text-green-400">active</span> (proxy.ekkos.dev)</p>
                <p className="text-[#7a7a8e]">  </p>
                <p className="text-green-400">  Launching Claude Code...</p>
              </div>
            </div>
          </div>

          {/* What ekkos run gives you */}
          <div className="ml-14">
            <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 clip-lg p-6">
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                What <code className="text-[#00f0ff]">ekkos run</code> gives you over vanilla Claude Code
              </h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#e8e8f0]/80">Persistent memory across sessions</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#e8e8f0]/80">API proxy for context management</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#e8e8f0]/80">Automatic context eviction at ~80%</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#e8e8f0]/80">Session naming & tracking</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#e8e8f0]/80">Token usage analytics</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#e8e8f0]/80">Cache-optimized routing (saves ~40%)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────── Manual MCP Setup Path ──────────── */}
        <section id="manual-setup" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="w-7 h-7 text-[#ffb800]" />
            <h2 className="text-3xl font-bold text-white">Manual MCP Setup</h2>
          </div>

          <p className="text-[#7a7a8e] mb-6">
            If you prefer manual configuration or can&apos;t install the CLI, add the MCP server config directly to your IDE.
          </p>

          {/* Step 1: Get API Key */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#ffb800]/20 flex items-center justify-center text-[#ffb800] font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Get Your API Key</h3>
                <p className="text-[#7a7a8e] mt-1">Sign up at <Link href="https://platform.ekkos.dev" className="text-[#00f0ff] hover:underline">platform.ekkos.dev</Link> and generate an API key from Settings</p>
              </div>
            </div>
          </div>

          {/* Step 2: Configure */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#ffb800]/20 flex items-center justify-center text-[#ffb800] font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Add MCP Server Config</h3>
                <p className="text-[#7a7a8e] mt-1">Choose your IDE below</p>
              </div>
            </div>

            <div className="ml-14 space-y-6">
              {/* Claude Code Config */}
              <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-[#00f0ff]/20 flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-[#00f0ff]" />
                  <h4 className="font-semibold text-white">Claude Code</h4>
                  <span className="text-xs text-[#7a7a8e]">~/.claude/settings.json</span>
                </div>
                <div className="p-6">
                  <CopyBlock code={`{
  "mcpServers": {
    "ekkos-memory": {
      "command": "npx",
      "args": ["-y", "@ekkos/mcp-server"],
      "env": {
        "EKKOS_API_KEY": "your_api_key_here"
      }
    }
  }
}`} />
                </div>
              </div>

              {/* Cursor Config */}
              <div className="bg-gradient-to-br from-[#ffb800]/5 to-transparent border border-[#ffb800]/20 clip-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-[#ffb800]/20 flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-[#ffb800]" />
                  <h4 className="font-semibold text-white">Cursor</h4>
                  <span className="text-xs text-[#7a7a8e]">.cursor/mcp.json (in project root)</span>
                </div>
                <div className="p-6">
                  <CopyBlock code={`{
  "mcpServers": {
    "ekkos-memory": {
      "command": "npx",
      "args": ["-y", "@ekkos/mcp-server"],
      "env": {
        "EKKOS_API_KEY": "your_api_key_here"
      }
    }
  }
}`} />
                </div>
              </div>

              {/* Windsurf Config */}
              <div className="bg-gradient-to-br from-teal-500/5 to-transparent border border-teal-500/20 clip-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-teal-500/20 flex items-center gap-3">
                  <Wind className="w-5 h-5 text-teal-400" />
                  <h4 className="font-semibold text-white">Windsurf</h4>
                  <span className="text-xs text-[#7a7a8e]">.windsurf/mcp.json (in project root)</span>
                </div>
                <div className="p-6">
                  <CopyBlock code={`{
  "mcpServers": {
    "ekkos-memory": {
      "command": "npx",
      "args": ["-y", "@ekkos/mcp-server"],
      "env": {
        "EKKOS_API_KEY": "your_api_key_here"
      }
    }
  }
}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Restart */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#ffb800]/20 flex items-center justify-center text-[#ffb800] font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Restart Your IDE</h3>
                <p className="text-[#7a7a8e] mt-1">Close and reopen to load the MCP server</p>
              </div>
            </div>
            <div className="ml-14">
              <div className="bg-yellow-500/10 border border-yellow-500/20 clip-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-[#e8e8f0]/90 text-sm">
                    You must fully restart your IDE for the MCP configuration to take effect. A window reload is not always sufficient.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-14">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <p className="text-[#7a7a8e] text-sm">
                <strong className="text-white">Note:</strong> Manual MCP setup gives you memory tools (Search, Forge, Directive, etc.) but does <em>not</em> include the API proxy, context eviction, hooks, or session tracking. For those features, use the <a href="#cli-setup" className="text-[#00f0ff] hover:underline">CLI setup</a> above.
              </p>
            </div>
          </div>
        </section>

        {/* Verify */}
        <section className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Verify It&apos;s Working</h2>
              <p className="text-[#7a7a8e] mt-1">Test that ekkOS memory is connected</p>
            </div>
          </div>

          <div className="ml-14 space-y-4">
            <p className="text-[#e8e8f0]/90">
              Ask your AI assistant any of these prompts to confirm memory is active:
            </p>

            <div className="space-y-3">
              <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
                <code className="text-[#ffb800]">&quot;Search my memory for previous solutions&quot;</code>
              </div>
              <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
                <code className="text-[#ffb800]">&quot;Remember that we use PostgreSQL for the database&quot;</code>
              </div>
              <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
                <code className="text-[#ffb800]">&quot;What patterns do you know about authentication?&quot;</code>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 clip-lg p-4 mt-6">
              <div className="flex items-center gap-2 text-green-400 font-medium mb-2">
                <CheckCircle className="w-5 h-5" />
                Success Indicators
              </div>
              <ul className="space-y-1 text-[#7a7a8e] text-sm ml-7">
                <li>&bull; AI mentions using ekkOS or memory tools</li>
                <li>&bull; You see tool calls like <code className="text-green-400">ekkOS_Search</code>, <code className="text-green-400">ekkOS_Forge</code>, or <code className="text-green-400">ekkOS_Conflict</code></li>
                <li>&bull; AI recalls information from previous sessions</li>
                <li>&bull; Footer shows session name and turn number (CLI path only)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">What Can I Do With ekkOS?</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-[#00f0ff]">ekkOS_Search</span> — Search Memory
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-3">
                Your AI automatically searches its memory before answering technical questions. It recalls past solutions, architecture decisions, and known gotchas.
              </p>
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-sm font-mono text-[#e8e8f0]/90">
{`"How did we handle authentication last time?"
"Search memory for database connection patterns"
"What do we know about deploying this project?"`}</pre>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-[#ffb800]">ekkOS_Forge</span> — Save Patterns
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-3">
                When your AI solves a non-trivial problem, it automatically saves the solution as a reusable pattern. You can also tell it to remember things explicitly.
              </p>
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-sm font-mono text-[#e8e8f0]/90">
{`"Remember that our API always returns typed responses"
"Save this fix as a pattern for future reference"
"Never use process.exit() in our codebase"`}</pre>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-pink-400">ekkOS_Directive</span> — Set Rules
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-3">
                Define permanent rules that apply across all sessions. Your AI will follow these rules every time.
              </p>
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-sm font-mono text-[#e8e8f0]/90">
{`"Always use TypeScript strict mode"
"Never commit directly to main"
"Prefer an ORM over raw SQL"`}</pre>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/concepts/how-it-works" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">How It Works</h3>
              <p className="text-sm text-[#7a7a8e]">Understand the 11-layer memory architecture</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/cli-reference" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">CLI Reference</h3>
              <p className="text-sm text-[#7a7a8e]">All 15 CLI commands with flags and examples</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                View reference <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">All MCP Tools</h3>
              <p className="text-sm text-[#7a7a8e]">Browse all 32+ memory tools available</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                Browse tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
