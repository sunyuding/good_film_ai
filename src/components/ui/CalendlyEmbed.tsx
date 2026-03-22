"use client";

import { CALENDLY_URL } from "@/lib/constants";

export default function CalendlyEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <iframe
        src={`${CALENDLY_URL}?hide_gdpr_banner=1`}
        width="100%"
        height="630"
        frameBorder="0"
        title="Book a consultation"
        className="min-h-[630px] w-full"
      />
    </div>
  );
}
