import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import {
  BarChart3, GitCommit, AlertTriangle, CheckCircle2, ArrowRight,
  Shield, Zap, Eye, Activity, Terminal, Code, Brain,
} from 'lucide-react';

export default function ProductionTelemetryPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 mb-6">
            <BarChart3 className="w-4 h-4" />
            <span>Concepts</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Production Telemetry</h1>
          <p className="text-xl text-[#7a7a8e]">
            Your AI learns from what actually breaks in production &mdash; automatically.
          </p>
        </div>

        {/* Simple Explanation */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-8">
            <p className="text-[#e8e8f0]/90 leading-relaxed text-lg">
              When your AI writes code and that code breaks in production, ekkOS detects the failure,
              links it to the session that wrote the code, and asks you to confirm before creating a
              permanent anti-pattern. Next time your AI writes similar code, it avoids the mistake.
              No setup required &mdash; it works through the conversation itself.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">The Problem</h2>
          <p className="text-[#7a7a8e] mb-6">
            Every AI coding tool today operates in a bubble. Your AI writes code, you deploy it,
            something breaks at 2am. You get a Sentry alert, dig through logs, find the root cause,
            go back to your IDE, explain the whole context to your AI, and fix it. The AI learns
            nothing from the production failure. Next time it writes similar code, it makes the
            same mistake.
          </p>
          <div className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-6">
            <p className="text-[#e8e8f0]/80 font-mono text-sm">
              AI writes code &rarr; deploy &rarr; breaks at 2am &rarr; you investigate &rarr;
              explain to AI &rarr; fix &rarr; AI forgets &rarr; repeat
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">How It Works</h2>
          <p className="text-[#7a7a8e] mb-8">
            Three things happen silently in the background. None of them require setup.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: <GitCommit className="w-5 h-5" />,
                title: '1. Commit Tracking',
                desc: 'Every time your AI commits code during a session, ekkOS records which session produced which commit. This is the attribution chain.',
                color: 'cyan',
              },
              {
                icon: <AlertTriangle className="w-5 h-5" />,
                title: '2. Failure Detection',
                desc: 'When you paste a stack trace, mention a CI failure, or share an error in conversation, ekkOS detects it and links it to the commit that caused it.',
                color: 'orange',
              },
              {
                icon: <CheckCircle2 className="w-5 h-5" />,
                title: '3. User Verification',
                desc: 'ekkOS asks you to confirm: "Was this failure caused by your code change, or something else?" Only confirmed failures become anti-patterns.',
                color: 'green',
              },
            ].map(({ icon, title, desc, color }) => (
              <div key={title} className={`bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-6 hover:border-${color === 'cyan' ? '[#00f0ff]' : color === 'orange' ? 'orange-500' : 'green-500'}/20 transition-colors`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-${color === 'cyan' ? '[#00f0ff]' : color === 'orange' ? 'orange-500' : 'green-500'}/10 flex items-center justify-center text-${color === 'cyan' ? '[#00f0ff]' : color === 'orange' ? 'orange-400' : 'green-400'} shrink-0`}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{title}</h3>
                    <p className="text-[#7a7a8e] text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-6">
            <p className="text-[#e8e8f0]/80 font-mono text-sm">
              AI commits code &rarr; ekkOS tracks commit &rarr; CI fails &rarr; ekkOS detects &rarr;
              asks you &rarr; you confirm &rarr; anti-pattern forged &rarr; AI never makes that mistake again
            </p>
          </div>
        </section>

        {/* Two Paths */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Two Ways It Works</h2>
          <p className="text-[#7a7a8e] mb-8">
            Production telemetry works through both the Pulse proxy and MCP tools directly.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#00f0ff]" />
                <h3 className="font-semibold text-white">Via Pulse (Automatic)</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm mb-4">
                If you route through the ekkOS proxy, everything is automatic. Commits are tracked
                passively, failures are detected from conversation text, and GitHub App events
                flow in without any setup.
              </p>
              <div className="text-xs text-[#7a7a8e]/60">
                Zero configuration required
              </div>
            </div>

            <div className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-5 h-5 text-orange-400" />
                <h3 className="font-semibold text-white">Via MCP Tools (Universal)</h3>
              </div>
              <p className="text-[#7a7a8e] text-sm mb-4">
                If you use ekkOS via MCP tools only (Cursor, Windsurf, ChatGPT, etc.), three
                tools give you the same telemetry loop. Your AI calls them when relevant.
              </p>
              <div className="text-xs text-[#7a7a8e]/60">
                Works with any MCP-compatible client
              </div>
            </div>
          </div>
        </section>

        {/* MCP Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">MCP Tools</h2>
          <p className="text-[#7a7a8e] mb-8">
            Three tools for MCP-only users. Add these rules to your CLAUDE.md or system prompt.
          </p>

          <div className="space-y-4">
            <div className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white font-mono mb-2">ekkOS_TrackCommit</h3>
              <p className="text-[#7a7a8e] text-sm mb-3">
                Call after any git commit. Links the commit SHA to the current session.
              </p>
              <pre className="bg-[#0a0a0f] rounded-lg p-4 text-sm text-[#e8e8f0]/80 overflow-x-auto">
{`ekkOS_TrackCommit({
  commit_sha: "abc1234",
  branch: "main",
  message: "fix: auth middleware null check"
})`}
              </pre>
            </div>

            <div className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white font-mono mb-2">ekkOS_ReportFailure</h3>
              <p className="text-[#7a7a8e] text-sm mb-3">
                Call when the user reports a production or CI failure. Paste the full error.
              </p>
              <pre className="bg-[#0a0a0f] rounded-lg p-4 text-sm text-[#e8e8f0]/80 overflow-x-auto">
{`ekkOS_ReportFailure({
  error_content: "TypeError: Cannot read property...",
  commit_sha: "abc1234",
  source: "github_actions"
})`}
              </pre>
            </div>

            <div className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white font-mono mb-2">ekkOS_CheckCandidates</h3>
              <p className="text-[#7a7a8e] text-sm mb-3">
                Call at the start of a session. Returns pending failures that need user verification.
              </p>
              <pre className="bg-[#0a0a0f] rounded-lg p-4 text-sm text-[#e8e8f0]/80 overflow-x-auto">
{`ekkOS_CheckCandidates()
// Returns: pending failures to ask the user about`}
              </pre>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20 clip-lg p-6">
            <h4 className="font-semibold text-orange-400 mb-2">CLAUDE.md Instructions</h4>
            <p className="text-[#7a7a8e] text-sm mb-3">
              Add these rules so your AI calls the tools automatically:
            </p>
            <pre className="bg-[#0a0a0f] rounded-lg p-4 text-sm text-[#e8e8f0]/80 overflow-x-auto">
{`## Production Telemetry
- After any git commit, call ekkOS_TrackCommit with the SHA
- When the user reports a production/CI failure, call ekkOS_ReportFailure
- At the start of each session, call ekkOS_CheckCandidates`}
            </pre>
          </div>
        </section>

        {/* Safety */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Safety Guarantees</h2>
          <p className="text-[#7a7a8e] mb-8">
            Production telemetry never auto-forges patterns. Every safeguard is designed to
            prevent false lessons from entering your memory.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <CheckCircle2 className="w-4 h-4" />, title: 'User Verification', desc: 'Nothing is forged without your confirmation' },
              { icon: <Brain className="w-4 h-4" />, title: 'AI Causality Check', desc: 'Gemini analyzes if the commit plausibly caused the error' },
              { icon: <Shield className="w-4 h-4" />, title: 'Flaky Test Detection', desc: 'Same error across 3+ users = infrastructure, not code' },
              { icon: <Activity className="w-4 h-4" />, title: 'Noise Filtering', desc: 'Rate limiting, dedup, and signature normalization' },
              { icon: <Eye className="w-4 h-4" />, title: 'Staleness Decay', desc: 'Patterns lose priority if not reinforced in 90 days' },
              { icon: <Shield className="w-4 h-4" />, title: 'Collective Gate', desc: '3 independent users must confirm before a pattern enters collective intelligence' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#00f0ff]">{icon}</span>
                  <h3 className="font-semibold text-white text-sm">{title}</h3>
                </div>
                <p className="text-[#7a7a8e] text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Integration */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">GitHub Integration</h2>
          <p className="text-[#7a7a8e] mb-6">
            If you&apos;ve connected GitHub through the ekkOS dashboard, CI failure detection
            works automatically via the GitHub App. No additional setup needed.
          </p>
          <p className="text-[#7a7a8e] mb-6">
            When a GitHub Actions workflow fails, ekkOS receives the event, finds the commit SHA,
            looks up which session wrote that code, runs a causality check, and stores it as a
            candidate for your next session.
          </p>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Related</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/concepts/golden-loop" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">The Golden Loop</h3>
              <p className="text-sm text-[#7a7a8e]">How ekkOS learns and improves over time</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/nerve" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">NERVE</h3>
              <p className="text-sm text-[#7a7a8e]">Self-healing and anomaly detection</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
