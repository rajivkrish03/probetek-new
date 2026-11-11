# Public website privacy and security audit — 11 November 2026

Scope: rajivkrish03/probetek-new, public website only. **Draft branch, not approved for production.**

## Confirmed code findings
- `app/contact/ContactForm.tsx` posts directly to Formspree endpoint `mreapyaa`; verify its forwarding destinations, data retention, location and account controls.
- `app/api/contact/route.ts` contains a **hardcoded Resend credential**. **URGENT: revoke/rotate the credential in Resend immediately.** Removing it from Git history does not revoke it. The current visible form does not call this endpoint; verify whether any other clients do. Also inspect the endpoint for input validation, HTML escaping, upload restrictions, abuse protection and secret management before enabling it.
- `app/layout.tsx` loads Google Analytics (G-JRFF0K40RS) before an explicit consent choice; audit cookies and implement appropriate consent controls before release.
- `components/Footer.tsx` did not link to privacy or terms.
- No `app/privacy-policy/page.tsx` or `app/terms/page.tsx` on main when checked.
- Form currently has no privacy notice or optional marketing opt-in.
- Customer reports email + database storage; actual database storage not verified in inspected form code.

## Changes on this branch
- Draft privacy policy and terms pages, footer links, contact form privacy notice and an optional, unchecked future-marketing preference.
- **Marketing checkbox is UI-only until a verified consent capture/storage workflow is implemented. Do not activate promotional sending based on this alone.**
- Drafts must be legally and operationally reviewed before merge.

## Blocking checks before merge
1. Rotate exposed Resend key and audit logs for misuse. Confirm no other leaked credentials.
2. Verify Formspree account, destination inboxes, retention, subprocessor/transfer disclosures and deletion workflow.
3. Verify the database that stores enquiries, access controls, backup retention and deletion process.
4. Establish retention schedule, legal entity name, applicable UAE mainland rules and international-transfer safeguards.
5. Implement an appropriate Google Analytics consent mechanism; current auto-loading remains unchanged on this branch.
6. Validate the marketing checkbox capture end-to-end or remove it until marketing launches.
7. Test build, form submission, mobile layout, navigation, accessibility and privacy rights contact workflow.
8. Obtain UAE legal review and explicit approval before publication.

No deployment performed.
