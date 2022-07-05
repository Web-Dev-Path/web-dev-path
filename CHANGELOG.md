# Change Log

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 1.0.0

### Added

- components: Footer, Nav, Layout, and Meta
- basic styling with Sass
- pages (basic structure): homepage, blog, about-us, contact-us, 404
- subscription functionality with MailChimp integration

## 1.1.0

### Added

- new footer and newsletter components styling
- TwoColumn.js component
- decoration components
- nav component styling and intersection api
- CardsColumns.js and Card.js
- footer copyright
- Header.js component
- reCAPTCHA
- useIntersect Hook, Reveal container for scrolling using intersection API
- swipeable feature on CardsColumns.js

### Fixed

- updated Next.js from 10.0.0 to 12.0.10
- fixed scroll-x added by the layout container, adjust README
- updated TwoColumn.js component with style props
- updated favicon icon and add OG
- normalized container use on components
- normalized font sizes
- installed yarn
- normalized buttons' and links' styling
- updated `package.json` commands for macOs
- swipeable CardsColumns.js on mobile

## Unreleased

### Added

- About page content (first section)

### Fixed

- component file structure
- ButtonLink.js styles

### Changed

- components folder structure
- relative to absolute imports with aliases
