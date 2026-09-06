import React, { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export default function SEOHead({
  title = "NEXARYA — BEYOND BUILD | Digital Products & Engineering",
  description = "Nexarya designs, engineers and evolves production-ready digital products, software platforms and intelligent systems for modern businesses.",
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
