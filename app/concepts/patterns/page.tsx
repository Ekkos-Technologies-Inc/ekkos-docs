import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Check, X } from 'lucide-react';

export default function PatternsPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>Core Concepts</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Patterns</h1>
          <p className="text-xl text-[#7a7a8e]">
            Save solutions. Retrieve them when you need them.
          </p>
        </div>

        {/* What is a Pattern */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">What is a Pattern?</h2>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-6">
            <p className="text-[#e8e8f0]/90 leading-relaxed mb-6">
              A pattern is a <strong className="text-white">problem-solution pair</strong> that you can save and retrieve later.
              When you solve a problem, save it. When you face a similar problem, search for it.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4">
                <h4 className="font-semibold text-white mb-2">Solutions</h4>
                <p className="text-[#7a7a8e] text-sm">Approaches that worked — save these for future reference.</p>
              </div>
              <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4">
                <h4 className="font-semibold text-white mb-2">Anti-Patterns</h4>
                <p className="text-[#7a7a8e] text-sm">What NOT to do — save these to avoid repeating mistakes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Pattern */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Example Pattern</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-[#1a1a2e] flex items-center justify-between">
              <span className="font-semibold text-white">Use JWT Auth for Next.js</span>
              <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded">Works well</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-[#7a7a8e] uppercase tracking-wider mb-2">Problem</h4>
                <p className="text-[#e8e8f0]/90">Need to add authentication to a Next.js application with social logins and email/password.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#7a7a8e] uppercase tracking-wider mb-2">Solution</h4>
                <p className="text-[#e8e8f0]/90">Use middleware-based JWT validation with the App Router. Configure OAuth providers in your auth dashboard. Use Next.js middleware for route protection.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#7a7a8e] uppercase tracking-wider mb-2">Works When</h4>
                <ul className="text-[#7a7a8e] text-sm space-y-1">
                  <li>• Next.js 13+ with App Router</li>
                  <li>• Need social auth (Google, GitHub, etc.)</li>
                  <li>• Using PostgreSQL for database</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#7a7a8e] uppercase tracking-wider mb-2">Avoid</h4>
                <ul className="text-[#7a7a8e] text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-400" />
                    Don't roll custom JWT handling
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-400" />
                    Don't store tokens in localStorage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Save Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Saving Patterns</h2>
          <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
            <p className="text-[#e8e8f0]/90 mb-4">
              Tell your AI to save something when you've solved a problem:
            </p>
            <div className="space-y-3">
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#00f0ff]">"Remember this for next time"</code>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#00f0ff]">"Save this pattern: always validate user input before database queries"</code>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#00f0ff]">"Forge this as an anti-pattern — we should never do this again"</code>
              </div>
            </div>
          </div>
        </section>

        {/* Using Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Using Patterns</h2>
          <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
            <p className="text-[#e8e8f0]/90 mb-4">
              Patterns are automatically retrieved when relevant. You can also search explicitly:
            </p>
            <div className="space-y-3">
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#ffb800]">"Search my memory for authentication patterns"</code>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#ffb800]">"What patterns do we have for error handling?"</code>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#ffb800]">"How did we solve this before?"</code>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Related</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">MCP Tools</h3>
              <p className="text-sm text-[#7a7a8e]">See ekkOS_Forge and other tools</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Browse tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/quickstart" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Get Started</h3>
              <p className="text-sm text-[#7a7a8e]">Connect your AI and start saving patterns</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                Quick start <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
