import { cookies } from "next/headers";

export async function POST(request: Request) {
  const res = await request.json();
  const force = res.force as boolean | undefined;
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("accessToken");
  if (force) {
    return Response.json(
      {
        message: "Đăng xuất thành công",
      },
      {
        status: 200,
        headers: {
          // Xóa cookie sessionToken
          "Set-Cookie": `accessToken=null; Path=/; HttpOnly; Max-Age=0`,
        },
      }
    );
  }
  if (!sessionToken) {
    return Response.json(
      { message: "Không nhận được session token" },
      {
        status: 401,
      }
    );
  }
}
