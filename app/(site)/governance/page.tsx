import type { Metadata } from "next";
import PxDivider from "@/components/PxDivider";
import CloseCta from "@/components/CloseCta";

export const metadata: Metadata = {
  title: "Standards",
  description:
    "A plain-language explainer on DCB0129, DCB0160 and DTAC — the standards that govern clinical risk management for health IT systems in the UK.",
};

const FAQS = [
  {
    code: "DCB0129",
    q: "What is DCB0129?",
    a: "DCB0129 (\"Clinical Risk Management: its Application in the Manufacture of Health IT Systems\") is the UK standard that applies to organisations that design, build or manufacture health IT systems. It requires the manufacturer to operate a clinical risk management system, appoint a named Clinical Safety Officer, and produce a Clinical Safety Case Report and Hazard Log before a system is released for use.",
  },
  {
    code: "DCB0160",
    q: "What is DCB0160?",
    a: "DCB0160 (\"Clinical Risk Management: its Application in the Deployment and Use of Health IT Systems\") is the companion standard for the healthcare organisation deploying or operating a health IT system. It requires the deploying organisation to have its own clinical risk management system and Clinical Safety Officer, so risk is actively managed in the specific clinical setting the system is used in — not just at the point of manufacture.",
  },
  {
    code: "DTAC",
    q: "What is the Digital Technology Assessment Criteria (DTAC)?",
    a: "DTAC is a baseline set of standards used by NHS and care organisations to assess digital health technologies before adoption. It brings together five areas — clinical safety, data protection, technical security, interoperability, and usability & accessibility — into a single assessment, giving buyers and suppliers a shared reference point for readiness.",
  },
  {
    code: "CSO",
    q: "What does a Clinical Safety Officer actually do?",
    a: "A Clinical Safety Officer (CSO) is a registered clinician responsible for ensuring a health IT system is safe for its intended use. They lead hazard identification and risk assessment, own the Hazard Log, sign off the Clinical Safety Case Report, and act as the clinical safety voice inside a delivery or product team.",
  },
  {
    code: "WHEN",
    q: "When should clinical assurance start?",
    a: "As early as possible. Clinical risk decisions are effectively made at the point a service model, workflow, or system design is chosen — even if the paperwork isn't produced until later. Starting assurance at discovery, rather than at the point of go-live sign-off, is what keeps it from becoming a blocker.",
  },
];

export default function GovernancePage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow">
            <PxDivider />
            Standards
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)" }}>
            The standards behind clinical assurance, in plain language.
          </h1>
          <p className="lede">
            DCB0129, DCB0160 and DTAC come up in almost every digital health
            conversation. Here&apos;s what they actually mean, without the jargon.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="faq-list">
            {FAQS.map((f) => (
              <div className="faq-item" key={f.code}>
                <span className="standard-code">{f.code}</span>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="callout" style={{ marginTop: 0 }}>
            <h3>Not sure where your programme stands against these standards?</h3>
            <p>
              An independent readiness review is often the fastest way to find out.
              Book a conversation and we&apos;ll give you an honest view.
            </p>
            <div className="hero-actions" style={{ marginTop: 26 }}>
              <a className="btn btn-primary" href="/contact">
                Book a consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <CloseCta />
    </>
  );
}
