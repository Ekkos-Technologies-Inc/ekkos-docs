import { ArrowRight, Brain, Clock, Database, Layers, Search, Shield, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../../components/DocsLayout';
import CopyBlock from '../../components/CopyBlock';

export default function UsingEkkosPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <Brain className="w-4 h-4" />
            <span>Guide</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Using ekkOS with Claude Code</h1>
          <p className="text-xl text-[#7a7a8e]">
            What ekkOS does for you, what you'll see, and how to get the most out of cross-session intelligence.
          </p>
        </div>

        {/* How ekkOS works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">How It Works</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 space-y-4">
            <p className="text-[#e8e8f0]/90">
              Once ekkOS is connected, Claude automatically gets enriched with context from your memory before every response.
              You don't need to do anything — it just works.
            </p>
            <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-xs font-bold">1</span>
                <span className="text-[#e8e8f0]/80">You ask a question or make a request</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-xs font-bold">2</span>
                <span className="text-[#e8e8f0]/80">ekkOS finds relevant patterns, directives, and context from your memory</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-xs font-bold">3</span>
                <span className="text-[#e8e8f0]/80">Claude sees your memory alongside your question — and responds smarter</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-xs font-bold">4</span>
                <span className="text-[#e8e8f0]/80">If Claude fixes a bug or learns something, ekkOS saves it for next time</span>
              </div>
            </div>
          </div>
        </section>

        {/* Automatic Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">What Happens Automatically</h2>
          <p className="text-[#7a7a8e] mb-6">
            These features work without you doing anything. ekkOS detects what you need and provides the right context.
          </p>

          <div className="space-y-4">
            {/* Pattern Memory */}
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Pattern Memory</h3>
                  <p className="text-[#7a7a8e] text-sm mb-3">
                    When you ask a technical question, ekkOS searches your memory for relevant patterns —
                    past solutions, gotchas, architectural decisions — and gives them to Claude before it answers.
                  </p>
                  <p className="text-[#7a7a8e] text-sm">
                    This means Claude won't repeat mistakes you've already solved. If you fixed an auth bug last month,
                    Claude knows the fix next time you hit a similar issue.
                  </p>
                </div>
              </div>
            </div>

            {/* Directives */}
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ffb800]/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#ffb800]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Directives</h3>
                  <p className="text-[#7a7a8e] text-sm mb-3">
                    Your personal rules — things Claude should always do, never do, prefer, or avoid.
                    ekkOS applies them to every conversation automatically.
                  </p>
                  <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3 text-sm space-y-1">
                    <div className="text-green-400"><span className="font-mono text-xs bg-green-500/20 px-1.5 py-0.5 rounded mr-2">MUST</span> Run tests before deploying</div>
                    <div className="text-red-400"><span className="font-mono text-xs bg-red-500/20 px-1.5 py-0.5 rounded mr-2">NEVER</span> Push directly to main</div>
                    <div className="text-blue-400"><span className="font-mono text-xs bg-blue-500/20 px-1.5 py-0.5 rounded mr-2">PREFER</span> Functional over imperative style</div>
                    <div className="text-yellow-400"><span className="font-mono text-xs bg-yellow-500/20 px-1.5 py-0.5 rounded mr-2">AVOID</span> Class-based React components</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schema Awareness */}
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Schema Awareness</h3>
                  <p className="text-[#7a7a8e] text-sm">
                    When you write SQL queries or work with database tooling, ekkOS automatically provides
                    the correct table and column names. No more "column does not exist" errors from
                    Claude guessing field names wrong.
                  </p>
                </div>
              </div>
            </div>

            {/* Auto-Forge */}
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Auto-Learning</h3>
                  <p className="text-[#7a7a8e] text-sm">
                    When Claude fixes a bug or solves a non-trivial problem, ekkOS detects the fix and
                    saves it as a pattern. Next time you (or anyone on your team) hits the same issue,
                    Claude already knows the solution.
                  </p>
                </div>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Safety Checks</h3>
                  <p className="text-[#7a7a8e] text-sm">
                    Before destructive actions (deleting files, deploying, dropping tables), Claude checks
                    your directives for conflicts. If you set a <span className="text-red-400 font-mono text-xs">NEVER</span> rule,
                    it will be enforced — even across sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Session Recall */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Recalling Past Sessions</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 space-y-4">
            <p className="text-[#e8e8f0]/90">
              ekkOS can bring context from previous sessions into your current conversation.
              This only happens when you <strong className="text-white">explicitly ask</strong> — there's no
              automatic cross-session bleed.
            </p>

            <h4 className="text-sm font-semibold text-[#00f0ff] uppercase tracking-wide">Phrases that trigger recall</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                '"What did we discuss yesterday?"',
                '"Remember when we worked on auth?"',
                '"Last session we fixed a bug..."',
                '"Bring back context from last week"',
                '"What did we do last time?"',
                '"Last month we decided to..."',
              ].map((phrase) => (
                <div key={phrase} className="bg-[#0d0d14]/60 backdrop-blur-md clip-md px-3 py-2">
                  <code className="text-[#ffb800] text-sm">{phrase}</code>
                </div>
              ))}
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 clip-md p-4 mt-2">
              <p className="text-blue-300 text-sm">
                <strong>Privacy note:</strong> Normal conversation words like "earlier" or "previously"
                do <em>not</em> trigger cross-session recall. Only explicit references to past sessions,
                time periods, or memory do.
              </p>
            </div>
          </div>
        </section>

        {/* Things You Can Say */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Things You Can Tell Claude</h2>
          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#ffb800]" />
                Setting Directives
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-3">
                Tell Claude your preferences and they become permanent rules:
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md px-3 py-2">
                  <code className="text-[#ffb800]">"Always use TypeScript strict mode"</code>
                </div>
                <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md px-3 py-2">
                  <code className="text-[#ffb800]">"Never delete files without asking me first"</code>
                </div>
                <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md px-3 py-2">
                  <code className="text-[#ffb800]">"I prefer Tailwind over styled-components"</code>
                </div>
                <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md px-3 py-2">
                  <code className="text-[#ffb800]">"Avoid using class components in React"</code>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Search className="w-4 h-4 text-[#00f0ff]" />
                Searching Memory
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-3">
                Ask Claude to search what it knows:
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md px-3 py-2">
                  <code className="text-[#ffb800]">"What do you know about our auth setup?"</code>
                </div>
                <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md px-3 py-2">
                  <code className="text-[#ffb800]">"Search for patterns about deployment"</code>
                </div>
                <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md px-3 py-2">
                  <code className="text-[#ffb800]">"What did we decide about the database schema?"</code>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-400" />
                Storing Secrets
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-3">
                Share API keys and they're encrypted with AES-256-GCM:
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md px-3 py-2">
                  <code className="text-[#ffb800]">"Store this API key: sk-abc123..."</code>
                </div>
                <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md px-3 py-2">
                  <code className="text-[#ffb800]">"What's my OpenAI key?"</code>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                Plans &amp; Tasks
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-3">
                For multi-step work, create tracked plans:
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md px-3 py-2">
                  <code className="text-[#ffb800]">"Help me implement user authentication"</code>
                </div>
                <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md px-3 py-2">
                  <code className="text-[#ffb800]">"Create a plan for migrating to PostgreSQL"</code>
                </div>
              </div>
              <p className="text-[#7a7a8e] text-sm mt-3">
                Plans persist across sessions. Come back tomorrow and pick up where you left off.
              </p>
            </div>
          </div>
        </section>

        {/* Session Continuity */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Session Continuity</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 space-y-4">
            <p className="text-[#e8e8f0]/90">
              ekkOS preserves your working context even when Claude Code's context window fills up.
              When the conversation gets too long:
            </p>
            <ul className="space-y-2 text-[#e8e8f0]/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff] mt-1">•</span>
                <span>ekkOS saves your current working state before compaction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff] mt-1">•</span>
                <span>Claude Code compresses the conversation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff] mt-1">•</span>
                <span>ekkOS restores the context — you experience zero knowledge loss</span>
              </li>
            </ul>
            <p className="text-[#7a7a8e] text-sm">
              You can also type <code className="bg-[#0d0d14]/60 px-1.5 py-0.5 rounded text-[#00f0ff]">/clear</code> and
              then <code className="bg-[#0d0d14]/60 px-1.5 py-0.5 rounded text-[#00f0ff]">/continue</code> to
              start a fresh conversation without losing memory context.
            </p>
          </div>
        </section>

        {/* The Footer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">The ekkOS Footer</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 space-y-4">
            <p className="text-[#e8e8f0]/90">
              Every response from an ekkOS-enabled session ends with a footer like this:
            </p>
            <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4">
              <code className="text-[#7a7a8e] text-sm">
                Claude Code (Opus 4.6) · 🧠 <strong className="text-white">ekkOS_™</strong> · cosmic-penguin-runs · 📅 2026-03-03 4:50 PM EST
              </code>
            </div>
            <div className="text-sm space-y-2 text-[#7a7a8e]">
              <div><strong className="text-[#e8e8f0]">IDE + Model</strong> — which tool and model you're using</div>
              <div><strong className="text-[#e8e8f0]">Session Name</strong> — a human-readable identifier for your session (e.g., "cosmic-penguin-runs")</div>
              <div><strong className="text-[#e8e8f0]">Timestamp</strong> — when the response was generated</div>
            </div>
            <p className="text-[#7a7a8e] text-sm">
              If you see the footer, ekkOS is active and working.
            </p>
          </div>
        </section>

        {/* PatternGuard */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">PatternGuard</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 space-y-4">
            <p className="text-[#e8e8f0]/90">
              When Claude retrieves patterns from memory, it acknowledges each one with a
              SELECT or SKIP block. This is transparency — you can see exactly which patterns
              influenced the response.
            </p>
            <CopyBlock code={`[ekkOS_SELECT]
- id: pat_abc123
  reason: directly relevant to this auth bug
  confidence: 0.9
[/ekkOS_SELECT]

[ekkOS_SKIP]
- id: pat_def456
  reason: about database migrations, not auth
[/ekkOS_SKIP]`} className="text-[#e8e8f0]" />
            <p className="text-[#7a7a8e] text-sm">
              You don't need to do anything with these blocks — they're informational.
              They only appear on technical responses, not casual conversation.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/integrations/claude-code" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Setup Guide</h3>
              <p className="text-sm text-[#7a7a8e]">Install and configure ekkOS with Claude Code</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Get started <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Tool Reference</h3>
              <p className="text-sm text-[#7a7a8e]">Complete reference for available MCP tools</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/directives" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Directives Deep Dive</h3>
              <p className="text-sm text-[#7a7a8e]">Learn about MUST/NEVER/PREFER/AVOID rules</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/golden-loop" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-orange-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">The Golden Loop</h3>
              <p className="text-sm text-[#7a7a8e]">How ekkOS learns and improves over time</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-orange-400 group-hover:gap-2 transition-all">
                Understand <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
