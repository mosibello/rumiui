import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req) {
  try {
    const { body, isValidSignature } = await parseBody(
      req,
      process.env.NEXT_PUBLIC_SANITY_HOOK
    );

    if (!isValidSignature) {
      console.warn("❌ Invalid Signature");
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body || !body._type) {
      console.warn("❌ Bad Body");
      return new Response("Bad Request", { status: 400 });
    }

    console.log(
      "✅ Revalidating tag:",
      body._type,
      "at",
      new Date().toISOString()
    );

    revalidateTag(body._type);

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error) {
    console.error("❌ Revalidation error:", error);
    return new Response(error.message, { status: 500 });
  }
}
