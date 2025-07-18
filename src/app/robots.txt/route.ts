// src/app/robots.txt/route.ts

import { NextResponse } from 'next/server';

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

Host: https://altascapacidadesintelectuales.org

Sitemap: https://altascapacidadesintelectuales.org/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, immutable',
    },
  });
} 