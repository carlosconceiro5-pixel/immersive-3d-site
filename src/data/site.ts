// MECA Homes — site content. Single source of truth.

export const business = {
  name: "MECA Homes",
  positioning: "Luxury Home Builders",
  tagline: "Design-Build, Turn-Key Construction",
  domain: "meca-homes.com",
  url: "https://meca-homes.com",
  email: "Info@meca-homes.com",
  phones: [
    {
      label: "786-815-7706",
      tel: "+17868157706",
      language: "English",
    },
    {
      label: "786-412-1889",
      tel: "+17864121889",
      language: "Spanish",
    },
  ],
} as const

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Design-Build", href: "#design-build" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const

export const services = [
  {
    title: "Custom Luxury Homes",
    description:
      "Ground-up custom residences built around your lifestyle, vision, and site.",
  },
  {
    title: "Design-Build",
    description:
      "Design and construction aligned under one process to reduce friction and improve accountability.",
  },
  {
    title: "Turn-Key Construction",
    description:
      "A complete build experience from planning to final delivery, ready for move-in.",
  },
  {
    title: "Luxury Remodeling",
    description:
      "High-end renovations, additions, and transformations for existing Miami homes.",
  },
] as const

export const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We define the vision, priorities, budget range, timeline, and property goals.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture, finishes, and construction planning are aligned before work begins.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Your project is managed with clear communication, quality control, and disciplined execution.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Final walkthrough, detailing, and turn-key delivery of a finished luxury residence.",
  },
] as const

export const projects = [
  {
    title: "Bayfront Modern",
    location: "Miami Beach, FL",
    tag: "Custom Build",
    image: "/projects/project-1.jpg",
    alt: "Modern waterfront Miami mansion with white stone, glass, and warm lighting.",
  },
  {
    title: "Palm Court Estate",
    location: "Coral Gables, FL",
    tag: "Design-Build",
    image: "/projects/project-2.jpg",
    alt: "Luxury Miami estate with palm-lined entry and contemporary architecture.",
  },
  {
    title: "Glass House",
    location: "Coconut Grove, FL",
    tag: "Turn-Key",
    image: "/projects/project-3.jpg",
    alt: "Modern glass and stone residence surrounded by tropical landscaping.",
  },
] as const

export const about = {
  heading: "Luxury homes built with precision, clarity, and accountability.",
  body:
    "MECA Homes delivers luxury custom homes, design-build projects, and turn-key construction throughout Miami. The process is built around refined design, disciplined execution, and a finished home that feels complete from day one.",
} as const

export const contact = {
  heading: "Start your MECA Homes project.",
  body:
    "Tell us about your property, vision, or upcoming build. Our team will guide you from first conversation to turn-key delivery.",
  email: business.email,
  phones: business.phones,
} as const
