import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Itai Collier",
  description: "Itai Collier — Managing Director, ClinAssure.",
};

export default function ItaiVCardPage() {
  return (
    <div className="vcard-wrap">
      <Image
        src="/images/logo-clinassure.png"
        alt="ClinAssure"
        width={146}
        height={34}
        className="vcard-logo"
        priority
      />
      <div className="vcard">
        <Image
          src="/images/team-itai.jpg"
          alt="Itai Collier, ClinAssure"
          width={296}
          height={296}
          className="vcard-photo"
        />
        <h1>Itai Collier</h1>
        <span className="role">Managing Director</span>

        <div className="vcard-links">
          <a href="mailto:itai.collier@clinassure.co.uk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z" />
              <path d="M4 6l8 7 8-7" />
            </svg>
            itai.collier@clinassure.co.uk
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/itai-collier-a46a4b156/"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
            Connect on LinkedIn
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/company/clinassure-ltd/"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
            ClinAssure on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
