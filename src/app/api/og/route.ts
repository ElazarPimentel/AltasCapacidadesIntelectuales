import { ImageResponse } from '@vercel/og';
import React from 'react';

export const runtime = 'edge';

const size = { width: 1200, height: 630 };
const FONT_URL =
  'https://fonts.gstatic.com/s/ibmplexsans/v12/zYXsKVNC-1CaW5EXiNFOx_XkcZKYkjbF3nDviS4.woff2';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title =
    searchParams.get('title')?.slice(0, 120) || 'Altas Capacidades Intelectuales';

  // Pre-load font
  const fontData = await fetch(FONT_URL).then((res) => res.arrayBuffer());

  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          width: '100%',
          height: '100%',
          backgroundColor: '#1B202C',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        },
      },
      React.createElement(
        'h1',
        {
          style: {
            fontSize: 80,
            fontFamily: 'IBMPlexSans',
            fontWeight: 600,
            lineHeight: 1.1,
            color: 'white',
            textAlign: 'center',
          },
        },
        title
      )
    ),
    {
      ...size,
      fonts: [{ name: 'IBMPlexSans', data: fontData, style: 'normal' }],
    }
  );
} 