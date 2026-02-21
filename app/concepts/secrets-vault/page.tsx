import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Lock, Shield, Key, Eye, EyeOff, RefreshCw, Trash2 } from 'lucide-react';

const tools = [
  { name: 'ekkOS_StoreSecret', desc: 'Encrypt and store a secret', icon: Lock },
  { name: 'ekkOS_GetSecret', desc: 'Retrieve and decrypt a secret', icon: Key },
  { name: 'ekkOS_ListSecrets', desc: 'List stored secrets (metadata only, no values)', icon: Eye },
  { name: 'ekkOS_DeleteSecret', desc: 'Permanently delete a secret', icon: Trash2 },
  { name: 'ekkOS_RotateSecret', desc: 'Update a secret with a new value', icon: RefreshCw },
];

const secretTypes = [
  { type: 'api_key', desc: 'API keys (OpenAI, Anthropic, Stripe, etc.)', color: 'purple' },
  { type: 'password', desc: 'Passwords for services', color: 'red' },
  { type: 'token', desc: 'OAuth/bearer tokens', color: 'blue' },
  { type: 'credential', desc: 'Generic credentials (username + password)', color: 'amber' },
  { type: 'other', desc: 'Any other sensitive data', color: 'white' },
];

export default function SecretsVaultPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-sm text-green-400 mb-6">
            <Lock className="w-4 h-4" />
            <span>Layer 11</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Secrets Vault</h1>
          <p className="text-xl text-[#7a7a8e]">
            Encrypted credential storage with AES-256-GCM encryption.
            Never paste API keys in chat again.
          </p>
        </div>

        {/* Why Use It */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/20 clip-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Why Use the Vault?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-[#e8e8f0]"><strong className="text-white">Stop pasting keys</strong> — Store once, retrieve anytime</span>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-[#e8e8f0]"><strong className="text-white">AES-256-GCM</strong> — Military-grade encryption at rest</span>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-[#e8e8f0]"><strong className="text-white">Key rotation</strong> — Update secrets without losing context</span>
              </div>
              <div className="flex items-start gap-3">
                <EyeOff className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-[#e8e8f0]"><strong className="text-white">Masked retrieval</strong> — View last 4 chars without full exposure</span>
              </div>
            </div>
          </div>
        </section>

        {/* Storing Secrets */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Storing Secrets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">Natural Language</h3>
              <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 text-sm">
                <div className="text-[#7a7a8e]">&quot;Store my OpenAI API key: sk-abc123...&quot;</div>
                <div className="text-green-400 mt-2">✓ Stored as &apos;openai&apos; (api_key)</div>
              </div>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">MCP Tool</h3>
              <pre className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 text-sm text-[#e8e8f0]/90 overflow-x-auto font-mono">
{`ekkOS_StoreSecret({
  service: "openai",
  value: "sk-abc123...",
  type: "api_key",
  description: "Production key"
})`}
              </pre>
            </div>
          </div>
        </section>

        {/* Secret Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Secret Types</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
            <div className="divide-y divide-white/5">
              {secretTypes.map((st) => (
                <div key={st.type} className="flex items-center gap-4 p-4">
                  <code className={`text-${st.color}-400 font-mono text-sm w-28 flex-shrink-0`}>{st.type}</code>
                  <span className="text-[#7a7a8e] text-sm">{st.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Retrieving */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Retrieving Secrets</h2>
          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#ffb800]" />
                Full Value
              </h3>
              <pre className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 text-sm text-[#e8e8f0]/90 font-mono">
{`ekkOS_GetSecret({ service: "openai" })
// → "sk-abc123xyz789..."`}
              </pre>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-amber-400" />
                Masked (Safer)
              </h3>
              <pre className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 text-sm text-[#e8e8f0]/90 font-mono">
{`ekkOS_GetSecret({ service: "openai", masked: true })
// → "sk-****...789"`}
              </pre>
            </div>
          </div>
        </section>

        {/* Tools Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Vault Tools</h2>
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
                    <td className="p-4"><code className="text-green-400">{t.name}</code></td>
                    <td className="p-4 text-[#7a7a8e]">{t.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Security Model */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Shield className="w-6 h-6 text-green-400" />
            Security Model
          </h2>
          <div className="bg-green-500/10 border border-green-500/20 clip-lg p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-[#e8e8f0]"><strong className="text-white">AES-256-GCM encryption</strong> — Industry standard authenticated encryption</p>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-[#e8e8f0]"><strong className="text-white">Row-level security</strong> — Only you can access your secrets</p>
            </div>
            <div className="flex items-start gap-3">
              <EyeOff className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-[#e8e8f0]"><strong className="text-white">Never logged</strong> — Secret values are never included in logs or analytics</p>
            </div>
            <div className="flex items-start gap-3">
              <RefreshCw className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-[#e8e8f0]"><strong className="text-white">Optional expiration</strong> — Set <code className="bg-[#111118]/60 backdrop-blur-xl px-1.5 py-0.5 rounded text-green-400">expiresInDays</code> for temporary tokens</p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2 text-sm">Use descriptive service names</h3>
              <p className="text-[#7a7a8e] text-xs"><code className="text-green-400">openai-production</code> not <code className="text-red-400">key1</code></p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2 text-sm">Set expiration for temp tokens</h3>
              <p className="text-[#7a7a8e] text-xs">Use <code className="text-green-400">expiresInDays: 30</code> for short-lived credentials</p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2 text-sm">Rotate secrets regularly</h3>
              <p className="text-[#7a7a8e] text-xs">Use <code className="text-green-400">ekkOS_RotateSecret</code> to update without losing context</p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2 text-sm">Prefer masked retrieval</h3>
              <p className="text-[#7a7a8e] text-xs">Use <code className="text-green-400">masked: true</code> unless you need the full value</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/concepts/directives" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-green-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Directives</h3>
              <p className="text-sm text-[#7a7a8e]">Set behavioral rules for your AI</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-green-400 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">All 32 Tools</h3>
              <p className="text-sm text-[#7a7a8e]">Browse every MCP tool</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Browse <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
