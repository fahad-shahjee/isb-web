import { useCallback, useEffect, useMemo, useState } from "react";
import PricingSection, { type Plan } from "@/components/Packages/PricingSection"; // <-- adjust this path if needed

/**
 * TabbedPackages
 * - Accessible tabs (keyboard + ARIA) that swap different package groups.
 * - Reuses your existing <PricingSection /> and just swaps the `plans`.
 * - No Tailwind; fully scoped via styled-jsx.
 */

const logoPlans: Plan[] = [
  { title: "Basic Logo Package", price: 29.99, features: ["3 Logo Concepts", "3 Revisions", "24h TAT", "Money Back"], cta: { label: "Select Plan" } },
  { title: "Beginners Logo Package", price: 89.99, highlight: true, features: ["6 Concepts", "Free Icon", "Grayscale + Color", "6 Revisions", "Ownership Rights"], cta: { label: "Select Plan" } },
  { title: "Silver Logo Package", price: 149.99, features: ["10 Concepts", "4 Designers", "Unlimited Revisions", "Free Stationery"], cta: { label: "Select Plan" } },
];

const webPlans: Plan[] = [
  { title: "Starter Web", price: 299, features: ["1–3 Pages", "Responsive", "Contact Form", "Basic SEO"], cta: { label: "Select Plan" } },
  { title: "Business Web", price: 699, highlight: true, features: ["Up to 7 Pages", "CMS (Blog)", "Speed Optimized", "On-page SEO"], cta: { label: "Select Plan" } },
  { title: "Pro Web", price: 1299, features: ["10+ Pages", "Custom Components", "Analytics", "Priority Support"], cta: { label: "Select Plan" } },
];

const ecommercePlans: Plan[] = [
  { title: "Shop Lite", price: 799, features: ["10 Products", "Stripe/PayPal", "Responsive", "Basic Training"], cta: { label: "Select Plan" } },
  { title: "Shop Plus", price: 1499, highlight: true, features: ["50 Products", "Shipping Rules", "Coupons", "Email Templates"], cta: { label: "Select Plan" } },
  { title: "Shop Pro", price: 2499, features: ["Unlimited Products", "Custom Checkout", "Integrations", "Priority Support"], cta: { label: "Select Plan" } },
];

const seoPlans: Plan[] = [
  { title: "SEO Basic", price: 199, features: ["Keyword Research", "Meta + Alt Tags", "XML Sitemap", "Monthly Report"], cta: { label: "Select Plan" } },
  { title: "SEO Growth", price: 449, highlight: true, features: ["On-Page + Technical", "Schema Markup", "Blog Optimization", "Backlink Outreach"], cta: { label: "Select Plan" } },
  { title: "SEO Max", price: 899, features: ["Full Site Audit", "Content Calendar", "Link Building", "Quarterly Strategy"], cta: { label: "Select Plan" } },
];

const smmPlans: Plan[] = [
  { title: "SMM Starter", price: 149, features: ["1 Platform", "12 Posts/mo", "Hashtag Research", "Basic Ads Setup"], cta: { label: "Select Plan" } },
  { title: "SMM Growth", price: 349, highlight: true, features: ["2 Platforms", "20 Posts/mo", "Community Mgmt", "Monthly Reporting"], cta: { label: "Select Plan" } },
  { title: "SMM Pro", price: 699, features: ["3 Platforms", "30 Posts/mo", "Creative Ads", "A/B Testing"], cta: { label: "Select Plan" } },
];

const comboPlans: Plan[] = [
  { title: "Logo + Web", price: 999, features: ["Custom Logo", "5-page Website", "Basic SEO", "Speed Optimized"], cta: { label: "Select Plan" } },
  { title: "Brand + SEO", price: 1199, highlight: true, features: ["Logo + Stationery", "Landing Page", "SEO Setup", "Analytics"], cta: { label: "Select Plan" } },
  { title: "Complete Biz", price: 1999, features: ["Logo + Web + SMM", "Content Setup", "Email + Analytics", "Priority Support"], cta: { label: "Select Plan" } },
];

const animationPlans: Plan[] = [
  { title: "Intro Motion", price: 199, features: ["5–10s Logo Intro", "HD Export", "2 Revisions", "Music Bed"], cta: { label: "Select Plan" } },
  { title: "Explainer", price: 799, highlight: true, features: ["30–60s Explainer", "Script + VO", "Custom Illustrations", "Sound Design"], cta: { label: "Select Plan" } },
  { title: "Promo Video", price: 1299, features: ["60–90s Promo", "Storyboarding", "2D/3D Mix", "Subtitles"], cta: { label: "Select Plan" } },
  { title: "Promo Video", price: 1299, features: ["60–90s Promo", "Storyboarding", "2D/3D Mix", "Subtitles", "Subtitles", "Subtitles"], cta: { label: "Select Plan" } },
];

const TABS = [
  { id: "logo", label: "Logo Design", plans: logoPlans },
  { id: "web", label: "Web Design", plans: webPlans },
  { id: "ecom", label: "E-commerce", plans: ecommercePlans },
  { id: "seo", label: "SEO", plans: seoPlans },
  { id: "smm", label: "SMM", plans: smmPlans },
  { id: "combo", label: "Combo", plans: comboPlans },
  { id: "anim", label: "Animation", plans: animationPlans },
] as const;

type TabId = typeof TABS[number]["id"];

export default function TabbedPackages() {
  const [active, setActive] = useState<TabId>("logo");

  // Support deep-linking via hash (#web etc.)
  useEffect(() => {
    const fromHash = (location.hash || "").replace("#", "");
    if (TABS.some(t => t.id === fromHash)) setActive(fromHash as TabId);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") window.history.replaceState(null, "", `#${active}`);
  }, [active]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const idx = TABS.findIndex(t => t.id === active);
    if (e.key === "ArrowRight") {
      const next = (idx + 1) % TABS.length; setActive(TABS[next].id); e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      const prev = (idx - 1 + TABS.length) % TABS.length; setActive(TABS[prev].id); e.preventDefault();
    }
  }, [active]);

  const activePlans = useMemo(() => TABS.find(t => t.id === active)!.plans, [active]);

  return (
    <section className="tabs" aria-labelledby="packages-title">
      <div className="container">
        <h2 id="packages-title" className="visually-hidden">Packages</h2>

        <div className="tablist" role="tablist" aria-label="Package Categories" onKeyDown={onKeyDown}>
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={active === t.id}
              aria-controls={`panel-${t.id}`}
              tabIndex={active === t.id ? 0 : -1}
              className={`tab ${active === t.id ? "is-active" : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {TABS.map((t) => (
          <div
            key={t.id}
            role="tabpanel"
            id={`panel-${t.id}`}
            aria-labelledby={`tab-${t.id}`}
            hidden={active !== t.id}
            className="panel"
          >
            <PricingSection plans={t.plans} />
          </div>
        ))}
      </div>

      <style jsx>{`
        :root { --ink:#fff; --bg: transparent; --pill:#0f1c2d; --pill2:#132540; --accent:#0ea5ea; --accent2:#2563eb; }

        .tabs { background: var(--bg); padding: 28px 16px; color: var(--ink); }
        .container { max-width: 1200px; margin: 0 auto; }

        .tablist { display: grid; grid-auto-flow: column; gap: 10px; justify-content: center; overflow: auto; padding: 6px; border-radius: 16px; }
        .tab { appearance: none; border: 0; cursor: pointer; padding: 12px 16px; border-radius: 999px; color: var(--ink); background: linear-gradient(180deg, var(--pill), var(--pill2)); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06); font-weight: 600; white-space: nowrap; }
        .tab:is(:hover, :focus-visible) { outline: none; box-shadow: 0 0 0 2px rgba(14,165,234,0.35); }
        .tab.is-active { background: #FFF; color: #000; box-shadow: 0 10px 24px rgba(14,165,234,0.35); }

        .panel { margin-top: 12px; }

        .visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,1,1); white-space: nowrap; border: 0; }
      `}</style>
    </section>
  );
}

/**
 * USAGE
 * import TabbedPackages from "@/components/TabbedPackages";
 * <TabbedPackages />
 *
 * - Change plan content in the arrays above.
 * - Deep link: /#web will open "Web Design" tab automatically.
 */
