import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import {
  HeartPulse, Shield, Zap, Moon, Target, Radio,
  Gauge, CheckCircle2, AlertTriangle, ArrowRight,
  Activity, Eye, GitPullRequest, RotateCcw, Syringe,
} from 'lucide-react';

export default function NervePage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-sm text-red-400 mb-6">
            <HeartPulse className="w-4 h-4" />
            <span>Concepts</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">NERVE</h1>
          <p className="text-xl text-[#7a7a8e]">
            ekkOS can detect, diagnose, and heal problems in your codebase automatically.
          </p>
        </div>

        {/* Simple Explanation */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-8">
            <p className="text-[#e8e8f0]/90 leading-relaxed text-lg">
              NERVE is the self-healing layer of ekkOS. It monitors your memory system's health,
              detects anomalies like failing patterns or degraded performance, and takes corrective
              action — from quarantining bad patterns to rolling back broken deployments. Think of
              it as an immune system for your codebase.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">How It Works</h2>
          <p className="text-[#7a7a8e] mb-8">
            NERVE follows a pipeline — each anomaly flows through a series of stages before
            any action is taken. Nothing happens without evidence.
          </p>

          <div className="space-y-3">
            {[
              { icon: <Eye className="w-4 h-4" />, stage: 'Observe', desc: 'Continuously monitors your pattern health, success rates, and system metrics' },
              { icon: <AlertTriangle className="w-4 h-4" />, stage: 'Detect', desc: 'Identifies anomalies — declining pattern success, production errors, latency spikes' },
              { icon: <Activity className="w-4 h-4" />, stage: 'Diagnose', desc: 'Gathers evidence and produces a root-cause analysis with confidence scoring' },
              { icon: <Syringe className="w-4 h-4" />, stage: 'Heal', desc: 'Executes corrective actions — quarantine bad patterns, forge defensive ones, or roll back deployments' },
              { icon: <CheckCircle2 className="w-4 h-4" />, stage: 'Verify', desc: 'Checks that the fix worked. If it didn\'t, the action is reverted and logged' },
            ].map((step, i) => (
              <div key={step.stage} className="flex items-start gap-4 p-4 bg-[#111118]/60 border border-[#1a1a2e] clip-lg">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-white/30">{i + 1}</span>
                    <strong className="text-white">{step.stage}</strong>
                  </div>
                  <p className="text-sm text-[#7a7a8e]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Autonomy Tiers */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-white">Autonomy Tiers</h2>
          <p className="text-[#7a7a8e] mb-8">
            NERVE has four levels of autonomy. You control how much it can do on its own.
            Each tier unlocks more powerful actions, with stronger safety guarantees.
          </p>

          <div className="space-y-4">
            {[
              {
                tier: 'R0',
                name: 'Observe',
                color: '#00ff88',
                desc: 'Read-only. NERVE detects and diagnoses problems but takes no action. You review everything.',
                actions: ['Anomaly detection', 'Root-cause diagnosis', 'Confidence scoring'],
              },
              {
                tier: 'R1',
                name: 'Memory Healing',
                color: '#00f0ff',
                desc: 'NERVE can modify your memory — quarantine failing patterns, retire stale ones, forge defensive patterns from failures.',
                actions: ['Pattern quarantine', 'Pattern retirement', 'Antibody forging', 'Anti-pattern detection'],
              },
              {
                tier: 'R2',
                name: 'Code Mutation',
                color: '#ffb800',
                desc: 'NERVE can generate pull requests to fix localized bugs. All changes go through PR review — nothing is auto-merged.',
                actions: ['Automated PR generation', 'Localized bug fixes', 'Test verification before proposing'],
              },
              {
                tier: 'R3',
                name: 'Autonomous Reflex',
                color: '#ff3366',
                desc: 'NERVE can automatically roll back a deployment if it detects an acute post-deploy outage. This is the fastest response — no human in the loop.',
                actions: ['Automatic deployment rollback', 'Sub-minute response time', 'Machine-checkable safety predicates'],
              },
            ].map((t) => (
              <div key={t.tier} className="border border-[#1a1a2e] clip-lg overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-3 border-b border-[#1a1a2e]" style={{ backgroundColor: `${t.color}08` }}>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded" style={{ color: t.color, backgroundColor: `${t.color}15`, border: `1px solid ${t.color}30` }}>
                    {t.tier}
                  </span>
                  <span className="font-semibold text-white">{t.name}</span>
                </div>
                <div className="p-5 bg-[#111118]/60">
                  <p className="text-sm text-[#7a7a8e] mb-3">{t.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.actions.map((action) => (
                      <span key={action} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-white/40 border border-white/5">
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard Panels */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-white">Dashboard Panels</h2>
          <p className="text-[#7a7a8e] mb-8">
            The NERVE dashboard gives you real-time visibility into what the system is doing.
            Everything is observable — no black boxes.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: <Activity className="w-5 h-5" />,
                name: 'Diagnoses',
                color: '#00f0ff',
                desc: 'Every anomaly NERVE detects gets a diagnosis with root-cause analysis, confidence score, and recommended actions.',
              },
              {
                icon: <Zap className="w-5 h-5" />,
                name: 'Reflex Arc',
                color: '#ff3366',
                desc: 'Monitors the fast-path rollback system. Shows when reflexes evaluated, fired, or were blocked by safety guards.',
              },
              {
                icon: <Gauge className="w-5 h-5" />,
                name: 'Mutation Budget',
                color: '#ffb800',
                desc: 'Daily and weekly caps on autonomous actions. Prevents runaway healing — the system can\'t exceed its budget.',
              },
              {
                icon: <Moon className="w-5 h-5" />,
                name: 'Dream Forge',
                color: '#8a8aff',
                desc: 'Overnight, NERVE recombines patterns from your library to discover cross-domain connections you might have missed.',
              },
              {
                icon: <Shield className="w-5 h-5" />,
                name: 'Antibody Library',
                color: '#00ff88',
                desc: 'Defensive patterns forged from past failures. When NERVE diagnoses a problem, it creates an antibody to prevent recurrence.',
              },
              {
                icon: <Target className="w-5 h-5" />,
                name: 'Goal Genesis',
                color: '#00f0ff',
                desc: 'When the same anomaly triggers repeatedly, NERVE surfaces it as a goal — showing what needs structural improvement.',
              },
            ].map((panel) => (
              <div key={panel.name} className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ color: panel.color }}>{panel.icon}</span>
                  <span className="font-semibold text-white text-sm">{panel.name}</span>
                </div>
                <p className="text-sm text-[#7a7a8e]">{panel.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Guarantees */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-white">Safety Guarantees</h2>
          <p className="text-[#7a7a8e] mb-8">
            NERVE is designed with multiple layers of safety. Every action is bounded, auditable, and reversible.
          </p>

          <div className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-6">
            <ul className="space-y-4">
              {[
                { title: 'Mutation budgets', desc: 'Daily caps on every action type. The system cannot exceed its budget, even if multiple anomalies fire simultaneously.' },
                { title: 'Confidence thresholds', desc: 'Actions only execute when diagnosis confidence exceeds the tier\'s threshold. Low-confidence diagnoses are logged for manual review.' },
                { title: 'Single-hop rollbacks', desc: 'The Reflex Arc only reverts to the immediately previous deployment. No cascading reversions.' },
                { title: 'Previous deployment health check', desc: 'Rollbacks only fire if the previous deployment was confirmed healthy. NERVE won\'t revert to a known-bad state.' },
                { title: 'Full audit trail', desc: 'Every decision — including decisions not to act — is recorded with evidence, predicates, and safety check results.' },
                { title: 'Kill switch', desc: 'One click disables all autonomous actions immediately. The system goes read-only.' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{item.title}</strong>
                    <span className="text-[#7a7a8e]"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Vitals Integration */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-white">Vitals Integration</h2>
          <p className="text-[#7a7a8e] mb-8">
            Connect your observability providers so NERVE can feel production pain — not just memory health.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: 'Sentry', desc: 'Error tracking', status: 'Available' },
              { name: 'Axiom', desc: 'Log analytics', status: 'Available' },
              { name: 'Vercel', desc: 'Deployments', status: 'Available' },
              { name: 'Datadog', desc: 'APM', status: 'Available' },
            ].map((p) => (
              <div key={p.name} className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-4 text-center">
                <div className="text-sm font-semibold text-white mb-1">{p.name}</div>
                <div className="text-xs text-[#7a7a8e]">{p.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#7a7a8e] mt-3">
            Configure vitals in <strong className="text-white/60">Dashboard &rarr; Settings &rarr; Vitals</strong>.
            Without vitals, NERVE only monitors ekkOS-internal metrics.
          </p>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Getting Started</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-5">
              <div className="text-xs font-mono text-cyan-400 mb-2">Step 1</div>
              <h3 className="font-semibold text-white mb-2">Open NERVE</h3>
              <p className="text-sm text-[#7a7a8e]">
                Go to <strong className="text-white/60">Dashboard &rarr; NERVE</strong> to see your system's health.
              </p>
            </div>
            <div className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-5">
              <div className="text-xs font-mono text-cyan-400 mb-2">Step 2</div>
              <h3 className="font-semibold text-white mb-2">Set your tier</h3>
              <p className="text-sm text-[#7a7a8e]">
                Start at R0 (observe only). Upgrade to R1 when you're comfortable with autonomous memory healing.
              </p>
            </div>
            <div className="bg-[#111118]/60 border border-[#1a1a2e] clip-lg p-5">
              <div className="text-xs font-mono text-cyan-400 mb-2">Step 3</div>
              <h3 className="font-semibold text-white mb-2">Connect vitals</h3>
              <p className="text-sm text-[#7a7a8e]">
                Add your observability provider so NERVE can detect production issues, not just memory drift.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <div className="border border-[#1a1a2e] clip-lg p-6 bg-gradient-to-br from-cyan-500/5 to-transparent">
            <h3 className="font-semibold text-white mb-3">Related</h3>
            <div className="space-y-2">
              <Link href="/concepts/golden-loop" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                <ArrowRight className="w-4 h-4" />
                Continuous Improvement — how ekkOS learns from outcomes
              </Link>
              <Link href="/concepts/patterns" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                <ArrowRight className="w-4 h-4" />
                Patterns — the building blocks NERVE monitors and heals
              </Link>
              <Link href="/concepts/directives" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                <ArrowRight className="w-4 h-4" />
                Directives — rules that NERVE enforces automatically
              </Link>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
