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

- Made the site a Progressive Web App (PWA)
- About page content (first section)
- About page "Wanna Learn More" and "How to get started?" section
- An optional second column to TwoColumn instead of the image
- .prettierignore file
- husky, lint-staged to auto format with prettier on git commit
- lint and format script to run prettier check and write on all files respectively
- who we are section to about page
- still got questions section to about page

### Fixed

- component file structure
- ButtonLink.js styles
- components folder structure
- relative to absolute imports with aliases
- updated to React 18 and Next.js latest
- footer styling update + social media icons
- improved LightHouse scores by optmizing images, creating a robots.txt file and adding proper alt tags
- updated 'about us' first section (our background, peer reviews, version control)
- updated 'about us' section (our goals, our purpose)
- updated mobile nav to automatically close when page route change is completed
- adjust flex-basis of a few sections in the about page to better match the design file
- prettierrc "end of line" to auto
