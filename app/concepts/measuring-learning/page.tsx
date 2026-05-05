import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, BarChart3, TrendingUp, CheckCircle2, XCircle, Clock, Target, Layers, Activity } from 'lucide-react';

export default function MeasuringLearningPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffb800]/10 border border-[#ffb800]/20 text-sm text-[#ffb800] mb-6">
            <BarChart3 className="w-4 h-4" />
            <span>Concepts</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">How ekkOS Measures Learning</h1>
          <p className="text-xl text-[#7a7a8e]">
            If you can&apos;t measure the learning, it isn&apos;t learning. Here&apos;s how ekkOS quantifies improvement over time.
          </p>
        </div>

        {/* Core Principle */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#ffb800]/5 to-transparent border border-[#ffb800]/20 clip-lg p-8">
            <p className="text-[#e8e8f0]/90 leading-relaxed text-lg">
              ekkOS tracks outcomes, not just interactions. Every pattern applied, every suggestion accepted or rejected,
              every solution that succeeded or failed &mdash; these signals feed a continuous measurement system that
              makes learning visible, auditable, and improvable.
            </p>
          </div>
        </section>

        {/* What Gets Measured */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What Gets Measured</h2>
          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 clip-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Pattern Success Rate</h3>
                  <p className="text-[#7a7a8e] text-sm leading-relaxed">
                    When a stored pattern is retrieved and applied, ekkOS tracks the outcome. Did the user accept
                    the suggestion? Did they modify it? Did they undo it? Each outcome adjusts the pattern&apos;s
                    confidence score. Patterns that consistently succeed get promoted; patterns that fail get demoted.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 clip-lg bg-[#00f0ff]/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Local Resolution Rate</h3>
                  <p className="text-[#7a7a8e] text-sm leading-relaxed">
                    The percentage of queries answered from accumulated local knowledge without calling an external
                    model. This is the primary measure of learning progress. A higher local resolution rate means
                    the system has accumulated enough domain-specific knowledge to handle queries independently.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 clip-lg bg-[#ffb800]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#ffb800]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Response Latency Distribution</h3>
                  <p className="text-[#7a7a8e] text-sm leading-relaxed">
                    Queries resolved from local knowledge complete in under 10 milliseconds. Queries requiring
                    external model calls take seconds. The distribution shift over time &mdash; more queries
                    moving from the slow path to the fast path &mdash; is a direct measure of accumulated expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 clip-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Knowledge Coverage by Domain</h3>
                  <p className="text-[#7a7a8e] text-sm leading-relaxed">
                    ekkOS maps accumulated patterns against the problem domains encountered. Coverage shows where
                    your LLLM has deep expertise (high pattern density, high confidence) and where it still relies
                    on the base model (low pattern density, no outcome history).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 clip-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Failure Tracking and Pattern Decay</h3>
                  <p className="text-[#7a7a8e] text-sm leading-relaxed">
                    Failed patterns are not deleted &mdash; they are tracked as anti-patterns with recorded context
                    about why they failed. Over time, unused or consistently failing patterns decay in confidence.
                    This prevents knowledge rot: the system forgets what stopped being useful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Learning Curve */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">The Learning Curve</h2>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-8">
            <p className="text-[#e8e8f0]/90 leading-relaxed mb-6">
              Every ekkOS instance has a measurable learning curve. In the early days, nearly all queries go to
              the base model. As patterns accumulate and confidence scores stabilize, more queries are resolved
              locally. The curve is not linear &mdash; it accelerates as domain coverage compounds.
            </p>
            <div className="bg-[#0d0d14] clip-lg p-6 font-mono text-sm">
              <div className="text-[#7a7a8e] mb-4">{`$ ekkos stats`}</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#7a7a8e]">Patterns accumulated</span>
                  <span className="text-[#00f0ff]">847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7a7a8e]">Active (confidence &gt; 0.6)</span>
                  <span className="text-green-400">612</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7a7a8e]">Decayed (confidence &lt; 0.3)</span>
                  <span className="text-[#7a7a8e]">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7a7a8e]">Anti-patterns recorded</span>
                  <span className="text-red-400">146</span>
                </div>
                <div className="border-t border-[#1a1a2e] my-3" />
                <div className="flex justify-between">
                  <span className="text-[#7a7a8e]">Local resolution rate</span>
                  <span className="text-[#ffb800] font-bold">68.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7a7a8e]">Avg local response time</span>
                  <span className="text-[#00f0ff]">7ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7a7a8e]">Avg model response time</span>
                  <span className="text-[#7a7a8e]">2,340ms</span>
                </div>
                <div className="border-t border-[#1a1a2e] my-3" />
                <div className="flex justify-between">
                  <span className="text-[#7a7a8e]">Domains covered</span>
                  <span className="text-white">14</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7a7a8e]">Strongest domain</span>
                  <span className="text-green-400">Next.js/React (94% local)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7a7a8e]">Weakest domain</span>
                  <span className="text-[#7a7a8e]">Kubernetes (12% local)</span>
                </div>
                <div className="border-t border-[#1a1a2e] my-3" />
                <div className="flex justify-between">
                  <span className="text-[#7a7a8e]">Instance age</span>
                  <span className="text-white">87 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7a7a8e]">Total interactions</span>
                  <span className="text-white">4,291</span>
                </div>
              </div>
            </div>
            <p className="text-[#7a7a8e] text-sm mt-4 italic">
              Example output from a developer instance after 87 days of regular use.
            </p>
          </div>
        </section>

        {/* How Confidence Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">How Confidence Scoring Works</h2>
          <div className="space-y-6">
            <p className="text-[#e8e8f0]/90 leading-relaxed">
              Every pattern in ekkOS carries a confidence score between 0.0 and 1.0. This score is not static &mdash;
              it evolves based on outcomes.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/20 clip-lg p-6">
                <h3 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Confidence Increases When
                </h3>
                <ul className="space-y-2 text-[#7a7a8e] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">+</span>
                    <span>Pattern is applied and user accepts the result</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">+</span>
                    <span>Pattern is applied across multiple projects successfully</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">+</span>
                    <span>Pattern aligns with collective intelligence from the community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">+</span>
                    <span>Pattern is reinforced by perception daemon signals (tests pass, build succeeds)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 clip-lg p-6">
                <h3 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Confidence Decreases When
                </h3>
                <ul className="space-y-2 text-[#7a7a8e] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&minus;</span>
                    <span>Pattern is applied and user undoes or rejects the change</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&minus;</span>
                    <span>Pattern is applied and tests fail or build breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&minus;</span>
                    <span>Pattern has not been retrieved or used for an extended period (natural decay)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&minus;</span>
                    <span>User explicitly marks the pattern as outdated or incorrect</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Confidence Thresholds</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-20 text-right">
                    <span className="text-sm font-mono text-green-400">0.8 &ndash; 1.0</span>
                  </div>
                  <div className="flex-1 h-3 bg-[#0d0d14] clip-md overflow-hidden">
                    <div className="h-full bg-green-400/60 w-full" />
                  </div>
                  <span className="text-sm text-[#7a7a8e] w-48">High confidence &mdash; used for local resolution</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-right">
                    <span className="text-sm font-mono text-[#ffb800]">0.5 &ndash; 0.8</span>
                  </div>
                  <div className="flex-1 h-3 bg-[#0d0d14] clip-md overflow-hidden">
                    <div className="h-full bg-[#ffb800]/60 w-3/4" />
                  </div>
                  <span className="text-sm text-[#7a7a8e] w-48">Medium &mdash; used as context for model calls</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-right">
                    <span className="text-sm font-mono text-[#7a7a8e]">0.3 &ndash; 0.5</span>
                  </div>
                  <div className="flex-1 h-3 bg-[#0d0d14] clip-md overflow-hidden">
                    <div className="h-full bg-[#7a7a8e]/40 w-1/2" />
                  </div>
                  <span className="text-sm text-[#7a7a8e] w-48">Low &mdash; available but not actively surfaced</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-right">
                    <span className="text-sm font-mono text-red-400">&lt; 0.3</span>
                  </div>
                  <div className="flex-1 h-3 bg-[#0d0d14] clip-md overflow-hidden">
                    <div className="h-full bg-red-400/40 w-1/4" />
                  </div>
                  <span className="text-sm text-[#7a7a8e] w-48">Decayed &mdash; candidates for retirement</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What This Is Not */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What This Is Not</h2>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-8">
            <p className="text-[#e8e8f0]/90 leading-relaxed mb-6">
              Precision about what ekkOS measures also requires precision about what it does not claim.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">This is not fine-tuning.</strong>
                  <span className="text-[#7a7a8e]"> The base model&apos;s weights are never modified.
                  Learning happens in the cognitive layer above the model, not inside it.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">This is not RAG alone.</strong>
                  <span className="text-[#7a7a8e]"> RAG retrieves documents and injects them into context.
                  ekkOS does that, but also tracks whether the retrieved knowledge actually worked, and adjusts
                  future retrieval accordingly.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">This is not a generic benchmark claim.</strong>
                  <span className="text-[#7a7a8e]"> ekkOS does not claim to outperform frontier models on
                  standard benchmarks. It claims to improve measurably on the specific tasks and domains
                  a given user works in, validated by that user&apos;s own outcome data.</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Measurement Methodology</h2>
          <div className="space-y-6">
            <p className="text-[#e8e8f0]/90 leading-relaxed">
              All metrics reported by <code className="text-[#00f0ff] bg-[#00f0ff]/10 px-1.5 py-0.5 rounded text-sm">ekkos stats</code> are
              derived from local data on the user&apos;s machine. No metrics are collected remotely unless the user opts
              into cloud sync.
            </p>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">How Metrics Are Computed</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-[#00f0ff] font-mono w-40 flex-shrink-0">Local resolution %</span>
                  <span className="text-[#7a7a8e]">
                    Queries resolved from Cortex with confidence above threshold, divided by total queries.
                    Only counted when the user does not subsequently override or reject the response.
                  </span>
                </div>
                <div className="border-t border-[#1a1a2e]" />
                <div className="flex items-start gap-3">
                  <span className="text-[#00f0ff] font-mono w-40 flex-shrink-0">Pattern confidence</span>
                  <span className="text-[#7a7a8e]">
                    Bayesian-updated score starting at 0.5, adjusted per outcome event. Weighted by recency:
                    recent outcomes have more influence than older ones.
                  </span>
                </div>
                <div className="border-t border-[#1a1a2e]" />
                <div className="flex items-start gap-3">
                  <span className="text-[#00f0ff] font-mono w-40 flex-shrink-0">Domain coverage</span>
                  <span className="text-[#7a7a8e]">
                    Automatically classified by tags and problem-type embeddings. Coverage is the ratio of
                    query categories with at least one high-confidence pattern to total categories encountered.
                  </span>
                </div>
                <div className="border-t border-[#1a1a2e]" />
                <div className="flex items-start gap-3">
                  <span className="text-[#00f0ff] font-mono w-40 flex-shrink-0">Decay rate</span>
                  <span className="text-[#7a7a8e]">
                    Patterns lose confidence over time if not accessed. The decay function is logarithmic:
                    rapid initial decay that slows over time. A single successful retrieval resets the decay clock.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Related</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/concepts/golden-loop" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#ffb800]/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-[#ffb800]" />
                <h3 className="font-semibold text-white">The Golden Loop</h3>
              </div>
              <p className="text-sm text-[#7a7a8e]">How the continuous learning cycle works end to end</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/patterns" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#00f0ff]/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="w-5 h-5 text-[#00f0ff]" />
                <h3 className="font-semibold text-white">Patterns</h3>
              </div>
              <p className="text-sm text-[#7a7a8e]">How patterns are created, stored, and evolved</p>
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
