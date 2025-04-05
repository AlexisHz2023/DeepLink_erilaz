import { NextResponse } from 'next/server'
import { UserService } from '@/service/user.service'
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
    
    const dataUser = await UserService.getById(id)
    
    if (!dataUser) {
      return NextResponse.json(
        { 
          data: {},
          error: "User not found"
        },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: dataUser });
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
    
    const dataUser = await  UserService.update(id, body);
    return NextResponse.json(dataUser);
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
    
    await UserService.delete(id);
    return NextResponse.json({ message: "User deleted" });
  }
);
