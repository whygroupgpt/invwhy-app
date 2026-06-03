INV WHY Real Estate App - News Ticker Version
================================================

What changed:
- Added a black glass news line with red gradient accent, matching the provided screenshot style.
- Added scrolling market headlines.
- Added previous, pause/play, and next controls.
- Added the news line to Home, About, Contact, and Privacy pages.
- Added manifest links and service worker registration for PWA support.

Main files:
- index.html
- about.html
- contact.html
- privacy.html
- style.css
- script.js
- manifest.json
- service-worker.js
- logo.png
- company-profile.pdf

How to edit the news text:
Open each HTML page and edit the text inside:
<div class="news-track" data-news-track> ... </div>

How to test:
Open index.html in a browser, or upload all files to your website hosting folder.

News bar update:
- The news line is now page-positioned, not fixed, so it does not move with the navbar while scrolling.

PWA fixed version:
- Cleaned uploaded filenames for direct GitHub/hosting upload.
- Added 192x192 PNG icon and 512x512 PNG icon.
- Updated manifest.json to use PNG icons first, with SVG fallback.
- Added theme-color and apple-touch-icon tags to all HTML pages.
- Added/confirmed manifest links on all HTML pages.
- Added service worker registration in script.js.
- Updated service-worker.js cache list for the PNG icons and app files.
- Added the news ticker to About if missing.
