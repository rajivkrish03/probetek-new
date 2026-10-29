import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsArticleBySlug, getNewsArticles } from '@/lib/sanity';
import styles from './page.module.css';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    const articles = await getNewsArticles();
    return articles.map((article) => ({ slug: article.slug }));
}

function blockText(block: { children?: Array<{ text?: string }> }) {
    return (block.children ?? []).map((child) => child.text ?? '').join('');
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
                    {(article.body ?? []).map((block, index) => {
                        if (block._type !== 'block') return null;
                        const text = blockText(block);
                        if (!text.trim()) return null;

                        if (block.listItem) {
                            const ItemTag = block.listItem === 'number' ? 'ol' : 'ul';
                            return <ItemTag key={index}><li>{text}</li></ItemTag>;
                        }
                        if (block.style === 'h2') return <h2 key={index}>{text}</h2>;
                        if (block.style === 'h3') return <h3 key={index}>{text}</h3>;
                        if (block.style === 'blockquote') return <blockquote key={index}>{text}</blockquote>;
                        return <p key={index}>{text}</p>;
                    })}
                </div>
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
