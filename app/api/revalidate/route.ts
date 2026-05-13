import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret =
    request.headers.get("sanity-webhook-secret") ??
    request.nextUrl.searchParams.get("secret");

  if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const type = body?._type as string | undefined;

    if (type === "homePage") {
      revalidatePath("/");
    } else if (type === "aboutPage") {
      revalidatePath("/about");
    } else if (type === "workProject") {
      revalidatePath("/work");
      // Also revalidate individual work pages
      if (body?.slug?.current) {
        revalidatePath(`/work/${body.slug.current}`);
      }
    } else {
      // Revalidate everything if unknown type
      revalidatePath("/", "layout");
    }

    return NextResponse.json({ revalidated: true, type });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
