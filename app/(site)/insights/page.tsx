import type { Metadata } from "next";
import PxDivider from "@/components/PxDivider";
import CloseCta from "@/components/CloseCta";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical thinking on clinical safety, DCB0129/DCB0160, DTAC and digital transformation from the ClinAssure team.",
};

const INSIGHTS = [
  {
    tag: "Standards",
    title: "DCB0129 vs DCB0160: who is actually responsible?",
    body: "The two standards are often confused, but they cover different accountability. DCB0129 sits with whoever manufactures or configures the health IT system; DCB0160 sits with the organisation deploying and using it. In practice, most digital health programmes need both applied together — and clarity on who owns which is often the first gap worth closing.",
  },
  {
    tag: "Delivery",
    title: "Why clinical assurance keeps arriving too late",
    body: "Clinical safety work is rarely skipped entirely — it usually just arrives after the decisions it should have shaped have already been made. Service model, workflow and system design choices carry clinical risk implications long before a formal safety case is written. Moving assurance activity earlier, even informally, changes what the paperwork ends up defending.",
  },
  {
    tag: "Procurement",
    title: "What DTAC readiness actually looks like",
    body: "Suppliers often treat DTAC as a form to complete before submission. The organisations that move through procurement fastest treat it as a readiness state instead — clinical safety, data protection, technical security, interoperability and accessibility genuinely built in, so the assessment reflects reality rather than describing intent.",
  },
  {
    tag: "AI & digital health",
    title: "Clinical risk doesn't disappear when a system is 'just software'",
    body: "As more clinical workflow moves into software — including AI-enabled decision support — it's tempting to treat clinical risk as an engineering or data problem. It remains a clinical problem first. The tools for managing it change; the underlying question of patient safety impact does not.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow">
            <PxDivider />
            Insights
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)" }}>
            Practical thinking on clinical safety and digital transformation.
          </h1>
          <p className="lede">
            Short, plain-language perspectives from the ClinAssure team on the
            standards, decisions and delivery patterns that shape safer digital health
            programmes.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="insight-grid">
            {INSIGHTS.map((i) => (
              <article className="insight-card" key={i.title}>
                <span className="tag">{i.tag}</span>
                <h3>{i.title}</h3>
                <p>{i.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CloseCta />
    </>
  );
}
