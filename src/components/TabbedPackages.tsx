import { useCallback, useEffect, useMemo, useState } from "react";
import PricingSection, { type Plan } from "@/components/Packages/PricingSection";
import ServiceInquiryModal from "@/components/ServiceInquiryModal"; // <-- use your existing modal

/**
 * TabbedPackages
 * - Accessible tabs (keyboard + ARIA) that swap different package groups.
 * - Reuses <PricingSection /> and injects CTA.onClick to open the modal.
 */

const logoPlans: Plan[] = [
  { title: "Basic Logo Package", price: 29.99, features: ["3 Logo Concepts", "3 Revisions", "24h TAT", "100% Satisfaction Guarantee", "100% Satisfaction Guarantee", "100% Money Back Guarantee" ], cta: { label: "Select Plan" } },
  { title: "Beginners Logo Package", price: 89.99, highlight: true, features: ["6 Concepts", "Free Icon", "Free Grayscale Formats", "Free Color Options", "6 Revisions","24 Hours TAT","Files Format (JPEG, PNG, PDF, TIFF)", "100% Ownership Rights", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee"], cta: { label: "Select Plan" } },
  { title: "Silver Logo Package", price: 149.99, features: ["10 Concepts", "4 Dedicated Designers", "Unlimited Revisions", "Free Icon","FREE Custom Stationery Design (Letterhead, Envelope, Business Card)", "FREE MS Word Letterhead", "FREE Grayscale Formats", "FREE Color Options", "24 Hours TAT", "FREE File Formats (JPEG, PNG, PDF, PSD, EPS, TIFF)", "100% Ownership Rights", "100% Satisfaction Guarantee", "100% Unique Design Guarantee (No Template)", "100% Money Back Guarantee" ], cta: { label: "Select Plan" } },
  { title: "Gold Logo Package", price: 199.99, features: ["Unlimited Custom Logo Design Concepts", "6 Dedicated Designers", "Unlimited Revisions", "FREE MS Word Letterhead","FREE Custom Stationery Design", "Free Email Signature", "FREE Grayscale Formats", "FREE Color Options", "Free Invoice Design", "24 Hours TAT", "FREE File Formats (JPEG, PNG, PDF, PSD, EPS, TIFF)", "100% Ownership Rights", "100% Satisfaction Guarantee", "100% Unique Design Guarantee (No Template)", "100% Money Back Guarantee" ], cta: { label: "Select Plan" } },
  { title: "Platinum Logo Package", price: 249.99, features: ["Unlimited Logo Concepts", "8 Dedicated Designers", "Unlimited Revisions", "2 Free Custom Stationery Designs (Letterhead, Envelope, Business Card, Contract Cover Page Design)","2 Sided Flyer (OR) Bi-Fold Brochure Design", "FREE MS Word Letterhead", "Free Email Signature", "Free Invoice Design", "Free Invoice Design", "All Final File Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)", "02 Hours TAT", "100% Ownership Rights", "100% Satisfaction Guarantee", "100% Unique Design Guarantee (No Template)", "100% Money Back Guarantee" ], cta: { label: "Select Plan" } },
  { title: "Elite Logo Package", price: 249.99, features: ["Unlimited Logo Concepts", "10 Dedicated Designers", "Unlimited Revisions", "2 Free Custom Stationery Designs (Letterhead, Envelope, Business Card, Contract Cover Page Design)","2 Sided Flyer (OR) Bi-Fold Brochure Design", "Social Media Pages Design (i.e. Facebook, Twitter, LinkedIn, Pinterest, Instagaram, Google+) (Any 3)", "Social Media Size Images", "T-Shirt Design, Signage Design, Packaging Design (Any 2)", "FREE MS Word Letterhead", "Free Email Signature", "Free Invoice Design", "All Final File Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)", "24 Hours TAT", "100% Ownership Rights", "100% Satisfaction Guarantee", "100% Unique Design Guarantee (No Template)", "100% Money Back Guarantee" ], cta: { label: "Select Plan" } },
  { title: "3D Logo Package", price: 339.99, highlight: true, features: ["3 Unique 3D Logo Concepts", "Light Effects and VFX", "Fully Rendered", "Multiple 3D Angles", "By 3 Award Winning Designers","72 hours Turnaround Time","UNLIMITED Revisions", "100% Ownership Rights", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee"], cta: { label: "Select Plan" } },
];

const webPlans: Plan[] = [
  { title: "Startup Website Package", price: 199.99, features: ["5 Stock Photos", "3 Page Website", "3 Banner Design", "1 jQuery Slider Banner", "FREE Google Friendly Sitemap", "Complete W3C Certified HTML", "48 to 72 hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee", "Mobile Responsive will be Additional $99*", "CMS will be Additional $299*"], cta: { label: "Select Plan" } },
  { title: "Pro Website Package", price: 599.99, highlight: true, features: ["10 Unique Pages Website", "CMS / Admin Panel Support", "8 Stock images", "5 Banner Designs", "1 jQuery Slider Banner", "FREE Google Friendly Sitemap", "Complete W3C Certified HTML", "48 to 72 hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee *", "Mobile Responsive will be Additional $99*"], cta: { label: "Select Plan" } },
  { title: "Elite Website Package", price: 999.99, features: ["Upto 15 Unique Pages Website", "Conceptual and Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)", "Custom Forms", "Lead Capturing Forms (Optional)", "Striking Hover Effects", "Newsletter Subscription (Optional)", "Newsfeed Integration", "Social Media Integration", "Search Engine Submission", "5 Stock Photos", "3 Unique Banner Design", "1 jQuery Slider Banner", "Complete W3C Certified HTML", "48 to 72 hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee *"], cta: { label: "Select Plan" } },
  { title: "Silver Startup Package", price: 1599.99, features: ["15 to 20 Pages Website", "Custom Made, Interactive, Dynamic & High End Design", "Custom WP", "1 jQuery Slider Banner", "Up to 10 Custom Made Banner Designs", "10 Stock Images", "Unlimited Revisions", "Special Hoover Effects", "Content Management System (CMS)", "Online Appointment/Scheduling/Online Ordering Integration (Optional)", "Online Payment Integration (Optional)", "Multi Lingual (Optional)", "Custom Dynamic Forms (Optional)", "Signup Area (For Newsletters, Offers etc.)", "Search Bar", "Live Feeds of Social Networks integration (Optional)", "Mobile Responsive", "Free Google Friendly Sitemap", "Search Engine Submission", "Complete W3C Certified HTML", "Industry Specified Team of Expert Designers and Developers", "Complete Deployment", "Dedicated Accounts Manager", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "100% Ownership Rights", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee *"], cta: { label: "Select Plan" } },
  { title: "Business Website Package", price: 2499.99, features: ["Unlimited Unique Pages Website", "Custom Made, Interactive, Dynamic & High End Design", "Custom WP (or) Custom PHP Development", "1 jQuery Slider Banner", "Up to 10 Custom Made Banner Designs", "10 Stock Images", "Unlimited Revisions", "Special Hoover Effects", "Content Management System (CMS)", "Online Appointment/Scheduling/Online Ordering Integration (Optional)", "Online Payment Integration (Optional)", "Multi Lingual (Optional)", "Custom Dynamic Forms (Optional)", "Signup Area (For Newsletters, Offers etc.)", "Search Bar", "Live Feeds of Social Networks integration (Optional)", "Mobile Responsive", "60 Seconds 2D Explainer Video", "Voice – Over & Sound Effects", "Professional Script Writing", "Storyboard", "SEO Meta Tags", "Free Google Friendly Sitemap", "Search Engine Submission", "Complete W3C Certified HTML", "Industry Specified Team of Expert Designers and Developers", "Complete Deployment", "Dedicated Accounts Manager", "100% Ownership Rights", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee *"], cta: { label: "Select Plan" } },
  { title: "Interactive Portal", price: 4999.99, features: ["Unlimited Page Website", "Custom Content Management System (CMS)", "Unique Pages and UI Design", "Complete Custom Development", "Process Automation Tools", "Newsfeed Integration", "Social Media Plugins Integration", "Upto 40 Stock images", "10 Unique Banner Designs", "JQuery Slider", "Search Engine Submission", "Free Google Friendly Sitemap", "Custom Email Addresses", "Social Media Page Designs (Facebook, Twitter, Instagram)", "Complete W3C Certified HTML", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "Money Back Guarantee", "Key features", "Automated Course Creation", "Video Conferencing", "Skills/Certification Tracking", "Mobile Learning", "Asynchronous Learning", "CRM Features", "Gamification", "Social Learning/Message Boards", "Motivational Triggers", "Forums And Webinars", "E-commerce And Subscriptions", "Online Course Booking", "Excellent Reporting", "Invoicing Integration", "Financial Integrations", "Student Information management", "Automated communications", "Learning Management System", "Quick And Easy Course Scheduling", "Reporting And Data Analysis", "Assessment Management & Live Feedback", "Gradebooks", "Quick User Integration", "Easy Payment Methods", "Online Communities & Social Engagement", "Curation of Resources And Adding Own Resources"], cta: { label: "Select Plan" } },
  { title: "Custom CRM Portal ", price: 6999.99, features: ["Unlimited Page Website", "Unique Pages and UI Design", "Complete Custom Development", "Newsfeed Integration", "CRM (Customer Relation Management System)", "Performance and analytics", "Customization of Personal Details", "Process management", "Sales Automation", "Team Collaboration", "Marketing Automation", "Security", "Integrations", "Sales Reports", "Trend Analytics", "Forecasting", "Territory Management", "Account Management", "Event Integration", "Advanced Data Security", "Account Management", "Opportunity Management", "Sales Forecasting", "Quotes", "Contracts", "Document Library", "Case Management", "Analytics and Dashboards", "Lead Management", "Resource Management", "Analytics", "Web Intelligence", "Automated Emails, Invoices & Estimates", "Automated Split invoicing", "Automated Combine invoices", "Invoice templates", "Financial Reports", "Generate automated sales reports", "Core Features", "Reporting", "Accounting", "Tracking and Visibility", "Centralized Modules", "Human Resources Management", "Business Process Management", "Enterprise Analytics", "Business Intelligence", "Centralized Modules", "Accounting", "Distribution", "Business Intelligence", "Insights", "Standardization", "Procurement", "Reporting and Analytics", "Projection", "Enterprise-wide integration", "Real-Time Operations", "Problem definition", "Description of the program’s objectives and scope", "Assumptions", "Implementation costs", "Implementation schedule", "Development and operational risks", "Projected benefits", "Team Members", "Contracts", "Infrastructure Upgrades", "Create work plans and timelines", "Analyze gaps", "Configure parameters", "Migrate data", "Test system", "Document system", "Online Payment Solutions (optional)", "Advanced Admin Features 2.0", "User Signup/Login Functionalities", "Advanced User Features", "User Profile Management", "General Configuration Features", "Complete W3C Certified HTML", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "Money Back Guarantee"], cta: { label: "Select Plan" } },
];

const ecommercePlans: Plan[] = [ /* ... unchanged ... */ ];
const seoPlans: Plan[] = [ /* ... unchanged ... */ ];
const smmPlans: Plan[] = [ /* ... unchanged ... */ ];
const comboPlans: Plan[] = [ /* ... unchanged ... */ ];
const animationPlans: Plan[] = [ /* ... unchanged ... */ ];

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
  const [openInquiry, setOpenInquiry] = useState(false);

  // deep-linking via hash
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

  // Inject CTA.onClick for every plan so it opens the modal
  const tabsWithModalCTA = useMemo(() => {
    return TABS.map(t => ({
      ...t,
      plans: t.plans.map(p => ({
        ...p,
        cta: {
          ...p.cta,
          onClick: () => setOpenInquiry(true),
        },
      })),
    }));
  }, []);

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

        {tabsWithModalCTA.map((t) => (
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

      {/* One modal instance for all plans */}
      <ServiceInquiryModal open={openInquiry} onClose={() => setOpenInquiry(false)} />

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
