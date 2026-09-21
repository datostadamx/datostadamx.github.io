# datostada.github.io

[![License](https://img.shields.io/github/license/datostadamx/datostadamx.github.io?style=popout-square)](https://github.com/datostadamx/datostadamx.github.io/blob/master/LICENSE "License")
[![Website Status](https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Fdatostada.mx)](https://datostada.mx "Website Status")
[![Issues](https://img.shields.io/github/issues/datostadamx/datostadamx.github.io?style=popout-square)](https://github.com/datostadamx/datostadamx.github.io/issues "Issues")

The conference website at https://datostada.mx.

## Development

The site is built with [Jekyll](https://jekyllrb.com) and published automatically by GitHub Pages on every push to `master` — there is no separate build/deploy step to run.

To preview changes locally:

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

### Where things live

- `_config.yml` — site-wide settings: event year/dates/location/venue, Luma registration id, social links, contact email.
- `_data/faq.yml` — the FAQ list rendered on the homepage. Add/edit/remove questions here, no HTML needed.
- `_layouts/`, `_includes/` — shared head, nav, footer, and scripts used by every page.
- `index.html` — the one-page site (hero, evento, ejes, programa, ponentes, registro, patrocina, sede, FAQ).
- `code-of-conduct.html` — the only other standalone page.
- `css/style.css`, `js/site.js` — all styling and behavior (particle-network hero, scroll reveal, FAQ accordion, mobile nav). No external frameworks.
- `assets/` — logo/favicon. Speaker photos, sponsor logos, etc. can go here once confirmed.

The current design is based on a template supplied directly with 2026 edition copy. The "Ponentes" (speakers) and sponsor sections still show placeholders ("Por anunciar") — once those are confirmed, that's a good time to reintroduce a `_data/speakers.yml`-style file rather than hardcoding names into `index.html`.

## License

The content in this repository is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0), and the code is free and open source, released under the terms of [The MIT License](https://mit-license.org).
