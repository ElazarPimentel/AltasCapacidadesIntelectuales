import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import React from 'react';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Altas Capacidades Intelectuales';
    const description = searchParams.get('description') || 'Recursos y orientación sobre altas capacidades intelectuales';

    return new ImageResponse(
      React.createElement(
        'div',
        {
          style: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '40px 80px',
          },
        },
        React.createElement(
          'div',
          {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            },
          },
          [
            React.createElement(
              'h1',
              {
                style: {
                  fontSize: '60px',
                  fontWeight: 'bold',
                  color: '#1a1a1a',
                  marginBottom: '20px',
                  lineHeight: 1.2,
                },
              },
              title
            ),
            React.createElement(
              'p',
              {
                style: {
                  fontSize: '32px',
                  color: '#4a4a4a',
                  lineHeight: 1.5,
                },
              },
              description
            ),
          ]
        )
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate OG image', { status: 500 });
  }
} 