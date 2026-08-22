import { useEffect, useRef } from "react";

/** Adds data-shown="true" to elements with .reveal once they enter the viewport. */
export function useRevealRoot<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.setAttribute("data-shown", "true"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-shown", "true");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return ref;
}
