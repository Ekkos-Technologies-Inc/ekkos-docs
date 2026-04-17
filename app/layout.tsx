import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.ekkos.dev'),
  title: {
    default: 'ekkOS Documentation — Complete Guide to AI Memory',
    template: '%s | ekkOS Docs',
  },
  description: 'Complete documentation for ekkOS — setup guides, MCP tool reference, memory architecture, Golden Loop, and integration patterns.',
  keywords: [
    'ekkOS documentation',
    'AI memory docs',
    'MCP tools reference',
    'Golden Loop',
    'pattern forging',
    'intelligence layer setup',
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  alternates: {
    canonical: 'https://docs.ekkos.dev/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large' as const,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'ekkOS Documentation — Complete Guide to AI Memory',
    description: 'Setup guides, MCP tool reference, memory architecture, and the Golden Loop.',
    url: 'https://docs.ekkos.dev/',
    type: 'website',
    siteName: 'ekkOS Docs',
    images: [
      {
        url: '/og-docs.png',
        width: 1424,
        height: 752,
        alt: 'ekkOS Documentation — Complete Guide to AI Memory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ekkOS Documentation',
    description: 'Complete guide to the AI intelligence layer — setup, MCP tools, patterns, and the Golden Loop.',
    creator: '@ekkosdev',
    images: ['/og-docs.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ekkOS Documentation',
    url: 'https://docs.ekkos.dev',
    description: 'Complete documentation for ekkOS — the intelligence layer for AI development.',
    publisher: {
      '@type': 'Organization',
      name: 'Ekkos Technologies Inc.',
      url: 'https://ekkos.dev',
    },
  };

  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-[#0a0a0f] text-[#e8e8f0] antialiased font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
