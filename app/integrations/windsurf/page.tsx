import { AlertCircle, ArrowRight, Check, Code, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../../components/DocsLayout';

export default function WindsurfPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-sm text-teal-400 mb-6">
            <Code className="w-4 h-4" />
            <span>Integration</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Windsurf Integration</h1>
          <p className="text-xl text-[#7a7a8e] mb-6">
            Add persistent memory to Codeium's Windsurf IDE.
          </p>

          <div className="bg-teal-500/10 border border-teal-500/20 clip-lg p-6">
            <h3 className="font-semibold text-white mb-3">MCP-Powered Memory</h3>
            <p className="text-[#e8e8f0]/90 text-sm mb-4">
              ekkOS integrates with Windsurf via the Model Context Protocol (MCP), giving the AI access to 32 memory tools that persist learnings across sessions.
            </p>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">11 Memory Layers</div>
                  <div className="text-[#7a7a8e] text-xs">Patterns, directives, secrets, codebase</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">32 MCP Tools</div>
                  <div className="text-[#7a7a8e] text-xs">Search, forge, recall, track, conflict detection</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Cross-IDE Sync</div>
                  <div className="text-[#7a7a8e] text-xs">Memory syncs across all your environments</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Setup Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Setup Guide</h2>

          <div className="space-y-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm">1</span>
                Get Your ekkOS API Key
              </h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400">1.</span>
                  <div>
                    <div className="text-[#e8e8f0]">Sign up at <a href="https://platform.ekkos.dev" target="_blank" rel="noopener" className="text-teal-400 hover:underline">platform.ekkos.dev</a></div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400">2.</span>
                  <div>
                    <div className="text-[#e8e8f0]">Navigate to <strong>Settings → API Keys</strong></div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400">3.</span>
                  <div>
                    <div className="text-[#e8e8f0]">Click <strong>Create New Key</strong> and copy it</div>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm">2</span>
                Create MCP Configuration
              </h3>
              <div className="space-y-4 text-sm">
                <p className="text-[#7a7a8e]">
                  Create the file <code className="bg-[#111118]/60 backdrop-blur-xl px-2 py-1 rounded text-teal-400">.windsurf/mcp.json</code> in your project root:
                </p>
                <div className="relative">
                  <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 overflow-x-auto text-xs text-[#e8e8f0] font-mono">{`{
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
                  <div className="absolute top-3 right-3">
                    <button className="bg-[#111118]/60 backdrop-blur-xl hover:bg-[#111118]/80 rounded px-2 py-1 text-xs text-[#7a7a8e] flex items-center gap-1 transition-colors">
                      <Terminal className="w-3 h-3" />
                      Copy
                    </button>
                  </div>
                </div>
                <div className="bg-teal-500/10 border border-teal-500/20 clip-md p-4">
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <div className="text-[#e8e8f0]/90 text-xs">
                      <strong className="text-white">Pro Tip:</strong> Replace <code className="text-teal-400">your_api_key_here</code> with your actual API key from Step 1.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm">3</span>
                Restart Windsurf
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                MCP servers only load on startup. Restart Windsurf to activate ekkOS memory tools.
              </p>
              <div className="bg-[#111118]/60 backdrop-blur-xl clip-md p-3 text-xs text-[#7a7a8e]">
                <strong className="text-[#e8e8f0]">macOS:</strong> Cmd+Q → Reopen<br />
                <strong className="text-[#e8e8f0]">Windows:</strong> Alt+F4 → Reopen
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm">4</span>
                Verify Integration
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                Open Windsurf's AI chat and ask:
              </p>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 font-mono text-sm text-[#e8e8f0] mb-4">
                "Search ekkOS memory for patterns about error handling"
              </div>
              <p className="text-[#7a7a8e] text-sm">
                If the integration is working, the AI will call the <code className="text-teal-400 text-xs">ekkOS_Search</code> tool and return results from your memory layers.
              </p>
            </div>
          </div>
        </section>

        {/* Available Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Available Tools (32 Total)</h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
              <h4 className="font-semibold text-white mb-3">Core Memory Tools</h4>
              <ul className="space-y-2 text-[#7a7a8e]">
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_Search</code>
                  <span className="text-xs text-[#4a4a5e]">Search all 11 layers</span>
                </li>
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_Forge</code>
                  <span className="text-xs text-[#4a4a5e]">Create patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_Context</code>
                  <span className="text-xs text-[#4a4a5e]">Get full context</span>
                </li>
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_Recall</code>
                  <span className="text-xs text-[#4a4a5e]">Recall past conversations</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
              <h4 className="font-semibold text-white mb-3">Directive Tools</h4>
              <ul className="space-y-2 text-[#7a7a8e]">
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_Directive</code>
                  <span className="text-xs text-[#4a4a5e]">Create MUST/NEVER rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_UpdateDirective</code>
                  <span className="text-xs text-[#4a4a5e]">Update existing rule</span>
                </li>
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_DeleteDirective</code>
                  <span className="text-xs text-[#4a4a5e]">Remove rule</span>
                </li>
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_UniversalDirectives</code>
                  <span className="text-xs text-[#4a4a5e]">Get global rules</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
              <h4 className="font-semibold text-white mb-3">Plan Management</h4>
              <ul className="space-y-2 text-[#7a7a8e]">
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_Plan</code>
                  <span className="text-xs text-[#4a4a5e]">Create task plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_Generate</code>
                  <span className="text-xs text-[#4a4a5e]">AI-generate plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_PlanStatus</code>
                  <span className="text-xs text-[#4a4a5e]">Update plan status</span>
                </li>
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_Templates</code>
                  <span className="text-xs text-[#4a4a5e]">Reusable templates</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
              <h4 className="font-semibold text-white mb-3">Secrets Management</h4>
              <ul className="space-y-2 text-[#7a7a8e]">
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_StoreSecret</code>
                  <span className="text-xs text-[#4a4a5e]">Encrypt & store</span>
                </li>
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_GetSecret</code>
                  <span className="text-xs text-[#4a4a5e]">Retrieve & decrypt</span>
                </li>
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_ListSecrets</code>
                  <span className="text-xs text-[#4a4a5e]">List all secrets</span>
                </li>
                <li className="flex items-start gap-2">
                  <code className="text-teal-400 text-xs">ekkOS_RotateSecret</code>
                  <span className="text-xs text-[#4a4a5e]">Update secret value</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-teal-500/10 border border-teal-500/20 clip-lg p-6">
            <p className="text-[#e8e8f0]/90 text-sm">
              <strong className="text-white">32 tools total.</strong> View the complete reference at{' '}
              <Link href="/tools" className="text-teal-400 hover:underline">
                /tools
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Troubleshooting</h2>

          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">ekkOS tools not appearing?</h4>
                  <ul className="text-[#7a7a8e] text-sm space-y-1">
                    <li>• Verify <code className="text-xs">.windsurf/mcp.json</code> exists in your project root</li>
                    <li>• Check that <code className="text-xs">EKKOS_API_KEY</code> is set correctly (no quotes needed in JSON value)</li>
                    <li>• Restart Windsurf completely (MCP servers only load on startup)</li>
                    <li>• Check Windsurf's Output panel → MCP Servers for connection errors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">"Invalid API key" error?</h4>
                  <ul className="text-[#7a7a8e] text-sm space-y-1">
                    <li>• Verify your API key at <a href="https://platform.ekkos.dev" className="text-teal-400 hover:underline">platform.ekkos.dev</a></li>
                    <li>• Ensure there are no extra spaces or quotes around the key in <code className="text-xs">mcp.json</code></li>
                    <li>• Check that your ekkOS account has an active subscription (free tier includes 5K calls/month)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Tools appear but AI doesn't use them?</h4>
                  <p className="text-[#7a7a8e] text-sm mb-2">
                    The AI needs to be instructed to use memory tools. Consider adding a <code className="text-xs">CLAUDE.md</code> file
                    to your project root with memory-first instructions.
                  </p>
                  <Link href="/guides/claude-md" className="text-teal-400 hover:underline text-sm">
                    View CLAUDE.md Setup Guide →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-teal-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Explore All 32 Tools</h3>
              <p className="text-sm text-[#7a7a8e]">Complete MCP tools reference</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-teal-400 group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/guides/claude-md" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-teal-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">CLAUDE.md Setup</h3>
              <p className="text-sm text-[#7a7a8e]">Configure AI to use memory proactively</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-teal-400 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/cursor" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-teal-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Cursor Integration</h3>
              <p className="text-sm text-[#7a7a8e]">Setup for Cursor IDE</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-teal-400 group-hover:gap-2 transition-all">
                View guide <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="mt-8 bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <h3 className="font-semibold text-white mb-3">Need Help?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-[#e8e8f0] mb-1">Platform Dashboard</div>
                <a href="https://platform.ekkos.dev" className="text-teal-400 hover:underline">platform.ekkos.dev</a>
              </div>
              <div>
                <div className="text-[#e8e8f0] mb-1">Support Email</div>
                <a href="mailto:support@ekkos.dev" className="text-teal-400 hover:underline">support@ekkos.dev</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
