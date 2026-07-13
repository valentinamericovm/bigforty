# Vale's Big Forty website

This is a static bilingual website. It can be hosted free of charge on GitHub Pages, Cloudflare Pages or Vercel using the platform's free subdomain.

## Before publishing

1. Open `index.html`.
2. Find `https://forms.google.com`.
3. Replace it with the final Google Form link.
4. Update the provisional Birthday Week schedule when plans are confirmed.
5. Replace gradient activity cards with final licensed photographs if desired.

## Publish with GitHub Pages

1. Create a new public GitHub repository.
2. Upload all files and the `assets` folder.
3. Open repository Settings.
4. Select Pages.
5. Under Build and deployment, choose Deploy from a branch.
6. Select the main branch and root folder.
7. Save. GitHub will provide a free address ending in `github.io`.

## Publish with Cloudflare Pages

1. Create a free Cloudflare account.
2. Open Workers & Pages.
3. Create a Pages project.
4. Connect the GitHub repository or use direct upload.
5. No build command is required because this is a static site.
6. Cloudflare will provide a free address ending in `pages.dev`.

## Publish with Vercel

1. Create a free Vercel account.
2. Import the GitHub repository.
3. Choose Other for framework.
4. Deploy without a build command.
5. Vercel will provide a free address ending in `vercel.app`.

## Editing

All bilingual text is in `index.html` using `data-en` and `data-it`.
Colours and layout are in `style.css`.
The countdown and language switch are in `script.js`.
