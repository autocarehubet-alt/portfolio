"use client";

import { useEffect, useRef, useState } from "react";
import { codeLines } from "@/content/profile";
import type { CodeToken } from "@/lib/types";

const tokenClass: Record<CodeToken["c"], string> = {
  kw: "text-code-keyword",
  id: "text-code-ident",
  cm: "text-code-comment",
  pl: "text-text-primary",
};

const totalChars = codeLines.reduce(
  (n, line) => n + line.reduce((m, t) => m + t.t.length, 0) + 1,
  0
);

// Full text for crawlers and screen readers — the typed animation is
// client-side, so the static HTML needs the real content too.
const fullText = codeLines
  .map((line) => line.map((t) => t.t).join(""))
  .join("\n");

function visibleLines(count: number) {
  const out: CodeToken[][] = [];
  let rest = count;
  for (const line of codeLines) {
    if (rest <= 0) break;
    const toks: CodeToken[] = [];
    for (const tok of line) {
      if (rest <= 0) break;
      const take = Math.min(tok.t.length, rest);
      toks.push({ t: tok.t.slice(0, take), c: tok.c });
      rest -= take;
    }
    out.push(toks);
    rest -= 1; // newline
  }
  return out;
}

export default function CodeCard() {
  const [count, setCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(totalChars);
      return;
    }
    const t = setInterval(() => {
      setCount((c) => {
        if (c >= totalChars) {
          clearInterval(t);
          return c;
        }
        return c + 1;
      });
    }, 24);
    return () => clearInterval(t);
  }, []);

  // Keep the newest line in view while typing.
  useEffect(() => {
    const el = scrollRef.current;
    if (el && count < totalChars) el.scrollTop = el.scrollHeight;
  }, [count]);

  const lines = visibleLines(count);

  return (
    <div className="relative h-[320px] overflow-hidden rounded-xl border border-border-secondary bg-bg-primary md:h-[250px]">
      <pre className="sr-only">{fullText}</pre>
      <div
        ref={scrollRef}
        aria-hidden
        className="scrollbar-thin relative h-full overflow-auto font-mono text-[13px] leading-6"
      >
        <div className="relative min-h-full min-w-max py-3">
          {/* line-number gutter background */}
          <div className="absolute inset-y-0 left-0 w-10 border-r border-border-secondary bg-bg-secondary" />
          {lines.map((toks, i) => (
            <div key={i} className="relative flex">
              <span className="w-10 shrink-0 select-none pr-2.5 text-right text-text-placeholder">
                {i + 1}
              </span>
              <span className="whitespace-pre px-3">
                {toks.map((t, j) => (
                  <span key={j} className={tokenClass[t.c]}>
                    {t.t}
                  </span>
                ))}
                {i === lines.length - 1 && (
                  <span className="animate-caret ml-px inline-block h-3.5 w-[2px] translate-y-0.5 bg-text-primary" />
                )}
                {toks.length === 0 && " "}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
