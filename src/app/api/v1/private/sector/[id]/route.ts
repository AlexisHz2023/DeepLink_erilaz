import { NextResponse } from 'next/server'
import { SectorService } from '@/service/sector.service'
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
    
    const sector = await SectorService.getById(id)
    
    if (!sector) {
      return NextResponse.json(
        { 
          data: {},
          error: "Sector not found"
        },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: sector });
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
    
    const sector = await  SectorService.update(id, body);
    return NextResponse.json(sector);
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
    
    await SectorService.delete(id);
    return NextResponse.json({ message: "Sector deleted" });
  }
);
