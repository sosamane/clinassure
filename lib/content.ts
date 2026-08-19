export type Pathway = {
  slug: string;
  title: string;
  summary: string;
  bestFor: string;
  youGet: string[];
};

export const PATHWAYS: Pathway[] = [
  {
    slug: "new-digital-programme",
    title: "New digital programme",
    summary:
      "Build assurance into discovery, procurement, and mobilisation so risk controls are designed in from day one.",
    bestFor:
      "Teams starting discovery, business case development, or supplier procurement for a new digital service.",
    youGet: [
      "Clinical risk identified before design and procurement decisions are locked in",
      "A clinical safety approach aligned to DCB0129/DCB0160 from the outset",
      "Governance and evidence structures set up to scale with the programme",
    ],
  },
  {
    slug: "in-flight-recovery",
    title: "In-flight recovery",
    summary:
      "Stabilise a pressured programme with targeted risk re-baselining and practical assurance actions.",
    bestFor:
      "Programmes already in delivery where clinical risk, governance, or evidence has fallen behind pace.",
    youGet: [
      "A clear, current view of clinical risk against where delivery actually is",
      "Prioritised, practical actions rather than a full restart of process",
      "Renewed confidence for governance forums and delivery leadership",
    ],
  },
  {
    slug: "pre-go-live-readiness",
    title: "Pre-go-live readiness",
    summary:
      "Pressure-test controls, evidence, and governance before your final operational and clinical approvals.",
    bestFor:
      "Programmes approaching deployment that need independent scrutiny before sign-off.",
    youGet: [
      "An independent readiness review against DCB0129/DCB0160 and DTAC expectations",
      "A clear list of gaps and residual risk ahead of go-live approval",
      "Confidence for clinical safety officers and approval boards",
    ],
  },
  {
    slug: "post-incident-strengthening",
    title: "Post-incident strengthening",
    summary:
      "Use a structured learning and remediation approach to rebuild confidence and reduce repeat risk.",
    bestFor:
      "Organisations responding to a clinical safety incident or near-miss linked to digital systems.",
    youGet: [
      "A structured review that connects the incident to root cause and system design",
      "A remediation plan that rebuilds trust with clinical and governance stakeholders",
      "Strengthened controls to reduce the chance of repeat risk",
    ],
  },
  {
    slug: "transformation-oversight",
    title: "Transformation oversight",
    summary:
      "Provide independent assurance leadership across a trust or ICS portfolio of digital change.",
    bestFor:
      "Portfolio and executive teams overseeing multiple concurrent digital programmes.",
    youGet: [
      "Portfolio-level visibility of clinical risk across concurrent programmes",
      "Independent, senior clinical challenge at executive and board level",
      "Consistent assurance standards applied across every programme",
    ],
  },
  {
    slug: "supplier-readiness",
    title: "Supplier readiness",
    summary:
      "Prepare internal evidence and risk management controls for safer trust adoption and procurement scrutiny.",
    bestFor:
      "Health technology suppliers preparing for DCB0129, DTAC, or trust procurement scrutiny.",
    youGet: [
      "A clinical risk management system that stands up to trust and procurement scrutiny",
      "Clear, defensible safety case documentation aligned to DCB0129",
      "Faster, smoother adoption conversations with NHS and care provider customers",
    ],
  },
];
