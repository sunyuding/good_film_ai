"use client";

import { CALENDLY_URL } from "@/lib/constants";

export default function CalendlyEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-cinema-gray">
      <iframe
        src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=1a1a1a&text_color=e5e5e5&primary_color=d4a843`}
        width="100%"
        height="630"
        frameBorder="0"
        title="Book a consultation"
        className="min-h-[630px] w-full"
      />
    </div>
  );
}
