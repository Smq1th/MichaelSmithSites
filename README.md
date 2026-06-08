# Michael Smith Sites

Professional static website for `michaelsmithsites.com`, focused on Staten Island website design,
Staten Island local SEO, and demo concepts for local businesses.

## Recent update

- Added Ten Point Auto Repair to Demo Work.
- Added Roy K. Danischewski, CPA to Demo Work.
- Added Ban-A-Bug Pest Control to Demo Work.
- Added Clove Lake Dental to Demo Work.
- Emphasized Staten Island local businesses throughout the homepage, services, demo work, process, pricing, about, contact, footer, and SEO metadata.
- Updated the portfolio grid to support multiple featured Staten Island demo projects.

## Preview locally

Run the local preview from this folder:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Deploy on Vercel

1. Create a new Vercel project from this folder or from the connected Git repository.
2. Use the default static site settings. No framework preset is required.
3. Leave the build command empty.
4. Leave the output directory empty or set it to `.`.
5. Add `michaelsmithsites.com` and `www.michaelsmithsites.com` in the Vercel project domains.

## Domain settings

For the apex domain:

```text
Type: A
Name: @
Value: 76.76.21.21
```

For the www subdomain:

```text
Type: CNAME
Name: www
Value: cname.vercel-dns-0.com
```

In Vercel, set `michaelsmithsites.com` as the primary domain and redirect `www.michaelsmithsites.com` to it.
