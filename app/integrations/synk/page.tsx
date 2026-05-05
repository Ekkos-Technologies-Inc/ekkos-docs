import { AlertCircle, ArrowRight, Check, Monitor, Settings, Smartphone, Terminal, Wifi } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../../components/DocsLayout';
import CopyBlock from '../../components/CopyBlock';

export default function SynkPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-sm text-[#00f0ff] mb-6">
            <Smartphone className="w-4 h-4" />
            <span>Integration</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Synk — Remote Session Control</h1>
          <p className="text-xl text-[#7a7a8e]">
            Control your AI coding sessions from anywhere — mobile, tablet, or web browser.
          </p>
        </div>

        {/* What is Synk */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">What is Synk?</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 space-y-4">
            <p className="text-[#e8e8f0]/90">
              <strong className="text-white">Synk</strong> is the remote command deck for ekkOS. It lets you
              spawn, monitor, and interact with AI coding sessions running on your development machines —
              from your phone, tablet, or any browser.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-center">
                <Smartphone className="w-6 h-6 text-[#00f0ff] mx-auto mb-2" />
                <p className="text-sm text-[#e8e8f0]/90 font-medium">iOS App</p>
                <p className="text-xs text-[#7a7a8e] mt-1">TestFlight & App Store</p>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-center">
                <Monitor className="w-6 h-6 text-[#ffb800] mx-auto mb-2" />
                <p className="text-sm text-[#e8e8f0]/90 font-medium">Web Dashboard</p>
                <p className="text-xs text-[#7a7a8e] mt-1">synk.ekkos.dev</p>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-4 text-center">
                <Terminal className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-[#e8e8f0]/90 font-medium">CLI Daemon</p>
                <p className="text-xs text-[#7a7a8e] mt-1">Background service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">Remote Session Spawning</h3>
              <p className="text-[#7a7a8e] text-sm">
                Start new Claude, Codex, or Gemini sessions on any connected machine — pick the model,
                context window, permission mode, and working directory from your phone.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">Live Session Monitoring</h3>
              <p className="text-[#7a7a8e] text-sm">
                Watch messages stream in real time. See tool calls, permission requests,
                token usage, and cost tracking as your agent works.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">Permission Approval</h3>
              <p className="text-[#7a7a8e] text-sm">
                Approve or deny tool permissions from your device. Review file edits,
                bash commands, and destructive actions before they execute.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">Multi-Machine Management</h3>
              <p className="text-[#7a7a8e] text-sm">
                Connect multiple development machines. Switch between them, view active sessions
                across all machines, and manage the daemon lifecycle remotely.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">Model & Context Window Selection</h3>
              <p className="text-[#7a7a8e] text-sm">
                Choose between Opus, Sonnet, and Haiku models with 200K or 1M context windows.
                Each combination shows output token limits so you know what you're getting.
              </p>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-5">
              <h3 className="font-semibold text-white mb-2">End-to-End Encryption</h3>
              <p className="text-[#7a7a8e] text-sm">
                All session data is encrypted with TweetNaCl before leaving your device.
                The server never sees your code or conversation content.
              </p>
            </div>
          </div>
        </section>

        {/* Pulse Mode */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Pulse Mode</h2>
          <div className="bg-gradient-to-br from-[#00f0ff]/5 to-transparent border border-[#00f0ff]/20 clip-lg p-6 space-y-4">
            <p className="text-[#e8e8f0]/90">
              When launching a session with <strong className="text-white">Pulse</strong> routing enabled,
              your AI traffic flows through <code className="text-[#00f0ff]">proxy.ekkos.dev</code> — unlocking
              the full ekkOS memory layer:
            </p>
            <ul className="space-y-2 text-[#e8e8f0]/90 text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Automatic pattern injection from past sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Directive enforcement (MUST/NEVER/PREFER/AVOID)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Auto-forging of bug fixes and learned solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Schema injection to prevent database column errors</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Context eviction and replay at 90% capacity (seamless)</span>
              </li>
            </ul>
            <p className="text-[#7a7a8e] text-sm">
              You can also use <strong className="text-white">Direct</strong> routing to bypass the proxy and
              connect straight to the provider's API using your own credentials.
            </p>
          </div>
        </section>

        {/* Setup */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Setup</h2>

          <div className="space-y-6">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#00f0ff]" />
                Step 1: Install the ekkOS CLI
              </h3>
              <CopyBlock code="npm i -g @ekkos/cli" />
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#00f0ff]" />
                Step 2: Authenticate
              </h3>
              <CopyBlock code="ekkos auth login" />
              <p className="text-[#7a7a8e] text-sm mt-3">
                This generates a keypair and links your machine to your ekkOS account.
                A QR code will appear — scan it with the Synk app to pair.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#00f0ff]" />
                Step 3: Start the Daemon
              </h3>
              <CopyBlock code="ekkos daemon start" />
              <p className="text-[#7a7a8e] text-sm mt-3">
                The daemon runs in the background, keeping a persistent WebSocket connection
                to the Synk server. It receives spawn requests, manages sessions, and
                handles auto-updates when the CLI version changes.
              </p>
            </div>

            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#00f0ff]" />
                Step 4: Install the Synk App
              </h3>
              <p className="text-[#7a7a8e] text-sm">
                Download the Synk app from the App Store (iOS) or use the web dashboard
                at <code className="text-[#00f0ff]">synk.ekkos.dev</code>. Sign in with your ekkOS account
                and your connected machines will appear automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Daemon Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Daemon Management</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 space-y-4">
            <p className="text-[#7a7a8e] text-sm mb-4">
              The daemon is the bridge between your machine and the Synk app. Common commands:
            </p>
            <div className="space-y-3">
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3 flex items-center justify-between">
                <code className="text-[#00f0ff] font-mono text-sm">ekkos daemon start</code>
                <span className="text-[#7a7a8e] text-xs">Start the background daemon</span>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3 flex items-center justify-between">
                <code className="text-[#00f0ff] font-mono text-sm">ekkos daemon stop</code>
                <span className="text-[#7a7a8e] text-xs">Graceful shutdown</span>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3 flex items-center justify-between">
                <code className="text-[#00f0ff] font-mono text-sm">ekkos daemon status</code>
                <span className="text-[#7a7a8e] text-xs">Check if daemon is running</span>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3 flex items-center justify-between">
                <code className="text-[#00f0ff] font-mono text-sm">ekkos daemon list</code>
                <span className="text-[#7a7a8e] text-xs">Show active sessions</span>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3 flex items-center justify-between">
                <code className="text-[#00f0ff] font-mono text-sm">ekkos daemon logs</code>
                <span className="text-[#7a7a8e] text-xs">Tail daemon log output</span>
              </div>
              <div className="bg-[#0d0d14]/60 backdrop-blur-md clip-md p-3 flex items-center justify-between">
                <code className="text-[#00f0ff] font-mono text-sm">ekkos daemon install</code>
                <span className="text-[#7a7a8e] text-xs">Auto-start daemon on boot</span>
              </div>
            </div>
          </div>
        </section>

        {/* Model Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Model & Context Window Options</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
            <p className="text-[#7a7a8e] text-sm mb-4">
              When spawning a new session from Synk, you can select from these Claude model configurations:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1a1a2e]">
                    <th className="text-left py-2 pr-4 text-[#7a7a8e] font-medium">Model</th>
                    <th className="text-left py-2 pr-4 text-[#7a7a8e] font-medium">Context</th>
                    <th className="text-left py-2 text-[#7a7a8e] font-medium">Max Output</th>
                  </tr>
                </thead>
                <tbody className="text-[#e8e8f0]/90">
                  <tr className="border-b border-[#1a1a2e]/50">
                    <td className="py-2 pr-4 font-mono text-[#00f0ff]">Auto Route</td>
                    <td className="py-2 pr-4">200K</td>
                    <td className="py-2">16K</td>
                  </tr>
                  <tr className="border-b border-[#1a1a2e]/50">
                    <td className="py-2 pr-4 font-mono text-[#00f0ff]">Opus 4.5</td>
                    <td className="py-2 pr-4">200K</td>
                    <td className="py-2">16K</td>
                  </tr>
                  <tr className="border-b border-[#1a1a2e]/50">
                    <td className="py-2 pr-4 font-mono text-[#00f0ff]">Opus 4.6</td>
                    <td className="py-2 pr-4">200K</td>
                    <td className="py-2">16K</td>
                  </tr>
                  <tr className="border-b border-[#1a1a2e]/50">
                    <td className="py-2 pr-4 font-mono text-[#ffb800]">Opus 4.6</td>
                    <td className="py-2 pr-4 text-[#ffb800]">1M</td>
                    <td className="py-2">64K</td>
                  </tr>
                  <tr className="border-b border-[#1a1a2e]/50">
                    <td className="py-2 pr-4 font-mono text-[#00f0ff]">Sonnet 4.5</td>
                    <td className="py-2 pr-4">200K</td>
                    <td className="py-2">16K</td>
                  </tr>
                  <tr className="border-b border-[#1a1a2e]/50">
                    <td className="py-2 pr-4 font-mono text-[#00f0ff]">Sonnet 4.6</td>
                    <td className="py-2 pr-4">200K</td>
                    <td className="py-2">16K</td>
                  </tr>
                  <tr className="border-b border-[#1a1a2e]/50">
                    <td className="py-2 pr-4 font-mono text-[#ffb800]">Sonnet 4.6</td>
                    <td className="py-2 pr-4 text-[#ffb800]">1M</td>
                    <td className="py-2">64K</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-[#00f0ff]">Haiku 4.5</td>
                    <td className="py-2 pr-4">200K</td>
                    <td className="py-2">16K</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#7a7a8e] text-xs mt-4">
              The 1M context window is available on Opus 4.6 and Sonnet 4.6 at standard GA pricing.
              Legacy models (4.5) have long-context premium rates when exceeding 200K.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">How It Works</h2>
          <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">1</div>
                <div>
                  <p className="text-white font-medium">Daemon connects</p>
                  <p className="text-[#7a7a8e] text-sm">
                    The daemon on your machine maintains a persistent encrypted WebSocket to the Synk server.
                    Your machine appears in the Synk app as soon as the daemon starts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">2</div>
                <div>
                  <p className="text-white font-medium">You spawn a session</p>
                  <p className="text-[#7a7a8e] text-sm">
                    From the Synk app, pick a machine, directory, model, and permission mode.
                    The app sends an encrypted RPC to the daemon, which spawns the ekkOS CLI process.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">3</div>
                <div>
                  <p className="text-white font-medium">Messages stream both ways</p>
                  <p className="text-[#7a7a8e] text-sm">
                    You type messages in the app, the daemon relays them to the CLI process.
                    Responses stream back in real time — including tool calls and permission requests.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-sm font-medium flex-shrink-0">4</div>
                <div>
                  <p className="text-white font-medium">Everything is encrypted</p>
                  <p className="text-[#7a7a8e] text-sm">
                    Session content is encrypted with TweetNaCl on your device before transmission.
                    The Synk server relays encrypted blobs — it never sees your code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Troubleshooting</h2>
          <div className="space-y-4">
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Machine not appearing in app?</h4>
                  <ul className="text-[#7a7a8e] text-sm space-y-1">
                    <li>• Verify daemon is running: <code className="bg-[#0d0d14]/60 px-1 rounded">ekkos daemon status</code></li>
                    <li>• Check auth status: <code className="bg-[#0d0d14]/60 px-1 rounded">ekkos auth status</code></li>
                    <li>• View daemon logs: <code className="bg-[#0d0d14]/60 px-1 rounded">ekkos daemon logs</code></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Session spawn failing?</h4>
                  <ul className="text-[#7a7a8e] text-sm space-y-1">
                    <li>• Ensure the directory exists on the target machine</li>
                    <li>• Check the daemon has write access to the directory</li>
                    <li>• Run <code className="bg-[#0d0d14]/60 px-1 rounded">ekkos doctor</code> to diagnose orphaned processes</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6">
              <div className="flex items-start gap-3">
                <Wifi className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Session disconnected?</h4>
                  <ul className="text-[#7a7a8e] text-sm space-y-1">
                    <li>• Sessions auto-reconnect when the daemon comes back online</li>
                    <li>• Check your network connection on both ends</li>
                    <li>• Restart the daemon: <code className="bg-[#0d0d14]/60 px-1 rounded">ekkos daemon stop && ekkos daemon start</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-[#1a1a2e] pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/cli-reference" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">CLI Reference</h3>
              <p className="text-sm text-[#7a7a8e]">Full command reference for ekkos pulse, daemon, and remote commands</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00f0ff] group-hover:gap-2 transition-all">
                View reference <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/claude-code" className="group bg-[#111118]/60 backdrop-blur-xl border border-[#1a1a2e] clip-lg p-6 hover:border-[#ffb800]/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Claude Code Integration</h3>
              <p className="text-sm text-[#7a7a8e]">Set up ekkOS MCP tools for local Claude Code sessions</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#ffb800] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
