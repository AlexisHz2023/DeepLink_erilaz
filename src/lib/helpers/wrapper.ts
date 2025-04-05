import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "./auth-utils";

type ApiHandlerParams = {
  params: { [key: string]: string };
};
type ApiHandler = ({
  req,
  user,
  context,
}: {
  req: NextRequest;
  user?: any;
  context: ApiHandlerParams;
}) => Promise<Response>;

export function withAuth(handler: ApiHandler) {
  return async (req: NextRequest, context: ApiHandlerParams) => {
    try {
      const user = await requireAuth();
      console.info("user", user)

      return await handler({
        req,
        context,
        user,
      });
    } catch (error: any) {
      if (error instanceof Response) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      return NextResponse.json(
        { error: error?.message || `Internal Server Error` },
        { status: error?.status || 500 }
      );
    }
  };
}
