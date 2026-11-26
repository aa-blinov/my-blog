# View counter

The blog stays on GitHub Pages. This separate Cloudflare Worker keeps site
totals, totals by date in Asia/Almaty, and totals by article path in a single
SQLite-backed Durable Object. A new page load counts once, including reloads.
The application stores no visitor identifiers. The client sends no cookies and
omits the referrer. This is a page-load count and can include automated traffic.

To preview it, run both commands from the repository root:

```sh
npx wrangler dev --config workers/views/wrangler.toml --ip 127.0.0.1 --port 8787 --var SITE_ORIGIN:http://127.0.0.1:4321
npm run dev -- --host 127.0.0.1
```

For production, sign in to Cloudflare (`npx wrangler login`), deploy the
Worker (`npx wrangler deploy --config workers/views/wrangler.toml`), and set
the GitHub repository variable `PUBLIC_VIEWS_ENDPOINT` to the resulting HTTPS
address with `/views` appended. Redeploy GitHub Pages so the build includes the
address. The production origin is `https://blinov.monster` and can be changed
in `wrangler.toml` if the site moves. The production counter starts with its
first real request. Local data is kept separately.
