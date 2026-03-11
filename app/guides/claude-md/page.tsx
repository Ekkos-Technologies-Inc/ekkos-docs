import { AlertCircle, ArrowRight, BookOpen, Check, FileCode, Settings, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';
import CopyButton from '../../components/CopyButton';
import DocsLayout from '../../components/DocsLayout';

export default function ClaudeMdPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400 mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Guide</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">CLAUDE.md Setup Guide</h1>
          <p className="text-xl text-[#7a7a8e] mb-6">
            Configure Claude Code to proactively use ekkOS memory tools.
          </p>

          <div className="bg-green-500/10 border border-green-500/20 clip-lg p-6">
            <h3 className="font-semibold text-white mb-3">Why CLAUDE.md?</h3>
            <p className="text-[#e8e8f0]/90 text-sm mb-4">
              Without explicit instructions, AI models may forget to search memory before answering questions or save learnings
              after solving problems. CLAUDE.md ensures the AI proactively uses ekkOS memory in every conversation.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Memory-First Workflow</div>
                  <div className="text-[#7a7a8e] text-xs">Search before answering, forge after solving</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Automatic Triggers</div>
                  <div className="text-[#7a7a8e] text-xs">AI knows when to use which tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is CLAUDE.md */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">What is CLAUDE.md?</h2>

          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <FileCode className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-[#e8e8f0] mb-4">
                  CLAUDE.md is a project-level instruction file that Claude Code automatically reads at the start of every conversation.
                  It's like a persistent system prompt that tells the AI how to behave in your project.
                </p>
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-4 text-sm">
                  <div className="text-[#7a7a8e] mb-2">File locations:</div>
                  <ul className="space-y-1 text-[#e8e8f0] font-mono text-xs">
                    <li>• <span className="text-green-400">./CLAUDE.md</span> — Project-specific (highest priority)</li>
                    <li>• <span className="text-green-400">~/.claude/CLAUDE.md</span> — Global (applies to all projects)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 clip-lg p-6">
            <h4 className="font-semibold text-white mb-3">Benefits of Configuring CLAUDE.md for ekkOS</h4>
            <ul className="space-y-2 text-[#e8e8f0]/90 text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong className="text-white">Memory-first debugging:</strong> AI searches patterns before debugging from scratch</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong className="text-white">Automatic learning:</strong> AI saves solutions as patterns after fixing bugs</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong className="text-white">Conflict prevention:</strong> AI checks directives before destructive operations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong className="text-white">Consistent behavior:</strong> Same memory workflow across all conversations</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Quick Setup */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Quick Setup</h2>

          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm">1</span>
              Copy the Template
            </h3>
            <p className="text-[#7a7a8e] text-sm mb-4">
              Ready-to-paste CLAUDE.md template with ekkOS memory integration:
            </p>
            <div className="relative">
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 overflow-x-auto text-xs text-[#e8e8f0] font-mono leading-relaxed">{`# ekkOS Memory

## Rules
- Search ekkOS memory before answering technical questions
- Save solutions as patterns when you fix bugs or solve problems
- Check for conflicts before destructive operations (deleting files, deploying)

## Tool Triggers
- "Search memory for..." → ekkOS_Search
- "Remember this..." → ekkOS_Forge
- "Always/Never..." → ekkOS_Directive
- "Store my API key..." → ekkOS_StoreSecret
- "What did we discuss..." → ekkOS_Recall
- "Create a plan for..." → ekkOS_Plan

## Preferences
- Always search memory before debugging from scratch
- Save learned solutions as patterns for future use
- Check directives before deleting files or deploying`}</pre>
              <div className="absolute top-3 right-3">
                <CopyButton text={`# ekkOS Memory\n\n## Rules\n- Search ekkOS memory before answering technical questions\n- Save solutions as patterns when you fix bugs or solve problems\n- Check for conflicts before destructive operations (deleting files, deploying)\n\n## Tool Triggers\n- "Search memory for..." → ekkOS_Search\n- "Remember this..." → ekkOS_Forge\n- "Always/Never..." → ekkOS_Directive\n- "Store my API key..." → ekkOS_StoreSecret\n- "What did we discuss..." → ekkOS_Recall\n- "Create a plan for..." → ekkOS_Plan\n\n## Preferences\n- Always search memory before debugging from scratch\n- Save learned solutions as patterns for future use\n- Check directives before deleting files or deploying`} />
              </div>
            </div>
          </div>
        </section>

        {/* Where to Place It */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Where to Place It</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white">Project-Level</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 font-mono text-xs text-[#e8e8f0]">
                  ./CLAUDE.md
                </div>
                <p className="text-[#7a7a8e]">
                  Place in your project root. Applies to this project only. Takes priority over global configuration.
                </p>
                <div className="text-[#e8e8f0]/90 text-xs">
                  <strong className="text-white">Best for:</strong> Project-specific memory rules, custom workflows
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-5 h-5 text-[#ffb800]" />
                <h3 className="font-semibold text-white">Global</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 font-mono text-xs text-[#e8e8f0]">
                  ~/.claude/CLAUDE.md
                </div>
                <p className="text-[#7a7a8e]">
                  Place in your home directory. Applies to ALL your projects across all workspaces.
                </p>
                <div className="text-[#e8e8f0]/90 text-xs">
                  <strong className="text-white">Best for:</strong> Universal memory-first behavior, default ekkOS workflows
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#ffb800]/10 border border-[#ffb800]/20 clip-lg p-6">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-[#ffb800] flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <h4 className="font-semibold text-white mb-2">Priority Order</h4>
                <p className="text-[#e8e8f0]/90 mb-2">
                  If both files exist, project-level instructions take priority over global ones.
                  This lets you override global behavior for specific projects.
                </p>
                <div className="text-xs text-[#7a7a8e]">
                  Example: Global CLAUDE.md says "always search memory", but project CLAUDE.md says "only search memory for production code"
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Configuration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Tips for Effective Configuration</h2>

          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Keep It Concise</h4>
                  <p className="text-[#7a7a8e] text-sm">
                    Claude reads CLAUDE.md at the start of every conversation. Keep instructions focused and actionable.
                    Avoid lengthy explanations—use clear, directive language.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Add Project-Specific Rules</h4>
                  <p className="text-[#7a7a8e] text-sm mb-3">
                    Customize CLAUDE.md as you work. If you find yourself repeatedly telling Claude the same thing, add it as a rule.
                  </p>
                  <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 text-xs font-mono text-[#e8e8f0]/90">
                    <div className="text-white mb-1">Example additions:</div>
                    - Always use Tailwind CSS for styling<br />
                    - Never commit directly to main branch<br />
                    - Store database schemas in /database/schemas
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Use Strong Language</h4>
                  <p className="text-[#7a7a8e] text-sm mb-3">
                    Use "Always" and "Never" for strongest enforcement. Use "Prefer" and "Avoid" for softer preferences.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-green-500/10 border border-green-500/20 rounded p-2">
                      <div className="text-green-400 font-medium mb-1">✓ Strong</div>
                      <div className="text-[#7a7a8e]">Always search memory before debugging</div>
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded p-2">
                      <div className="text-yellow-400 font-medium mb-1">~ Soft</div>
                      <div className="text-[#7a7a8e]">Prefer searching memory before debugging</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Include Tool Triggers</h4>
                  <p className="text-[#7a7a8e] text-sm mb-3">
                    Explicitly map user phrases to ekkOS tools. This helps Claude recognize when to use memory tools.
                  </p>
                  <div className="bg-[#0d0d14]/50 backdrop-blur-md clip-md p-3 text-xs font-mono text-[#e8e8f0]/90">
                    "What did we work on yesterday?" → ekkOS_Recall<br />
                    "Save this pattern" → ekkOS_Forge<br />
                    "Check if this conflicts" → ekkOS_Conflict
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Example Configurations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Example Configurations</h2>

          <div className="space-y-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Full-Stack Web Project</h3>
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 overflow-x-auto text-xs text-[#e8e8f0]/90 font-mono leading-relaxed">{`# ekkOS Memory + Project Rules

## Memory Rules
- Search ekkOS memory before debugging
- Forge patterns after fixing bugs
- Check directives before destructive operations

## Tool Triggers
- "Search memory" → ekkOS_Search
- "Remember this" → ekkOS_Forge
- "Always/Never" → ekkOS_Directive

## Tech Stack
- Frontend: Next.js, React, Tailwind CSS
- Backend: PostgreSQL + Auth + Storage
- Deployment: Cloud hosting

## Preferences
- Always use TypeScript strict mode
- Never commit directly to main branch
- Prefer server components over client components
- Store API keys in ekkOS secrets (ekkOS_StoreSecret)`}</pre>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-3">Data Science Project</h3>
              <pre className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 overflow-x-auto text-xs text-[#e8e8f0]/90 font-mono leading-relaxed">{`# ekkOS Memory + ML Project

## Memory Rules
- Search ekkOS for proven ML patterns
- Forge successful hyperparameter configs
- Track experiment results with ekkOS_Track

## Tool Triggers
- "Best approach for..." → ekkOS_Search
- "Save this config" → ekkOS_Forge
- "What experiments worked?" → ekkOS_Recall

## Preferences
- Always validate on holdout set before deploying
- Save model configs as patterns
- Document data preprocessing steps`}</pre>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Troubleshooting</h2>

          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Claude not following CLAUDE.md instructions?</h4>
                  <ul className="text-[#7a7a8e] text-sm space-y-1">
                    <li>• Verify file is named exactly <code className="text-xs">CLAUDE.md</code> (all caps)</li>
                    <li>• Check file location: project root (<code className="text-xs">./CLAUDE.md</code>) or home directory (<code className="text-xs">~/.claude/CLAUDE.md</code>)</li>
                    <li>• Restart Claude Code to reload configuration</li>
                    <li>• Ensure instructions use strong directive language ("Always", "Never")</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Tools not triggering as expected?</h4>
                  <p className="text-[#7a7a8e] text-sm mb-2">
                    Be explicit about when to use tools. Instead of "use memory when relevant", say "search memory before answering technical questions".
                  </p>
                  <p className="text-[#7a7a8e] text-sm">
                    Add specific phrase mappings in the Tool Triggers section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/tools" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-green-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Explore All Tools</h3>
              <p className="text-sm text-[#7a7a8e]">Learn what each ekkOS tool does</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-green-400 group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/quickstart" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-green-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Quickstart Guide</h3>
              <p className="text-sm text-[#7a7a8e]">Get ekkOS running in 5 minutes</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-green-400 group-hover:gap-2 transition-all">
                Get started <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/cursor" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:bg-[#111118]/60 hover:border-green-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">IDE Integrations</h3>
              <p className="text-sm text-[#7a7a8e]">Setup for Cursor, Windsurf, Claude Code</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-green-400 group-hover:gap-2 transition-all">
                View integrations <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="mt-8 bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <h3 className="font-semibold text-white mb-3">Ready-Made Templates</h3>
            <p className="text-[#7a7a8e] text-sm mb-4">
              Download pre-configured CLAUDE.md templates for common project types:
            </p>
            <p className="text-[#7a7a8e] text-xs">
              See the example configurations above — copy and customize for your project.
            </p>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
