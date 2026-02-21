import { ArrowRight, Brain, Key, MessageSquare, Search, Shield, Terminal, Zap, Download, RefreshCw, BarChart, Target, AlertTriangle, Link as LinkIcon, Users, Settings, Database } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../../components/DocsLayout';

// 15 tool categories with counts
const categories = [
  {
    name: 'Core Memory',
    slug: 'core-memory',
    count: 8,
    color: 'purple',
    icon: Brain,
    description: 'Search, save, and track solutions',
  },
  {
    name: 'Context & Retrieval',
    slug: 'context-retrieval',
    count: 8,
    color: 'blue',
    icon: Search,
    description: 'Past sessions, project context, file relationships',
  },
  {
    name: 'Directives & Rules',
    slug: 'directives-rules',
    count: 4,
    color: 'pink',
    icon: Shield,
    description: 'Set MUST/NEVER/PREFER/AVOID rules',
  },
  {
    name: 'Plans & Tasks',
    slug: 'plans-tasks',
    count: 8,
    color: 'green',
    icon: MessageSquare,
    description: 'Structured plans with trackable steps',
  },
  {
    name: 'Secrets Vault',
    slug: 'secrets-vault',
    count: 5,
    color: 'red',
    icon: Key,
    description: 'Encrypted API keys and credentials',
  },
  {
    name: 'Schema Awareness',
    slug: 'schema-awareness',
    count: 2,
    color: 'orange',
    icon: Database,
    description: 'Database schema accuracy',
  },
  {
    name: 'Goals & Improvement',
    slug: 'goals-improvement',
    count: 4,
    color: 'cyan',
    icon: Target,
    description: 'Track objectives, measure progress',
  },
  {
    name: 'Error Prevention',
    slug: 'error-prevention',
    count: 6,
    color: 'yellow',
    icon: AlertTriangle,
    description: 'Prevent repeat mistakes',
  },
  {
    name: 'Analytics & Utility',
    slug: 'analytics-utility',
    count: 10,
    color: 'cyan',
    icon: BarChart,
    description: 'Export, import, health, conflict checking',
  },
  {
    name: 'Pattern Relationships',
    slug: 'pattern-relationships',
    count: 2,
    color: 'purple',
    icon: LinkIcon,
    description: 'Link patterns, create workflows',
  },
  {
    name: 'Auto-Learning',
    slug: 'auto-learning',
    count: 2,
    color: 'green',
    icon: Zap,
    description: 'Learn from corrections automatically',
  },
  {
    name: 'Project Setup',
    slug: 'project-setup',
    count: 4,
    color: 'yellow',
    icon: Settings,
    description: 'Initialize, import, sync, snapshot',
  },
  {
    name: 'Session Management',
    slug: 'session-management',
    count: 1,
    color: 'blue',
    icon: Terminal,
    description: 'Working memory sessions',
  },
  {
    name: 'Permissions',
    slug: 'permissions',
    count: 1,
    color: 'red',
    icon: Users,
    description: 'Tool execution permissions',
  },
  {
    name: 'Context Eviction',
    slug: 'context-eviction',
    count: 3,
    color: 'orange',
    icon: RefreshCw,
    description: 'Prepare and confirm context evictions',
  },
];

const totalTools = categories.reduce((sum, cat) => sum + cat.count, 0);

export default function MCPToolsPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <Terminal className="w-4 h-4" />
            <span>Complete Reference</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">32 MCP Tools</h1>
          <p className="text-xl text-[#7a7a8e] mb-6">
            ekkOS provides 32 MCP tools organized into 15 categories. Your AI calls these automatically — just ask naturally.
          </p>

          <div className="bg-gradient-to-r from-[#00f0ff]/10 to-[#ffb800]/70/10 border border-[#00f0ff]/20 clip-lg p-6">
            <p className="text-[#e8e8f0]/90">
              You don't need to memorize these tools. Just talk to your AI naturally about what you need —
              it will automatically use the right tools based on your request.
            </p>
          </div>
        </div>

        {/* Category Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Tool Categories</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.slug}
                  href={`/tools#${category.slug}`}
                  className={`group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-${category.color}-500/5 hover:border-${category.color}-500/30 transition-all`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 clip-md bg-${category.color}-500/10 border border-${category.color}-500/20 flex-shrink-0`}>
                      <Icon className={`w-5 h-5 text-${category.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-white">{category.name}</h3>
                        <span className="text-xs text-[#4a4a5e]">({category.count})</span>
                      </div>
                      <p className="text-sm text-[#7a7a8e]">{category.description}</p>
                      <div className={`mt-3 flex items-center gap-1 text-sm text-${category.color}-400 group-hover:gap-2 transition-all`}>
                        View tools <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12 border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">How to Use</h2>
          <div className="bg-gradient-to-br from-[#ffb800]/10 to-[#00f0ff]/70/10 border border-[#ffb800]/20 clip-lg p-6">
            <p className="text-[#e8e8f0]/90 mb-4">
              You don't need to call tools directly. Just ask your AI naturally:
            </p>
            <div className="space-y-3">
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#ffb800]">"Search my memory for..."</code>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#ffb800]">"Remember this pattern..."</code>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#ffb800]">"What did we discuss about..."</code>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#ffb800]">"Always use X" or "Never do Y"</code>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#ffb800]">"Store my API key for..."</code>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#ffb800]">"Create a plan for..."</code>
              </div>
            </div>
            <p className="text-[#7a7a8e] text-sm mt-4">
              Your AI will automatically use the right tools based on what you ask.
            </p>
          </div>
        </section>

        {/* CTA to Full Reference */}
        <section className="mb-12">
          <Link
            href="/tools"
            className="block bg-gradient-to-r from-purple-600 to-[#ffb800]/70 clip-lg p-8 hover:from-[#00f0ff] hover:to-[#ffb800]/70 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Browse Full Tool Reference</h3>
                <p className="text-[#e8e8f0]">
                  See detailed documentation for all {totalTools} tools with examples and parameters
                </p>
              </div>
              <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </div>
          </Link>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/quickstart" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-sm text-[#7a7a8e]">Connect your AI in 5 minutes</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Get started <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/claude-code" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Claude Code Setup</h3>
              <p className="text-sm text-[#7a7a8e]">Detailed integration guide</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                View guide <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
