/**
 * Shared style tokens for homepage sections.
 * Import these instead of retyping Tailwind strings so every section
 * stays consistent in spacing, radius, color and type scale.
 */

export const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

// Every section uses the same vertical rhythm + divider.
export const sectionBase = "py-16 bg-slate-950 border-t border-slate-900";
// First section on the page (no divider needed above it).
export const sectionFirst = "py-16 bg-slate-950";

export const sectionHeading = "text-2xl font-bold text-white";
export const sectionSubtitle = "text-sm text-slate-400 mt-1";
export const eyebrow = "text-[11px] font-extrabold uppercase tracking-widest text-red-500";

export const viewAllLink =
  "text-xs font-semibold text-slate-400 hover:text-red-400 flex items-center gap-1 transition-colors";

// Standard content card (grid tiles, profile cards, etc.)
export const cardBase =
  "bg-slate-900/60 border-slate-800 rounded-2xl hover:border-slate-700 transition-all";

// Larger feature/promo card (hero-adjacent banners).
export const cardFeature = "bg-slate-900 border-slate-800 rounded-3xl";

export const badgeAccent =
  "text-[10px] font-bold tracking-wider text-red-400 bg-red-950/50 border border-red-800/40 px-2 py-0.5 rounded-md";

export const tagPill =
  "text-xs bg-slate-950/60 hover:bg-red-950/40 hover:text-red-400 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 transition-colors";

export const buttonPrimary =
  "bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-full shadow-lg shadow-red-600/20 transition-colors";

export const buttonSecondary =
  "bg-slate-800 hover:bg-red-600 text-white text-xs font-semibold rounded-xl transition-colors";

// Accent icon color — always red-500, never mixed with red-400.
export const iconAccent = "text-red-500";

export const avatarRing = "ring-2 ring-red-500/30";
export const avatarRingOnline = "ring-2 ring-emerald-500/50";