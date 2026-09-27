import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-inner">
        <div className="foot-brand">
          <Image src="/images/logo-clinassure.png" alt="ClinAssure" width={55} height={13} />
        </div>
        <div className="foot-links">
          <Link href="/about">About</Link>
          <Link href="/pathways">Pathways</Link>
          <Link href="/governance">Standards</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://linkedin.com/company/clinassure" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div>© 2026 ClinAssure. Clinical from the start.</div>
      </div>
    </footer>
  );
}
