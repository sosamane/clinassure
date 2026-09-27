import type { Metadata } from "next";
import PxDivider from "@/components/PxDivider";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a focused conversation with ClinAssure about your programme's clinical safety and assurance priorities.",
};

const NEXT_STEPS = [
  {
    num: "1",
    title: "Initial conversation",
    body: "Share your priorities, delivery context and known clinical safety risks so the conversation can focus on the decisions that matter most.",
  },
  {
    num: "2",
    title: "Tailored recommendation",
    body: "Receive clear options, defined outcomes and a transparent proposal that matches your risk profile, delivery stage and assurance needs.",
  },
  {
    num: "3",
    title: "Agreement and onboarding",
    body: "Agree scope, timelines, governance, deliverables and ways of working so everyone is clear on responsibilities from the start.",
  },
  {
    num: "4",
    title: "Delivery and impact",
    body: "Gain focused support that improves clinical safety evidence, assurance readiness and delivery confidence.",
  },
];

export default function ContactPage() {
  return (
    <>
      <header className="page-hero" style={{ textAlign: "center", borderBottom: "none" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <PxDivider />
            Start the conversation
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)" }}>Let&apos;s work together.</h1>
          <p className="lede" style={{ margin: "18px auto 0" }}>
            Ready to move forward with safer digital transformation? Start with a
            focused conversation about your priorities, clinical safety risks and
            delivery stage. You&apos;ll leave with a clear view of the right next step,
            whether you need independent assurance, embedded CSO support or senior
            clinical leadership.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap contact-grid">
          <div>
            <p className="small" style={{ marginBottom: 8 }}>
              ClinAssure helps health technology suppliers, NHS organisations and
              private healthcare providers navigate clinical safety with confidence,
              from early assurance and hazard review through to DCB0129, DCB0160 and
              DTAC readiness.
            </p>
            <div className="next-steps">
              {NEXT_STEPS.map((s) => (
                <div className="next-step" key={s.num}>
                  <span className="num">{s.num}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-panel">
            <h3>Let&apos;s talk about safer digital transformation</h3>
            <p>
              Book a 30-minute conversation. No obligation. You&apos;ll get practical
              advice, an early view of your clinical safety priorities and a clear
              recommendation for what to do next.
            </p>
            <div className="points">
              <span>Independent clinical safety advice.</span>
              <span>Practical delivery support.</span>
              <span>Clear next steps before you commit.</span>
            </div>
            <dl>
              <dt>Email</dt>
              <dd>
                <a href="mailto:hello@clinassure.co.uk">hello@clinassure.co.uk</a>
              </dd>
              <dt>Website</dt>
              <dd>
                <a href="https://clinassure.co.uk">clinassure.co.uk</a>
              </dd>
              <dt>Connect</dt>
              <dd>
                <a href="https://linkedin.com/company/clinassure" target="_blank" rel="noreferrer">
                  linkedin.com/company/clinassure
                </a>
              </dd>
            </dl>
            <a
              className="btn btn-amber"
              style={{ marginTop: 28, display: "inline-block" }}
              href="mailto:hello@clinassure.co.uk?subject=Let%27s%20talk%20about%20safer%20digital%20transformation"
            >
              Book a consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
