export const profile = Object.freeze({
  name: "Peyman Raad",
  role: "AI Agent & Automation Engineer",
  summary:
    "I build agentic systems, automation products, and resilient front-end experiences with an emphasis on architecture, testing, observability, and clear product boundaries.",
  location: "Tbilisi, Georgia",
  github: "https://github.com/kooroosh1363",
  linkedin: "https://www.linkedin.com/in/peyman-radmanesh/"
});

export const projects = Object.freeze([
  {
    id: "rag-evaluation",
    title: "Enterprise RAG Evaluation Platform",
    category: "AI Systems",
    year: "2026",
    summary:
      "A focused evaluation workbench for testing whether generated answers remain supported by retrieved evidence.",
    problem:
      "RAG demos often show fluent answers without making evidence quality and failure cases visible.",
    approach:
      "Separate retrieval evidence, answer evaluation, and failure analysis into an inspectable workflow designed for repeatable review.",
    outcomes: [
      "Evidence-first evaluation flow",
      "Failure-case oriented review",
      "Portfolio-ready engineering documentation"
    ],
    stack: ["RAG", "Evaluation", "React", "Automation"],
    href:
      "https://github.com/kooroosh1363/applied-agentic-systems/tree/feat/p11-evaluation-workbench/11-enterprise-rag-evaluation-platform"
  },
  {
    id: "parts-finder",
    title: "Interactive Parts Finder Platform",
    category: "Product Systems",
    year: "2026",
    summary:
      "A reusable parts-finder core designed to keep customer-specific data and branding isolated from the generic platform.",
    problem:
      "Parts discovery becomes difficult to maintain when product rules, customer assets, and application logic are tightly coupled.",
    approach:
      "Use a reusable customer-agnostic core with isolated configuration, testable rules, and an architecture-first delivery process.",
    outcomes: [
      "Reusable core architecture",
      "Customer-specific isolation",
      "Versioned engineering workflow"
    ],
    stack: ["React", "Domain Modeling", "Testing", "Product Architecture"],
    href: "https://github.com/kooroosh1363/interactive-parts-finder-platform"
  },
  {
    id: "market-research",
    title: "AI Multi-Agent Market Research",
    category: "AI Systems",
    year: "2026",
    summary:
      "A multi-agent research workflow that decomposes market-research tasks into coordinated specialist responsibilities.",
    problem:
      "Single-agent research can mix discovery, synthesis, validation, and reporting into one opaque execution path.",
    approach:
      "Split the workflow into explicit roles with structured handoffs and reviewable outputs.",
    outcomes: [
      "Role-based agent orchestration",
      "Traceable research stages",
      "Clear workflow boundaries"
    ],
    stack: ["Agents", "Research", "Workflow Design", "Automation"],
    href:
      "https://github.com/kooroosh1363/agentic-automation-lab/tree/main/40-ai-multi-agent-market-research"
  },
  {
    id: "recipe-relay",
    title: "RecipeRelay",
    category: "Frontend Systems",
    year: "2026",
    summary:
      "A React data-resilience lab for cache freshness, retry policy, abort behavior, fallback data, and URL-driven state.",
    problem:
      "Simple API demos rarely show what should happen when requests are stale, superseded, or unavailable.",
    approach:
      "Make network behavior visible and test retry, abort, cache, and fallback policies independently from the UI.",
    outcomes: [
      "Cache TTL policy",
      "Abort-safe refresh behavior",
      "URL-backed state"
    ],
    stack: ["React", "Vite", "Vitest", "Resilience"],
    href: "https://github.com/kooroosh1363/recipe-app"
  },
  {
    id: "authsurface",
    title: "AuthSurface",
    category: "Frontend Systems",
    year: "2026",
    summary:
      "An accessible sign-in UX state machine with deterministic validation and system-aware theming.",
    problem:
      "Login demos often blur the line between interface behavior and real authentication.",
    approach:
      "Model the client-side states explicitly while documenting the boundary where a production identity service would begin.",
    outcomes: [
      "Explicit form state machine",
      "Accessible validation",
      "System / Light / Dark theming"
    ],
    stack: ["React", "Accessibility", "State Design", "Testing"],
    href: "https://github.com/kooroosh1363/REACT-login-dark-mode"
  },
  {
    id: "caplab",
    title: "CapLab",
    category: "Frontend Systems",
    year: "2026",
    summary:
      "A framework-free commerce-state demo with persistent cart, favorites, filtering, and tested subtotal logic.",
    problem:
      "Static storefront mockups do not demonstrate state consistency or reusable commerce logic.",
    approach:
      "Keep product data, pure state transitions, persistence, and DOM rendering separated.",
    outcomes: [
      "Zero runtime dependencies",
      "Persistent cart state",
      "Pure tested commerce logic"
    ],
    stack: ["JavaScript", "LocalStorage", "Testing", "Accessibility"],
    href: "https://github.com/kooroosh1363/cap-shop-website-js"
  }
]);

export const capabilities = Object.freeze([
  {
    title: "Agentic systems",
    text: "Workflow decomposition, RAG evaluation, tool orchestration, reliability boundaries, and reviewable agent behavior."
  },
  {
    title: "Automation products",
    text: "Business-rule modeling, reusable product cores, operational workflows, and maintainable customer-specific configuration."
  },
  {
    title: "Frontend engineering",
    text: "React, Vite, Tailwind, accessible stateful interfaces, resilient data flows, and testable UI policies."
  },
  {
    title: "Engineering discipline",
    text: "Branch/PR workflows, CI gates, explicit trade-offs, architecture notes, testing, and production-readiness thinking."
  }
]);

export const categories = Object.freeze([
  "All",
  "AI Systems",
  "Product Systems",
  "Frontend Systems"
]);
