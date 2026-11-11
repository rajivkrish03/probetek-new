# Astryx compliance design preview

Branch: `feature/astryx-compliance-preview` (based on `compliance/public-website-privacy-2026-11`).

Local URL: http://localhost:3000/design-preview/compliance

## Scope
- Four tabs: contact form, cookie preferences, Privacy Policy and Terms of Use.
- Actual Meta Astryx React components: `Theme`, `Card`, and `Button`, plus the neutral theme CSS.
- All demo interactions are local React state only. No Formspree submissions, no marketing consent storage and no analytics changes from the demo.
- No modifications to the live contact form or existing legal page designs from this experiment.
- Legal page content in the preview is summarized; actual draft pages remain `/privacy-policy` and `/terms`.
- Preview route is `noindex`, but is NOT access controlled; do not deploy until approval.

## Run
```bash
git fetch origin
git switch feature/astryx-compliance-preview
npm install
npm run dev
```
Then visit http://localhost:3000/design-preview/compliance.

## Review checklist
- Compare all four tabs on desktop and mobile.
- Test simulated form validation and marketing checkbox.
- Test cookie accept/reject visual states (not persisted).
- Check links and keyboard focus.
- Verify build locally with `npm run build` before merging.
- Check dependencies and Next.js CSS layer interactions before promoting into production components.

## Not yet verified
This branch was authored through GitHub connector; the remote environment cannot execute the repository's npm install/build. Do not claim successful compilation or production readiness until the build is run.
