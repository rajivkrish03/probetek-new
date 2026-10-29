# Probetek Sanity Studio

The Studio is isolated from the Next.js website so it does not add CMS packages to the website's production dependency tree.

## First-time setup

From this directory, install the Sanity Studio dependencies and run the local Studio:

```bash
npm install
npm run dev
```

Sign in with the Sanity account that has access to project `hzyg8msu`. Before deploying the Studio, verify the Sanity project has the correct CORS origins and that only trusted editors have write access.

The website queries the publicly readable `production` dataset at build time. Do not put a Sanity write token in `NEXT_PUBLIC_*` variables or in website source code.
