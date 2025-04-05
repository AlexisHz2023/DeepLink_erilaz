import { NextResponse } from 'next/server'
import { ClickLinkService } from '@/service/clickLink.service';
import { withAuth } from '@/lib/helpers/wrapper';

export const GET = withAuth(
  async ({
    req,
    context,
    user
  }) => {
    const sectors = await ClickLinkService.getAll()
    
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
    const sector = await ClickLinkService.create(body)

    return NextResponse.json(sector, { status: 201 })
  }
);

