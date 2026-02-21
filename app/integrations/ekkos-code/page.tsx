import { ArrowRight, Brain, Clock, Code2, Cpu, Layers, MessageSquare, Shield, Sparkles, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../../components/DocsLayout';

export default function EkkosCodePage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <Code2 className="w-4 h-4" />
            <span>Coming Soon</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">
            ekkOS_ Code
          </h1>
          <p className="text-xl text-[#7a7a8e]">
            The AI coding assistant that remembers. Built-in persistent memory, 500+ models, and multi-mode workflows &mdash; all inside VS Code.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#00f0ff]/20 to-[#ffb800]/70/20 border border-[#00f0ff]/30 clip-lg p-8 text-center">
            <Clock className="w-12 h-12 text-[#00f0ff] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Documentation Coming Soon</h2>
            <p className="text-[#7a7a8e] max-w-lg mx-auto mb-6">
              ekkOS_ Code is in active development. Full documentation, setup guides, and API references will be available at launch.
            </p>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=ekkostech.ekkos-code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white clip-md transition-colors font-medium"
            >
              <Sparkles className="w-4 h-4" />
              View on VS Code Marketplace
            </a>
          </div>
        </section>

        {/* What is ekkOS_ Code */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">What is ekkOS_ Code?</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <p className="text-[#e8e8f0]/90 mb-4">
              <strong className="text-white">ekkOS_ Code</strong> is a full AI coding agent for VS Code with persistent memory built in.
              Unlike other coding assistants that start from zero every session, ekkOS_ Code learns from your mistakes,
              remembers your patterns, and applies proven solutions automatically.
            </p>
            <p className="text-[#e8e8f0]/90">
              It combines the power of 500+ AI models (Claude, GPT, Gemini, Grok, and more) with the ekkOS 11-layer
              memory system, so every coding session makes the next one smarter.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 clip-md bg-[#00f0ff]/20">
                  <Brain className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <h3 className="font-semibold text-white">Persistent Memory</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm">
                Solutions, anti-patterns, and preferences persist across sessions. The AI remembers what worked and what didn&apos;t.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 clip-md bg-[#ffb800]/20">
                  <Cpu className="w-5 h-5 text-[#ffb800]" />
                </div>
                <h3 className="font-semibold text-white">500+ AI Models</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm">
                Access Claude, GPT, Gemini, Grok, DeepSeek, and hundreds more through a unified gateway. Switch models mid-conversation.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 clip-md bg-green-500/20">
                  <Layers className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-semibold text-white">Multi-Mode Workflows</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm">
                Plan with Architect mode, implement with Coder mode, and fix issues with Debugger mode &mdash; each optimized for the task.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 clip-md bg-yellow-500/20">
                  <Shield className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-white">Directive System</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm">
                Set persistent rules like &ldquo;always use TypeScript strict mode&rdquo; or &ldquo;never use var&rdquo; that apply across every session.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 clip-md bg-cyan-500/20">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white">Inline Chat</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm">
                Chat with AI directly in your editor. Ask questions, generate code, and apply changes without leaving your workflow.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 clip-md bg-pink-500/20">
                  <Zap className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="font-semibold text-white">Pattern Learning</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm">
                Every solution is forged as a reusable pattern. Cross-project intelligence means your team gets smarter together.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">How It Works</h2>
          <div className="bg-[#0d0d14]/50 backdrop-blur-md border border-[#1a1a2e] clip-lg p-6 font-mono text-sm">
            <div className="text-[#4a4a5e] mb-2"># You ask ekkOS_ Code to fix a bug</div>
            <div className="text-[#ffb800] mb-4">You: &quot;Fix this TypeScript error&quot;</div>
            <div className="text-[#00f0ff] mb-1">ekkOS_: Searching memory... Found 3 relevant patterns.</div>
            <div className="text-[#00f0ff] mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Applying: &quot;Always check optional chaining before</div>
            <div className="text-[#00f0ff] mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessing nested properties&quot;</div>
            <div className="text-green-400 mb-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Pattern was 94% effective across 47 applications]</div>
            <div className="text-[#4a4a5e] mb-2"># The fix is applied AND the solution is remembered</div>
            <div className="text-[#4a4a5e]"># Next time anyone hits the same issue, it&apos;s instant</div>
          </div>
        </section>

        {/* Planned Docs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Planned Documentation</h2>
          <div className="space-y-3">
            {[
              { title: 'Installation & Setup', description: 'Marketplace install, account setup, and first-run wizard' },
              { title: 'Model Configuration', description: 'Choosing and switching between 500+ AI models' },
              { title: 'Modes: Architect, Coder, Debugger', description: 'When and how to use each workflow mode' },
              { title: 'Memory Integration', description: 'How ekkOS_ Code connects to the 11-layer memory system' },
              { title: 'Custom Instructions', description: 'Setting up project-specific rules and preferences' },
              { title: 'API & Extensibility', description: 'Building on top of ekkOS_ Code' },
            ].map((doc) => (
              <div key={doc.title} className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">{doc.title}</h3>
                  <p className="text-sm text-[#7a7a8e]">{doc.description}</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full whitespace-nowrap">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Start Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Quick Start</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <ol className="space-y-3 text-[#e8e8f0]/90">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">1</span>
                <span>Install <strong className="text-white">ekkOS_ Code</strong> from the <a href="https://marketplace.visualstudio.com/items?itemName=ekkostech.ekkos-code" className="text-[#00f0ff] hover:underline" target="_blank" rel="noopener noreferrer">VS Code Marketplace</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">2</span>
                <span>Sign in with your ekkOS account (free tier available)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">3</span>
                <span>Start coding &mdash; the AI learns from your interactions automatically</span>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=ekkostech.ekkos-code"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4 hover:bg-[#111118]/60 transition-colors"
            >
              <div className="font-medium text-white mb-1">VS Code Marketplace</div>
              <div className="text-sm text-[#7a7a8e]">Install ekkOS_ Code</div>
            </a>
            <a
              href="https://discord.gg/w2JGepq9qZ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4 hover:bg-[#111118]/60 transition-colors"
            >
              <div className="font-medium text-white mb-1">Discord Community</div>
              <div className="text-sm text-[#7a7a8e]">Get help and share feedback</div>
            </a>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">In the Meantime</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/integrations/vscode-extension" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">ekkOS_Connect Extension</h3>
              <p className="text-sm text-[#7a7a8e]">Universal memory gateway for any AI IDE</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                View docs <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/how-it-works" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">How Memory Works</h3>
              <p className="text-sm text-[#7a7a8e]">Understand the 11-layer memory system</p>
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
