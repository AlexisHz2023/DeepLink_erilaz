import { NextResponse } from 'next/server'
import { CategoryLinkService } from '@/service/categoryLink.service'
import { withAuth } from '@/lib/helpers/wrapper';

export const GET = withAuth(
  async ({
    req,
    context,
    user
  }) => {
    const sectors = await CategoryLinkService.getAll()
    
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
    const sector = await CategoryLinkService.create(body)

    return NextResponse.json(sector, { status: 201 })
  }
);

