import { useMemo } from "react";

export type Plan = {
  title: string;
  price: number;
  subtitle?: string;
  cta?: { label: string; href?: string; onClick?: () => void };
  features: string[];
  highlight?: boolean;
};

const defaultPlans: Plan[] = [
  {
    title: "Basic Logo Package",
    price: 29.99,
    features: [
      "3 Custom Logo Design Concepts",
      "3 Revision Rounds",
      "24 Hours TAT",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Money Back Guarantee",
    ],
    cta: { label: "Select Plan" },
  },
  {
    title: "Beginners Logo Package",
    price: 89.99,
    features: [
      "6 Custom Logo Design Concepts",
      "FREE Icon",
      "FREE Grayscale Formats",
      "FREE Color Options",
      "6 Revision Rounds",
      "24 Hours TAT",
      "Files Format (JPEG, PNG, PDF, TIFF)",
      "100% Ownership Rights",
      "Priority Support",
    ],
    cta: { label: "Select Plan" },
    highlight: true,
  },
  {
    title: "Silver Logo Package",
    price: 149.99,
    features: [
      "10 Custom Logo Design Concepts",
      "4 Dedicated Designers",
      "Unlimited Revisions",
      "FREE Icon",
      "FREE Custom Stationery Design (Letterhead, Envelope, Business Card)",
      "FREE MS Word Letterhead",
      "FREE Grayscale Formats",
    ],
    cta: { label: "Select Plan" },
  },
  // ... (other plans unchanged)
];

export default function PricingSection({ plans = defaultPlans }: { plans?: Plan[] }) {
  const currencyFmt = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
    []
  );

  return (
    <section className="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="grid">
          {plans.map((plan, idx) => (
            <article
              key={plan.title + idx}
              className={`card ${plan.highlight ? "card--highlight" : ""}`}
            >
              <div className="card__content">
                <header className="card__header">
                  <h3 className="card__title">{plan.title}</h3>
                  {/* Floor, then format */}
                  <div className="card__price">
                    {currencyFmt.format(Math.trunc(plan.price))}
                  </div>
                </header>

                <ul className="card__features" role="list">
                  {plan.features.map((f, i) => (
                    <li key={i} className="feature">
                      <span className="bullet" aria-hidden>•</span>
                      <span className="text">{f}</span>
                    </li>
                  ))}
                </ul>

                <footer className="card__footer">
                  <a
                    className="btn"
                    href={plan.cta?.href || "#"}
                    role="button"
                    onClick={(e) => {
                      if (plan.cta?.onClick) {
                        e.preventDefault();       // stop navigation/jump
                        plan.cta.onClick();       // open modal (injected from parent)
                      }
                    }}
                  >
                    {plan.cta?.label || "Choose"}
                  </a>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        :root { --bg: #08121e; --text: #ffffff; --muted: #ffffff; --accent: #4cc0ff; }
        .pricing { background: var(--bg); padding: 64px 20px; color: var(--text); }
        .container { max-width: 1340px; margin: 0 auto; }
        .heading { text-align: center; font-size: clamp(28px, 3vw, 40px); line-height: 1.1; margin: 0 0 36px; letter-spacing: 0.2px; color: var(--text); }
        .grid { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 22px; }
        @media (min-width: 860px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .card { position: relative; display: flex; justify-content: center; align-items: center; background: linear-gradient(135deg, #0a0f2d 0%, #121c46 50%, #0a0f2d 100%); border-radius: 18px; padding: 40px 24px; box-shadow: 0 12px 30px rgba(3, 14, 31, 0.5); min-height: 520px; overflow: hidden; text-align: center; }
        .card:hover { transform: translateY(-2px); box-shadow: 0 18px 36px rgba(3, 14, 31, 0.6); transition: transform .25s ease, box-shadow .25s ease; }
        .card__content { display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; width: 100%; }
        .card--highlight { outline: 2px solid rgba(76,192,255,0.2); }
        .card__header { margin-bottom: 30px; }
        .card__title { font-size: clamp(18px, 2vw, 22px); font-weight: 700; margin: 0 0 20px; color: var(--text); }
        .card__price { font-weight: 800; font-size: clamp(34px, 4.2vw, 48px); letter-spacing: 1px; margin: 20px 0; color: #fff; }
        .card__features { margin: 20px 0; padding: 0; list-style: none; flex: 1 1 auto; overflow: auto; max-height: 200px; width: 100%; text-align: left; }
        .feature { display: flex; align-items: flex-start; gap: 10px; font-size: 15px; color: var(--text); padding: 6px 0; justify-content: flex-start; }
        .bullet { line-height: 1.2; font-size: 22px; opacity: 0.9; color: #4cc0ff; }
        .text { color: #fff; opacity: 1; text-align: left; }
        .card__features::-webkit-scrollbar { width: 8px; }
        .card__features::-webkit-scrollbar-track { background: transparent; }
        .card__features::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #3b7db4, #448fcf); border-radius: 8px; }
        .card__features { scrollbar-width: thin; scrollbar-color: #3b7db4 transparent; }
        .card__footer { margin-top: 30px; }
        .btn { --p: #0ea5ea; --q: #2563eb; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; font-weight: 700; border-radius: 14px; padding: 14px 22px; min-width: 300px; background: linear-gradient(160deg, var(--p), var(--q)); color: white; box-shadow: 0 8px 18px rgba(14,165,234,0.35); transition: transform .2s ease, box-shadow .2s ease, filter .2s ease; letter-spacing: 0.6px; text-transform: uppercase; font-size: 13px; text-align: center; }
        .btn:hover { transform: translateY(-1px); filter: brightness(1.05); box-shadow: 0 12px 22px rgba(14,165,234,0.45); }
        .btn:active { transform: translateY(0); }
      `}</style>
    </section>
  );
}
