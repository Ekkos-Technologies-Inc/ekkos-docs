import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Search, CheckCircle2 } from 'lucide-react';

export default function DataFlowPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-sm text-pink-400 mb-6">
            <ArrowRight className="w-4 h-4" />
            <span>How It Works</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">How Memory Flows</h1>
          <p className="text-xl text-[#7a7a8e]">
            From conversation to lasting knowledge — automatically.
          </p>
        </div>

        {/* Simple Flow */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">The Journey</h2>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 clip-lg bg-[#00f0ff]/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">You Work</h3>
                  <p className="text-[#7a7a8e]">
                    Chat with your AI, solve problems, write code. Everything happens normally —
                    ekkOS captures context in the background without interrupting your flow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 clip-lg bg-[#ffb800]/20 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-[#ffb800]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Patterns Emerge</h3>
                  <p className="text-[#7a7a8e]">
                    Solutions that work become reusable patterns. ekkOS automatically identifies
                    problem-solution pairs and stores them for future use.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 clip-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Context Returns</h3>
                  <p className="text-[#7a7a8e]">
                    When you face a new challenge, relevant knowledge surfaces automatically.
                    Your AI remembers what worked before and applies it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 clip-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Quality Improves</h3>
                  <p className="text-[#7a7a8e]">
                    Patterns that help get reinforced. Patterns that don't fade away.
                    Your knowledge base gets smarter with every interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Gets Remembered */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What Gets Remembered</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Solutions</h3>
              <p className="text-[#7a7a8e] text-sm">
                When you fix a bug or solve a problem, that solution becomes a reusable pattern.
                Next time you face something similar, your AI already knows what worked.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Preferences</h3>
              <p className="text-[#7a7a8e] text-sm">
                "Always use TypeScript" or "Never use var" become permanent rules your AI follows.
                You set them once, they apply forever.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Context</h3>
              <p className="text-[#7a7a8e] text-sm">
                Project decisions, architectural choices, and important discussions are preserved.
                Your AI remembers the why behind the code.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Mistakes</h3>
              <p className="text-[#7a7a8e] text-sm">
                Anti-patterns are just as valuable. When something doesn't work, your AI
                learns to avoid it in the future.
              </p>
            </div>
          </div>
        </section>

        {/* Automatic vs Explicit */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Two Ways to Remember</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#00f0ff]/10 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Automatic</h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                ekkOS continuously learns from your conversations. Problem-solution pairs
                are identified and stored without any action needed from you.
              </p>
              <p className="text-[#4a4a5e] text-xs italic">
                Just work normally — learning happens in the background.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#ffb800]/10 to-transparent border border-[#ffb800]/20 clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Explicit</h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                You can also tell your AI to remember something specific. Say
                "Remember this for next time" to create a pattern on the spot.
              </p>
              <p className="text-[#4a4a5e] text-xs italic">
                For important insights you want to preserve immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Related</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/architecture" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">How ekkOS Works</h3>
              <p className="text-sm text-[#7a7a8e]">Overview of memory capabilities</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                View overview <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/golden-loop" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Continuous Learning</h3>
              <p className="text-sm text-[#7a7a8e]">How memory improves over time</p>
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
