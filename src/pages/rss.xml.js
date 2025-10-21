import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Web Development and Design Blog | Myriam Lilia Reyes |',
    description: 'Welcome to my blog, where I share my passion for frontend development, web design, and the latest things that I did.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}
