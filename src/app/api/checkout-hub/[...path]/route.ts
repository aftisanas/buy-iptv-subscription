import { NextRequest } from "next/server";
import { CHECKOUT_HUB_URL } from "@/lib/constants";

/**
 * Same-origin proxy to the shared checkout hub.
 *
 * Every property in the network POSTs to checkout.british-iptv-4k.com. Done
 * from the browser, that hostname sits in page source and the network tab of
 * each site, and the `siteSlug` parameter enumerates the rest — the cheapest
 * possible way for anyone to map the whole network from a single page. Routing
 * through this site's own origin keeps the hub hostname server-side.
 *
 * Nothing here is indexable; robots.ts already disallows /api/.
 */

export const dynamic = "force-dynamic";

const ALLOWED = new Set(["checkout", "availability", "diversion"]);

async function forward(req: NextRequest, path: string[]) {
  const endpoint = path[0];
  if (!ALLOWED.has(endpoint)) {
    return new Response("Not found", { status: 404 });
  }

  const target = new URL(`${CHECKOUT_HUB_URL}/api/${path.join("/")}`);
  req.nextUrl.searchParams.forEach((v, k) => target.searchParams.set(k, v));

  const init: RequestInit = {
    method: req.method,
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  };
  if (req.method === "POST") {
    init.body = await req.text();
  }

  try {
    const upstream = await fetch(target, init);
    const body = await upstream.text();
    return new Response(body, {
      status: upstream.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    // The caller degrades to the WhatsApp path on a non-OK response, so a
    // hub outage stays recoverable rather than blocking the order.
    return new Response(JSON.stringify({ storesUnavailable: true }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  return forward(req, path);
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  return forward(req, path);
}
