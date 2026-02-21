import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, ListChecks, Sparkles, BookTemplate, Check, Clock, Archive, FileText } from 'lucide-react';

const statuses = [
  { name: 'draft', desc: 'Plan created, not yet started', color: 'white', icon: FileText },
  { name: 'in_progress', desc: 'Actively being worked on', color: 'blue', icon: Clock },
  { name: 'completed', desc: 'All steps finished', color: 'emerald', icon: Check },
  { name: 'archived', desc: 'Stored for reference', color: 'amber', icon: Archive },
];

const tools = [
  { name: 'ekkOS_Plan', desc: 'Create a new structured plan' },
  { name: 'ekkOS_Plans', desc: 'List your plans (filter by status)' },
  { name: 'ekkOS_PlanStatus', desc: 'Update plan status (draft → in_progress → completed)' },
  { name: 'ekkOS_PlanStep', desc: 'Mark individual steps complete or incomplete' },
  { name: 'ekkOS_Generate', desc: 'AI-generate a plan from a description' },
  { name: 'ekkOS_SaveTemplate', desc: 'Save a successful plan as a reusable template' },
  { name: 'ekkOS_Templates', desc: 'List available plan templates' },
  { name: 'ekkOS_FromTemplate', desc: 'Create a new plan from a saved template' },
];

export default function PlansPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00f0ff]/10 to-[#ffb800]/70/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <ListChecks className="w-4 h-4" />
            <span>Task Management</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Plans & Tasks</h1>
          <p className="text-xl text-[#7a7a8e]">
            Structured task plans for complex multi-step work.
            Create plans, track progress, save as templates.
          </p>
        </div>

        {/* What Are Plans */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#00f0ff]/10 via-[#ffb800]/10 to-[#00f0ff]/70/10 border border-[#00f0ff]/20 clip-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">What Are Plans?</h2>
            <p className="text-[#e8e8f0]/90 leading-relaxed mb-4">
              Plans are tracked, step-by-step task lists that persist across sessions. Think of them
              as project management for your AI — break complex work into steps, track what&apos;s done,
              and pick up where you left off next time.
            </p>
            <p className="text-[#e8e8f0]/90 leading-relaxed">
              Plans are especially useful for feature implementations, refactoring, migrations, and
              any work that spans multiple sessions.
            </p>
          </div>
        </section>

        {/* When to Use */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">When to Use Plans</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5 flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-[#e8e8f0]/90 text-sm">Feature implementations with 3+ steps</span>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5 flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-[#e8e8f0]/90 text-sm">Multi-file refactoring projects</span>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5 flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-[#e8e8f0]/90 text-sm">Project setup and migrations</span>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5 flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-[#e8e8f0]/90 text-sm">Any task that spans multiple sessions</span>
            </div>
          </div>
        </section>

        {/* Creating Plans */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Creating Plans</h2>
          <div className="space-y-6">
            {/* Manual */}
            <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-[#00f0ff]" />
                Manual Plan
              </h3>
              <pre className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4 text-sm text-[#e8e8f0]/90 overflow-x-auto font-mono">
{`ekkOS_Plan({
  title: "Implement User Auth",
  steps: [
    { label: "Set up auth provider" },
    { label: "Create login/signup pages" },
    { label: "Add protected routes" },
    { label: "Write tests" }
  ]
})`}
              </pre>
            </div>

            {/* AI-Generated */}
            <div className="bg-gradient-to-br from-[#ffb800]/5 to-transparent border border-[#ffb800]/20 clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#ffb800]" />
                AI-Generated Plan
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                Describe what you want and the AI analyzes your codebase to generate steps:
              </p>
              <pre className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4 text-sm text-[#e8e8f0]/90 overflow-x-auto font-mono">
{`ekkOS_Generate({
  context: "Add dark mode toggle to the React app"
})`}
              </pre>
            </div>

            {/* From Template */}
            <div className="bg-gradient-to-br from-amber-500/5 to-transparent border border-amber-500/20 clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <BookTemplate className="w-5 h-5 text-amber-400" />
                From Template
              </h3>
              <p className="text-[#7a7a8e] text-sm mb-4">
                Reuse a previously saved plan template:
              </p>
              <pre className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4 text-sm text-[#e8e8f0]/90 overflow-x-auto font-mono">
{`ekkOS_FromTemplate({
  template_id: "feature-impl-template",
  context: "Now do it for the settings page"
})`}
              </pre>
            </div>
          </div>
        </section>

        {/* Plan Lifecycle */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Plan Lifecycle</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              {statuses.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.name} className="flex items-center gap-3">
                    <div className={`flex items-center gap-2 bg-${s.color}-500/10 border border-${s.color}-500/20 clip-md px-4 py-2`}>
                      <Icon className={`w-4 h-4 text-${s.color}-400`} />
                      <span className={`text-${s.color}-400 font-mono text-sm`}>{s.name}</span>
                    </div>
                    {i < statuses.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-[#4a4a5e]/60 hidden md:block" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 space-y-2">
              {statuses.map((s) => (
                <div key={s.name} className="flex items-center gap-3 text-sm">
                  <code className={`text-${s.color}-400 font-mono w-28`}>{s.name}</code>
                  <span className="text-[#7a7a8e]">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracking Progress */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Tracking Progress</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-white mb-2 text-sm">Mark a step complete</h3>
              <pre className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 text-sm text-[#e8e8f0]/90 font-mono">
{`ekkOS_PlanStep({ plan_id: "...", step_index: 0, completed: true })`}
              </pre>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 text-sm">Update plan status</h3>
              <pre className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 text-sm text-[#e8e8f0]/90 font-mono">
{`ekkOS_PlanStatus({ plan_id: "...", status: "in_progress" })`}
              </pre>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 text-sm">Save as template for reuse</h3>
              <pre className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 text-sm text-[#e8e8f0]/90 font-mono">
{`ekkOS_SaveTemplate({ plan_id: "...", category: "feature" })`}
              </pre>
            </div>
          </div>
        </section>

        {/* Tools Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Plan Tools (8)</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1a1a2e]">
                  <th className="text-left p-4 text-[#4a4a5e] font-semibold">Tool</th>
                  <th className="text-left p-4 text-[#4a4a5e] font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {tools.map((t) => (
                  <tr key={t.name}>
                    <td className="p-4"><code className="text-[#00f0ff]">{t.name}</code></td>
                    <td className="p-4 text-[#7a7a8e]">{t.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Best Practices</h2>
          <div className="space-y-3">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4 flex items-start gap-3">
              <span className="text-[#00f0ff] font-bold">1.</span>
              <span className="text-[#e8e8f0]/90 text-sm"><strong className="text-white">Break plans into small, testable steps.</strong> Each step should be independently verifiable.</span>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4 flex items-start gap-3">
              <span className="text-[#00f0ff] font-bold">2.</span>
              <span className="text-[#e8e8f0]/90 text-sm"><strong className="text-white">Save templates for repeating workflows.</strong> Feature implementations, deployment checklists, refactoring patterns.</span>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4 flex items-start gap-3">
              <span className="text-[#00f0ff] font-bold">3.</span>
              <span className="text-[#e8e8f0]/90 text-sm"><strong className="text-white">Use AI-generation for unfamiliar tasks.</strong> Let the AI analyze your codebase and suggest the right steps.</span>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4 flex items-start gap-3">
              <span className="text-[#00f0ff] font-bold">4.</span>
              <span className="text-[#e8e8f0]/90 text-sm"><strong className="text-white">Archive completed plans</strong> instead of deleting them. They serve as historical reference.</span>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/concepts/golden-loop" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">The Golden Loop</h3>
              <p className="text-sm text-[#7a7a8e]">How your AI builds reusable solutions</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/directives" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Directives</h3>
              <p className="text-sm text-[#7a7a8e]">Set behavioral rules for your AI</p>
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
