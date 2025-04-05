import { NextResponse } from 'next/server'
import { AnalyticLinkService } from '@/service/analyticLink.service';
import { withAuth } from '@/lib/helpers/wrapper';

export const GET = withAuth(
  async ({
    req,
    context,
    user
  }) => {
    const sectors = await AnalyticLinkService.getAll()
    
    return NextResponse.json({ data: sectors });
  }
);

export const POST = withAuth(
  async ({
    req,
    context,
    user
  }) => {

    const body = await req.json()
    const sector = await AnalyticLinkService.create(body)

    return NextResponse.json(sector, { status: 201 })
  }
);

