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
- updated `package.json` commands for macOS
- swipeable CardsColumns.js on mobile

## 1.2.0

### Added

- Made the site a Progressive Web App (PWA)
- About page content (first section)
- Contact us form and decoration components
- About page "Wanna Learn More" and "How to get started?" section
- An optional second column to TwoColumn instead of the image
- .prettierignore file
- husky, lint-staged to auto format with prettier on git commit
- lint and format script to run prettier check and write on all files respectively
- contact form functionalities (email form using sendgrid, subscription if selected, google recaptcha)
- who we are section to about page
- still got questions section to about page
- Contact us cards section to contact page
- Linkedin link to footer
- Next.js 13

### Fixed

- component file structure
- ButtonLink.js styles
- components folder structure
- relative to absolute imports with aliases
- updated to React 18 and Next.js latest
- footer styling update + social media icons
- improved LightHouse scores by optimizing images, creating a robots.txt file and adding proper alt tags
- updated 'about us' first section (our background, peer reviews, version control)
- updated 'about us' section (our goals, our purpose)
- updated mobile nav to automatically close when page route change is completed
- adjust flex-basis of a few sections in the about page to better match the design file
- removed unused import and comments from development stage
- prettierrc "end of line" to auto
- .env-template to include SENDGRID_API_KEY
- next.js warning - no stylesheets in head component
- CardColumns refactoring to accept an array of card objects as props
- styles on newsletter button and contact page
- error where html loaded before styles by updating \_document.js

## 1.3.0

### Added

- Blog page which pulls content from dev.to
- Search functionality for blog posts
- Styled components to Title component
- Links to blog tags to show all posts with the same tag
- Added XML Sitemap using getServerSideProps
- Converting components into styled-components

### Fixed

- replaced next/legacy/image with next/image
- removed unused function in api/register.js
- adjusted contact form message on mobile
- blog container and title styling
- blog card container tags overflowing
- fix invalid next.config file

## 1.4.0

### Added

- Added Bernardo to 'about us'
- Added Embeded Youtube videos
- Added Google Analytics 4 Integration
- Updated contents in home,about, and contact.
- Added Satoshi to 'about us'
- Added Lucas to 'about us'
- Added Success Stories Section to the blog page.
- Added .env.development to .gitignore
- Added Tony to 'about us'
- Added Igor to 'about us'
- Added GPL v3 license
- Added netlify icon and text to the footer
- Updated robots.txt and added SEO tags
- Added Code of Conduct
- Implemented dynamic meta tags for each page
- Added Kaz to 'about us'
- Added theming to the project
- Created single blog post page
- Connected Dev.to API with single post UI
- Added Shayla to 'about us'

### Fixed

- Remove `babel-plugin-styled-components` to use nextjs built in compiler
- Lower the file names of GitHub.svg, LikedIn.svg, and YouTube.svg.
- Fixed Google Analytics 4 Integration
- Fixed CHANGELOG.md inconsistency
- Contact and Subscribe forms are saving Name on Mailchimp
- Fixed Who We Are section on mobile.
- Allow `BlogPostsContainer` display a dynamic number of cards per row with swipe functionality
- Fixed search funcitionality on blog page
- Fixed dev.to images not showing due to them changing image host
- Fixed styling issue on nav links
- Fixed contact form message position
- Fixed blog images not loading due to dev.to changing image host (sub)domain
- Fixed empty blog category by using per_page parameter
- Updated Next.js from 13.4.19 to 14.2.20
- Resolved `fetchPriority` prop warning in next/image
- Updated sendgridEmail to support@webdevpath.co

## Unreleased

### Added

- Added Faith to 'about us'
- Updated Mariana's title in 'about us'
- Updated outdated dependencies

### Fixed

- Updated husky script to avoid warning

### Changed

- Migrating styles from Styled Components to CSS Modules
  - ContactUsCard
  - ContactUsForm
  - ButtonLink
  - SubmitButton
  - AuthorBio
  - BlogTag
  - PostContent
  - SearchBar
  - BlogPostsContainer
  - RevealContentContainer
  - Member
  - Container
- Updated ContactUsForm's checkbox wrapper from div to label to enhance its accessibility
- Updated SearchInput width to 100% for better styling
- Reverted the prop name to styles in Container component as the change of the name introduced a styling bug 
