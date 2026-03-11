import DocsLayout from '../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Brain, Layers, Shield, Zap, Clock, CheckCircle2 } from 'lucide-react';

export default function ArchitecturePage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffb800]/10 border border-[#ffb800]/20 text-sm text-[#ffb800] mb-6">
            <Layers className="w-4 h-4" />
            <span>How ekkOS Works</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Memory That Works For You</h1>
          <p className="text-xl text-[#7a7a8e]">
            ekkOS gives your AI persistent memory. It remembers what works,
            learns from every interaction, and gets smarter over time.
          </p>
        </div>

        {/* Core Benefits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#00f0ff]/10 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
              <Brain className="w-8 h-8 text-[#00f0ff] mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">Persistent Memory</h3>
              <p className="text-[#7a7a8e]">
                Your AI remembers past conversations, solutions that worked, and your preferences.
                No more re-explaining context every session.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#ffb800]/10 to-transparent border border-[#ffb800]/20 clip-lg p-6">
              <Zap className="w-8 h-8 text-[#ffb800] mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">Pattern Learning</h3>
              <p className="text-[#7a7a8e]">
                Solutions that work become reusable patterns. Your AI builds a library of
                proven approaches that improve over time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 clip-lg p-6">
              <Shield className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">Your Rules, Enforced</h3>
              <p className="text-[#7a7a8e]">
                Set MUST/NEVER rules that your AI follows permanently. Your preferences
                become behavioral constraints that stick.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 clip-lg p-6">
              <Clock className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">Instant Recall</h3>
              <p className="text-[#7a7a8e]">
                Find anything from past sessions instantly. Ask "what did we discuss about
                authentication?" and get relevant context.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works (Simple) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">The Learning Cycle</h2>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00f0ff]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00f0ff] font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">You Work</h3>
                  <p className="text-[#7a7a8e]">Use your AI normally - write code, solve problems, make decisions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ffb800]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#ffb800] font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">ekkOS Learns</h3>
                  <p className="text-[#7a7a8e]">Successful solutions are captured and stored as reusable knowledge.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Memory Improves</h3>
                  <p className="text-[#7a7a8e]">Patterns that work get reinforced. Your AI gets smarter with every session.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Context Returns</h3>
                  <p className="text-[#7a7a8e]">Next time you ask a question, relevant memories are automatically provided.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Memory Capabilities</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Conversation History</strong>
                  <span className="text-[#7a7a8e]"> — Find and recall past discussions by topic or time</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Solution Patterns</strong>
                  <span className="text-[#7a7a8e]"> — Reusable approaches that worked before</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Step-by-Step Guides</strong>
                  <span className="text-[#7a7a8e]"> — Workflows and procedures you've refined</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Project Knowledge</strong>
                  <span className="text-[#7a7a8e]"> — Code context and project-specific patterns</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Behavioral Rules</strong>
                  <span className="text-[#7a7a8e]"> — MUST/NEVER constraints your AI follows</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Team Knowledge</strong>
                  <span className="text-[#7a7a8e]"> — Shared learnings across your organization</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Privacy Note */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 clip-lg p-6">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              Your Data, Your Control
            </h3>
            <p className="text-[#7a7a8e]">
              All memory is encrypted and isolated to your account. You can export, delete,
              or clear your memory at any time. We never train on your data.
            </p>
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
            <Link href="/integrations/claude-code" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">IDE Setup</h3>
              <p className="text-sm text-[#7a7a8e]">Connect Claude Code, Cursor, or VS Code</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                View guides <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
