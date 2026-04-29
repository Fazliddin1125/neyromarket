import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload = {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    createdAt: new Date().toISOString(),
  };

  console.log("[lead]", payload);

  return NextResponse.redirect(new URL("/#contact", request.url), 303);
}
