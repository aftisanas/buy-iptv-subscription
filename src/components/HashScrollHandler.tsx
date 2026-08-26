"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Lands #hash deep-links on their section.
 *
 * Two cases the browser/router get wrong on this site:
 *  - a fresh load of /#plans fires the native anchor jump before images and
 *    in-view sections have laid out, so the target drifts away from the viewport;
 *  - a client-side Link from /blog to /#plans changes the URL without scrolling.
 *
 * Both are handled by re-aiming at the target until its position stops moving.
 */
export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    let frame = 0;
    let timer: ReturnType<typeof setTimeout>;
    let lastTop: number | null = null;
    let attempts = 0;

    const aim = () => {
      const el = document.getElementById(id);
      if (!el) {
        if (attempts++ < 40) timer = setTimeout(aim, 50);
        return;
      }

      const top = Math.round(el.getBoundingClientRect().top + window.scrollY);
      el.scrollIntoView({ behavior: "instant", block: "start" });

      // Stop once the target has held the same document position across a tick.
      if (lastTop !== null && Math.abs(top - lastTop) < 2) return;
      lastTop = top;
      if (attempts++ < 40) timer = setTimeout(aim, 50);
    };

    frame = requestAnimationFrame(aim);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
