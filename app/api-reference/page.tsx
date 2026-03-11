import { ArrowRight, Book, Code, Lock, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';
import CopyBlock from '../components/CopyBlock';
import DocsLayout from '../components/DocsLayout';

const endpoints = [
  {
    method: 'POST',
    path: '/api/v1/memory/search',
    description: 'Search memory with semantic query',
    params: [
      { name: 'query', type: 'string', required: true, desc: 'Semantic search query' },
      { name: 'limit', type: 'number', required: false, desc: 'Max results (default: 10)' },
      { name: 'sources', type: 'string[]', required: false, desc: 'Memory layers to search: patterns, graph, signals, all' },
    ],
    response: `{
  "retrieval_id": "ret_abc123",
  "results": [
    {
      "id": "mem_xyz",
      "content": "Always use JWT tokens for authentication",
      "source": "patterns",
      "similarity": 0.92,
      "metadata": { "success_rate": 0.85 }
    }
  ],
  "timing_ms": 18
}`,
  },
  {
    method: 'POST',
    path: '/api/v1/patterns',
    description: 'Create or update a pattern',
    params: [
      { name: 'title', type: 'string', required: true, desc: 'Pattern title' },
      { name: 'problem', type: 'string', required: true, desc: 'Problem description' },
      { name: 'solution', type: 'string', required: true, desc: 'Solution description' },
      { name: 'tags', type: 'string[]', required: false, desc: 'Categorization tags' },
      { name: 'works_when', type: 'string[]', required: false, desc: 'Conditions when pattern applies' },
      { name: 'anti_patterns', type: 'string[]', required: false, desc: 'What NOT to do' },
    ],
    response: `{
  "id": "pat_abc123",
  "title": "Use JWT Auth Middleware",
  "created_at": "2024-01-15T10:30:00Z",
  "confidence": 0.5
}`,
  },
  {
    method: 'GET',
    path: '/api/v1/patterns',
    description: 'List all patterns',
    params: [
      { name: 'limit', type: 'number', required: false, desc: 'Max results (default: 50)' },
      { name: 'offset', type: 'number', required: false, desc: 'Pagination offset' },
      { name: 'tags', type: 'string[]', required: false, desc: 'Filter by tags' },
    ],
    response: `{
  "patterns": [
    {
      "id": "pat_abc123",
      "title": "Use JWT Auth Middleware",
      "problem": "Need authentication for Next.js app",
      "solution": "Use middleware-based JWT validation with refresh tokens",
      "confidence": 0.85,
      "applications": 12,
      "success_rate": 0.92
    }
  ],
  "total": 32,
  "has_more": true
}`,
  },
  {
    method: 'POST',
    path: '/api/v1/directives',
    description: 'Get current MUST/NEVER/PREFER/AVOID directives',
    params: [
      { name: 'userId', type: 'string', required: false, desc: 'User ID (default: system)' },
      { name: 'windowHours', type: 'number', required: false, desc: 'Hours of signals to include (default: 72)' },
    ],
    response: `{
  "directives": [
    {
      "type": "MUST",
      "rule": "Use TypeScript for all new files",
      "priority": 800,
      "source": "user_preference"
    },
    {
      "type": "NEVER",
      "rule": "Use any as a type",
      "priority": 700,
      "source": "pattern"
    }
  ]
}`,
  },
  {
    method: 'POST',
    path: '/api/v1/forge',
    description: 'Forge a new insight/pattern from learnings',
    params: [
      { name: 'title', type: 'string', required: true, desc: 'Clear descriptive title' },
      { name: 'problem', type: 'string', required: true, desc: 'What problem does this solve?' },
      { name: 'solution', type: 'string', required: true, desc: 'The solution that works' },
      { name: 'works_when', type: 'string[]', required: false, desc: 'When this pattern applies' },
      { name: 'anti_patterns', type: 'string[]', required: false, desc: 'Common mistakes to avoid' },
      { name: 'tags', type: 'string[]', required: false, desc: 'Categorization tags' },
    ],
    response: `{
  "id": "pat_new123",
  "title": "RLS requires service role for admin ops",
  "confidence": 0.5,
  "message": "Pattern forged successfully"
}`,
  },
  {
    method: 'POST',
    path: '/api/v1/working',
    description: 'Write message to working memory',
    params: [
      { name: 'role', type: 'string', required: true, desc: '"user" or "assistant"' },
      { name: 'content', type: 'string', required: true, desc: 'Message content' },
      { name: 'session_id', type: 'string', required: true, desc: 'Session identifier' },
      { name: 'source', type: 'string', required: false, desc: 'Source platform (cursor, claude-code, etc)' },
    ],
    response: `{
  "id": "msg_abc123",
  "created_at": "2024-01-15T10:30:00Z",
  "message": "Message written to working memory"
}`,
  },
  {
    method: 'POST',
    path: '/api/v1/check_conflict',
    description: 'Validate proposed action against directives and patterns (Confidence Signals)',
    params: [
      { name: 'proposed_action', type: 'string', required: true, desc: 'The action to validate' },
      { name: 'include_patterns', type: 'boolean', required: false, desc: 'Include pattern conflicts (default: true)' },
      { name: 'scope', type: 'string', required: false, desc: 'Optional scope filter' },
    ],
    response: `{
  "status": "SAFE",
  "directive_conflicts": [],
  "pattern_conflicts": [],
  "warnings": [],
  "explanation": "No conflicts found with user directives or patterns"
}`,
  },
];

export default function APIReferencePage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12 select-text">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
            <Book className="w-4 h-4" />
            <span>API Reference</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">REST API</h1>
          <p className="text-xl text-[#7a7a8e]">
            Complete documentation for the ekkOS Memory REST API.
            Use these endpoints to integrate memory into any application.
          </p>
        </div>

        {/* Base URL */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Base URL</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4 select-text">
            <code className="text-green-400 font-mono text-lg select-text">https://mcp.ekkos.dev</code>
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#00f0ff]" />
            Authentication
          </h2>
          <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6 space-y-4">
            <p className="text-[#e8e8f0]/90">
              All API requests require a Bearer token in the Authorization header.
              Get your API key from <Link href="https://platform.ekkos.dev/dashboard/settings/api-keys" className="text-[#00f0ff] hover:underline">platform.ekkos.dev</Link>.
            </p>
            <CopyBlock code={`curl -X POST https://mcp.ekkos.dev/api/v1/memory/search \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "authentication patterns"}'`} className="text-[#e8e8f0]" />
          </div>
        </section>

        {/* Rate Limits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Rate Limits
          </h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1a1a2e]">
                  <th className="px-6 py-3 text-left text-[#7a7a8e] font-medium">Plan</th>
                  <th className="px-6 py-3 text-left text-[#7a7a8e] font-medium">Requests/Day</th>
                  <th className="px-6 py-3 text-left text-[#7a7a8e] font-medium">Burst Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="px-6 py-3 text-white">Free</td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">100</td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">10/min</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="px-6 py-3 text-white">Pro</td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">10,000</td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">100/min</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-white">Team</td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">Unlimited</td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">1000/min</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[#7a7a8e] text-sm">
            Rate limit headers are included in all responses: <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">X-RateLimit-Remaining</code>, <code className="bg-[#111118]/60 backdrop-blur-xl px-1 rounded">X-RateLimit-Reset</code>
          </p>
        </section>

        {/* Endpoints */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Endpoints</h2>

          <div className="space-y-8">
            {endpoints.map((endpoint) => (
              <div key={`${endpoint.method}-${endpoint.path}`} className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden select-text">
                {/* Endpoint Header */}
                <div className="px-6 py-4 border-b border-[#1a1a2e] flex items-center gap-4">
                  <span className={`px-3 py-1 clip-md text-xs font-bold ${
                    endpoint.method === 'GET'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-[#ffb800]/20 text-[#ffb800]'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-white font-mono">{endpoint.path}</code>
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-[#e8e8f0]/90">{endpoint.description}</p>

                  {/* Parameters */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#7a7a8e] uppercase tracking-wider mb-3">Parameters</h4>
                    <div className="space-y-2">
                      {endpoint.params.map((param) => (
                        <div key={param.name} className="flex items-start gap-4 text-sm">
                          <code className="text-[#00f0ff] font-mono min-w-[120px]">{param.name}</code>
                          <span className="text-[#4a4a5e]">{param.type}</span>
                          {param.required && <span className="text-red-400 text-xs">required</span>}
                          <span className="text-[#7a7a8e]">{param.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Response */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#7a7a8e] uppercase tracking-wider mb-3">Response</h4>
                    <CopyBlock code={endpoint.response} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Error Codes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Error Codes</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1a1a2e]">
                  <th className="px-6 py-3 text-left text-[#7a7a8e] font-medium">Code</th>
                  <th className="px-6 py-3 text-left text-[#7a7a8e] font-medium">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="px-6 py-3"><code className="text-red-400">400</code></td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">Bad Request — Invalid parameters</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="px-6 py-3"><code className="text-red-400">401</code></td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">Unauthorized — Invalid or missing API key</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="px-6 py-3"><code className="text-yellow-400">429</code></td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">Too Many Requests — Rate limit exceeded</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="px-6 py-3"><code className="text-red-400">500</code></td>
                  <td className="px-6 py-3 text-[#e8e8f0]/90">Internal Error — Something went wrong on our end</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SDKs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">SDKs & Libraries</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Terminal className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white">MCP Server (Node.js)</h3>
              </div>
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3 text-sm font-mono text-green-400 select-text">npm install @ekkos/mcp-server</pre>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-5 h-5 text-[#ffb800]" />
                <h3 className="font-semibold text-white">TypeScript SDK</h3>
              </div>
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3 text-sm font-mono text-[#ffb800] select-text">npm install @ekkos/sdk</pre>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Related</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">MCP Tools Reference</h3>
              <p className="text-sm text-[#7a7a8e]">Complete MCP tool documentation</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/quickstart" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-sm text-[#7a7a8e]">Get up and running in 5 minutes</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                Get started <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
