import { defineField, defineType } from 'sanity';

export const newsArticle = defineType({
  name: 'newsArticle',
  title: 'News & Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required().max(120) }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'excerpt', title: 'Summary', type: 'text', rows: 3, validation: (rule) => rule.max(300) }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Company News', 'Events', 'Industry'] } }),
    defineField({ name: 'publishedAt', title: 'Publish date and time', type: 'datetime', validation: (rule) => rule.required() }),
    defineField({ name: 'mainImage', title: 'Cover image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'externalUrl', title: 'Related link (optional)', type: 'url', validation: (rule) => rule.uri({ scheme: ['http', 'https'] }) }),
    defineField({ name: 'body', title: 'Article body', type: 'array', of: [{ type: 'block' }] }),
  ],
  preview: { select: { title: 'title', subtitle: 'category', media: 'mainImage' } },
});
