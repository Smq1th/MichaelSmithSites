# Deployment and 502 Checklist

Use this when `michaelsmithsites.com` shows `502 Bad Gateway`. The local site is static HTML, CSS, and JavaScript, so a 502 usually points to hosting, DNS, SSL, or a proxy rule rather than the page files.

## Vercel domain settings

1. Open the Vercel project for `michaelsmithsites.com`.
2. Confirm the latest deployment is successful and points to this folder.
3. In Project Settings > Domains, confirm both domains are attached:
   - `michaelsmithsites.com`
   - `www.michaelsmithsites.com`
4. Let Vercel issue the SSL certificate. If it says certificate pending, fix DNS first and wait for propagation.

## DNS settings

At the domain registrar, use one of these setups.

Recommended Vercel setup:

```text
Type: A
Name: @
Value: 76.76.21.21
```

```text
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Remove old `A`, `AAAA`, or `CNAME` records for `@` or `www` that point to another host, VPS, proxy, or parking service.

## If using Nginx or Apache instead of Vercel

For a static site, avoid proxying to a missing backend. A common 502 cause is an Nginx `proxy_pass` pointing to an app server that is not running.

Nginx should serve the static folder directly:

```nginx
server {
  listen 80;
  server_name michaelsmithsites.com www.michaelsmithsites.com;
  root /var/www/michaelsmithsites.com;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

After SSL is installed, redirect HTTP to HTTPS and confirm the certificate covers both apex and `www`.

## Quick checks after deployment

- Visit `https://michaelsmithsites.com/`.
- Visit `https://www.michaelsmithsites.com/`.
- Check that CSS and images load.
- Open the browser console and confirm there are no JavaScript errors.
- Test the quote form with missing fields and then with valid details.
- Test several Demo Work links.
