import type { Metadata } from "next";
import PxDivider from "@/components/PxDivider";
import CloseCta from "@/components/CloseCta";

export const metadata: Metadata = {
  title: "Method",
  description:
    "A practical, four-step clinical assurance method that works with your existing delivery process: Understand, Plan, Deliver, Improve.",
};

const STEPS = [
  {
    num: "01",
    title: "Understand",
    body: "We map your product, your clinical context, and your regulatory obligations. Clarify context, risks and priorities quickly, and in plain language.",
  },
  {
    num: "02",
    title: "Plan",
    body: "Agree scope, outcomes and the right level of support. Clinical assurance activities are woven into your existing delivery process, with clear ownership and no duplicated work.",
  },
  {
    num: "03",
    title: "Deliver",
    body: "Get focused expert support where it adds most value — embedded, hands-on, and accountable through discovery, delivery and go-live.",
  },
  {
    num: "04",
    title: "Improve",
    body: "Turn findings into action and measurable progress. You go live with evidence, not assumptions, and a team that knows how to keep it current.",
  },
];

export default function MethodPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow">
            <PxDivider />
            Method
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)" }}>
            A practical assurance method that works with delivery teams.
          </h1>
          <p className="lede">
            For digital health leaders under pressure to deliver safely, ClinAssure
            brings senior clinical safety expertise that reduces uncertainty,
            strengthens assurance and keeps programmes moving.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.num}>
                <span className="step-num">STEP {s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="callout" style={{ marginTop: 0, background: "#fff", border: "1px solid var(--amber)" }}>
            <h3>Senior expertise. Direct access.</h3>
            <p>
              You work directly with an experienced ClinAssure partner who understands
              clinical safety, governance and delivery pressures in UK health and care
              settings. No layers. No hand-offs. Just senior, accountable support from
              discovery through delivery.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <PxDivider />
              Who we support
            </div>
            <h2>Built for NHS, independent and HealthTech delivery teams.</h2>
          </div>
          <p className="lede">
            We support NHS organisations, independent healthcare providers, health tech
            suppliers and delivery teams working through clinical safety, DTAC and
            digital transformation challenges.
          </p>
        </div>
      </section>

      <CloseCta />
    </>
  );
}
