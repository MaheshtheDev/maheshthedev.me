import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const POSTHOG_API_KEY = process.env.POSTHOG_PERSONAL_API_KEY;
    const POSTHOG_PROJECT_ID = process.env.POSTHOG_PROJECT_ID;
    const POSTHOG_HOST = process.env.POSTHOG_HOST;

    const url = new URL(request.url);
    const hours = url.searchParams.get('hours') || '24';
    const page = url.searchParams.get('page');

    let hogqlQuery = `
            SELECT count(*) as total_views
            FROM events 
            WHERE event = '$pageview' 
            AND timestamp >= now() - INTERVAL ${hours} HOUR
        `;

    if (page) {
      hogqlQuery += ` AND properties.$current_url LIKE '%${page}%'`;
    }

    const queryPayload = {
      query: {
        kind: 'HogQLQuery',
        query: hogqlQuery,
      },
    };

    const response = await fetch(
      `${POSTHOG_HOST}/api/projects/${POSTHOG_PROJECT_ID}/query/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${POSTHOG_API_KEY}`,
        },
        body: JSON.stringify(queryPayload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('PostHog API error:', errorText);
      return NextResponse.json(
        { error: 'Failed to fetch data from PostHog' },
        { status: response.status }
      );
    }

    const data = await response.json();

    const totalViews = data.results?.[0]?.[0] || 0;

    return NextResponse.json({
      totalViews,
      period: `${hours} hours`,
      page: page || 'all pages',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching PostHog data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
