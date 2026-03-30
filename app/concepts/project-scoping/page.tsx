import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { FolderGit2, Globe, Shield, Layers, ArrowRight, GitBranch, Zap } from 'lucide-react';

export default function ProjectScopingPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <FolderGit2 className="w-4 h-4" />
            <span>Concepts</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Project Scoping</h1>
          <p className="text-xl text-[#7a7a8e]">
            Each project gets its own AI brain. Patterns, directives, and learning stay isolated per repository while universal knowledge carries across all of them.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-[#1a1a2e] clip-lg p-6">
            <p className="text-[#e8e8f0]/90 leading-relaxed">
              When you work on multiple projects, ekkOS automatically detects which repository you're in and scopes all memory operations to that project. Patterns learned in a Python API won't bleed into your React app. Directives set for one project stay in that project. But universal knowledge — like "never commit .env files" — stays global across everything.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">How It Works</h2>

          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 clip-lg bg-[#00f0ff]/20 flex items-center justify-center flex-shrink-0">
                  <GitBranch className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Automatic Detection</h3>
                  <p className="text-[#7a7a8e] leading-relaxed">
                    When you open your IDE in a git repository and start coding with ekkOS, the CLI automatically detects your <code className="text-[#00f0ff] bg-[#00f0ff]/10 px-1.5 py-0.5 rounded text-sm">git remote</code> and sends it to the proxy. A project is auto-created the first time a new repository is seen. You never need to manually create or configure projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 clip-lg bg-[#ffb800]/20 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-[#ffb800]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Memory Isolation</h3>
                  <p className="text-[#7a7a8e] leading-relaxed">
                    All 12 memory layers respect project boundaries. Patterns, episodic recall, schemas, goals, plans, and learning pipelines are filtered by project. When you ask "what did we fix last week?", you only get results from the current project — not every project you've worked on.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 clip-lg bg-[#00ff88]/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#00ff88]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Global + Project</h3>
                  <p className="text-[#7a7a8e] leading-relaxed">
                    Every piece of memory has a scope: <strong className="text-white">global</strong> or <strong className="text-white">project</strong>. Global patterns (like "always use TypeScript strict mode") apply everywhere. Project-specific patterns (like "this API uses Prisma") only appear in that project. Directives work the same way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Gets Scoped */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">What Gets Scoped</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1a1a2e]">
                  <th className="text-left py-3 px-4 text-[#7a7a8e] font-medium">Layer</th>
                  <th className="text-left py-3 px-4 text-[#7a7a8e] font-medium">Scoped?</th>
                  <th className="text-left py-3 px-4 text-[#7a7a8e] font-medium">How</th>
                </tr>
              </thead>
              <tbody className="text-[#e8e8f0]/80">
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="py-3 px-4 font-medium text-white">Patterns</td>
                  <td className="py-3 px-4 text-[#00ff88]">Per-project + global</td>
                  <td className="py-3 px-4">Project patterns + NULL (global) patterns both returned</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="py-3 px-4 font-medium text-white">Directives</td>
                  <td className="py-3 px-4 text-[#00ff88]">Per-project + global</td>
                  <td className="py-3 px-4">Scoped via Neo4j SCOPED_TO relationships</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="py-3 px-4 font-medium text-white">Episodic Recall</td>
                  <td className="py-3 px-4 text-[#00ff88]">Per-project</td>
                  <td className="py-3 px-4">"Last week" only returns current project's sessions</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="py-3 px-4 font-medium text-white">Schema Guards</td>
                  <td className="py-3 px-4 text-[#00ff88]">Per-project</td>
                  <td className="py-3 px-4">Different DB schemas per project</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="py-3 px-4 font-medium text-white">Goals & Plans</td>
                  <td className="py-3 px-4 text-[#00ff88]">Per-project</td>
                  <td className="py-3 px-4">Plans scoped to the project they were created in</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="py-3 px-4 font-medium text-white">Auto-Forge</td>
                  <td className="py-3 px-4 text-[#00ff88]">Per-project</td>
                  <td className="py-3 px-4">Auto-detected patterns inherit the session's project</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="py-3 px-4 font-medium text-white">Learning Pipeline</td>
                  <td className="py-3 px-4 text-[#00ff88]">Per-project</td>
                  <td className="py-3 px-4">Fast-loop and slow-loop isolated per project</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="py-3 px-4 font-medium text-white">Collective Patterns</td>
                  <td className="py-3 px-4 text-[#ffb800]">Always global</td>
                  <td className="py-3 px-4">Cross-model validated patterns apply everywhere</td>
                </tr>
                <tr className="border-b border-[#1a1a2e]/50">
                  <td className="py-3 px-4 font-medium text-white">Secrets Vault</td>
                  <td className="py-3 px-4 text-[#ffb800]">Optional</td>
                  <td className="py-3 px-4">Secrets can be global or project-specific</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Working Memory</td>
                  <td className="py-3 px-4 text-[#7a7a8e]">Session-scoped</td>
                  <td className="py-3 px-4">Already isolated per session (ephemeral)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Zero Configuration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Zero Configuration</h2>

          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-[#00f0ff] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#e8e8f0]/90 leading-relaxed">
                  <strong className="text-white">You don't need to do anything.</strong> Projects are detected from your git remote URL the moment you start coding. No setup, no configuration, no project creation screens. Just open your IDE in a repo and ekkOS handles the rest.
                </p>
              </div>
            </div>

            <div className="bg-[#0a0a0f] clip-lg p-4 font-mono text-sm">
              <div className="text-[#7a7a8e] mb-1"># Work on project A</div>
              <div className="text-[#00f0ff]">$ cd ~/projects/my-api && claude</div>
              <div className="text-[#7a7a8e] mt-2 mb-1"># Switch to project B — memory automatically scopes</div>
              <div className="text-[#00f0ff]">$ cd ~/projects/my-frontend && claude</div>
              <div className="text-[#7a7a8e] mt-2 mb-1"># Each project has its own patterns, recall, and learning</div>
            </div>
          </div>
        </section>

        {/* Managing Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Managing Projects</h2>

          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Project Switcher</h3>
              <p className="text-[#7a7a8e] leading-relaxed">
                The platform dashboard has a project switcher in the sidebar. Select a project to view its patterns, directives, and growth metrics. Select "All Projects" to see everything.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Archiving Projects</h3>
              <p className="text-[#7a7a8e] leading-relaxed">
                When you archive a project, its patterns are moved to global scope (not deleted). The project disappears from your list, but all learned knowledge is preserved and becomes available across all projects.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Existing Users</h3>
              <p className="text-[#7a7a8e] leading-relaxed">
                If you were using ekkOS before project scoping was added, all your existing patterns and directives are global. They'll continue to work everywhere. New patterns will be automatically scoped to whichever project you're working in when they're created.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <div className="bg-gradient-to-r from-[#00f0ff]/10 to-[#ffb800]/10 border border-[#1a1a2e] clip-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Related Concepts</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/concepts/memory-layers" className="flex items-center gap-2 text-[#00f0ff] hover:text-[#00f0ff]/80 transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
                Memory Layers
              </Link>
              <Link href="/concepts/patterns" className="flex items-center gap-2 text-[#00f0ff] hover:text-[#00f0ff]/80 transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
                Patterns
              </Link>
              <Link href="/concepts/directives" className="flex items-center gap-2 text-[#00f0ff] hover:text-[#00f0ff]/80 transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
                Directives
              </Link>
              <Link href="/concepts/golden-loop" className="flex items-center gap-2 text-[#00f0ff] hover:text-[#00f0ff]/80 transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
                The Golden Loop
              </Link>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
