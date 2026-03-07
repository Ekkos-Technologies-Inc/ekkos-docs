import { AlertCircle, ArrowRight, Check, Code, DollarSign, Wrench, Zap } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../../components/DocsLayout';

export default function CursorPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffb800]/10 border border-[#ffb800]/20 text-sm text-[#ffb800] mb-6">
            <Code className="w-4 h-4" />
            <span>Integration</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Cursor Integration</h1>
          <p className="text-xl text-[#7a7a8e] mb-6">
            Add persistent memory to Cursor with two integration options.
          </p>
          
          <div className="bg-[#ffb800]/10 border border-[#ffb800]/20 clip-lg p-6">
            <h3 className="font-semibold text-white mb-3">Choose Your Integration Method</h3>
            <p className="text-[#e8e8f0]/90 text-sm mb-4">
              ekkOS offers two ways to integrate with Cursor, each optimized for different workflows and cost preferences.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Gateway Proxy</div>
                  <div className="text-[#7a7a8e]">Fully automatic, pay-per-token</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Wrench className="w-4 h-4 text-[#ffb800] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">MCP Tools</div>
                  <div className="text-[#7a7a8e]">Manual control, Cursor subscription</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#111118]/60 backdrop-blur-xl border-b border-[#1a1a2e]">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-medium">Feature</th>
                  <th className="px-4 py-3 text-left text-white font-medium">Gateway Proxy</th>
                  <th className="px-4 py-3 text-left text-white font-medium">MCP Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-4 py-3 text-[#7a7a8e]">Setup Difficulty</td>
                  <td className="px-4 py-3 text-[#e8e8f0]">Medium</td>
                  <td className="px-4 py-3 text-[#e8e8f0]">Easy</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#7a7a8e]">Pattern Injection</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 text-green-400">
                      <Check className="w-4 h-4" /> Fully automatic
                    </span>
                  </td>
                  <td className="px-4 py-3 text-yellow-400">Manual calls</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#7a7a8e]">AI Provider</td>
                  <td className="px-4 py-3 text-[#e8e8f0]">Your own API key</td>
                  <td className="px-4 py-3 text-[#e8e8f0]">Cursor subscription</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#7a7a8e]">Cost</td>
                  <td className="px-4 py-3 text-[#e8e8f0]">
                    Pay OpenAI/Anthropic per token<br />
                    <span className="text-xs text-[#4a4a5e]">ekkOS gateway free</span>
                  </td>
                  <td className="px-4 py-3 text-[#e8e8f0]">
                    Cursor Pro subscription<br />
                    <span className="text-xs text-[#4a4a5e]">+ ekkOS usage tiers</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#7a7a8e]">Latency</td>
                  <td className="px-4 py-3 text-[#e8e8f0]">+50-100ms</td>
                  <td className="px-4 py-3 text-[#e8e8f0]">Only when calling tools</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Method Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Method 1: Gateway Proxy (Automatic)</h2>
          
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 clip-lg p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-2">Recommended for: Power users with API credits</h3>
                <p className="text-[#e8e8f0]/90 text-sm">
                  ekkOS sits between Cursor and your AI provider, automatically injecting patterns into every request.
                  No manual tool calls needed.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <div className="text-green-400 font-medium mb-1">✓ Pros</div>
                <ul className="text-[#7a7a8e] space-y-1">
                  <li>• Fully automatic pattern injection</li>
                  <li>• Patterns delivered with every request</li>
                  <li>• Access 500+ models via OpenRouter</li>
                  <li>• Context syncs across sessions</li>
                </ul>
              </div>
              <div>
                <div className="text-yellow-400 font-medium mb-1">⚠ Considerations</div>
                <ul className="text-[#7a7a8e] space-y-1">
                  <li>• Requires own API key</li>
                  <li>• Pay per token to provider</li>
                  <li>• +50-100ms latency</li>
                  <li>• Not compatible with Cursor subscription models</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm">1</span>
                Get AI Provider API Key
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-[#7a7a8e]">Choose one provider:</p>
                <div className="grid md:grid-cols-3 gap-3">
                  <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener" className="block bg-[#0d0d14]/50 backdrop-blur-md border border-[#1a1a2e] clip-md p-3 hover:border-[#ffb800]/30 transition-colors">
                    <div className="font-medium text-white mb-1">OpenAI</div>
                    <div className="text-xs text-[#4a4a5e]">GPT-4o, o1, o3-mini</div>
                  </a>
                  <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener" className="block bg-[#0d0d14]/50 backdrop-blur-md border border-[#1a1a2e] clip-md p-3 hover:border-[#00f0ff]/30 transition-colors">
                    <div className="font-medium text-white mb-1">Anthropic</div>
                    <div className="text-xs text-[#4a4a5e]">Claude Opus/Sonnet 4.5</div>
                  </a>
                  <a href="https://openrouter.ai/keys" target="_blank" rel="noopener" className="block bg-[#0d0d14]/50 backdrop-blur-md border border-[#1a1a2e] clip-md p-3 hover:border-green-500/30 transition-colors">
                    <div className="font-medium text-white mb-1">OpenRouter</div>
                    <div className="text-xs text-[#4a4a5e]">500+ models, one key</div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm">2</span>
                Configure Cursor Base URL
              </h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb800]">1.</span>
                  <div>
                    <div className="text-[#e8e8f0]">Open <strong>Cursor Settings</strong> (Cmd+,)</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb800]">2.</span>
                  <div>
                    <div className="text-[#e8e8f0]">Go to <strong>Models</strong> tab</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb800]">3.</span>
                  <div className="space-y-2">
                    <div className="text-[#e8e8f0]">Paste your API key in <strong>OpenAI API Key</strong> field</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb800]">4.</span>
                  <div className="space-y-2">
                    <div className="text-[#e8e8f0]">Enable <strong>"Override OpenAI Base URL"</strong></div>
                    <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3 font-mono text-xs">
                      <span className="text-[#4a4a5e]">Base URL:</span> <span className="text-[#ffb800]">https://mcp.ekkos.dev/api/v1/gateway/openai</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb800]">5.</span>
                  <div>
                    <div className="text-[#e8e8f0]">Click <strong>Verify</strong></div>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm">3</span>
                Test Integration
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-4">Open Cursor Agent and ask a technical question. You should see patterns appear automatically:</p>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 font-mono text-xs text-[#7a7a8e]">
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━<br />
                🧠 ekkOS Memory<br />
                ✓ 3 patterns loaded<br />
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━<br />
                <br />
                <span className="text-green-400">1. Pattern Name</span><br />
                   Solution: ...
              </div>
            </div>

            <div className="bg-[#ffb800]/10 border border-[#ffb800]/20 clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">💡 Pro Tip: Use OpenRouter</h3>
              <p className="text-[#e8e8f0]/90 text-sm mb-3">
                Get ONE API key from <a href="https://openrouter.ai" className="text-[#ffb800] hover:underline">OpenRouter</a> and access 500+ models:
              </p>
              <ul className="text-[#7a7a8e] text-sm space-y-1">
                <li>• <code className="text-[#ffb800]">openai/gpt-4o</code> - Latest GPT-4</li>
                <li>• <code className="text-[#ffb800]">anthropic/claude-3.5-sonnet</code> - Claude Sonnet</li>
                <li>• <code className="text-[#ffb800]">x-ai/grok-4-fast-reasoning</code> - Grok-4</li>
                <li>• <code className="text-[#ffb800]">deepseek/deepseek-chat</code> - Ultra-cheap 70B model</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Method 2: MCP Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Method 2: MCP Tools (Manual Control)</h2>
          
          <div className="bg-gradient-to-br from-[#ffb800]/10 to-cyan-500/10 border border-[#ffb800]/20 clip-lg p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <Wrench className="w-6 h-6 text-[#ffb800] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-2">Recommended for: Cursor Pro subscribers</h3>
                <p className="text-[#e8e8f0]/90 text-sm">
                  ekkOS provides tools that the AI calls when needed. Uses your Cursor subscription, no separate AI costs.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <div className="text-green-400 font-medium mb-1">✓ Pros</div>
                <ul className="text-[#7a7a8e] space-y-1">
                  <li>• Use Cursor subscription models</li>
                  <li>• No separate AI costs</li>
                  <li>• Control when to retrieve patterns</li>
                  <li>• Works with privacy mode</li>
                </ul>
              </div>
              <div>
                <div className="text-yellow-400 font-medium mb-1">⚠ Considerations</div>
                <ul className="text-[#7a7a8e] space-y-1">
                  <li>• AI must manually call tools</li>
                  <li>• Depends on AI compliance</li>
                  <li>• No auto-injection</li>
                  <li>• Easier to forget to use memory</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#ffb800]/20 flex items-center justify-center text-[#ffb800] text-sm">1</span>
                Install ekkOS Connect Extension
              </h3>
              <ol className="space-y-2 text-[#7a7a8e] text-sm">
                <li>• Open Cursor Extensions (Cmd+Shift+X)</li>
                <li>• Search for "ekkOS Connect"</li>
                <li>• Install <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded text-[#ffb800]">ekkostech.ekkos-connect</code></li>
                <li>• Click ekkOS icon in sidebar</li>
                <li>• Click "Connect Account" and authenticate</li>
              </ol>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#ffb800]/20 flex items-center justify-center text-[#ffb800] text-sm">2</span>
                MCP Configuration (Auto-Created)
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                The extension automatically creates <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">~/.cursor/mcp.json</code>:
              </p>
              <div className="relative">
                <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 overflow-x-auto text-xs text-[#e8e8f0] font-mono">{`{
  "mcpServers": {
    "ekkos-memory": {
      "url": "https://mcp.ekkos.dev/api/v1/mcp/sse",
      "transport": "sse",
      "headers": {
        "Authorization": "Bearer YOUR_EKKOS_API_KEY",
        "X-User-ID": "YOUR_USER_ID"
      }
    }
  }
}`}</pre>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#ffb800]/20 flex items-center justify-center text-[#ffb800] text-sm">3</span>
                Restart Cursor
              </h3>
              <p className="text-[#7a7a8e] text-sm">
                MCP servers only load on startup. Restart Cursor to activate ekkOS tools.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#ffb800]/20 flex items-center justify-center text-[#ffb800] text-sm">4</span>
                Available Tools
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3">
                  <code className="text-[#ffb800]">ekkOS_Search</code>
                  <p className="text-[#4a4a5e] text-xs mt-1">Search all 11 memory layers</p>
                </div>
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3">
                  <code className="text-[#00f0ff]">ekkOS_Forge</code>
                  <p className="text-[#4a4a5e] text-xs mt-1">Create new patterns</p>
                </div>
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3">
                  <code className="text-green-400">ekkOS_Context</code>
                  <p className="text-[#4a4a5e] text-xs mt-1">Get full context</p>
                </div>
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3">
                  <code className="text-orange-400">ekkOS_Track</code>
                  <p className="text-[#4a4a5e] text-xs mt-1">Track pattern usage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Cost Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-yellow-400" />
                <h3 className="font-semibold text-white">Gateway Proxy</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-[#e8e8f0] mb-1">ekkOS Gateway: <span className="text-green-400 font-medium">Free</span></div>
                  <div className="text-[#4a4a5e] text-xs">Pattern injection included</div>
                </div>
                <div>
                  <div className="text-[#e8e8f0] mb-1">AI Provider: <span className="text-yellow-400 font-medium">Pay per token</span></div>
                  <div className="text-[#4a4a5e] text-xs">
                    • GPT-4o: ~$0.01 per 1K tokens<br />
                    • DeepSeek: ~$0.0001 per 1K tokens<br />
                    • Via your provider account
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[#ffb800]" />
                <h3 className="font-semibold text-white">MCP Tools</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-[#e8e8f0] mb-1">Cursor Pro: <span className="text-[#ffb800] font-medium">$20/month</span></div>
                  <div className="text-[#4a4a5e] text-xs">AI usage included</div>
                </div>
                <div>
                  <div className="text-[#e8e8f0] mb-1">ekkOS: <span className="text-green-400 font-medium">5K calls free</span></div>
                  <div className="text-[#4a4a5e] text-xs">
                    • Developer: 5K/month free<br />
                    • Professional: 250K for $39/month<br />
                    • Team: 2M+ for $149/month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Which Method? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Which Method Should You Use?</h2>
          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h4 className="font-semibold text-white mb-3">Choose Gateway Proxy if:</h4>
              <ul className="text-[#7a7a8e] text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>You have API credits with OpenAI, Anthropic, or OpenRouter</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>You want fully automatic pattern injection (zero manual work)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>You're willing to pay per-token for maximum integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>You want access to 500+ models via OpenRouter</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h4 className="font-semibold text-white mb-3">Choose MCP Tools if:</h4>
              <ul className="text-[#7a7a8e] text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#ffb800] mt-0.5 flex-shrink-0" />
                  <span>You have Cursor Pro subscription ($20/month)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#ffb800] mt-0.5 flex-shrink-0" />
                  <span>You want predictable costs (no per-token charges)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#ffb800] mt-0.5 flex-shrink-0" />
                  <span>You need Cursor's privacy mode / zero data retention</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#ffb800] mt-0.5 flex-shrink-0" />
                  <span>You prefer manual control over when patterns are retrieved</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#00f0ff]/10 to-pink-500/10 border border-[#00f0ff]/20 clip-lg p-6">
              <h4 className="font-semibold text-white mb-2">💎 Hybrid Approach</h4>
              <p className="text-[#e8e8f0]/90 text-sm mb-3">
                Configure BOTH methods and toggle between them based on your task:
              </p>
              <ul className="text-[#7a7a8e] text-sm space-y-1">
                <li>• <strong className="text-white">Gateway proxy</strong> for active coding sessions (automatic patterns)</li>
                <li>• <strong className="text-white">MCP tools</strong> for quick questions (use subscription)</li>
                <li>• Switch by toggling "Override Base URL" in Cursor settings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Troubleshooting</h2>
          
          <h3 className="text-lg font-semibold text-white mb-4">Gateway Proxy Issues</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">"Failed to verify API key"</h4>
                  <ul className="text-[#7a7a8e] text-sm space-y-1">
                    <li>• Verify your OpenAI/provider API key is valid and has credits</li>
                    <li>• Ensure base URL is exactly: <code className="text-[#ffb800] text-xs">https://mcp.ekkos.dev/api/v1/gateway/openai</code></li>
                    <li>• Check you're not using Cursor's built-in OpenAI integration (must override base URL)</li>
                    <li>• Test gateway health: <code className="text-xs">curl https://mcp.ekkos.dev/api/v1/gateway/health</code></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">No patterns appearing in responses?</h4>
                  <ul className="text-[#7a7a8e] text-sm space-y-1">
                    <li>• Gateway only injects patterns for technical queries, not general chat</li>
                    <li>• Check you have patterns in your account: <Link href="https://platform.ekkos.dev" className="text-[#ffb800] hover:underline">platform.ekkos.dev</Link></li>
                    <li>• Verify ekkOS account is connected (different from AI provider key)</li>
                    <li>• Check Cursor's Network log for gateway requests</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-4">MCP Tools Issues</h3>
          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">ekkOS tools not appearing?</h4>
                  <ul className="text-[#7a7a8e] text-sm space-y-1">
                    <li>• Check <code className="text-xs">~/.cursor/mcp.json</code> exists and has ekkos-memory configured</li>
                    <li>• Restart Cursor (MCP servers only load on startup)</li>
                    <li>• Verify token matches your <Link href="https://platform.ekkos.dev" className="text-[#ffb800] hover:underline">platform.ekkos.dev</Link> account</li>
                    <li>• Check Cursor Output panel → MCP Servers for connection errors</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Patterns retrieved but not used?</h4>
                  <p className="text-[#7a7a8e] text-sm mb-2">
                    MCP Tools require the AI to manually call tools. The AI must be instructed to use memory.
                  </p>
                  <p className="text-[#e8e8f0]/90 text-sm">
                    <strong>Solution:</strong> Switch to Gateway Proxy for automatic injection, or add an Always-Apply Cursor rule
                    that reminds the AI to search memory before responding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Recommended Setup Path</h2>
          <div className="bg-gradient-to-br from-cyan-500/10 to-[#ffb800]/70/10 border border-cyan-500/20 clip-lg p-6">
            <h3 className="font-semibold text-white mb-4">For Most Users:</h3>
            <ol className="space-y-3 text-[#e8e8f0]/90 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-mono">1.</span>
                <div>
                  <strong className="text-white">Start with MCP Tools</strong> (easier setup, uses Cursor subscription)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-mono">2.</span>
                <div>
                  Install ekkOS Connect extension and authenticate
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-mono">3.</span>
                <div>
                  Try manual tool calls for a few days
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-mono">4.</span>
                <div>
                  If you want automatic injection, <strong className="text-white">upgrade to Gateway Proxy</strong>
                </div>
              </li>
            </ol>

            <div className="mt-6 pt-6 border-t border-[#1a1a2e]">
              <h3 className="font-semibold text-white mb-4">For Power Users:</h3>
              <ol className="space-y-3 text-[#e8e8f0]/90 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono">1.</span>
                  <div>
                    <strong className="text-white">Start with Gateway Proxy</strong> (automatic, powerful)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono">2.</span>
                  <div>
                    Get OpenRouter API key (500+ models, often cheaper than direct providers)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono">3.</span>
                  <div>
                    Configure base URL override in Cursor settings
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono">4.</span>
                  <div>
                    Enjoy fully automatic memory injection in every response
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">MCP Tools Reference</h3>
              <p className="text-sm text-[#7a7a8e]">Complete tool documentation</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/memory-gateway" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-yellow-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Gateway Proxy Details</h3>
              <p className="text-sm text-[#7a7a8e]">Deep dive into automatic injection</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-yellow-400 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/claude-code" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Claude Code Integration</h3>
              <p className="text-sm text-[#7a7a8e]">Use ekkOS with Claude Code</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                Configure <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="mt-8 bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <h3 className="font-semibold text-white mb-3">Need Help?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-[#e8e8f0] mb-1">Platform Dashboard</div>
                <a href="https://platform.ekkos.dev" className="text-[#ffb800] hover:underline">platform.ekkos.dev</a>
              </div>
              <div>
                <div className="text-[#e8e8f0] mb-1">Support Email</div>
                <a href="mailto:support@ekkos.dev" className="text-[#ffb800] hover:underline">support@ekkos.dev</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
