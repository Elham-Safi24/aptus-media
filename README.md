# Aptus Media — Website

Professional real estate photography website for **Aptus Media**, Fort Worth TX.

## Pages
- `index.html` — Homepage
- `pages/portfolio.html` — Portfolio with masonry grid + lightbox + category filter
- `pages/services.html` — Packages, pricing, add-ons, FAQ
- `pages/contact.html` — Booking request form

## File Structure
```
aptus-media/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── components.js
├── pages/
│   ├── portfolio.html
│   ├── services.html
│   └── contact.html
└── images/
    ├── hero-1.jpg       ← Your property photos go here
    ├── hero-2.jpg
    ├── hero-3.jpg
    ├── work-1.jpg  through work-5.jpg
    ├── port-1.jpg  through port-9.jpg
    └── testimonial.jpg
```

## Adding Your Photos
1. Export your edited photos from Lightroom as JPEGs
2. Name them according to the list above
3. Drop them into the `/images/` folder
4. Push to GitHub — done

Recommended export sizes:
- Hero images: 1800px wide, 85% quality
- Portfolio images: 1400px wide, 85% quality
- Keep file sizes under 500KB each for fast load times

## Deploy to GitHub Pages (Free Hosting)

1. Create a GitHub account at github.com
2. Click **New Repository** → name it `aptus-media` (or your username.github.io for a cleaner URL)
3. Upload all these files (drag and drop in the GitHub interface)
4. Go to **Settings → Pages → Source → main branch → / (root)**
5. Your site is live at `https://yourusername.github.io/aptus-media`

## Connect Your Custom Domain (aptusmedia.net)

1. In your GitHub repo → Settings → Pages → Custom Domain
2. Enter `aptusmedia.net` and save
3. In your Namecheap DNS settings, add these records:
   - A record: `@` → `185.199.108.153`
   - A record: `@` → `185.199.109.153`
   - A record: `@` → `185.199.110.153`
   - A record: `@` → `185.199.111.153`
   - CNAME: `www` → `yourusername.github.io`
4. Wait 24–48 hours for DNS to propagate
5. Enable **Enforce HTTPS** in GitHub Pages settings

## Connect the Contact Form (Free)

The booking form currently shows a success state but doesn't send emails yet.
To make it actually send you emails:

1. Go to formspree.io → create a free account
2. Create a new form → copy your form endpoint URL
3. In `pages/contact.html`, replace the `handleSubmit` function's comment with:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

## Updating Pricing
All pricing lives in `pages/services.html` — just edit the numbers directly in the HTML.

## Colors
- Background: `#080a0e`
- Blue accent: `#1565c0`
- Blue light: `#1e7de8`
- Text: `#f4f6fa`
