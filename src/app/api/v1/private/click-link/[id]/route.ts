import { NextResponse } from 'next/server'
import { ClickLinkService } from '@/service/clickLink.service'
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
    
    const dataClickLink = await ClickLinkService.getById(id)
    
    if (!dataClickLink) {
      return NextResponse.json(
        { 
          data: {},
          error: "ClickLink not found"
        },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: dataClickLink });
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
    
    const dataClickLink = await  ClickLinkService.update(id, body);
    return NextResponse.json(dataClickLink);
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
    
    await ClickLinkService.delete(id);
    return NextResponse.json({ message: "ClickLink deleted" });
  }
);
