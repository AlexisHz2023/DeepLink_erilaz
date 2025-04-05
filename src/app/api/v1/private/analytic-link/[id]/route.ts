import { NextResponse } from 'next/server'
import { AnalyticLinkService } from '@/service/analyticLink.service'
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
    
    const dataUser = await AnalyticLinkService.getById(id)
    
    if (!dataUser) {
      return NextResponse.json(
        { 
          data: {},
          error: "AnalyticLink not found"
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
    
    const dataUser = await  AnalyticLinkService.update(id, body);
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
    
    await AnalyticLinkService.delete(id);
    return NextResponse.json({ message: "AnalytiLinkService deleted" });
  }
);
