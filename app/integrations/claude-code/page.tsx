import { AlertCircle, ArrowRight, Check, Settings, Terminal } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../../components/DocsLayout';
import CopyBlock from '../../components/CopyBlock';

export default function ClaudeCodePage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <Terminal className="w-4 h-4" />
            <span>Integration</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Claude Code Integration</h1>
          <p className="text-xl text-[#7a7a8e]">
            Add persistent memory to Anthropic's Claude Code CLI.
          </p>
        </div>

        {/* What is Claude Code */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">About Claude Code</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <p className="text-[#e8e8f0]/90">
              <strong className="text-white">Claude Code</strong> is Anthropic's official CLI tool for using Claude
              in your terminal. It supports MCP (Model Context Protocol), which allows ekkOS to provide
              persistent memory across all your coding sessions.
            </p>
          </div>
        </section>

        {/* Configuration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Configuration</h2>

          <div className="space-y-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#00f0ff]" />
                Step 1: Find your settings file
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                Claude Code stores its configuration at:
              </p>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 font-mono text-sm">
                <div className="text-[#7a7a8e]"># macOS / Linux</div>
                <div className="text-[#00f0ff]">~/.claude/settings.json</div>
                <div className="text-[#7a7a8e] mt-3"># Windows</div>
                <div className="text-[#00f0ff]">%USERPROFILE%\.claude\settings.json</div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#00f0ff]" />
                Step 2: Add ekkOS MCP server
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                Add or merge the following into your settings.json:
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

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#00f0ff]" />
                Step 3: Restart Claude Code
              </h3>
              <p className="text-[#7a7a8e] text-sm">
                Close your terminal and reopen it. Claude Code will automatically load the MCP server.
              </p>
            </div>
          </div>
        </section>

        {/* Get API Key */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Getting Your API Key</h2>
          <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
            <ol className="space-y-3 text-[#e8e8f0]/90">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">1</span>
                <span>Go to <Link href="https://platform.ekkos.dev" className="text-[#00f0ff] hover:underline">platform.ekkos.dev</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">2</span>
                <span>Sign up or log in with GitHub</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">3</span>
                <span>Go to Settings → API Keys</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">4</span>
                <span>Click "Generate New Key"</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Verify */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Verify Installation</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 space-y-4">
            <p className="text-[#e8e8f0]/90">After restarting, ask Claude to use memory:</p>
            <div className="space-y-2">
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#ffb800]">"Search my memory for recent patterns"</code>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#ffb800]">"What do you remember about this project?"</code>
              </div>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 clip-md p-4 mt-4">
              <div className="flex items-center gap-2 text-green-400 font-medium mb-2">
                <Check className="w-5 h-5" />
                Success
              </div>
              <p className="text-[#7a7a8e] text-sm">
                If Claude uses tools like <code className="text-green-400">ekkOS_Search</code>, <code className="text-green-400">ekkOS_Forge</code>, or <code className="text-green-400">ekkOS_Conflict</code>,
                the integration is working.
              </p>
            </div>
          </div>
        </section>

        {/* Available Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Available Memory Tools</h2>
          <div className="grid gap-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
              <code className="text-[#00f0ff] font-mono">ekkOS_Search</code>
              <p className="text-[#7a7a8e] text-sm mt-1">Search across all memory layers for patterns and solutions</p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
              <code className="text-[#ffb800] font-mono">ekkOS_Forge</code>
              <p className="text-[#7a7a8e] text-sm mt-1">Save learned solutions as reusable patterns</p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
              <code className="text-cyan-400 font-mono">ekkOS_Directive</code>
              <p className="text-[#7a7a8e] text-sm mt-1">Create MUST/NEVER/PREFER/AVOID rules</p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
              <code className="text-pink-400 font-mono">ekkOS_Conflict</code>
              <p className="text-[#7a7a8e] text-sm mt-1">Validate actions against your directives and patterns</p>
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
                  <h4 className="font-semibold text-white mb-1">MCP server not loading?</h4>
                  <ul className="text-[#7a7a8e] text-sm space-y-1">
                    <li>• Verify your settings.json is valid JSON</li>
                    <li>• Check Node.js 18+ is installed: <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">node --version</code></li>
                    <li>• Try running manually: <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">EKKOS_API_KEY=xxx npx @ekkos/mcp-server</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">MCP Tools Reference</h3>
              <p className="text-sm text-[#7a7a8e]">Complete tool documentation</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/how-it-works" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">How It Works</h3>
              <p className="text-sm text-[#7a7a8e]">See what you can do with ekkOS</p>
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
