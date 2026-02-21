import DocsLayout from '../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Zap, Search, Shield, Check, Terminal, AlertCircle, Mail, Lock } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <Terminal className="w-4 h-4" />
            <span>Memory Infrastructure for AI</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Memory Infrastructure That Gets Smarter Over Time
          </h1>

          <p className="text-xl text-[#7a7a8e] leading-relaxed mb-8">
            Most AI memory stores. ekkOS learns from your mistakes — so you never repeat them.
            32 MCP tools that give your AI persistent memory that learns from every interaction.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/quickstart"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-[#ffb800]/70 clip-lg font-semibold text-white hover:from-[#00f0ff] hover:to-[#ffb800]/70 transition-all shadow-lg shadow-purple-500/25"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/concepts/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg font-semibold text-white hover:bg-[#111118]/60 transition-all"
            >
              How It Works
            </Link>
          </div>
        </div>

        {/* Beta Notice */}
        <div className="mb-12 p-6 clip-lg bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-amber-400">Beta Software</h3>
          </div>
          <p className="text-[#e8e8f0]/90 mb-4">
            ekkOS is currently in beta. You may encounter bugs or incomplete features.
            Please report any issues to help us improve.
          </p>
          <a
            href="mailto:support@ekkos.dev?subject=Bug%20Report"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 clip-md font-semibold text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            support@ekkos.dev
          </a>
        </div>

        {/* What is ekkOS */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What is ekkOS?</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-[#e8e8f0]/90 text-lg leading-relaxed mb-6">
              ekkOS (pronounced "echoes") is <strong className="text-white">memory infrastructure with 32 MCP tools</strong> that
              gives AI tools like Claude Code and Cursor persistent memory that <strong className="text-white">learns from outcomes</strong>.
              Unlike static memory that returns the same answer whether it worked or not, ekkOS tracks what succeeded and what failed.
            </p>
            <ul className="space-y-3 text-[#e8e8f0]/90">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Learning Memory</strong> — Patterns that worked get promoted, failures get demoted</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Outcome Tracking</strong> — Every solution is tied to whether it actually worked</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Cross-Tool Sync</strong> — One memory across Cursor, Claude Code, VS Code, and more</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Compound Intelligence</strong> — Gets smarter with every interaction</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What You Can Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
              <div className="w-12 h-12 clip-lg bg-[#00f0ff]/10 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-[#00f0ff]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Search Past Context</h3>
              <p className="text-[#7a7a8e] text-sm leading-relaxed">
                Ask "what did we decide about X?" and get relevant context from past sessions.
                Solutions, decisions, and conversations are all searchable.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#ffb800]/5 to-transparent border border-[#ffb800]/20 clip-lg p-6">
              <div className="w-12 h-12 clip-lg bg-[#ffb800]/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#ffb800]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Save Solutions</h3>
              <p className="text-[#7a7a8e] text-sm leading-relaxed">
                Tell your AI "remember this" to store solutions. Saved patterns can be
                retrieved when you encounter similar problems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/5 to-transparent border border-pink-500/20 clip-lg p-6">
              <div className="w-12 h-12 clip-lg bg-pink-500/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Set Rules</h3>
              <p className="text-[#7a7a8e] text-sm leading-relaxed">
                Say "always use TypeScript" or "never commit secrets" to establish
                rules that persist across every session.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 clip-lg p-6">
              <div className="w-12 h-12 clip-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Store Secrets</h3>
              <p className="text-[#7a7a8e] text-sm leading-relaxed">
                Securely store API keys and credentials with AES-256-GCM encryption.
                Access them when needed without exposing them in chat.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What You Get</h2>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#00f0ff]/70 bg-clip-text text-transparent mb-2">32</div>
                <div className="text-sm text-[#7a7a8e]">MCP tools</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#ffb800] to-[#ffb800]/70 bg-clip-text text-transparent mb-2">11</div>
                <div className="text-sm text-[#7a7a8e]">Memory layers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">1</div>
                <div className="text-sm text-[#7a7a8e]">Learning loop</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-2">∞</div>
                <div className="text-sm text-[#7a7a8e]">Compound growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Supported AI Tools</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 text-center">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="font-semibold text-white mb-1">Claude Code</h3>
              <p className="text-sm text-[#7a7a8e]">Anthropic's CLI tool</p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 text-center">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-semibold text-white mb-1">Cursor</h3>
              <p className="text-sm text-[#7a7a8e]">AI-powered IDE</p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 text-center">
              <div className="text-3xl mb-3">🌊</div>
              <h3 className="font-semibold text-white mb-1">Windsurf</h3>
              <p className="text-sm text-[#7a7a8e]">Codeium's AI IDE</p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-semibold text-white mb-1">Custom Agents</h3>
              <p className="text-sm text-[#7a7a8e]">Any MCP-compatible agent</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/quickstart" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-[#00f0ff]" />
                <h3 className="font-semibold text-white">Quick Start Guide</h3>
              </div>
              <p className="text-sm text-[#7a7a8e]">Get up and running in 5 minutes</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Start now <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="w-5 h-5 text-[#ffb800]" />
                <h3 className="font-semibold text-white">MCP Tools</h3>
              </div>
              <p className="text-sm text-[#7a7a8e]">Browse all 32 available tools</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
