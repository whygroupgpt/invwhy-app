INV WHY GROUP Real Estate App - Rebuilt Pro Version
====================================================

Design:
- Premium black / white / glassmorphism style matching the previous app direction.
- English language.
- Fully responsive mobile-first design.
- PWA ready.

Property source:
- The public source page https://inv.whygroup.ae/properties currently displays 0 properties found.
- The app reflects that current public state, but it is fully prepared for real listings.
- Add listings to the `properties` array in script.js once the source has active properties, or send me the property details and I will add them.

Files:
- index.html
- style.css
- script.js
- manifest.json
- service-worker.js
- icon-192.svg
- icon-512.svg

Updated changes:
- Added image-based hero headers to About, Contact, and Privacy pages.
- Renamed the home listing area to Real Properties.
- Added pagination so 30 properties display 8 per page.
- Removed Privacy from the navbar and placed it in the footer bottom.
- Darkened the footer background.

Note: The current public source page at inv.whygroup.ae/properties shows 0 active properties, so the 30 property cards in script.js remain the site's prepared listing data until real active source listings are available.


PWA Fixes Applied
-----------------
- Added manifest link, theme color, Apple touch icon, and application-name meta tag to index.html, about.html, contact.html, and privacy.html.
- Added service worker registration to script.js.
- Updated service-worker.js cache list to include all local app pages and assets.
- Kept manifest paths relative for GitHub Pages compatibility.

Upload all files in this ZIP to the repository root, replacing the old versions. After GitHub Pages redeploys, test the live URL again in PWABuilder.
