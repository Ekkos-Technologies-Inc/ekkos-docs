import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Cpu, Code, Terminal } from 'lucide-react';
import CopyBlock from '../../components/CopyBlock';

export default function CustomAgentsPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
            <Cpu className="w-4 h-4" />
            <span>Integration</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Custom Agent Integration</h1>
          <p className="text-xl text-[#7a7a8e]">
            Add ekkOS memory to your own AI agents and applications.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Integration Options</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <p className="text-[#e8e8f0]/90 mb-4">
              There are two ways to integrate ekkOS with custom agents:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4">
                <h4 className="font-semibold text-white mb-2">MCP Protocol</h4>
                <p className="text-[#7a7a8e] text-sm">For agents that support the Model Context Protocol</p>
              </div>
              <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4">
                <h4 className="font-semibold text-white mb-2">REST API</h4>
                <p className="text-[#7a7a8e] text-sm">Direct HTTP calls for any application</p>
              </div>
            </div>
          </div>
        </section>

        {/* REST API Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">REST API Integration</h2>

          <div className="space-y-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">Search Memory</h3>
              <p className="text-[#7a7a8e] text-sm mb-4">Find relevant patterns and context:</p>
              <CopyBlock code={`curl -X POST https://api.ekkos.dev/api/v1/memory/search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "authentication patterns",
    "limit": 5
  }'`} className="text-[#e8e8f0]" />
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">Save Pattern</h3>
              <p className="text-[#7a7a8e] text-sm mb-4">Store a new pattern:</p>
              <CopyBlock code={`curl -X POST https://api.ekkos.dev/api/v1/patterns \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Rate limiting with sliding window",
    "problem": "Need to limit API requests",
    "solution": "Use sorted sets with sliding window algorithm",
    "tags": ["api", "rate-limiting", "performance"]
  }'`} className="text-[#e8e8f0]" />
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4">Write Working Memory</h3>
              <p className="text-[#7a7a8e] text-sm mb-4">Capture conversation messages:</p>
              <CopyBlock code={`curl -X POST https://api.ekkos.dev/api/v1/working \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "role": "user",
    "content": "Help me implement user authentication",
    "session_id": "session_123",
    "source": "my-custom-agent"
  }'`} className="text-[#e8e8f0]" />
            </div>
          </div>
        </section>

        {/* TypeScript SDK */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">TypeScript SDK</h2>

          <div className="space-y-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-green-400" />
                Installation
              </h3>
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-sm font-mono text-green-400">npm install @ekkos/sdk</pre>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-[#ffb800]" />
                Usage Example
              </h3>
              <CopyBlock code={`import { EkkosClient } from '@ekkos/sdk';

const ekkos = new EkkosClient({
  apiKey: process.env.EKKOS_API_KEY
});

// Search memory
const results = await ekkos.search({
  query: 'authentication best practices',
  limit: 5
});

// Inject context into your AI prompt
const context = results.map(r => r.content).join('\\n');
const prompt = \`
Given this context from memory:
\${context}

User question: \${userQuestion}
\`;

// Save a new pattern
await ekkos.forgeInsight({
  title: 'JWT refresh token rotation',
  problem: 'Tokens expire during long sessions',
  solution: 'Implement automatic token refresh with rotation',
  tags: ['auth', 'security', 'jwt']
});

// Track outcome
await ekkos.recordOutcome({
  applicationId: results.retrieval_id,
  success: true
});`} className="text-[#e8e8f0]" />
            </div>
          </div>
        </section>

        {/* Integration Pattern */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Recommended Integration Pattern</h2>
          <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6">
            <ol className="space-y-4 text-[#e8e8f0]/90">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">1</span>
                <div>
                  <strong className="text-white">Before AI call</strong> — Search memory for relevant context
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">2</span>
                <div>
                  <strong className="text-white">Inject context</strong> — Add retrieved patterns to system prompt
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">3</span>
                <div>
                  <strong className="text-white">Make AI call</strong> — Let the AI use the enriched context
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">4</span>
                <div>
                  <strong className="text-white">Capture conversation</strong> — Write messages to working memory
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">5</span>
                <div>
                  <strong className="text-white">Track outcome</strong> — Report if the patterns helped
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/api-reference" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">API Reference</h3>
              <p className="text-sm text-[#7a7a8e]">Complete REST API documentation</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                View API <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">MCP Tools</h3>
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
