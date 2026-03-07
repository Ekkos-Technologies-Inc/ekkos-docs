import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import CopyButton from '../../components/CopyButton';
import { ArrowRight, Webhook, AlertCircle } from 'lucide-react';

export default function WebhooksPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 mb-6">
            <Webhook className="w-4 h-4" />
            <span>API Reference</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Webhooks</h1>
          <p className="text-xl text-[#7a7a8e]">
            Receive real-time notifications when events occur in your ekkOS account.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <section className="mb-12">
          <div className="bg-yellow-500/10 border border-yellow-500/20 clip-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Coming Soon</h3>
                <p className="text-[#e8e8f0]/90">
                  Webhooks are currently in development and will be available in an upcoming release.
                  This page documents the planned functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planned Events */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Planned Webhook Events</h2>

          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <code className="text-[#00f0ff] font-mono">pattern.created</code>
              <p className="text-[#7a7a8e] text-sm mt-2">
                Triggered when a new pattern is created, either manually or through automatic discovery.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <code className="text-[#ffb800] font-mono">pattern.confidence_changed</code>
              <p className="text-[#7a7a8e] text-sm mt-2">
                Triggered when a pattern's confidence score crosses a threshold (e.g., becomes highly trusted or unreliable).
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <code className="text-pink-400 font-mono">directive.created</code>
              <p className="text-[#7a7a8e] text-sm mt-2">
                Triggered when a new MUST/NEVER/PREFER/AVOID directive is created.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <code className="text-green-400 font-mono">memory.consolidated</code>
              <p className="text-[#7a7a8e] text-sm mt-2">
                Triggered when memory consolidation occurs (e.g., working memory compressed to semantic).
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <code className="text-cyan-400 font-mono">conflict.detected</code>
              <p className="text-[#7a7a8e] text-sm mt-2">
                Triggered when conflicting patterns or knowledge are detected.
              </p>
            </div>
          </div>
        </section>

        {/* Planned Payload Format */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Planned Payload Format</h2>

          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <div className="relative">
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 overflow-x-auto text-sm font-mono text-[#e8e8f0]/90">{`{
  "event": "pattern.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "id": "pat_abc123",
    "title": "Use JWT Auth Middleware",
    "confidence": 0.5,
    "source": "ekkOS_Forge"
  },
  "account_id": "acc_xyz",
  "signature": "sha256=..."
}`}</pre>
              <div className="absolute top-3 right-3">
                <CopyButton text={`{\n  "event": "pattern.created",\n  "timestamp": "2024-01-15T10:30:00Z",\n  "data": {\n    "id": "pat_abc123",\n    "title": "Use JWT Auth Middleware",\n    "confidence": 0.5,\n    "source": "ekkOS_Forge"\n  },\n  "account_id": "acc_xyz",\n  "signature": "sha256=..."\n}`} />
              </div>
            </div>
          </div>
        </section>

        {/* Get Notified */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Get Notified</h2>
          <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
            <p className="text-[#e8e8f0]/90 mb-4">
              Want to be notified when webhooks are available?
            </p>
            <Link
              href="https://platform.ekkos.dev"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-[#ffb800]/70 clip-lg font-semibold text-white hover:from-[#00f0ff] hover:to-[#ffb800]/70 transition-all"
            >
              Sign up for updates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Available Now</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/api-reference" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">REST API</h3>
              <p className="text-sm text-[#7a7a8e]">Full API documentation</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                View API <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">MCP Tools</h3>
              <p className="text-sm text-[#7a7a8e]">AI agent tools reference</p>
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
