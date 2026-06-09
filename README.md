# Michael Smith Sites

Professional static website for `michaelsmithsites.com`, focused on Staten Island website design,
Staten Island local SEO, and demo concepts for local businesses.

## Recent update

- Replaced the public Demo Work section with three fictional sample websites.
- Added `Main Street Pizza Co.`, `Cornerstone Auto Body`, and `Richmond Renovations` as generic demos.
- Removed public links to real-business demo names from the portfolio section.
- Removed real logos, real menu scans, real business contact details, and real social links from the generic demo copies.
- Added a deployment checklist for diagnosing the live domain 502 error.
- Improved mobile navigation, keyboard focus states, form validation feedback, and footer year handling.
- Normalized Demo Work card styling so all portfolio items share the same card color treatment.
- Emphasized Staten Island local businesses throughout the homepage, services, demo work, process, pricing, about, contact, footer, and SEO metadata.
- Updated the portfolio grid to show only three polished fictional demo projects.

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
