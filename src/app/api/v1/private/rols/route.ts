import { NextResponse } from 'next/server'
import { RolService } from '@/service/rol.service'
import { withAuth } from '@/lib/helpers/wrapper';

export const GET = withAuth(
  async ({
    req,
    context,
    user
  }) => {
    const rols = await RolService.getAll()
    
    return NextResponse.json({ data: rols });
  }
);

export const POST = withAuth(
  async ({
    req,
    context,
    user
  }) => {

    const body = await req.json()
    const rol = await RolService.create(body)

    return NextResponse.json(rol, { status: 201 })
  }
);

