# Style library for my personal online presence

* Portfolio site
* Weeknotes site

## Instructions

1. Clone into your `/assets` folder with the following command:

```bash
git submodule add https://github.com/bazzle/br-web-style-library app/assets/styles/style-library
```

2. At `/assets` add a separate folder and file named `project-specific.scss`

```bash
mkdir -p styles/project-styles && touch styles/project-styles/project-specific.scss
```

You will need to add some variables here to allow the css to compile.

3. Add these style resources to load the fonts
```
<link rel="preconnect" href="https://use.typekit.net/sqv3apk.css" />
<link rel="stylesheet" href="https://use.typekit.net/sqv3apk.css" />
```