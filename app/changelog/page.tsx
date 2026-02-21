import DocsLayout from '../components/DocsLayout';
import { Clock, Sparkles, Wrench, Bug } from 'lucide-react';

const Badge = ({ type }: { type: 'new' | 'improved' | 'fixed' }) => {
  const styles = {
    new: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    improved: 'bg-[#ffb800]/20 text-[#ffb800] border-[#ffb800]/30',
    fixed: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  };
  const icons = {
    new: Sparkles,
    improved: Wrench,
    fixed: Bug,
  };
  const Icon = icons[type];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-medium ${styles[type]}`}>
      <Icon className="w-3 h-3" />
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
};

const versions = [
  {
    version: 'v2.8.0',
    date: 'February 2026',
    tools: 32,
    color: 'purple',
    items: [
      { type: 'new' as const, text: 'Active Forgetting Engine — Patterns that consistently fail get quarantined automatically' },
      { type: 'new' as const, text: 'Persistent pattern tracking — Tracking data persists across deploys' },
      { type: 'new' as const, text: 'Strategy selection — AI picks optimal approach based on historical outcomes' },
      { type: 'new' as const, text: 'PROMETHEUS improvement scoring — Measures how much smarter the system gets over time' },
      { type: 'new' as const, text: 'Pattern decay & reinforcement — Active patterns get stronger, stale ones fade' },
      { type: 'improved' as const, text: 'Consolidation engine — Merge duplicate patterns, promote high-performers to collective' },
    ],
  },
  {
    version: 'v2.7.0',
    date: 'February 2026',
    tools: 62,
    color: 'blue',
    items: [
      { type: 'new' as const, text: 'Memory Gateway — Use 69 models from 7 providers with persistent memory' },
      { type: 'new' as const, text: 'Context preservation — Seamless memory continuity across context compaction' },
      { type: 'new' as const, text: 'Semantic rehydration — Automatically recall relevant past context using vector search' },
      { type: 'improved' as const, text: 'Cost-efficient API proxy — Cache-preserving passthrough for tool round-trips' },
      { type: 'new' as const, text: 'Session binding — Reliable session tracking across CLI modes' },
      { type: 'new' as const, text: 'File gotcha tracking — Remember quirks and pitfalls per file' },
    ],
  },
  {
    version: 'v2.6.0',
    date: 'January 2026',
    tools: 52,
    color: 'emerald',
    items: [
      { type: 'new' as const, text: 'Plans & Templates — Create, track, and reuse structured multi-step plans' },
      { type: 'new' as const, text: 'Secrets Vault — AES-256-GCM encrypted credential storage (Layer 11)' },
      { type: 'new' as const, text: 'Codebase cognition — Semantically index and search project code' },
      { type: 'new' as const, text: 'Schema awareness — Know correct database field names before querying' },
      { type: 'new' as const, text: 'Error analytics — Track error patterns by type, file, and session' },
      { type: 'improved' as const, text: 'Pattern forging — Better deduplication and quality scoring' },
    ],
  },
  {
    version: 'v2.5.0',
    date: 'January 2026',
    tools: 42,
    color: 'amber',
    items: [
      { type: 'new' as const, text: 'Collective memory (Layer 6) — Cross-user pattern sharing for common solutions' },
      { type: 'new' as const, text: 'Pattern relationships — Link related patterns (extends, supersedes, conflicts)' },
      { type: 'new' as const, text: 'Playbooks — Ordered pattern sequences for common workflows' },
      { type: 'new' as const, text: 'Skill system — Trigger specialized behaviors automatically from conversation' },
      { type: 'new' as const, text: 'Windsurf integration — Full hook support for Windsurf IDE' },
      { type: 'improved' as const, text: 'Retrieval quality — Skip tracking reduces irrelevant pattern noise' },
    ],
  },
  {
    version: 'v2.4.0',
    date: 'December 2025',
    tools: 32,
    color: 'rose',
    items: [
      { type: 'new' as const, text: 'Directives system — MUST/NEVER/PREFER/AVOID behavioral rules' },
      { type: 'new' as const, text: 'Conflict detection — Check actions against directives before executing' },
      { type: 'new' as const, text: 'Pattern evolution — Patterns improve with usage feedback and outcomes' },
      { type: 'improved' as const, text: 'Multi-IDE support — Claude Code, Cursor, Windsurf, VS Code' },
      { type: 'fixed' as const, text: 'Pattern deduplication — Prevent near-duplicate patterns from accumulating' },
    ],
  },
  {
    version: 'v2.3.0',
    date: 'November 2025',
    tools: 24,
    color: 'cyan',
    items: [
      { type: 'new' as const, text: '11-layer memory architecture — Full stack from working memory to secrets' },
      { type: 'new' as const, text: 'The Golden Loop — Retrieve → Apply → Learn cycle' },
      { type: 'new' as const, text: 'Pattern forging — Save solutions as reusable patterns' },
      { type: 'new' as const, text: 'Episodic memory — Full conversation history with semantic search' },
      { type: 'new' as const, text: 'Cloud sync — Bidirectional sync between local and cloud memory' },
    ],
  },
  {
    version: 'v2.0.0',
    date: 'October 2025',
    tools: 12,
    color: 'violet',
    items: [
      { type: 'new' as const, text: 'Initial release — MCP-based memory infrastructure for AI coding agents' },
      { type: 'new' as const, text: 'Core memory tools — Search, Forge, Capture, Track, Outcome' },
      { type: 'new' as const, text: 'MCP integration — Works with any MCP-compatible client' },
      { type: 'new' as const, text: 'Cloud sync — Persistent memory across sessions and devices' },
      { type: 'new' as const, text: 'VS Code Extension — Real-time memory status and pattern viewer' },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00f0ff]/10 to-[#ffb800]/70/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <Clock className="w-4 h-4" />
            <span>Changelog</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Changelog</h1>
          <p className="text-xl text-[#7a7a8e]">
            What&apos;s new in ekkOS — from 12 tools to 32 and counting.
          </p>
        </div>

        {/* Version Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f0ff]/50 via-[#ffb800]/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {versions.map((v) => (
              <div key={v.version} className="relative md:pl-16">
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-5 h-5 rounded-full bg-${v.color}-500/30 border-2 border-${v.color}-500 hidden md:block`} />

                <div className={`bg-gradient-to-br from-${v.color}-500/5 to-transparent border border-${v.color}-500/20 clip-lg p-6`}>
                  {/* Version header */}
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <h2 className={`text-2xl font-bold text-${v.color}-400 font-mono`}>{v.version}</h2>
                      <span className="text-[#4a4a5e] text-sm">{v.date}</span>
                    </div>
                    <span className="px-3 py-1 bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] rounded-full text-xs text-[#7a7a8e]">
                      {v.tools} tools
                    </span>
                  </div>

                  {/* Items */}
                  <div className="space-y-3">
                    {v.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Badge type={item.type} />
                        <span className="text-[#e8e8f0]/90 text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
