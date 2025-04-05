import { NextResponse } from 'next/server'
import { DeepLinkdeviceService } from '@/service/deepLinkDevice.service';
import { withAuth } from '@/lib/helpers/wrapper';

export const GET = withAuth(
  async ({
    req,
    context,
    user
  }) => {
    const sectors = await DeepLinkdeviceService.getAll()
    
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
    const sector = await DeepLinkdeviceService.create(body)

    return NextResponse.json(sector, { status: 201 })
  }
);

