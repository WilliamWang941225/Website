import { useEffect } from "react";

const scriptSources = [
  "/assets/js/jquery.min.js",
  "/assets/js/jquery.scrollex.min.js",
  "/assets/js/jquery.scrolly.min.js",
  "/assets/js/browser.min.js",
  "/assets/js/breakpoints.min.js",
  "/assets/js/util.js",
  "/assets/js/main.js"
];

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export default function LegacyScripts() {
  useEffect(() => {
    let cancelled = false;

    async function loadLegacyScripts() {
      for (const src of scriptSources) {
        if (cancelled) return;
        await loadScript(src);
      }
    }

    document.body.classList.remove("is-preload");
    loadLegacyScripts().catch((error) => console.error(error));

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
