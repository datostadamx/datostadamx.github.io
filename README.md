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

- `_config.yml` — site-wide settings: event dates/location, social links, chatbot key.
- `_data/speakers.yml`, `_data/organizers.yml`, `_data/faq.yml`, `_data/coc_contacts.yml` — editable lists rendered on the site. Add a new edition's speakers/organizers/FAQ by editing these files, no HTML needed.
- `_speakers/*.md` — full speaker bio pages (only for speakers with a dedicated page). Add a new file here and reference its filename as `slug` in `_data/speakers.yml` to link it automatically.
- `_layouts/`, `_includes/` — shared header, footer, and page scaffolding used by every page.
- `index.html`, `organizers.html`, `faq.html`, etc. — one file per page's unique content.

## License

The content in this repository is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0), and the code is free and open source, released under the terms of [The MIT License](https://mit-license.org).
