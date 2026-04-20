import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_URL, SITE_NAME } from '@/data/pages';
import type { APIContext } from 'astro';

export async function GET(_context: APIContext) {
  const posts = await getCollection('blog');

  const sorted = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: `${SITE_NAME} Blog`,
    description:
      'Articles on envelope budgeting, manual expense tracking, portfolio management, and privacy-first personal finance.',
    site: SITE_URL,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.date),
      link: `/blog/${post.id}`,
      categories: post.data.keywords ?? [],
    })),
    customData: '<language>en-us</language>',
    stylesheet: false,
  });
}
