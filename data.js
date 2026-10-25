/* ============================================================
   data.js — ALL the content of the website lives here.
   Edit this file to update the site. Never touch index.html.
   Keep the commas, quotes and braces exactly as they are.
   ============================================================ */

const CV = {

  /* ---------- IDENTITY ---------- */
  person: {
    name: "Sajib Sutradhar",
    pageTitle: "Sajib Sutradhar",   // what shows in the browser tab
    title: "Executive, Billing Department",
    org: "DocPro Health Inc.",
    subtitle: "Healthcare RCM and Automation",
    eyebrow: "Personal portfolio",
    location: "Dhaka, Bangladesh",
    email: "sajibsutradhar75@gmail.com",
    phone: "01786280937",
    phoneAlt: "01631203607",
    linkedin: "https://www.linkedin.com/in/sajib-sutradhar-0b46593a9",
    linkedinLabel: "linkedin.com/in/sajib-sutradhar-0b46593a9",
    photo: "portrait.jpg",
    photoAlt: "Portrait of Sajib Sutradhar",
    cv: "Sajib_Sutradhar_CV.pdf",

    intro: "Electrical and Electronic Engineering graduate with experience in engineering projects, U.S. healthcare RCM, medical billing and workflow automation. I perform medical coding with CPT and ICD-10-CM, run payment posting and billing reports in eClinicalWorks and MDLand, and design automation that removes repetitive manual work from the billing process.",

    // Small facts under the hero. Keep each to a few words.
    highlights: [
      { label: "Current role", value: "DocPro Health Inc." },
      { label: "Specialisation", value: "CPT and ICD-10-CM coding" },
      { label: "Platforms", value: "eCW, MDLand, Availity" },
      { label: "Education", value: "B.Sc. EEE, 2026" }
    ]
  },

  /* ---------- VIEW COUNTER ----------
     Counts each device once, not each visit.
     enabled: false turns it off completely.                  */
  views: {
    enabled: true,
    namespace: "sutradharsajib-github-io",
    key: "portfolio-views",
    label: "views"
  },

  /* ---------- 01 SUMMARY ---------- */
  summary: [
    "Motivated Electrical and Electronic Engineering graduate with experience in engineering projects, U.S. healthcare revenue cycle management, medical billing and workflow automation.",
    "At DocPro Health Inc. I perform medical coding with CPT and ICD-10-CM, handle pre-visit activities, payment posting, billing reports and RCM operations using eClinicalWorks and MDLand.",
    "I design and develop automation solutions that streamline EOB and ERA processing, payment posting, claim checking and balance adjustments, and I am building further practice and provider workflow automations to reduce repetitive manual tasks. I am seeking a challenging role where technical, analytical, problem-solving and automation skills improve operational efficiency."
  ],

  /* ---------- 02 SKILLS ----------
     icon options: clipboard, refresh, layers, code, cpu, grid     */
  skillGroups: [
    {
      icon: "clipboard",
      title: "Medical coding and documentation",
      items: ["CPT coding", "ICD-10-CM coding", "Pre-visit activities", "Billing reports"]
    },
    {
      icon: "refresh",
      title: "Revenue cycle operations",
      items: ["RCM operations", "Payment posting", "EOB processing", "ERA processing", "Claim checking", "Balance adjustments"]
    },
    {
      icon: "layers",
      title: "Healthcare platforms",
      items: ["eClinicalWorks (eCW)", "MDLand", "Availity"]
    },
    {
      icon: "code",
      title: "Automation and programming",
      items: ["Python", "C Programming", "Workflow automation"]
    },
    {
      icon: "cpu",
      title: "Engineering software",
      items: ["MATLAB", "AutoCAD", "Proteus", "MPLAB", "LOGO Soft", "Silvaco", "SAM", "Fritzing"]
    },
    {
      icon: "grid",
      title: "Productivity and design",
      items: ["MS Office", "Canva", "Graphics designing, intermediate"]
    }
  ],

  /* ---------- 03 EXPERIENCE ---------- */
  experience: [
    {
      role: "Executive, Billing Department",
      org: "DocPro Health Inc.",
      place: "Dhanmondi, Dhaka",
      dates: "June 2026 to present",
      type: "",
      current: true,
      points: [
        "Perform medical coding (CPT and ICD-10-CM), pre-visit activities, payment posting, billing reports and RCM operations using eClinicalWorks (eCW) and MDLand.",
        "Design and develop automation solutions to streamline EOB and ERA processing, payment posting, claim checking and balance adjustments.",
        "Developed automation for eCW EOB Posting, MDLand EOB and ERA Posting, Availity Claim Checking, eCW Balance Adjustment, Processed-to-CCM and Rejected-to-Paid workflows.",
        "Develop additional practice and provider workflow automations to reduce repetitive manual tasks and improve billing process efficiency."
      ]
    },
    {
      role: "Project Engineer",
      org: "RAS Engineering Construction",
      place: "Township Project, Rampal Thermal Power Plant",
      dates: "2023 to 2024",
      type: "",
      current: false,
      points: [
        "Supervised construction and electrical installation activities, ensuring compliance with design specifications, safety standards and quality requirements.",
        "Coordinated with technicians and contractors to monitor on-site work, resolve issues and maintain timely project progress.",
        "Monitored electrical wiring, equipment installation and site activities to ensure efficient execution and project quality."
      ]
    }
  ],

  /* ---------- 04 PROJECTS ----------
     Add a new tool by copying one block and editing the text.   */
  tools: {
    heading: "Automation tools",
    blurb: "Built for the billing workflows I work in every day.",
    items: [
      { name: "eCW EOB Payment Posting Automation", platform: "eClinicalWorks", desc: "Posts EOB payments inside the eClinicalWorks platform." },
      { name: "MDLand EOB Payment Posting Automation", platform: "MDLand", desc: "Posts EOB payments inside the MDLand platform." },
      { name: "MDLand ERA Automation", platform: "MDLand", desc: "Processes Electronic Remittance Advice files in MDLand." },
      { name: "Availity Claim Checker Automation", platform: "Availity", desc: "Checks claim status through the Availity portal." },
      { name: "eCW Balance Adjustment Automation", platform: "eClinicalWorks", desc: "Makes balance adjustment entries in eClinicalWorks." },
      { name: "Rejected Claim to Paid Automation", platform: "", desc: "Automates the Rejected-to-Paid workflow." },
      { name: "Processed to CCM Automation", platform: "", desc: "Automates the Processed-to-CCM workflow." },
      { name: "Practice and Provider Workflow Automation", platform: "", desc: "Reduces repetitive manual tasks across practice and provider workflows to improve billing process efficiency." }
    ]
  },

  projects: {
    heading: "Academic and technical projects",
    blurb: "Coursework and design projects from the B.Sc. in Electrical and Electronic Engineering.",
    items: [
      { name: "LPG Cylinder Monitoring System with Leak Detection and Auto-Shutoff", tag: "Capstone", featured: true },
      { name: "Advanced PLC-Based Automatic Bike, Car and Bus Parking Slot Management System", tag: "PLC" },
      { name: "Fire Detection Alert System Design using PIC16F690", tag: "Embedded" },
      { name: "A Grid-Connected PV System in a Residence Building", tag: "Power" },
      { name: "Basic Performance Analysis of a Solar PV Power Plant and a Wind Power Plant in MATLAB", tag: "MATLAB" },
      { name: "Simulation and Analysis of Power Flow and Fault Conditions in Power System", tag: "Power" },
      { name: "Electrical Wiring Installation of a Single Flat in a Multi-Storied Building", tag: "AutoCAD" },
      { name: "Digital Filter Design using MATLAB", tag: "MATLAB" },
      { name: "Coil Design for Wireless Power Transfer", tag: "Design" },
      { name: "Design of a Low Voltage Transformer for an LED Lighting System", tag: "Design" },
      { name: "NOR 3 Input Schematic, Symbol and Layout Generation", tag: "VLSI" }
    ]
  },

  /* ---------- 05 EDUCATION ---------- */
  education: [
    {
      degree: "Bachelor of Science in Electrical and Electronic Engineering",
      school: "East West University",
      place: "Aftab Nagar, Dhaka",
      year: "2026",
      result: "CGPA 3.13 out of 4.00"
    },
    {
      degree: "Higher Secondary Certificate, Science",
      school: "Sylhet Govt. College",
      place: "Tilagar, Sylhet. Sylhet Board",
      year: "2020",
      result: "GPA 3.92 out of 5.00"
    },
    {
      degree: "Secondary School Certificate, Science",
      school: "Jahir Tahir Memorial High School",
      place: "Shibbari, Sylhet. Sylhet Board",
      year: "2018",
      result: "GPA 4.39 out of 5.00"
    }
  ],

  /* ---------- 06 TRAINING ---------- */
  training: [
    { name: "Circuit Master Clash, Arduino Edition", org: "", meta: "", desc: "Hands-on Arduino programming and circuit design challenges, building practical skills in microcontroller-based electronics projects." },
    { name: "Proteus, Gateway to Electronic Design", org: "", meta: "", desc: "Practical experience simulating and designing electronic circuits in Proteus, covering circuit analysis and PCB design." },
    { name: "Basic Tools of AutoCAD Software", org: "", meta: "", desc: "Essential AutoCAD tools and techniques for creating accurate 2D and 3D engineering drawings." }
  ],

  /* ---------- 07 ADDITIONAL ---------- */
  languages: [
    { name: "Bengali", detail: "Excellent reading, writing, listening and speaking" },
    { name: "English", detail: "Excellent reading, writing and listening. Good speaking" }
  ],

  visits: [
    { name: "NLDC and Rampura 230/132 kV Grid Substation", desc: "Practical exposure to high-voltage power system operations, including power transformers, circuit breakers, isolators, CTs and PTs, busbars and protection systems." },
    { name: "Rampal 1320 MW Thermal Power Plant", desc: "Observed large-scale thermal power generation processes, plant auxiliaries and grid synchronisation of a utility-scale power station." }
  ],

  activities: [
    { name: "East West University Electronic Club", role: "General member", desc: "Involved in electronics-based workshops and technical training sessions, collaborating with peers to build practical knowledge of electronic components and engineering applications." },
    { name: "East West University IEEE Club", role: "General member", desc: "Engaged in technical seminars, workshops and professional development activities, building knowledge of engineering standards, emerging technologies and teamwork." }
  ],

  /* ---------- 08 CONTACT ---------- */
  contact: {
    heading: "Let us connect",
    blurb: "If your team needs someone who can code claims accurately and build the tooling to speed the rest of it up, I would be glad to hear from you. I reply to every message."
  },

  /* ---------- SECTION LABELS ---------- */
  sections: [
    { id: "about",      no: "01", title: "Professional summary",  nav: "About" },
    { id: "skills",     no: "02", title: "Core competencies",     nav: "Skills" },
    { id: "experience", no: "03", title: "Professional experience", nav: "Experience" },
    { id: "projects",   no: "04", title: "Projects and tools",    nav: "Projects" },
    { id: "education",  no: "05", title: "Education",             nav: "Education" },
    { id: "training",   no: "06", title: "Training and workshops", nav: "Training" },
    { id: "more",       no: "07", title: "Additional information", nav: null },
    { id: "contact",    no: "08", title: "Contact",               nav: "Contact" }
  ]
};
