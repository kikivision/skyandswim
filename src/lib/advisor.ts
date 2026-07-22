// Fora travel-advisor program — single source of truth.
//
// Sky & Swim currently runs as a pure affiliate directory: readers click out
// to Booking.com (via the Commission Junction /go/booking/<slug> redirector)
// and we earn a referral commission. Sunstate Bay Ventures, LLC is also an
// independent travel advisor affiliated with Fora Travel — able to book the
// hotels in the directory directly and pass guests Fora preferred-partner
// perks (upgrades, resort credits, breakfast, early check-in) at no extra
// cost. This mirrors the same flag in jetandswim's src/lib/advisor.ts.
//
// Until approval lands for a given brand, all advisor copy stays dormant.
// Flip FORA_APPROVED to true and the advisor language surfaces site-wide
// (about page block + secondary CTA, contact page trip-inquiry form, and the
// commission disclosures on /terms and /privacy). The affiliate model stays
// in place alongside it — this is an additive "coexist" switch, not a
// replacement.
export const FORA_APPROVED = true;

// Host agency we book under, used in user-facing copy and disclosures.
export const ADVISOR_HOST = 'Fora';

// Where the "Plan your trip with me" CTA points — the contact page, which
// surfaces an advisor-specific note + intake form when FORA_APPROVED is on.
export const ADVISOR_INQUIRY_URL = '/contact';
