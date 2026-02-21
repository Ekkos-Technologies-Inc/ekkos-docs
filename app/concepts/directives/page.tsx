import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Shield, Check, AlertTriangle, ThumbsUp, ThumbsDown } from 'lucide-react';

const directiveTypes = [
  {
    type: 'MUST',
    description: 'Rules your AI must always follow. Highest enforcement level.',
    trigger: 'Say "always..." in conversation',
    color: 'emerald',
    icon: Check,
    examples: [
      'Always use TypeScript strict mode',
      'Always run tests before committing',
      'Always use snake_case for database columns',
      'Always include error handling for API calls',
    ],
  },
  {
    type: 'NEVER',
    description: 'Actions your AI must never take. Highest enforcement level.',
    trigger: 'Say "never..." in conversation',
    color: 'red',
    icon: AlertTriangle,
    examples: [
      'Never push directly to main',
      'Never delete production data without backup',
      'Never expose API keys in code',
      'Never use var, always use const/let',
    ],
  },
  {
    type: 'PREFER',
    description: 'Soft preferences the AI should follow when possible.',
    trigger: 'Say "I prefer..." in conversation',
    color: 'blue',
    icon: ThumbsUp,
    examples: [
      'Prefer functional components over class components',
      'Prefer early returns over nested conditionals',
      'Prefer named exports over default exports',
      'Prefer Tailwind over inline styles',
    ],
  },
  {
    type: 'AVOID',
    description: 'Things the AI should try not to do. Suggestion level.',
    trigger: 'Say "avoid..." or "don\'t..." in conversation',
    color: 'amber',
    icon: ThumbsDown,
    examples: [
      'Avoid over-engineering simple features',
      'Avoid adding dependencies for trivial tasks',
      'Avoid console.log in production code',
      'Avoid abbreviations in variable names',
    ],
  },
];

export default function DirectivesPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-red-500/10 border border-emerald-500/20 text-sm text-emerald-400 mb-6">
            <Shield className="w-4 h-4" />
            <span>Core Concept</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Directives</h1>
          <p className="text-xl text-[#7a7a8e]">
            Permanent behavioral rules that persist across all sessions.
            Tell your AI what to <span className="text-emerald-400 font-semibold">always</span> do
            and <span className="text-red-400 font-semibold">never</span> do.
          </p>
        </div>

        {/* What Are Directives */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#00f0ff]/10 via-[#ffb800]/10 to-[#00f0ff]/70/10 border border-[#00f0ff]/20 clip-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">What Are Directives?</h2>
            <p className="text-[#e8e8f0]/90 leading-relaxed mb-4">
              Directives are Layer 9 of the ekkOS memory system. They&apos;re persistent rules
              that define how your AI should behave — coding standards, workflow requirements,
              personal preferences. Once set, they apply to every future session automatically.
            </p>
            <p className="text-[#e8e8f0]/90 leading-relaxed">
              Think of them as your AI&apos;s constitution. Just say what you want in natural language
              and ekkOS captures it as a permanent rule.
            </p>
          </div>
        </section>

        {/* 4 Directive Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Four Types of Directives</h2>
          <div className="space-y-6">
            {directiveTypes.map((dt) => {
              const Icon = dt.icon;
              return (
                <div key={dt.type} className={`bg-gradient-to-br from-${dt.color}-500/5 to-transparent border border-${dt.color}-500/20 clip-lg p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 clip-md bg-${dt.color}-500/20 flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 text-${dt.color}-400`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold text-${dt.color}-400 font-mono`}>{dt.type}</h3>
                      <p className="text-[#7a7a8e] text-sm">{dt.trigger}</p>
                    </div>
                  </div>

                  <p className="text-[#e8e8f0]/90 mb-4">{dt.description}</p>

                  <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4">
                    <h4 className="text-xs font-semibold text-[#4a4a5e] uppercase tracking-wider mb-3">Examples</h4>
                    <ul className="space-y-2">
                      {dt.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2 text-sm">
                          <span className={`text-${dt.color}-400 mt-0.5`}>•</span>
                          <span className="text-[#7a7a8e]">&quot;{ex}&quot;</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* How to Create */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Creating Directives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">Natural Language</h3>
              <p className="text-[#7a7a8e] text-sm mb-4">Just tell your AI. It detects directive triggers automatically:</p>
              <div className="space-y-3 text-sm">
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3">
                  <span className="text-[#4a4a5e]">You:</span>
                  <span className="text-[#e8e8f0] ml-2">&quot;Always use semicolons in TypeScript&quot;</span>
                </div>
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3">
                  <span className="text-[#4a4a5e]">→</span>
                  <span className="text-emerald-400 ml-2">MUST</span>
                  <span className="text-[#7a7a8e] ml-2">directive created</span>
                </div>
              </div>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">MCP Tool</h3>
              <p className="text-[#7a7a8e] text-sm mb-4">Use the tool directly for precise control:</p>
              <pre className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 text-sm text-[#e8e8f0]/90 overflow-x-auto font-mono">
{`ekkOS_Directive({
  type: "MUST",
  rule: "Use semicolons in TS",
  reason: "Team standard",
  priority: 85
})`}
              </pre>
            </div>
          </div>
        </section>

        {/* Priority System */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Priority System</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <p className="text-[#e8e8f0]/90 mb-4">
              Each directive has a priority from 0 to 100. When directives conflict, the higher priority wins.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4">
                <span className="text-[#e8e8f0] text-sm">Critical rules (security, data safety)</span>
                <span className="text-red-400 font-mono font-semibold">90-100</span>
              </div>
              <div className="flex items-center justify-between bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4">
                <span className="text-[#e8e8f0] text-sm">Standard rules (coding style, workflow)</span>
                <span className="text-amber-400 font-mono font-semibold">50-89</span>
              </div>
              <div className="flex items-center justify-between bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4">
                <span className="text-[#e8e8f0] text-sm">Soft preferences</span>
                <span className="text-[#ffb800] font-mono font-semibold">0-49</span>
              </div>
            </div>
          </div>
        </section>

        {/* Management Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Managing Directives</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1a1a2e]">
                  <th className="text-left p-4 text-[#4a4a5e] font-semibold">Tool</th>
                  <th className="text-left p-4 text-[#4a4a5e] font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4"><code className="text-[#00f0ff]">ekkOS_Directive</code></td>
                  <td className="p-4 text-[#7a7a8e]">Create a new directive</td>
                </tr>
                <tr>
                  <td className="p-4"><code className="text-[#00f0ff]">ekkOS_UpdateDirective</code></td>
                  <td className="p-4 text-[#7a7a8e]">Modify an existing directive (type, rule, priority)</td>
                </tr>
                <tr>
                  <td className="p-4"><code className="text-[#00f0ff]">ekkOS_DeleteDirective</code></td>
                  <td className="p-4 text-[#7a7a8e]">Remove a directive permanently</td>
                </tr>
                <tr>
                  <td className="p-4"><code className="text-[#00f0ff]">ekkOS_UniversalDirectives</code></td>
                  <td className="p-4 text-[#7a7a8e]">View system-wide constitutional rules</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conflict Detection */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Conflict Detection</h2>
          <div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 clip-lg p-6">
            <p className="text-[#e8e8f0]/90 mb-4">
              Before taking destructive or significant actions, ekkOS checks your directives
              via <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-amber-400">ekkOS_Conflict</code>.
              If an action would violate a directive, you&apos;re warned before it happens.
            </p>
            <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4 text-sm">
              <div className="text-[#4a4a5e] mb-2">Example:</div>
              <div className="text-[#7a7a8e]">You: &quot;Delete the users table&quot;</div>
              <div className="text-amber-400 mt-2">⚠ Conflict detected: NEVER directive #337 — &quot;Never delete production data without backup&quot; (priority: 95)</div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/concepts/golden-loop" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">The Golden Loop</h3>
              <p className="text-sm text-[#7a7a8e]">How your AI learns from experience</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/patterns" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Patterns</h3>
              <p className="text-sm text-[#7a7a8e]">Proven solutions stored and retrieved automatically</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
