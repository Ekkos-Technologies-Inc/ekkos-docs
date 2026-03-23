import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Zap, Search, Shield, CheckCircle2 } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffb800]/10 border border-[#ffb800]/20 text-sm text-[#ffb800] mb-6">
            <Zap className="w-4 h-4" />
            <span>Overview</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">How ekkOS Works</h1>
          <p className="text-xl text-[#7a7a8e]">
            Persistent memory for AI assistants.
          </p>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">The Problem</h2>
          <div className="bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 clip-lg p-6">
            <p className="text-[#e8e8f0]/90 leading-relaxed mb-4">
              AI assistants don't remember between sessions. Every conversation starts fresh.
            </p>
            <ul className="space-y-2 text-[#7a7a8e]">
              <li>• You explain your project setup — again</li>
              <li>• You correct the same mistakes — again</li>
              <li>• You establish the same preferences — again</li>
              <li>• Knowledge from yesterday is gone today</li>
            </ul>
          </div>
        </section>

        {/* What ekkOS Does */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What ekkOS Does</h2>
          <div className="bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/20 clip-lg p-6">
            <p className="text-[#e8e8f0]/90 leading-relaxed mb-6">
              ekkOS gives your AI persistent, cloud-based memory. Context and solutions
              persist across sessions and sync across all your tools.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4 text-center">
                <div className="text-3xl font-bold text-[#00f0ff] mb-1">74</div>
                <div className="text-xs text-[#7a7a8e]">MCP tools</div>
              </div>
              <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4 text-center">
                <div className="text-3xl font-bold text-[#ffb800] mb-1">11</div>
                <div className="text-xs text-[#7a7a8e]">Memory layers</div>
              </div>
              <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">∞</div>
                <div className="text-xs text-[#7a7a8e]">Session persistence</div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Do */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What You Can Do</h2>

          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 clip-lg bg-[#00f0ff]/20 flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Search Past Context</h3>
                  <p className="text-[#7a7a8e]">
                    Ask "what did we decide about authentication?" or "how did we handle that bug before?"
                    and get relevant context from past sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 clip-lg bg-[#ffb800]/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#ffb800]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Save Solutions</h3>
                  <p className="text-[#7a7a8e]">
                    Tell your AI "remember this" or "save this pattern" to store solutions
                    that can be retrieved in future sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 clip-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Set Preferences</h3>
                  <p className="text-[#7a7a8e]">
                    Say "always use TypeScript" or "never commit secrets" to establish rules
                    that persist across every session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Observe */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What You'll Observe</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Relevant Context Surfaces</h3>
              <p className="text-[#7a7a8e] text-sm">
                When you ask questions, your AI receives relevant patterns and past context
                before responding.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Preferences Are Enforced</h3>
              <p className="text-[#7a7a8e] text-sm">
                Rules you've set apply automatically. Your AI follows your established preferences.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Solutions Persist</h3>
              <p className="text-[#7a7a8e] text-sm">
                Patterns you've saved remain available. Past solutions can be applied to new problems.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Context Syncs Across Tools</h3>
              <p className="text-[#7a7a8e] text-sm">
                Memory is cloud-based. What you save in Claude Code is available in Cursor.
              </p>
            </div>
          </div>
        </section>

        {/* How ekkOS Actually Learns */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">How ekkOS Actually Learns</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-8">
            <p className="text-[#e8e8f0]/90 leading-relaxed mb-6">
              Most AI assistants have a "flat" memory. If you teach them how to fix a memory leak in Python, they memorize those exact Python words. But if you later ask for help with a memory leak in Rust, they draw a blank—because Python and Rust <em>look</em> completely different.
            </p>
            <p className="text-[#e8e8f0]/90 leading-relaxed font-semibold mb-8 text-[#00f0ff]">
              ekkOS doesn't just memorize your code; it maps your concepts.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#ffb800]" />
                  For the Intuitive Builder ("Vibe Coder")
                </h3>
                <p className="text-[#7a7a8e] leading-relaxed">
                  Think of ekkOS like a senior engineer looking over your shoulder. When you're hacking together a new Next.js app and run into a weird authentication bug, ekkOS doesn't just search its database for "Next.js auth bug." Instead, it realizes: <em>"Oh, this feels exactly like that weird state-management issue we solved in React Native three weeks ago."</em> It connects the invisible dots between completely different projects and hands you the right solution, even if you don't know the technical name for the bug you're experiencing. It translates your intuition into working code.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  For the Systems Architect (Veteran Engineer)
                </h3>
                <p className="text-[#7a7a8e] leading-relaxed">
                  ekkOS achieves <strong>Zero-Shot Transfer Learning</strong> on your personal codebase. Behind the scenes, the system builds an abstract, multi-dimensional web of your engineering decisions. When you record an outcome, ekkOS separates the <em>Implementation</em> (e.g., Go, PostgreSQL) from the <em>Abstract Principle</em> (e.g., Idempotent Transactions, Connection Pooling). When you start a new architecture in a completely different stack, the system traverses those abstract bridges. It successfully applies a distributed-systems principle you forged in AWS to a local microservice problem in Docker. Your knowledge doesn't just grow linearly; it compounds structurally.
                </p>
              </div>

              <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-6 border-l-2 border-[#00f0ff]">
                <h4 className="font-semibold text-white mb-2">The Result: Compounding Intelligence</h4>
                <p className="text-[#7a7a8e] text-sm leading-relaxed">
                  The more you use ekkOS, the faster it gets at solving problems it has <strong>never seen before</strong>. It stops acting like a search engine that retrieves old snippets, and starts acting like an intelligence engine that synthesizes cross-domain solutions. You solve a database issue on Monday, a UI bug on Tuesday, and by Wednesday, ekkOS uses the underlying logic from <em>both</em> to flawlessly architect your new API.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Get Started</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/quickstart" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-sm text-[#7a7a8e]">Set up ekkOS in 5 minutes</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Get started <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Available Tools</h3>
              <p className="text-sm text-[#7a7a8e]">See all 74 MCP tools</p>
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
