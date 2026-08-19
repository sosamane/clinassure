"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pathways", label: "Pathways" },
  { href: "/method", label: "Method" },
  { href: "/governance", label: "Standards" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/images/logo-icon.png" alt="ClinAssure" width={30} height={17} priority />
          Clin<em>Assure</em>
        </Link>

        <div className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Talk to us
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
        </button>
      </div>
    </nav>
  );
}
