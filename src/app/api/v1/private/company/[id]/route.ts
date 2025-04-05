import { NextResponse } from 'next/server'
import { CompanyService } from '@/service/company.service'
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
    
    const sector = await CompanyService.getById(id)
    
    if (!sector) {
      return NextResponse.json(
        { 
          data: {},
          error: "Company not found"
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
    
    const sector = await  CompanyService.update(id, body);
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
    
    await CompanyService.delete(id);
    return NextResponse.json({ message: "Company deleted" });
  }
);
