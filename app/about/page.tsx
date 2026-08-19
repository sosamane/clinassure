import type { Metadata } from "next";
import Image from "next/image";
import PxDivider from "@/components/PxDivider";
import CloseCta from "@/components/CloseCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "ClinAssure was founded by clinicians with national digital transformation experience, bringing clinical safety, informatics, assurance and delivery expertise into every stage of digital change.",
};

const VALUES = [
  {
    tag: "01",
    title: "Clinical from the start",
    body: "Clinical safety is built in from day one, so risks are identified, owned and managed before they delay delivery, procurement or go-live.",
  },
  {
    tag: "02",
    title: "Senior expertise, direct access",
    body: "You'll work directly with experienced Clinical Safety Officers and digital clinical leaders, not layers of generic consultancy support.",
  },
  {
    tag: "03",
    title: "Independent assurance",
    body: "You'll receive objective, evidence-based assurance to support procurement, governance, clinical safety and go-live decisions.",
  },
  {
    tag: "04",
    title: "Practical, risk-based advice",
    body: "Advice is shaped around your programme, risk profile and delivery pressures, so assurance improves without slowing progress unnecessarily.",
  },
  {
    tag: "05",
    title: "NHS and HealthTech specialists",
    body: "Up-to-date expertise in DCB0129, DCB0160, DTAC, clinical governance and the realities of complex healthcare delivery.",
  },
  {
    tag: "06",
    title: "Outcomes over checklists",
    body: "Support that improves patient safety, evidences assurance, and helps digital programmes deliver measurable, sustainable value.",
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow">
            <PxDivider />
            About ClinAssure
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)" }}>Why partner with ClinAssure.</h1>
          <p className="lede">
            Clinical risk should not surface late. ClinAssure gives digital healthcare
            programmes senior, independent clinical support to identify risk early,
            evidence compliance and assurance, and move safely from procurement to
            go-live.
          </p>
          <p className="small" style={{ maxWidth: 620, marginTop: 14 }}>
            Founded by clinicians with national digital transformation experience,
            ClinAssure brings clinical safety, informatics, assurance and delivery
            expertise into every stage of digital change.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="value-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.tag}>
                <span className="tag">{v.tag}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>

          <div className="gain-box">
            <h3>What you gain</h3>
            <p>
              Senior and nationally experienced, independent clinical safety and digital
              transformation support that helps you make better decisions, protect
              patients and move from procurement to go-live with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <PxDivider />
              Team
            </div>
            <h2>Meet the clinicians behind ClinAssure.</h2>
            <p className="lede">
              Three clinical perspectives. One shared vision: successful digital
              transformation in healthcare starts with clinicians.
            </p>
          </div>
          <div className="team-grid">
            <article className="team-card">
              <Image src="/images/team-itai.jpg" alt="Itai, ClinAssure" width={1122} height={1402} />
              <h3>Itai</h3>
              <span className="role">Clinical Safety &amp; Risk</span>
              <p className="bio">
                Enables organisations to identify clinical risk early, improve
                DCB0129/DCB0160 readiness and build safer, more confident digital
                delivery teams.
              </p>
            </article>
            <article className="team-card">
              <Image src="/images/team-melissa.jpg" alt="Melissa, ClinAssure" width={1086} height={1448} />
              <h3>Melissa</h3>
              <span className="role">Clinical Leadership &amp; Governance</span>
              <p className="bio">
                Brings frontline clinical leadership into digital programmes, helping
                teams align governance, practice, and delivery around safer
                transformation.
              </p>
            </article>
            <article className="team-card">
              <Image src="/images/team-tamer.jpg" alt="Tamer, ClinAssure" width={1122} height={1402} />
              <h3>Tamer</h3>
              <span className="role">Assurance &amp; Transformation</span>
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
