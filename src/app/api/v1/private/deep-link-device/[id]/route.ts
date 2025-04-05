import { NextResponse } from 'next/server'
import { DeepLinkdeviceService } from '@/service/deepLinkDevice.service'
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
    
    const dataDeepLinkDevice = await DeepLinkdeviceService.getById(id)
    
    if (!dataDeepLinkDevice) {
      return NextResponse.json(
        { 
          data: {},
          error: "DeepLinkdevice not found"
        },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: dataDeepLinkDevice });
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
    
    const dataDeepLinkDevice = await  DeepLinkdeviceService.update(id, body);
    return NextResponse.json(dataDeepLinkDevice);
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
    
    await DeepLinkdeviceService.delete(id);
    return NextResponse.json({ message: "DeepLinkDevice deleted" });
  }
);
