import Image from "next/image";
import Link from "next/link";
import PxDivider from "@/components/PxDivider";
import CloseCta from "@/components/CloseCta";
import { PATHWAYS } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <span className="drift d1" aria-hidden="true"></span>
        <span className="drift d2" aria-hidden="true"></span>
        <span className="drift d3" aria-hidden="true"></span>
        <span className="drift d4" aria-hidden="true"></span>
        <div className="wrap">
          <div className="eyebrow">
            <PxDivider />
            Clinical safety expertise &middot; DCB0129 &middot; DCB0160 &middot; DTAC
          </div>
          <h1>
            Transform with <span className="amber">confidence</span>.
            <br />
            Clinical from the start.
          </h1>
          <p className="lede">
            ClinAssure supports NHS organisations, independent healthcare providers and
            health technology suppliers to embed clinical assurance early, align with
            DCB0129 and DCB0160, and make safer programme decisions at pace.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/pathways">
              Explore programme pathways
            </Link>
            <Link className="link-quiet" href="/contact">
              Book a consultation
            </Link>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap grid-2">
          <div className="section-head">
            <div className="eyebrow">
              <PxDivider />
              Why ClinAssure
            </div>
            <h2>
              Safety is not a late-stage sign-off. It is a <span className="amber">design decision</span>.
            </h2>
          </div>
          <div>
            <p>
              Too many programmes discover clinical risk when delivery is already
              committed and options are costly. ClinAssure brings assurance into the
              decisions that matter most, from service model design to implementation
              planning and go-live readiness.
            </p>
            <p>
              Founded by clinicians with national digital transformation experience,
              ClinAssure brings clinical safety, informatics, assurance and delivery
              expertise into every stage of digital change.
            </p>
            <p className="small" style={{ marginTop: 14 }}>
              The result: clearer governance, fewer surprises at assurance gates, and
              stronger confidence across clinical, operational, and programme leadership
              teams.
            </p>
            <Link className="card-link" href="/about">
              Meet the clinicians behind ClinAssure
            </Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <PxDivider />
              Programme pathways
            </div>
            <h2>Choose the pathway that fits your programme context.</h2>
          </div>
          <div className="card-grid">
            {PATHWAYS.slice(0, 6).map((p) => (
              <article className="card" key={p.slug}>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
              </article>
            ))}
          </div>
          <Link className="card-link" href="/pathways">
            View all pathways and details
          </Link>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <PxDivider />
              Method
            </div>
            <h2>A practical assurance method that works with delivery teams.</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="step-num">STEP 01</span>
              <h3>Understand</h3>
              <p>Clarify context, risks and priorities.</p>
            </div>
            <div className="step">
              <span className="step-num">STEP 02</span>
              <h3>Plan</h3>
              <p>Agree scope, outcomes and the right level of support.</p>
            </div>
            <div className="step">
              <span className="step-num">STEP 03</span>
              <h3>Deliver</h3>
              <p>Get focused expert support where it adds most value.</p>
            </div>
            <div className="step">
              <span className="step-num">STEP 04</span>
              <h3>Improve</h3>
              <p>Turn findings into action and measurable progress.</p>
            </div>
          </div>
          <Link className="card-link" href="/method">
            See the full method and deliverables
          </Link>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <PxDivider />
              Why clients choose ClinAssure
            </div>
            <h2>Senior expertise. Direct access.</h2>
          </div>
          <div className="metric-grid">
            <div className="metric">
              <strong>Outcomes over checklists</strong>
              <span className="small">You protect patients while supporting delivery and business goals.</span>
            </div>
            <div className="metric">
              <strong>Senior-led every time</strong>
              <span className="small">You work directly with experienced decision-makers &mdash; no layers, no hand-offs.</span>
            </div>
            <div className="metric">
              <strong>Practical and actionable</strong>
              <span className="small">You get clear actions you can implement immediately.</span>
            </div>
            <div className="metric">
              <strong>Built for transformation</strong>
              <span className="small">You move digital change forward safely in complex health and care settings.</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <PxDivider />
              Team
            </div>
            <h2>Meet the clinicians behind ClinAssure.</h2>
            <p className="lede">Three clinical perspectives. One shared vision.</p>
          </div>
          <div className="team-grid">
            <article className="team-card">
              <Image src="/images/team-itai.jpg" alt="Itai, ClinAssure" width={1122} height={1402} />
              <h3>Itai</h3>
              <p className="bio">
                Enables organisations to identify clinical risk early, improve
                DCB0129/DCB0160 readiness and build safer, more confident digital
                delivery teams.
              </p>
            </article>
            <article className="team-card">
              <Image src="/images/team-melissa.jpg" alt="Melissa, ClinAssure" width={1086} height={1448} />
              <h3>Melissa</h3>
              <p className="bio">
                Brings frontline clinical leadership into digital programmes, helping
                teams align governance, practice, and delivery around safer
                transformation.
              </p>
            </article>
            <article className="team-card">
              <Image src="/images/team-tamer.jpg" alt="Tamer, ClinAssure" width={1122} height={1402} />
              <h3>Tamer</h3>
              <p className="bio">
                Translates complex clinical, assurance and transformation challenges
                into clear plans, stronger decisions and sustainable change.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CloseCta />
    </>
  );
}
