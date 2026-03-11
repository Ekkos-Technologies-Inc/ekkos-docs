import { ArrowRight, CheckCircle2, Database, Globe, Info, Lock, Shield, Users, X } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../../components/DocsLayout';

export default function MemoryPrivacyPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffb800]/10 border border-[#ffb800]/20 text-sm text-[#ffb800] mb-6">
            <Shield className="w-4 h-4" />
            <span>Privacy & Security</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Memory & Privacy Model
          </h1>

          <p className="text-xl text-[#7a7a8e] leading-relaxed mb-8">
            ekkOS implements a <strong className="text-white">privacy-by-architecture</strong> model where data isolation is enforced at the database level through Row-Level Security (RLS). This ensures complete privacy without relying on application-level promises.
          </p>
        </div>

        {/* Core Principle */}
        <div className="mb-12 p-6 clip-lg bg-gradient-to-br from-[#ffb800]/10 to-transparent border border-[#ffb800]/20">
          <div className="flex items-start gap-4">
            <div className="p-3 clip-md bg-[#ffb800]/20">
              <Shield className="w-6 h-6 text-[#ffb800]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">The Core Promise</h2>
              <p className="text-[#e8e8f0]/90 leading-relaxed">
                <strong className="text-white">ekkOS only shares what you intentionally allow</strong> — and only as anonymized strategy patterns, never as code or content. Everything else stays private by architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Overview</h2>
          <p className="text-[#e8e8f0]/90 leading-relaxed mb-4">
            ekkOS implements a privacy-by-architecture model where data isolation is enforced at the database level through Row-Level Security (RLS). This ensures that:
          </p>
          <ul className="space-y-3 text-[#e8e8f0]/90 ml-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>All user data is isolated by <code className="text-green-400 bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded">user_id</code></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Even service role keys cannot bypass RLS policies</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Pattern sharing is opt-in and anonymized</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span>Zero-access backend: company cannot read user memory</span>
            </li>
          </ul>
        </section>

        {/* RLS Enforcement */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 clip-md bg-[#ffb800]/20">
              <Database className="w-6 h-6 text-[#ffb800]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Row-Level Security (RLS) Enforcement</h2>
          </div>
          <p className="text-[#e8e8f0]/90 leading-relaxed mb-4">
            All tables in the ekkOS memory system enforce RLS policies that restrict access based on <code className="text-[#ffb800] bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded">user_id</code>:
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-4 clip-md bg-[#0d0d14]/50 backdrop-blur-md border border-[#1a1a2e]">
              <h3 className="font-semibold text-white mb-2">Events Table</h3>
              <pre className="text-sm text-[#7a7a8e] font-mono overflow-x-auto">
{`CREATE POLICY "Users can only see their own events"
ON events FOR SELECT
USING (auth.uid() = user_id);`}
              </pre>
            </div>

            <div className="p-4 clip-md bg-[#0d0d14]/50 backdrop-blur-md border border-[#1a1a2e]">
              <h3 className="font-semibold text-white mb-2">Episodes Table</h3>
              <pre className="text-sm text-[#7a7a8e] font-mono overflow-x-auto">
{`CREATE POLICY "Users can only see their own episodes"
ON learning_episodes FOR SELECT
USING (auth.uid() = user_id);`}
              </pre>
            </div>

            <div className="p-4 clip-md bg-[#0d0d14]/50 backdrop-blur-md border border-[#1a1a2e]">
              <h3 className="font-semibold text-white mb-2">Patterns Table</h3>
              <pre className="text-sm text-[#7a7a8e] font-mono overflow-x-auto">
{`CREATE POLICY "Users see their own patterns + collective"
ON patterns FOR SELECT
USING (
  auth.uid() = user_id OR
  (visibility = 'collective' AND never_promote = false)
);`}
              </pre>
            </div>
          </div>

          <div className="p-4 clip-md bg-[#ffb800]/10 border border-[#ffb800]/20">
            <p className="text-sm text-[#e8e8f0]/90">
              <strong className="text-[#ffb800]">Key Point:</strong> These policies are enforced at the database level. Even if application code has bugs, RLS prevents unauthorized access.
            </p>
          </div>
        </section>

        {/* Pattern Visibility Flags */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 clip-md bg-[#00f0ff]/20">
              <Lock className="w-6 h-6 text-[#00f0ff]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Pattern Visibility Flags</h2>
          </div>
          <p className="text-[#e8e8f0]/90 leading-relaxed mb-4">
            Each pattern has a <code className="text-[#00f0ff] bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded">visibility</code> field that controls who can see it:
          </p>

          <div className="space-y-3 mb-6">
            <div className="p-4 clip-md bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e]">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-[#ffb800]" />
                <code className="text-[#ffb800] font-mono">visibility = 'private'</code>
              </div>
              <p className="text-sm text-[#7a7a8e]">
                Default. Only the pattern owner can see and use this pattern. Not visible to team or collective.
              </p>
            </div>

            <div className="p-4 clip-md bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e]">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-[#00f0ff]" />
                <code className="text-[#00f0ff] font-mono">visibility = 'team'</code>
              </div>
              <p className="text-sm text-[#7a7a8e]">
                Visible to all users in the same organization. Scoped by <code className="text-[#00f0ff] bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded">org_id</code>.
              </p>
            </div>

            <div className="p-4 clip-md bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e]">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-emerald-400" />
                <code className="text-emerald-400 font-mono">visibility = 'collective'</code>
              </div>
              <p className="text-sm text-[#7a7a8e]">
                Shared anonymously with all ekkOS users. Only abstract pattern templates are shared, never raw data.
              </p>
            </div>
          </div>

          <div className="p-4 clip-md bg-yellow-500/10 border border-yellow-500/20">
            <div className="flex items-start gap-2">
              <Info className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-yellow-400 mb-1">Important</p>
                <p className="text-sm text-[#e8e8f0]/90">
                  Setting <code className="text-yellow-400 bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded">visibility = 'collective'</code> does NOT share your data. Only the abstract pattern template (problem/solution structure) is shared after anonymization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Never Promote Behavior */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 clip-md bg-red-500/20">
              <X className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">never_promote Behavior</h2>
          </div>
          <p className="text-[#e8e8f0]/90 leading-relaxed mb-4">
            The <code className="text-red-400 bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded">never_promote</code> boolean flag prevents a pattern from being considered for collective learning, even if <code className="text-red-400 bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded">visibility = 'collective'</code>.
          </p>

          <div className="p-4 clip-md bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] mb-4">
            <h3 className="font-semibold text-white mb-2">When never_promote = true:</h3>
            <ul className="space-y-2 text-[#e8e8f0]/90 ml-4">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Pattern is excluded from collective memory queries</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Pattern is not considered for pattern evolution</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Pattern remains private to owner (or team if visibility allows)</span>
              </li>
            </ul>
          </div>

          <p className="text-[#e8e8f0]/90 leading-relaxed">
            This gives users granular control: they can mark patterns as "never share" even if they're set to collective visibility.
          </p>
        </section>

        {/* Anonymization Process */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 clip-md bg-cyan-500/20">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">How Anonymization Works</h2>
          </div>
          <p className="text-[#e8e8f0]/90 leading-relaxed mb-4">
            When a pattern is promoted to collective memory, the system performs the following anonymization steps:
          </p>

          <div className="space-y-3 mb-6">
            <div className="p-4 clip-md bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e]">
              <h3 className="font-semibold text-white mb-2">1. Data Extraction</h3>
              <p className="text-sm text-[#7a7a8e] mb-2">
                Extract only the abstract problem/solution structure. Remove all:
              </p>
              <ul className="text-sm text-[#7a7a8e] ml-4 space-y-1">
                <li>• File paths and names</li>
                <li>• Project identifiers</li>
                <li>• User-specific context</li>
                <li>• Code snippets</li>
                <li>• Credentials or secrets</li>
              </ul>
            </div>

            <div className="p-4 clip-md bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e]">
              <h3 className="font-semibold text-white mb-2">2. Pattern Template Creation</h3>
              <p className="text-sm text-[#7a7a8e] mb-2">
                Convert the pattern into a generic template:
              </p>
              <div className="mt-2 p-3 rounded bg-[#0d0d14]/50 backdrop-blur-md border border-[#1a1a2e]">
                <p className="text-xs text-emerald-400 font-mono">
                  Problem: "When [generic condition], apply [generic solution]"
                </p>
                <p className="text-xs text-emerald-400 font-mono mt-1">
                  Solution: "[Abstract strategy without specific data]"
                </p>
              </div>
            </div>

            <div className="p-4 clip-md bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e]">
              <h3 className="font-semibold text-white mb-2">3. Metadata Removal</h3>
              <p className="text-sm text-[#7a7a8e] mb-2">
                Remove all metadata that could identify the source:
              </p>
              <ul className="text-sm text-[#7a7a8e] ml-4 space-y-1">
                <li>• Original user_id (replaced with null)</li>
                <li>• Timestamps (normalized to relative time)</li>
                <li>• Source episode IDs</li>
                <li>• Project context</li>
              </ul>
            </div>
          </div>

          <div className="p-4 clip-md bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-sm text-[#e8e8f0]/90">
              <strong className="text-emerald-400">Result:</strong> The collective memory contains only abstract strategy patterns that cannot be traced back to any individual user or project.
            </p>
          </div>
        </section>

        {/* Multi-Tenant Scoping */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 clip-md bg-orange-500/20">
              <Database className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Multi-Tenant Scoping Rules</h2>
          </div>
          <p className="text-[#e8e8f0]/90 leading-relaxed mb-4">
            For team/org visibility, patterns are scoped by <code className="text-orange-400 bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded">org_id</code>:
          </p>

          <div className="p-4 clip-md bg-[#0d0d14]/50 backdrop-blur-md border border-[#1a1a2e] mb-4">
            <pre className="text-sm text-[#7a7a8e] font-mono overflow-x-auto">
{`-- Team visibility RLS policy
CREATE POLICY "Team patterns visible to org members"
ON patterns FOR SELECT
USING (
  visibility = 'team' AND
  org_id IN (
    SELECT org_id FROM user_orgs 
    WHERE user_id = auth.uid()
  )
);`}
            </pre>
          </div>

          <p className="text-[#e8e8f0]/90 leading-relaxed">
            This ensures that team patterns are only visible to users who belong to the same organization, maintaining privacy boundaries within enterprise deployments.
          </p>
        </section>

        {/* API Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">API Reference</h2>
          <p className="text-[#e8e8f0]/90 leading-relaxed mb-4">
            When creating or updating patterns via the API, you can set visibility:
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-4 clip-md bg-[#0d0d14]/50 backdrop-blur-md border border-[#1a1a2e]">
              <h3 className="font-semibold text-white mb-2">Create Pattern with Visibility</h3>
              <pre className="text-sm text-[#7a7a8e] font-mono overflow-x-auto">
{`POST /api/v1/patterns
{
  "title": "Fix authentication timeout",
  "problem": "...",
  "solution": "...",
  "visibility": "private",  // or "team" or "collective"
  "never_promote": false
}`}
              </pre>
            </div>

            <div className="p-4 clip-md bg-[#0d0d14]/50 backdrop-blur-md border border-[#1a1a2e]">
              <h3 className="font-semibold text-white mb-2">Update Pattern Visibility</h3>
              <pre className="text-sm text-[#7a7a8e] font-mono overflow-x-auto">
{`PATCH /api/v1/patterns/{id}
{
  "visibility": "collective",
  "never_promote": true  // Opt out of collective learning
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Best Practices</h2>
          <div className="space-y-3">
            <div className="p-4 clip-md bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e]">
              <h3 className="font-semibold text-white mb-2">1. Default to Private</h3>
              <p className="text-sm text-[#7a7a8e]">
                Always create patterns as <code className="text-[#ffb800] bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded">private</code> by default. Only change visibility when you're certain the pattern is safe to share.
              </p>
            </div>

            <div className="p-4 clip-md bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e]">
              <h3 className="font-semibold text-white mb-2">2. Review Before Sharing</h3>
              <p className="text-sm text-[#7a7a8e] mb-2">
                Before setting <code className="text-[#00f0ff] bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded">visibility = 'collective'</code>, ensure the pattern contains no:
              </p>
              <ul className="text-sm text-[#7a7a8e] ml-4 space-y-1">
                <li>• Project-specific names or paths</li>
                <li>• Credentials or secrets</li>
                <li>• Personal information</li>
                <li>• Proprietary code or logic</li>
              </ul>
            </div>

            <div className="p-4 clip-md bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e]">
              <h3 className="font-semibold text-white mb-2">3. Use never_promote for Sensitive Patterns</h3>
              <p className="text-sm text-[#7a7a8e]">
                If a pattern might contain sensitive information, set <code className="text-red-400 bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded">never_promote = true</code> even if visibility is set to collective. This provides an extra layer of protection.
              </p>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Related Documentation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/concepts/memory-layers" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Database className="w-5 h-5 text-[#ffb800]" />
                <h3 className="font-semibold text-white">Memory Layers</h3>
              </div>
              <p className="text-sm text-[#7a7a8e]">Understand the 11-layer memory system</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/secrets-vault" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-[#00f0ff]" />
                <h3 className="font-semibold text-white">Secrets Vault</h3>
              </div>
              <p className="text-sm text-[#7a7a8e]">AES-256-GCM encrypted credential storage</p>
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
