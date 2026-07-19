# GOMBE Website — Your Complete Guide
### From "files on a computer" to "live website on your domain"

This guide assumes you have never used GitHub, Cloudflare, or edited a
website before. Follow the sections in order the first time. After
launch, you'll mostly only need **Section 6 (Making Future Changes)**.

No step here requires installing any software or using a command line —
everything is done through normal websites (github.com, dash.cloudflare.com,
godaddy.com) by clicking buttons.

---

## WHAT YOU'RE GETTING

A 4-page website:
- **Home** — introduction, highlights, links into your product categories
- **About** — your story, craft heritage, values, certifications
- **Products** — one page with 3 sections (Wooden Toys / Handicrafts /
  Home Décor & Gifts), selectable from a **Products ▾ dropdown** in the menu
- **Contact Us** — highlighted in gold in the menu, with an enquiry form

Color theme: Navy & Gold, a premium/corporate look. Fonts: "Fraunces"
(headings) + "Inter" (body text) — loaded automatically from Google Fonts,
no setup needed.

---

## SECTION 1 — FILL IN YOUR CONTENT (do this first)

Every page has HTML comments that look like this:
```
<!-- EDIT: replace with your real story. -->
```
These mark exactly what to change. You can open any `.html` file with
a plain text editor (Notepad, TextEdit, or — easiest — directly in
GitHub's website once uploaded, see Section 6) and type over the
placeholder text between the tags.

**What to prepare before you start:**

| Section | What to write |
|---|---|
| Home → Hero | One punchy headline + one sentence describing what you sell and why buyers should trust you |
| Home → About teaser | 2 short paragraphs summarizing your story |
| Home → Why Choose Us | 3 short reasons buyers pick you (keep each to 1 sentence) |
| About → Our Story | Founding year, how you started, current scale (how many artisans, how many countries you ship to) |
| About → Our Craft | You can mostly keep this as-is — it's factual heritage info |
| About → Values | 3 short value statements (fair wages, safety standard, sustainability, etc.) |
| About → Compliance | Your real IEC (Import Export Code) number, any lab/safety certification, GI tag mention |
| Products (all 3 sections) | Product names + 1-line description each. Add/remove product cards freely (see instructions inside `products.html`) |
| Contact | Real email, phone/WhatsApp, address, business hours, countries you ship to |
| Footer (all pages) | Update email, phone, address — appears identically at the bottom of every page |

**Do NOT change:** anything inside `<style>` tags, `styles.css`, or
`script.js` unless you're comfortable with code — that controls the
design, not the words.

### Adding your own photos
The site currently shows **gold-dashed placeholder boxes** that tell
you exactly what photo is needed and what to name it — open
`assets/images/PHOTO-CHECKLIST.txt` for the full list.

To replace a placeholder with a real photo:
1. Save your photo into the `assets/images` folder using the exact
   filename from the checklist (e.g. `wooden-toys-cover.jpg`).
2. In the HTML file, find the matching placeholder block, e.g.:
   ```html
   <div class="img-placeholder square"><div><b>Photo needed</b>wooden-toys-cover.jpg — 800×800px</div></div>
   ```
3. Replace that whole block with:
   ```html
   <img src="assets/images/wooden-toys-cover.jpg" alt="Wooden toys">
   ```
4. Save. That's it — no other code changes needed.

**Compressing photos:** phone photos are often 4–8 MB, which makes
your site slow. Before uploading, run them through a free compressor
like **squoosh.app** or **tinypng.com** (drag photo in, download the
smaller version) — aim for under 500 KB per photo.

### Making the contact form actually send you emails
The form is built but, being a plain website with no server, it needs
one free 5-minute connection to a form-handling service:
1. Go to **formspree.io** and create a free account.
2. Create a new form — it will give you a URL like
   `https://formspree.io/f/abc12345`.
3. Open `contact.html`, find this line:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with the ID Formspree gave you.
5. Save. Test the form once it's live — Formspree emails you every submission.

---

## SECTION 2 — PUT THE FILES ON GITHUB

GitHub stores your website's files and is what Cloudflare will read
from to publish your site. You do **not** need to install anything —
we'll use GitHub's website only.

1. Go to **github.com** → **Sign up** (free account).
2. Once logged in, click the **+** icon (top right) → **New repository**.
3. Name it something like `gombe-website`. Keep it **Public**
   (Cloudflare's free plan needs this, or Private also works on paid
   Cloudflare — Public is simplest and fine for a website's code).
4. Click **Create repository**.
5. On the new repo page, click **"uploading an existing file"**
   (a blue link in the middle of the page).
6. Drag in **all the files and folders** from the website folder you
   downloaded from this chat (`index.html`, `about.html`, `products.html`,
   `contact.html`, `styles.css`, `script.js`, and the `assets` folder).
7. Scroll down, add a message like "First upload of my website", click
   **Commit changes**.

Your files are now on GitHub. Nothing is live on the internet yet —
that happens in the next section.

---

## SECTION 3 — CONNECT GITHUB TO CLOUDFLARE PAGES

Cloudflare Pages takes the files from GitHub and turns them into a
fast, free, secure live website — and automatically updates it every
time you edit a file on GitHub.

1. Go to **dash.cloudflare.com** → **Sign up** (free account).
2. In the left sidebar, find **Workers & Pages** → click **Create** →
   choose the **Pages** tab → **Connect to Git**.
3. Authorize Cloudflare to access your GitHub account, then select
   the `gombe-website` repository you created.
4. On the build settings screen:
   - **Framework preset:** None
   - **Build command:** leave blank
   - **Build output directory:** leave as `/` (root)
5. Click **Save and Deploy**. Cloudflare will publish your site to a
   free address like `gombe-website.pages.dev` within about a minute.
6. Open that `.pages.dev` link to confirm your site looks right before
   moving to your real domain.

---

## SECTION 4 — POINT YOUR EXISTING GODADDY DOMAIN TO CLOUDFLARE

This connects your real domain name (the one you already bought on
GoDaddy) to the site you just published. This is the standard,
recommended way to use Cloudflare and takes effect within a few hours.

### Step A — Add your domain in Cloudflare
1. In the Cloudflare dashboard, go to **Websites** (left sidebar) →
   **Add a site** → type your domain (e.g. `yourbusiness.com`) → **Add site**.
2. Choose the **Free** plan → **Continue**.
3. Cloudflare will scan your domain and show you 2 **nameservers** —
   something like:
   ```
   ada.ns.cloudflare.com
   bob.ns.cloudflare.com
   ```
   Keep this page open — you'll need these two lines in Step B.

### Step B — Update nameservers on GoDaddy
1. Log in to **godaddy.com** → **My Products**.
2. Find your domain → click the **three dots (⋯)** next to it → **Manage DNS**
   (or click directly into the domain, then find the **DNS** tab).
3. Look for a section called **Nameservers** → click **Change**.
4. Choose **"I'll use my own nameservers" / Custom**.
5. Delete GoDaddy's default nameservers and paste in the **two
   Cloudflare nameservers** from Step A.
6. **Save.**

> Nameserver changes can take anywhere from **10 minutes to 24 hours**
> to fully take effect worldwide — this is normal, just wait.

### Step C — Confirm on Cloudflare & connect it to your website
1. Back in Cloudflare, click **Check nameservers** (or wait — it
   checks automatically). Once it shows **Active**, continue.
2. Go to **Workers & Pages** → your `gombe-website` Pages project →
   **Custom domains** tab → **Set up a custom domain**.
3. Type your domain (e.g. `yourbusiness.com`) and also add
   `www.yourbusiness.com` the same way → Cloudflare will automatically
   create the correct DNS records for you (you do not need to add
   these manually).

---

## SECTION 5 — DNS SETTINGS (what Cloudflare sets up for you)

Once your domain is Active on Cloudflare and connected to Pages
(Section 4, Step C), Cloudflare automatically creates the DNS records
needed — you don't need to configure these by hand. For reference,
they'll look like:

| Type | Name | Value |
|---|---|---|
| CNAME | `yourbusiness.com` | `gombe-website.pages.dev` |
| CNAME | `www` | `gombe-website.pages.dev` |

If you ever want email (e.g. `you@yourbusiness.com`) through Google
Workspace, Zoho Mail, etc., you'll separately add **MX records** in
the same Cloudflare **DNS** tab — that provider will give you the
exact values to paste in when you sign up.

**SSL/HTTPS (the padlock icon):** Cloudflare turns this on
automatically and free — no action needed. It may take up to an hour
after your domain goes Active.

---

## SECTION 6 — LAUNCH CHECKLIST

Before you consider it "live," check:

- [ ] All placeholder text (`[replace...]`, "Lorem" style text) is
      replaced with your real content
- [ ] All 17 photo placeholders replaced, or intentionally left for later
- [ ] Contact form tested (submit a test message, confirm you receive
      the email via Formspree)
- [ ] Phone/email/address are correct in **both** the Contact page and
      the footer (footer repeats on every page — check all 4 files)
- [ ] Visit the site on your phone and check the ☰ menu and Products
      dropdown work
- [ ] `yourbusiness.com` (no www) and `www.yourbusiness.com` both load
      the site with a padlock icon (https)

Once these are done, your site is genuinely live and ready to share.

---

## SECTION 7 — MAKING FUTURE CHANGES (the easy way)

Because Cloudflare Pages watches your GitHub repository, **any change
you save on GitHub automatically re-publishes your live site within
about a minute.** You never need to "re-upload" or touch Cloudflare
again for normal content edits.

**To edit any page's text, prices, or content:**
1. Go to your repository on **github.com** (e.g.
   `github.com/yourusername/gombe-website`).
2. Click the file you want to change (e.g. `products.html`).
3. Click the **pencil icon** (✎ "Edit this file") top-right of the file view.
4. Make your change directly in the browser.
5. Scroll down → add a short note like "Updated pricing" → click
   **Commit changes**.
6. Wait ~60 seconds, refresh your live site — the change is there.

**To add a new photo:**
1. In your GitHub repo, open the `assets/images` folder.
2. Click **Add file → Upload files** → drag your new photo in →
   **Commit changes**.
3. Then edit the relevant HTML file (as above) to point to it, using
   the `<img src="assets/images/your-file.jpg">` pattern shown in
   Section 1.

**To add a whole new product:** open `products.html`, find the
section you want (Wooden Toys / Handicrafts / Home Décor), copy one
existing product block (from `<a class="product-card"` to the closing
`</a>`), paste it, and edit the text/photo filename.

**If something breaks:** GitHub keeps every previous version. Open the
file, click **History** (top right), and you can view or restore any
earlier version — you can't permanently lose your site by editing it.

---

## QUICK REFERENCE — WHERE THINGS LIVE

| Task | Where |
|---|---|
| Edit page text/content | github.com → your repo → click file → ✎ edit |
| Add/replace photos | github.com → your repo → `assets/images` folder |
| Check the live site | your domain, or `gombe-website.pages.dev` |
| Domain / nameserver settings | godaddy.com → My Products → DNS |
| DNS records, SSL, custom domain | dash.cloudflare.com → your site |
| Contact form submissions | formspree.io dashboard, or your inbox |

---

*Keep this file — you can always re-read it. It's also saved in your
GitHub repository (`INSTRUCTIONS.md`) so it travels with the project.*
