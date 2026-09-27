import type { Metadata } from "next";
import PxDivider from "@/components/PxDivider";
import CloseCta from "@/components/CloseCta";
import { PATHWAYS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programme Pathways",
  description:
    "Six programme pathways covering the full lifecycle of digital health delivery, from new programme mobilisation to post-incident strengthening.",
};

export default function PathwaysPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow">
            <PxDivider />
            Programme pathways
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)" }}>
            Choose the pathway that fits your programme context.
          </h1>
          <p className="lede">
            Digital health programmes hit clinical risk at different moments &mdash;
            at mobilisation, mid-delivery, before go-live, or after an incident.
            ClinAssure meets your programme where it actually is.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            {PATHWAYS.map((p) => (
              <article className="card" key={p.slug} id={p.slug}>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <p className="small" style={{ marginTop: 14 }}>
                  <strong style={{ color: "var(--ink)" }}>Best for:</strong> {p.bestFor}
                </p>
                <ul>
                  {p.youGet.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="callout" style={{ marginTop: 0 }}>
            <h3>Not sure which pathway fits?</h3>
            <p>
              Most programmes don&apos;t fit neatly into one box. Bring us your context
              and we&apos;ll recommend the right starting point &mdash; no obligation.
            </p>
            <div className="hero-actions" style={{ marginTop: 26 }}>
              <a className="btn btn-primary" href="/contact">
                Talk through your programme
              </a>
            </div>
          </div>
        </div>
      </section>

      <CloseCta />
    </>
  );
}
