import { useEffect, useMemo, useRef, useState } from "react";

export type CounterItem = {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
};

export type CounterSectionProps = {
    title?: string;
    durationMs?: number;
    items?: CounterItem[];
};

const defaultItems: CounterItem[] = [
    { label: "Happy Clients", value: 57000, suffix: "+" },
    { label: "Team Members", value: 250, suffix: "+" },
    { label: "Completed Projects", value: 69000, suffix: "+" },
    { label: "Digital Products", value: 550 },
    { label: "Office Locations", value: 0 },
    { label: "Total Ad Spend", value: 2_750_00, prefix: "$" },
];

function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
}

/**
 * Format numbers using a custom "k" reduction for large values.
 * Example: 2,750,000 -> 275k
 * Rule: if n >= 100_000, display Math.round(n / 10_000) + 'k'
 * otherwise show the full number with commas.
 */
function formatKStyle(n: number) {
    if (n >= 100_00) {
        const k = Math.round(n / 10_00); // 2,750,000 -> 275
        return `${k}k`;
    }
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
}

export default function CounterSection({
    durationMs = 1800,
    items = defaultItems,
}: CounterSectionProps) {
    const total = useMemo(() => items.reduce((s, i) => s + i.value, 0), [items]);

    const [started, setStarted] = useState(false);
    const [progress, setProgress] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting && !started) setStarted(true);
                });
            },
            { root: null, threshold: 0.25 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        let raf = 0;
        const t0 = performance.now();

        const loop = (now: number) => {
            const t = Math.min(1, (now - t0) / durationMs);
            setProgress(easeOutCubic(t));
            if (t < 1) raf = requestAnimationFrame(loop);
        };

        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, [started, durationMs]);

    const lerp = (to: number) => Math.round(to * progress);

    return (
        <section className="counters" ref={ref} aria-labelledby="counter-title">
            <div className="container">
                <h4 id="counter-title" className="heading">
                    ISBTechs turns creativity into endless possibilities.
                </h4>



                <div className="grid">
                    {items.map((item) => {
                        const displayValue = formatKStyle(lerp(item.value));
                        return (
                            <article className="card" key={item.label}>
                                <div className="value">
                                    <span className="prefix">{item.prefix || ""}</span>
                                    {displayValue}
                                    <span className="suffix">{item.suffix || ""}</span>
                                </div>
                                <div className="label">{item.label}</div>
                            </article>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
        :root { --ink: #ffffff;  }

        /* Transparent background and full width */
        .counters { width: 100%; padding: 56px 20px; color: var(--ink);  }
        .container { max-width: 1340px; margin: 0 auto; width: 100%;  }

        .heading { text-align: center; font-size: clamp(38px, 2.2vw, 22px); margin: 0 0 24px; color: var(--ink); font-weight: 700; line-height: 1.4; margin-bottom: 80px; }

        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; width: 100%;  }
        .card { text-align: center; padding: 10px 6px; background: transparent; color: #fff; font-size: 50px;}
        .value { font-size: clamp(60px, 3vw, 30px); font-weight: 800; color: var(--ink); margin-bottom: 20px; }
        .prefix, .suffix { color: var(--ink); font-weight: 700; font-size: 30px }
        .label { color: var(--ink); margin-top: 6px; font-size: 20px; font-weight: 500; opacity: 0.95; }
      `}</style>
        </section>
    );
}
