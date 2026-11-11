import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { getNewsArticleBySlug, getNewsArticles } from '@/lib/sanity';
import styles from './page.module.css';

import type { Metadata } from 'next';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = await getNewsArticleBySlug(slug);
    if (!article) return { title: 'Article not found', robots: { index: false } };
    const title = article.title;
    const description = article.excerpt || 'News and updates from Probetek Engineering.';
    const canonical = `https://probetek.ae/news-events/${slug}`;
    return {
        title,
        description,
        alternates: { canonical },
        openGraph: { title: `${title} | Probetek Engineering`, description, url: canonical, type: 'article' },
    };
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    const articles = await getNewsArticles();
    return articles.map((article) => ({ slug: article.slug }));
}

export default async function NewsArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = await getNewsArticleBySlug(slug);

    if (!article) notFound();

    return (
        <main className={styles.main}>
            <article className={styles.article}>
                <Link className={styles.backLink} href="/news-events/">← Back to News & Events</Link>
                {article.category ? <p className={styles.category}>{article.category}</p> : null}
                <h1>{article.title}</h1>
                {article.publishedAt ? (
                    <p className={styles.date}>
                        {new Date(article.publishedAt).toLocaleDateString('en-GB', {
                            day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
                        })}
                    </p>
                ) : null}
                {article.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className={styles.coverImage} src={article.imageUrl} alt={article.title} />
                ) : null}
                {article.excerpt ? <p className={styles.excerpt}>{article.excerpt}</p> : null}
                <div className={styles.body}>
                    <PortableText value={article.body ?? []} />
                </div>
                {article.gallery?.some((image) => image.url) ? (
                    <section className={styles.gallery} aria-label="Article photos">
                        {article.gallery.map((image, index) => image.url ? (
                            <figure className={styles.galleryPhoto} key={image._key}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={image.url}
                                    alt={image.alt || image.caption || `${article.title} — photo ${index + 1}`}
                                    loading="lazy"
                                />
                                {image.caption ? <figcaption>{image.caption}</figcaption> : null}
                            </figure>
                        ) : null)}
                    </section>
                ) : null}
                {article.externalUrl ? (
                    <p className={styles.relatedLink}>
                        <a href={article.externalUrl} target="_blank" rel="noopener noreferrer">Visit related link ↗</a>
                    </p>
                ) : null}
                <Link className={styles.backLinkBottom} href="/news-events/">← Back to all News & Events</Link>
            </article>
        </main>
    );
}
