import PxDivider from "./PxDivider";

export default function CloseCta() {
  return (
    <section className="cta" id="contact-cta">
      <div className="wrap">
        <PxDivider />
        <h2>Ready to bring clarity to your next assurance decision?</h2>
        <p>
          Share your programme context and we&apos;ll come back with a focused view of
          where clinical assurance should start.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-amber" href="/contact">
            Contact ClinAssure
          </a>
          <a className="btn btn-ghost mail-ghost" href="mailto:hello@clinassure.co.uk">
            hello@clinassure.co.uk
          </a>
        </div>
      </div>
    </section>
  );
}
