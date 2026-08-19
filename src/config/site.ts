// Single source of truth for advertiser identity, project attribution and legal
// notices. These strings appear in the header bar, footer, Terms, Privacy and
// the JSON-LD — Google Ads review compares them for consistency, so they must
// never drift apart. Edit here, not in the components.

// ---------------------------------------------------------------------------
// VERIFY BEFORE GOING LIVE
// Confirm with Avaland / the project team that this site may use the "Accent"
// project branding. The independence disclaimer must stay prominent: it is
// what separates an agency marketing site from an impersonation of the
// developer's own site.
// ---------------------------------------------------------------------------

export const project = {
  name: "Accent PJ",
  // How the developer brands it on its own material.
  officialName: "Accent, Petaling Jaya",
  wordmarkTop: "ACCENT",
  wordmarkBottom: "PETALING JAYA",
  tagline: "Pre-Launch Preview · Section 13, Petaling Jaya",
};

export const developer = {
  name: "Avaland Berhad",
  companyNo: "200901038653 (881786-X)",
};

export const agency = {
  name: "Nexsgen Realty Sdn Bhd",
  licence: "E (1) 1914",
  // Optional — leave "" to hide. Add the SSM company number when confirmed.
  companyNo: "",
  address:
    "1-1, PJ 21 Commercial Centre, Jalan SS3/39, 47300 Petaling Jaya, Selangor, Malaysia",
};

export const agent = {
  name: "Chloe Tan",
  ren: "REN 65782",
  role: "Registered Real Estate Negotiator",
  phoneDisplay: "+60 16-905 4333",
  phoneHref: "+60169054333",
  whatsapp: "60169054333",
  email: "jiaweii927@gmail.com",
};

export const site = {
  url: "https://www.pjprelaunchprivatelift.com.my",
};

/** One-line attribution used in the header bar. */
export const identityLine = `Independent marketing site by ${agent.name} (${agent.ren}) · ${agency.name}, BOVAEP ${agency.licence}`;

/** The "we are not the developer" notice, reused verbatim in 3 places. */
export const independenceNotice = `This is an independent marketing website operated by ${agent.name} (${agent.ren}), a registered Real Estate Negotiator with ${agency.name} (Registered Estate Agency, BOVAEP ${agency.licence}). It is NOT the official corporate website of the developer, ${developer.name}.`;

export const permitNotice = `Advertising permit and developer's licence details are issued to the developer and are available for inspection on request.`;

export const materialsNotice = `All renders, layouts, dimensions, facilities and proximities shown are artist's impressions and conceptual references only, and are subject to change without notice. Nothing on this website forms part of an offer or contract. Any purchase is governed solely by the executed Sale and Purchase Agreement (SPA) confirmed by the developer.`;

/** Pre-filled WhatsApp deep link. */
export const waLink = (message: string) =>
  `https://wa.me/${agent.whatsapp}?text=${encodeURIComponent(message)}`;
