import { NextResponse } from 'next/server'
import { RolService } from '@/service/rol.service'
import { withAuth } from '@/lib/helpers/wrapper';

export const GET = withAuth(
  async ({
    req,
    context,
    user
  }) => {
    const { id } = context.params;
    //const params = await context.params;
    //const categoriaId = params.id;
    
    const rol = await RolService.getById(id)
    
    if (!rol) {
      return NextResponse.json(
        { 
          data: {},
          error: "Rol not found"
        },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: rol });
  }
);

export const PUT = withAuth(
  async ({
    req,
    context,
    //user
  }) => {
    const { id } = context.params;
    //const params = await context.params;
    //const categoriaId = params.id;

    const body = await req.json();
    
    const rol = await  RolService.update(id, body);
    return NextResponse.json(rol);
  }
);

export const DELETE = withAuth(
  async ({
    req,
    context,
    //user
  }) => {
    const { id } = context.params;
    //const params = await context.params;
    //const categoriaId = params.id;
    
    await RolService.delete(id);
    return NextResponse.json({ message: "Rol deleted" });
  }
);
