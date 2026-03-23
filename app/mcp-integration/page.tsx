import { AlertCircle, ArrowRight, Check, CheckCircle, Code, Terminal } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../components/DocsLayout';
import CopyBlock from '../components/CopyBlock';

export default function MCPIntegrationPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-sm text-pink-400 mb-6">
            <Code className="w-4 h-4" />
            <span>Integration Guide</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Connect Your AI</h1>
          <p className="text-xl text-[#7a7a8e]">
            Give your AI persistent memory in minutes.
          </p>
        </div>

        {/* What is MCP */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What is MCP?</h2>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-6">
            <p className="text-[#e8e8f0]/90 leading-relaxed mb-4">
              <strong className="text-white">Model Context Protocol (MCP)</strong> is an open standard that allows AI assistants
              to connect to external tools. Think of it as a plugin system for AI.
            </p>
            <p className="text-[#e8e8f0]/90 leading-relaxed">
              When you connect Claude Code or Cursor to ekkOS via MCP, they gain the ability to:
            </p>
            <ul className="mt-4 space-y-2 text-[#7a7a8e]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Remember context across sessions
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Learn from successful problem-solving
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Apply proven patterns automatically
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Follow your rules consistently
              </li>
            </ul>
          </div>
        </section>

        {/* Claude Code Setup */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Terminal className="w-6 h-6 text-[#00f0ff]" />
            Claude Code Setup
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">Step 1: Locate your settings file</h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                Claude Code stores its configuration in <code className="bg-[#111118]/60 backdrop-blur-xl px-2 py-1 rounded text-[#00f0ff]">~/.claude/settings.json</code>
              </p>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4">
                <pre className="text-sm text-[#e8e8f0]/90 font-mono"># macOS/Linux
~/.claude/settings.json

# Windows
%USERPROFILE%\.claude\settings.json</pre>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">Step 2: Add ekkOS MCP server</h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                Add this to your settings.json:
              </p>
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
}`} className="text-[#e8e8f0]" />
            </div>

            <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">Step 3: Restart Claude Code</h3>
              <p className="text-[#7a7a8e] text-sm">
                Close your terminal and reopen it. Claude Code will load the MCP server on next launch.
              </p>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 clip-lg p-4">
              <div className="flex items-center gap-2 text-green-400 font-medium mb-2">
                <CheckCircle className="w-5 h-5" />
                Verify Installation
              </div>
              <p className="text-[#7a7a8e] text-sm">
                Ask Claude: <code className="bg-[#111118]/60 backdrop-blur-xl px-2 py-0.5 rounded">"Search my memory for recent patterns"</code>
                — if it uses the memory tools, you're connected.
              </p>
            </div>
          </div>
        </section>

        {/* Cursor Setup */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Code className="w-6 h-6 text-[#ffb800]" />
            Cursor Setup
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#ffb800]/5 to-transparent border border-[#ffb800]/20 clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">Step 1: Create MCP configuration</h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                Create <code className="bg-[#111118]/60 backdrop-blur-xl px-2 py-1 rounded text-[#ffb800]">.cursor/mcp.json</code> in your project root:
              </p>
              <div className="relative">
                <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 overflow-x-auto text-sm text-[#e8e8f0] font-mono">{`{
  "mcpServers": {
    "ekkos-memory": {
      "command": "npx",
      "args": ["-y", "@ekkos/mcp-server"],
      "env": {
        "EKKOS_API_KEY": "your_api_key_here"
      }
    }
  }
}`}</pre>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#ffb800]/5 to-transparent border border-[#ffb800]/20 clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">Step 2: Enable MCP in Cursor Settings</h3>
              <ol className="space-y-2 text-[#7a7a8e] text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#ffb800]/20 flex items-center justify-center text-[#ffb800] text-xs">1</span>
                  Open Cursor Settings (Cmd/Ctrl + ,)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#ffb800]/20 flex items-center justify-center text-[#ffb800] text-xs">2</span>
                  Search for "MCP"
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#ffb800]/20 flex items-center justify-center text-[#ffb800] text-xs">3</span>
                  Enable "Use MCP Servers"
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-br from-[#ffb800]/5 to-transparent border border-[#ffb800]/20 clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">Step 3: Reload Window</h3>
              <p className="text-[#7a7a8e] text-sm">
                Press <kbd className="bg-[#111118]/60 backdrop-blur-xl px-2 py-0.5 rounded text-xs">Cmd/Ctrl + Shift + P</kbd> and run "Reload Window"
              </p>
            </div>
          </div>
        </section>

        {/* What You Can Do */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What You Can Do</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Search Memory
              </h3>
              <p className="text-[#7a7a8e] text-sm">
                "Search my memory for authentication patterns"
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Save Patterns
              </h3>
              <p className="text-[#7a7a8e] text-sm">
                "Remember this solution for next time"
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Set Rules
              </h3>
              <p className="text-[#7a7a8e] text-sm">
                "Always use TypeScript strict mode"
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Recall Conversations
              </h3>
              <p className="text-[#7a7a8e] text-sm">
                "What did we discuss about the database?"
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Troubleshooting</h2>

          <div className="space-y-4">
            <details className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden group">
              <summary className="p-4 cursor-pointer flex items-center justify-between text-white font-medium hover:bg-[#111118]/60">
                <span>MCP server not starting?</span>
                <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-4 pb-4 text-[#7a7a8e] text-sm space-y-2">
                <p>1. Verify Node.js 18+ is installed: <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">node --version</code></p>
                <p>2. Check npx is available: <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">npx --version</code></p>
                <p>3. Try running manually: <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">EKKOS_API_KEY=xxx npx @ekkos/mcp-server</code></p>
              </div>
            </details>

            <details className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden group">
              <summary className="p-4 cursor-pointer flex items-center justify-between text-white font-medium hover:bg-[#111118]/60">
                <span>AI not using memory tools?</span>
                <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-4 pb-4 text-[#7a7a8e] text-sm space-y-2">
                <p>1. Explicitly ask: "Search my memory for..." or "Use ekkOS to..."</p>
                <p>2. Verify the MCP server is connected</p>
                <p>3. Check your API key is valid at <Link href="https://ekkos.dev" className="text-[#00f0ff] hover:underline">ekkos.dev</Link></p>
              </div>
            </details>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Memory Tools</h3>
              <p className="text-sm text-[#7a7a8e]">See all available tools</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/golden-loop" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">How Learning Works</h3>
              <p className="text-sm text-[#7a7a8e]">Patterns improve over time</p>
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
