import { NextResponse } from 'next/server'

export async function GET() {
  try {
    return NextResponse.json({
        message: 'API is working correctly'
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error al conectar con el servidor API' },
      { status: 500 }
    )
  }
}
