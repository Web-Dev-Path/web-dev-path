# Services Page Decisions

## Source of Truth

### Decision

The Services Page specification folder is the primary source of truth for this initiative.

### Reason

Requirements, decisions, implementation references, and task tracking should remain centralized and easily discoverable.

### Implementation

Contributors should consult:

- specification.md
- decisions.md
- references.md
- tasks.md

before beginning implementation work.

GitHub Issues and Pull Requests should reference these documents whenever applicable.

## Branch Strategy

### Decision

All Services Page development will occur within the `services-dev` branch.

### Reason

The Services Page represents a large initiative involving multiple contributors.

Using a dedicated branch allows the team to:

- Reduce merge conflicts.
- Test functionality independently.
- Continue maintaining the production site through `main`.
- Deploy Services Page work to a dedicated Netlify staging environment.

---

## Hero Section Form

### Decision

Remove custom intake form fields from the Hero section.

### Reason

Calendly already collects the required information.

Maintaining both a custom form and Calendly introduces duplicate data entry and unnecessary friction.

### Implementation

Replace the form with a CTA that opens Calendly.

---

## Testimonials Section

### Decision

Do not implement the Testimonials section during the initial release.

### Reason

The organization does not currently have enough completed client projects to support testimonials.

### Future State

The section may be implemented after sufficient client feedback and case studies have been collected.

---

## Pricing Strategy

### Decision

Pricing will be one of the final sections implemented.

### Reason

The team requires additional time to conduct pricing research and validate assumptions before publishing pricing information.

The goal is to establish pricing that is:

- Affordable for small businesses.
- Competitive within the market.
- Sustainable for project delivery.
- Aligned with Web Dev Path's educational mission.

### Implementation

Pricing cards may be built after pricing research is completed and approved.

---

## Specification-Driven Development

### Decision

The Services Page will be developed using a lightweight Specification-Driven Development approach.

### Reason

The team wants to:

- Improve onboarding.
- Reduce ambiguity.
- Improve collaboration.
- Improve AI-assisted development workflows.
- Create experience with specification-based delivery practices.

### Implementation

The following documents act as the source of truth:

- specification.md
- decisions.md
- tasks.md

GitHub Issues and Pull Requests should reference these documents whenever applicable.

---

## Netlify Environment Strategy

### Decision

Services Page development will be validated through a dedicated Netlify staging environment connected to `services-dev`.

### Reason

This allows the team to:

- Test independently of production.
- Validate functionality before merging.
- Review large features incrementally.

### Implementation

Production remains connected to `main`.

Services staging remains connected to `services-dev`.