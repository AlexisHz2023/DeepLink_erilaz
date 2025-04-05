import { NextResponse } from 'next/server'
import { UserService } from '@/service/user.service';
import { withAuth } from '@/lib/helpers/wrapper';

export const GET = withAuth(
  async ({
    req,
    context,
    user
  }) => {
    const sectors = await UserService.getAll()
    
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
    const sector = await UserService.create(body)

    return NextResponse.json(sector, { status: 201 })
  }
);

