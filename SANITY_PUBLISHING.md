# Sanity publishing and GitHub Pages

## Current architecture

- Sanity project: `hzyg8msu`
- Dataset: `production`
- First managed content type: `News & Event` (`newsArticle`)
- The Next.js site fetches published records at static build time. It does not need a Sanity write token.
- GitHub Pages remains the host. Sanity publishing does not update the static site until the build/deploy workflow runs.

## Studio setup

From the repository root:

```bash
cd studio
npm install
npm run dev
```

Sign in with a Sanity account that has editor access to project `hzyg8msu`. Add and publish a News & Event document. The website dataset must permit public read access for this static-site approach; do not put a write token in the website environment or browser code.

## Safe publish-to-deploy hook

The website workflow accepts a GitHub `repository_dispatch` event of type `sanity-publish`. It deploys the default branch only, so the integration must first be reviewed and merged to `main`.

To enable automatic rebuilds after that merge:

1. Create a fine-grained GitHub token restricted to this repository, with only the repository permissions required to dispatch an event (Contents: read/write is commonly required by GitHub's repository dispatch endpoint). Use an organization-approved bot identity if available.
2. In Sanity project `hzyg8msu`, create a webhook for the `production` dataset, filtered to published `newsArticle` documents. Use the GitHub repository-dispatch endpoint for `rajivkrish03/probetek-new`, event type `sanity-publish`, and send the token in the authorization header. Keep the token in the webhook's secret/header configuration; never commit it to this repository.
3. Test with a non-critical article, then confirm the GitHub Actions run completes before relying on the live site.

A webhook is not configured automatically by these repository changes: the Sanity project management connection is not available in this ChatGPT session, so the project-side webhook must be created in Sanity. Manual GitHub Actions runs remain available as a fallback.
