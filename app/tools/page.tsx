import { ArrowRight, Brain, Key, Shield, Terminal, Zap, BarChart, FolderGit2, Database, RefreshCw, Download, Upload, FileCode, Settings, Search, AlertTriangle, Lock, Clock } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../components/DocsLayout';

// Complete list of all 32 MCP tools
const toolCategories = [
  {
    category: 'Core Memory',
    description: 'Search, save, and track solutions across all memory layers',
    color: 'purple',
    icon: Brain,
    tools: [
      { name: 'ekkOS_Search', description: 'Search all memory layers for patterns, solutions, and past context', required: true, params: ['query', 'sources?', 'limit?'] },
      { name: 'ekkOS_ExpandPattern', description: 'Get full details of a pattern from compact search results', required: false, params: ['id'] },
      { name: 'ekkOS_Capture', description: 'Record an event or interaction to memory', required: false, params: ['userId', 'sessionId', 'source', 'type', 'content'] },
      { name: 'ekkOS_Forge', description: 'Save a learned solution as a reusable pattern', required: true, params: ['title', 'problem', 'solution', 'tags?'] },
      { name: 'ekkOS_Track', description: 'Record that specific patterns were applied in your work', required: false, params: ['retrieval_token?', 'memory_ids?'] },
      { name: 'ekkOS_Outcome', description: 'Report whether a pattern application succeeded or failed', required: false, params: ['success', 'retrieval_id?'] },
      { name: 'ekkOS_Stats', description: 'Get statistics about your memory usage across all layers', required: false, params: ['scope?'] },
      { name: 'ekkOS_RecordSkip', description: 'Report when retrieved patterns were not relevant to improve future retrieval', required: false, params: ['pattern_ids', 'query_text', 'skip_reason?'] },
    ],
  },
  {
    category: 'Context & Retrieval',
    description: 'Access past sessions, project context, and file relationships',
    color: 'blue',
    icon: Search,
    tools: [
      { name: 'ekkOS_Context', description: 'Get relevant context for your current task', required: false, params: ['task', 'maxPatterns?', 'maxEpisodes?'] },
      { name: 'ekkOS_Codebase', description: 'Search your project\'s indexed codebase', required: false, params: ['query', 'limit?', 'file_types?'] },
      { name: 'ekkOS_Recall', description: 'Remember past conversations by time range', required: false, params: ['days_ago?', 'session_id?', 'semantic_query?'] },
      { name: 'ekkOS_PreserveContext', description: 'Preserve working memory for continuity across sessions', required: false, params: ['session_id', 'user_id'] },
      { name: 'ekkOS_RestoreContext', description: 'Restore previously preserved context', required: false, params: ['session_id?', 'restoration_token?'] },
      { name: 'ekkOS_ProjectMemory', description: 'Get project-specific memory and history', required: false, params: ['project_path', 'semantic_query?'] },
      { name: 'ekkOS_FileDependencies', description: 'Trace file import/export relationships in your project', required: false, params: ['file_path', 'depth?', 'direction?'] },
      { name: 'ekkOS_IndexDependencies', description: 'Index the dependency graph for a project', required: false, params: ['project_path?', 'incremental?'] },
    ],
  },
  {
    category: 'Directives & Rules',
    description: 'Set persistent MUST / NEVER / PREFER / AVOID rules for your AI',
    color: 'pink',
    icon: Shield,
    tools: [
      { name: 'ekkOS_Directive', description: 'Create persistent rules (MUST/NEVER/PREFER/AVOID)', required: true, params: ['type', 'rule', 'scope?', 'priority?'] },
      { name: 'ekkOS_UpdateDirective', description: 'Modify an existing directive', required: false, params: ['id', 'type?', 'rule?', 'priority?'] },
      { name: 'ekkOS_DeleteDirective', description: 'Remove a directive permanently', required: false, params: ['id', 'reason?'] },
      { name: 'ekkOS_UniversalDirectives', description: 'Get system-wide rules that apply to all users', required: false, params: [] },
    ],
  },
  {
    category: 'Plans & Tasks',
    description: 'Create, manage, and template structured task plans',
    color: 'green',
    icon: FolderGit2,
    tools: [
      { name: 'ekkOS_Plan', description: 'Create a structured plan with trackable steps', required: false, params: ['title', 'steps', 'context?'] },
      { name: 'ekkOS_Plans', description: 'List your active and completed plans', required: false, params: ['status?', 'limit?'] },
      { name: 'ekkOS_PlanStatus', description: 'Update a plan\'s status (draft, in_progress, completed)', required: false, params: ['plan_id', 'status'] },
      { name: 'ekkOS_PlanStep', description: 'Mark a plan step as complete or incomplete', required: false, params: ['plan_id', 'step_index', 'completed'] },
      { name: 'ekkOS_Generate', description: 'AI-generate a plan from context and existing patterns', required: false, params: ['context', 'patterns?'] },
      { name: 'ekkOS_SaveTemplate', description: 'Save a plan as a reusable template', required: false, params: ['plan_id', 'category?'] },
      { name: 'ekkOS_Templates', description: 'Browse available plan templates', required: false, params: ['category?', 'limit?'] },
      { name: 'ekkOS_FromTemplate', description: 'Create a new plan from a saved template', required: false, params: ['template_id', 'context?'] },
    ],
  },
  {
    category: 'Secrets Vault',
    description: 'Securely store and manage API keys and credentials (AES-256-GCM encrypted)',
    color: 'red',
    icon: Key,
    tools: [
      { name: 'ekkOS_StoreSecret', description: 'Securely store API keys, tokens, and credentials', required: false, params: ['service', 'value', 'type?', 'description?'] },
      { name: 'ekkOS_GetSecret', description: 'Retrieve a stored credential', required: false, params: ['service', 'type?', 'masked?'] },
      { name: 'ekkOS_ListSecrets', description: 'List all stored secrets (metadata only, no values)', required: false, params: [] },
      { name: 'ekkOS_DeleteSecret', description: 'Permanently delete a stored secret', required: false, params: ['secretId'] },
      { name: 'ekkOS_RotateSecret', description: 'Update a secret with a new value', required: false, params: ['service', 'newValue'] },
    ],
  },
  {
    category: 'Schema Awareness',
    description: 'Index and query database schemas for accurate field names',
    color: 'orange',
    icon: Database,
    tools: [
      { name: 'ekkOS_IndexSchema', description: 'Index database or TypeScript schemas for accuracy', required: false, params: ['project_path', 'files?'] },
      { name: 'ekkOS_GetSchema', description: 'Look up correct field names for a table or type', required: false, params: ['table_name', 'project_path?'] },
    ],
  },
  {
    category: 'Goals & Improvement',
    description: 'Track objectives, measure progress, and choose strategies',
    color: 'indigo',
    icon: Zap,
    tools: [
      { name: 'ekkOS_Goal', description: 'Set and track persistent objectives with progress metrics', required: false, params: ['action', 'description?', 'goal_id?', 'progress?'] },
      { name: 'ekkOS_Strategy', description: 'Get context-aware strategy recommendations for tasks', required: false, params: ['task_type', 'complexity?', 'safety_level?'] },
      { name: 'ekkOS_Delta', description: 'Measure your improvement score over time', required: false, params: ['period_hours?', 'context?'] },
      { name: 'ekkOS_MetaState', description: 'System self-assessment and capability overview', required: false, params: ['include_goals?', 'include_constraints?'] },
    ],
  },
  {
    category: 'Error Prevention',
    description: 'Record errors, track gotchas, and prevent repeat mistakes',
    color: 'amber',
    icon: AlertTriangle,
    tools: [
      { name: 'ekkOS_TrackError', description: 'Record errors to build prevention patterns', required: false, params: ['error_type', 'description', 'file_path?', 'correction?'] },
      { name: 'ekkOS_FileGotcha', description: 'Get or create known gotchas for specific files', required: false, params: ['action', 'file_path?', 'gotcha?'] },
      { name: 'ekkOS_ErrorAnalytics', description: 'Analyze error patterns across your projects', required: false, params: ['period_days?', 'group_by?'] },
      { name: 'ekkOS_Consolidate', description: 'Run active forgetting: quarantine failing patterns, merge duplicates, prune stale data, promote winners', required: false, params: ['mode'] },
      { name: 'ekkOS_DecayPatterns', description: 'Review pattern confidence changes over time', required: false, params: ['period_days?', 'min_confidence?', 'dry_run?'] },
      { name: 'ekkOS_ReinforcePat', description: 'Boost confidence of a proven pattern', required: false, params: ['pattern_id', 'boost_factor?'] },
    ],
  },
  {
    category: 'Context Eviction',
    description: 'Zero-data-loss handshake protocol for context window management',
    color: 'cyan',
    icon: Clock,
    tools: [
      { name: 'ekkOS_EvictPrepare', description: 'Prepare eviction — identify evictable blocks and get confirmation token', required: false, params: ['session_id', 'target_reduction?'] },
      { name: 'ekkOS_EvictConfirm', description: 'Confirm and execute eviction with the preparation token', required: false, params: ['eviction_token', 'confirmed_block_ids'] },
      { name: 'ekkOS_EvictStatus', description: 'Check current eviction status and recoverable blocks for a session', required: false, params: ['session_id'] },
    ],
  },
  {
    category: 'Analytics & Utility',
    description: 'Export, import, health checks, and conflict validation',
    color: 'cyan',
    icon: BarChart,
    tools: [
      { name: 'ekkOS_Summary', description: 'Get a human-readable summary of recent ekkOS activity', required: true, params: ['time_window_seconds?', 'session_id?'] },
      { name: 'ekkOS_Conflict', description: 'Check if a proposed action conflicts with your rules', required: true, params: ['proposed_action', 'scope?'] },
      { name: 'ekkOS_Reflect', description: 'Analyze a response for quality and improvement opportunities', required: false, params: ['response', 'user_query?'] },
      { name: 'ekkOS_Detect', description: 'Auto-detect which patterns were used in a response', required: true, params: ['response', 'retrieval_id'] },
      { name: 'ekkOS_Export', description: 'Export your patterns, directives, and plans as JSON', required: false, params: ['format?', 'include_patterns?'] },
      { name: 'ekkOS_Import', description: 'Import memory data from a backup file', required: false, params: ['data', 'merge_strategy?'] },
      { name: 'ekkOS_Why', description: 'Explain why a pattern or decision was made', required: false, params: ['pattern_id?', 'retrieval_id?'] },
      { name: 'ekkOS_Health', description: 'Check system health and connectivity status', required: false, params: ['include_stats?'] },
      { name: 'ekkOS_IndexFile', description: 'Index a specific file for codebase search', required: false, params: ['file_path', 'project_path'] },
      { name: 'ekkOS_IndexProject', description: 'Index an entire project for codebase search', required: false, params: ['project_path', 'project_id?'] },
    ],
  },
  {
    category: 'Pattern Relationships',
    description: 'Link patterns together and create workflow sequences',
    color: 'purple',
    icon: ArrowRight,
    tools: [
      { name: 'ekkOS_Link', description: 'Create relationships between patterns (supersedes, extends, conflicts)', required: false, params: ['from_pattern_id', 'to_pattern_id', 'relationship_type'] },
      { name: 'ekkOS_Playbook', description: 'Create ordered sequences of patterns as reusable workflows', required: false, params: ['action', 'name?', 'pattern_ids?'] },
    ],
  },
  {
    category: 'Auto-Learning',
    description: 'ekkOS learns automatically from your corrections and successes',
    color: 'green',
    icon: RefreshCw,
    tools: [
      { name: 'ekkOS_Learn', description: 'Trigger auto-learning from recent corrections and successes', required: false, params: ['session_id?', 'time_window_hours?'] },
      { name: 'ekkOS_ReviewLearning', description: 'Review and approve/reject auto-learned pattern candidates', required: false, params: ['action', 'candidate_id?', 'reason?'] },
    ],
  },
  {
    category: 'Project Setup',
    description: 'Initialize projects, bulk import data, sync and snapshot',
    color: 'yellow',
    icon: Settings,
    tools: [
      { name: 'ekkOS_ProjectInit', description: 'Initialize ekkOS for a new project', required: false, params: ['project_path', 'project_name?'] },
      { name: 'ekkOS_Ingest', description: 'Bulk import data into memory layers', required: false, params: ['source_type', 'data'] },
      { name: 'ekkOS_Snapshot', description: 'Create a point-in-time snapshot of memory state', required: false, params: ['name?', 'description?'] },
      { name: 'ekkOS_Sync', description: 'Synchronize local and cloud memory', required: false, params: ['direction?', 'force?'] },
    ],
  },
  {
    category: 'Session Management',
    description: 'Manage working memory sessions for context continuity',
    color: 'blue',
    icon: Terminal,
    tools: [
      { name: 'ekkOS_Session', description: 'Manage working memory sessions (create, resume, close)', required: false, params: ['action', 'session_id?', 'context?'] },
    ],
  },
  {
    category: 'Permissions',
    description: 'Configure which tools can execute automatically',
    color: 'red',
    icon: Lock,
    tools: [
      { name: 'ekkOS_Permissions', description: 'View and manage tool execution permissions', required: false, params: [] },
    ],
  },
];

// Color map for dynamic classes (Tailwind requires static class names)
const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  purple: { bg: 'bg-[#00f0ff]/10', border: 'border-[#00f0ff]/20', text: 'text-[#00f0ff]', iconBg: 'bg-[#00f0ff]/10' },
  blue: { bg: 'bg-[#ffb800]/10', border: 'border-[#ffb800]/20', text: 'text-[#ffb800]', iconBg: 'bg-[#ffb800]/10' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', iconBg: 'bg-cyan-500/10' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400', iconBg: 'bg-green-500/10' },
  red: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400', iconBg: 'bg-red-500/10' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', iconBg: 'bg-orange-500/10' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400', iconBg: 'bg-pink-500/10' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400', iconBg: 'bg-yellow-500/10' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', iconBg: 'bg-indigo-500/10' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', iconBg: 'bg-amber-500/10' },
};

export default function ToolsPage() {
  const totalTools = toolCategories.reduce((sum, cat) => sum + cat.tools.length, 0);
  const requiredTools = toolCategories.reduce((sum, cat) => sum + cat.tools.filter(t => t.required).length, 0);

  return (
    <DocsLayout>
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <Terminal className="w-4 h-4" />
            <span>MCP Tools Reference</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">All {totalTools} MCP Tools</h1>
          <p className="text-xl text-[#7a7a8e] mb-6">
            Complete reference for every ekkOS memory tool available via MCP.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
              <div className="text-2xl font-bold text-white">{totalTools}</div>
              <div className="text-sm text-[#7a7a8e]">Total Tools</div>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
              <div className="text-2xl font-bold text-[#00f0ff]">{requiredTools}</div>
              <div className="text-sm text-[#7a7a8e]">Required</div>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
              <div className="text-2xl font-bold text-white">{toolCategories.length}</div>
              <div className="text-sm text-[#7a7a8e]">Categories</div>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-4">
              <div className="text-2xl font-bold text-green-400">11</div>
              <div className="text-sm text-[#7a7a8e]">Memory Layers</div>
            </div>
          </div>

          {/* Quick Jump */}
          <div className="bg-gradient-to-r from-[#00f0ff]/10 to-[#ffb800]/70/10 border border-[#00f0ff]/20 clip-lg p-6">
            <h3 className="text-sm font-semibold text-[#7a7a8e] uppercase tracking-wider mb-3">Jump to Category</h3>
            <div className="flex flex-wrap gap-2">
              {toolCategories.map((cat) => {
                const colors = colorMap[cat.color];
                return (
                  <a
                    key={cat.category}
                    href={`#${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`px-3 py-1.5 clip-md text-sm ${colors.bg} ${colors.border} border ${colors.text} hover:opacity-80 transition-opacity`}
                  >
                    {cat.category} ({cat.tools.length})
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tool Categories */}
        {toolCategories.map((category) => {
          const Icon = category.icon;
          const colors = colorMap[category.color];

          return (
            <section
              key={category.category}
              id={category.category.toLowerCase().replace(/\s+/g, '-')}
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 clip-lg ${colors.iconBg} ${colors.border} border`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {category.category}
                    <span className="text-[#4a4a5e] text-base font-normal ml-3">({category.tools.length} tools)</span>
                  </h2>
                  <p className="text-[#7a7a8e] mt-1">{category.description}</p>
                </div>
              </div>

              {/* Tool Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#1a1a2e]">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#7a7a8e]">Tool</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#7a7a8e]">Description</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#7a7a8e] hidden md:table-cell">Parameters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.tools.map((tool) => (
                      <tr
                        key={tool.name}
                        className="border-b border-[#1a1a2e]/50 hover:bg-[#111118]/60 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <code className={`font-mono font-semibold ${colors.text}`}>{tool.name}</code>
                            {tool.required && (
                              <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase bg-red-500/20 text-red-400 rounded">
                                Required
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-[#e8e8f0]/90">{tool.description}</td>
                        <td className="py-4 px-4 hidden md:table-cell">
                          <div className="flex flex-wrap gap-1">
                            {tool.params.map((param) => (
                              <code
                                key={param}
                                className="px-2 py-0.5 text-xs bg-[#111118]/60 backdrop-blur-xl text-[#7a7a8e] rounded"
                              >
                                {param}
                              </code>
                            ))}
                            {tool.params.length === 0 && (
                              <span className="text-[#4a4a5e]/80 text-sm">No parameters</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}

        {/* Required Tools Section */}
        <section className="mb-16 border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Shield className="w-6 h-6 text-red-400" />
            Required Tools
          </h2>
          <p className="text-[#7a7a8e] mb-6">
            These tools should be called proactively as part of the ekkOS workflow:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {toolCategories.flatMap(cat =>
              cat.tools.filter(t => t.required).map(tool => {
                const colors = colorMap[cat.color];
                return (
                  <div
                    key={tool.name}
                    className={`${colors.bg} border ${colors.border} clip-lg p-4`}
                  >
                    <code className={`font-mono font-semibold ${colors.text}`}>{tool.name}</code>
                    <p className="text-[#7a7a8e] text-sm mt-2">{tool.description}</p>
                  </div>
                );
              })
            )}
          </div>
        </section>

        {/* Usage Guide */}
        <section className="mb-16 border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">How to Use</h2>
          <div className="bg-gradient-to-br from-[#ffb800]/10 to-[#00f0ff]/70/10 border border-[#ffb800]/20 clip-lg p-6">
            <p className="text-[#e8e8f0]/90 mb-4">
              You don't need to call these tools directly. Just ask your AI naturally:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#00f0ff]">"Search my memory for..."</code>
                <span className="text-[#4a4a5e]/80 text-xs ml-2">ekkOS_Search</span>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#00f0ff]">"Remember this pattern..."</code>
                <span className="text-[#4a4a5e]/80 text-xs ml-2">ekkOS_Forge</span>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#00f0ff]">"Always use X" / "Never do Y"</code>
                <span className="text-[#4a4a5e]/80 text-xs ml-2">ekkOS_Directive</span>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#00f0ff]">"Store my API key for..."</code>
                <span className="text-[#4a4a5e]/80 text-xs ml-2">ekkOS_StoreSecret</span>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#00f0ff]">"Create a plan for..."</code>
                <span className="text-[#4a4a5e]/80 text-xs ml-2">ekkOS_Plan</span>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3">
                <code className="text-[#00f0ff]">"What did we discuss yesterday?"</code>
                <span className="text-[#4a4a5e]/80 text-xs ml-2">ekkOS_Recall</span>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Get Started</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/quickstart" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#00f0ff]/30 transition-all">
              <Zap className="w-8 h-8 text-[#00f0ff] mb-3" />
              <h3 className="font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-sm text-[#7a7a8e]">Connect your AI in 5 minutes</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                Get started <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/claude-code" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-[#ffb800]/30 transition-all">
              <Terminal className="w-8 h-8 text-[#ffb800] mb-3" />
              <h3 className="font-semibold text-white mb-2">Claude Code Setup</h3>
              <p className="text-sm text-[#7a7a8e]">Detailed integration guide</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                View guide <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/memory-layers" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-green-500/30 transition-all">
              <Database className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">Memory Layers</h3>
              <p className="text-sm text-[#7a7a8e]">Learn the 11-layer architecture</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-green-400 group-hover:gap-2 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
