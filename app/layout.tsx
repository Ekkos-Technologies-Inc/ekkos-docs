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
        {children}
      </body>
    </html>
  );
}
