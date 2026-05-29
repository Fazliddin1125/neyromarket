import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload = {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
    createdAt: new Date().toISOString(),
  };

  // Minimal validation
  if (!payload.name || !payload.phone) {
    const error = "Укажите имя и телефон";
    if (wantsJson(request)) {
      return NextResponse.json({ ok: false, error }, { status: 400 });
    }
    return NextResponse.redirect(new URL("/#contact", request.url), 303);
  }

  // TODO (backend stage): persist to DB / forward to CRM
  console.log("[lead]", payload);

  if (wantsJson(request)) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.redirect(new URL("/#contact", request.url), 303);
}

function wantsJson(request: Request) {
  return (request.headers.get("accept") ?? "").includes("application/json");
}
