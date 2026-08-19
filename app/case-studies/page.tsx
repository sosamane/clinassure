import type { Metadata } from "next";
import PxDivider from "@/components/PxDivider";
import CloseCta from "@/components/CloseCta";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Illustrative scenarios showing how ClinAssure's programme pathways apply in practice.",
};

const SCENARIOS = [
  {
    pathway: "New digital programme",
    title: "Designing risk controls in, before procurement starts",
    body: "A trust preparing to procure a new patient-facing digital service wants clinical risk considered before the business case is finalised, not after a supplier is selected. ClinAssure works alongside the discovery team to map clinical context and hazards early, so the resulting procurement specification already reflects DCB0129/DCB0160 expectations — reducing rework and re-negotiation later.",
  },
  {
    pathway: "Pre-go-live readiness",
    title: "An independent check before the final approval gate",
    body: "A digital programme is weeks from go-live and needs confidence that its clinical safety case, hazard log and governance evidence will withstand scrutiny at the final approval board. An independent ClinAssure readiness review identifies the gaps that matter, prioritised so the team can close them before the gate — rather than finding them at the board itself.",
  },
  {
    pathway: "Post-incident strengthening",
    title: "Turning a near-miss into stronger controls",
    body: "Following a clinical safety near-miss linked to a digital pathway, a provider needs a structured review that goes beyond the immediate fix to the underlying system and process design. ClinAssure leads a root-cause review and translates the findings into a practical remediation plan that rebuilds confidence with clinical and governance stakeholders.",
  },
  {
    pathway: "Supplier readiness",
    title: "Getting procurement-ready for NHS adoption",
    body: "A health technology supplier is scaling into NHS accounts and keeps hitting the same procurement questions about clinical risk management. ClinAssure helps build a clinical risk management system and safety case documentation that stands up to trust scrutiny, so the sales conversation moves faster and with fewer surprises.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow">
            <PxDivider />
            Case studies
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)" }}>
            How ClinAssure&apos;s pathways apply in practice.
          </h1>
          <p className="lede">
            The scenarios below are illustrative, anonymised composites based on the
            kinds of engagements ClinAssure&apos;s pathways are designed for &mdash;
            shared to show how the approach works, not as named client examples.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="insight-grid">
            {SCENARIOS.map((s) => (
              <article className="insight-card" key={s.title}>
                <span className="tag">{s.pathway}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CloseCta />
    </>
  );
}
