# Jommie for FASSA VP: THE SURGE

A plain HTML/CSS/JS site. No build step, no frameworks.

## Pages
- index.html: home (hero, highlights, pillar preview)
- about.html: her story, FASSA VP duties (from the constitution), why her
- record.html: leadership experience, committee experience, department reach (the inclusivity plan)
- manifesto.html: the full plan — Grow, Learn, Thrive, all 7 initiatives
- voices.html: endorsements (currently empty — shows a "coming soon" state until you add some)

## Things you'll edit most
1. **js/data.js**: the WhatsApp link, the accreditation link (currently empty — see below), her photo, and testimonials.
2. **assets/jommie.jpg**: drop her photo here (exact name, or change the name in data.js).
3. **css/styles.css**: all colours are at the top in the :root block.

## About the accreditation link
There's no link yet. Every "Get accredited" button on the site is automatically
disabled and reads "Accreditation: link coming soon" until you paste a real
URL into `accreditationUrl` in `js/data.js`. The moment you add it, every
button on every page goes live — nothing else needs editing.

## Department reach ("Built for every department")
On record.html — these are projected support numbers across all ten
departments in the Faculty of Science, framed as the inclusivity plan behind
the campaign, not a scoreboard. The numbers live directly in the HTML
(search "DEPTS" if you're regenerating from the Python script) since they
don't change often; edit the <div class="deptbar"> blocks directly to update
a number.

## Testimonials
In progress. Add them to the `testimonials` array in `js/data.js` as they
come in:
```js
testimonials: [
  { quote: "...", name: "Full name", title: "Title / department", photo: "" }
]
```
Leave the array empty and the Voices page shows a "coming soon" placeholder
instead of a blank section.

## Deploy on Vercel
Drag and drop this whole folder into vercel.com/new, or push it to a GitHub
repo and import it — no build command, no output directory, Framework
Preset: Other. vercel.json already turns on clean URLs (/about works as
well as /about.html).
