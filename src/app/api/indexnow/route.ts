import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = 'f1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
const SITE_URL = 'https://altascapacidadesintelectuales.org';

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();
    
    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: 'URLs array is required' }, { status: 400 });
    }

    const indexNowData = {
      host: SITE_URL.replace('https://', ''),
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls
    };

    // Submit to IndexNow (Bing/Microsoft)
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(indexNowData),
    });

    if (response.ok) {
      return NextResponse.json({ 
        success: true, 
        message: 'URLs submitted to IndexNow successfully',
        submittedUrls: urls 
      });
    } else {
      return NextResponse.json({ 
        error: 'Failed to submit to IndexNow',
        status: response.status 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'IndexNow endpoint is active',
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    usage: 'POST URLs to submit them to IndexNow'
  });
} 