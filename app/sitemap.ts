import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://docs.ekkos.dev';
  const now = new Date().toISOString();

  const pages = [
    { path: '', priority: 1.0 },
    { path: '/introduction', priority: 0.95 },
    { path: '/quickstart', priority: 0.95 },
    { path: '/installation', priority: 0.9 },
    { path: '/mcp-integration', priority: 0.85 },
    // Concepts
    { path: '/concepts/how-it-works', priority: 0.9 },
    { path: '/concepts/memory-layers', priority: 0.9 },
    { path: '/concepts/golden-loop', priority: 0.9 },
    { path: '/concepts/patterns', priority: 0.85 },
    { path: '/concepts/directives', priority: 0.85 },
    { path: '/concepts/plans', priority: 0.8 },
    { path: '/concepts/nerve', priority: 0.8 },
    { path: '/concepts/production-telemetry', priority: 0.85 },
    { path: '/concepts/memory-privacy', priority: 0.8 },
    { path: '/concepts/project-scoping', priority: 0.75 },
    { path: '/concepts/secrets-vault', priority: 0.75 },
    // Architecture
    { path: '/architecture', priority: 0.8 },
    { path: '/architecture/layers', priority: 0.8 },
    { path: '/architecture/data-flow', priority: 0.8 },
    { path: '/architecture/memory-gateway', priority: 0.8 },
    // API Reference
    { path: '/api-reference', priority: 0.85 },
    { path: '/api-reference/mcp-tools', priority: 0.85 },
    { path: '/api-reference/webhooks', priority: 0.75 },
    // Integrations
    { path: '/integrations/synk', priority: 0.9 },
    { path: '/integrations/claude-code', priority: 0.9 },
    { path: '/integrations/cursor', priority: 0.85 },
    { path: '/integrations/windsurf', priority: 0.85 },
    { path: '/integrations/vscode-extension', priority: 0.85 },
    { path: '/integrations/ekkos-code', priority: 0.8 },
    { path: '/integrations/custom-agents', priority: 0.8 },
    { path: '/integrations/memory-gateway', priority: 0.8 },
    // Guides
    { path: '/guides/claude-md', priority: 0.85 },
    { path: '/guides/using-ekkos', priority: 0.85 },
    // Other
    { path: '/cli-reference', priority: 0.75 },
    { path: '/tools', priority: 0.8 },
    { path: '/changelog', priority: 0.6 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority,
  }));
}
