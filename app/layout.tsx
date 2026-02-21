import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ekkOS Documentation',
  description: 'Complete documentation for ekkOS - AI Memory That Actually Learns',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-[#0a0a0f] text-[#e8e8f0] antialiased font-body">
        {/* Beta Banner */}
        <div className="bg-[#ffb800]/10 border-b border-[#ffb800]/20 text-[#ffb800] text-center py-2 px-4 text-sm font-mono">
          <span className="inline-flex items-center gap-2">
            <span className="clip-sm bg-[#ffb800]/20 px-2 py-0.5 text-xs font-bold tracking-wider">BETA</span>
            ekkOS is currently in beta. Report bugs to{' '}
            <a href="mailto:support@ekkos.dev" className="underline hover:no-underline text-[#00f0ff]">
              support@ekkos.dev
            </a>
          </span>
        </div>
        {children}
      </body>
    </html>
  );
}
