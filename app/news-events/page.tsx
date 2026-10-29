import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { getNewsArticles } from '@/lib/sanity';
import styles from './page.module.css';

export default async function NewsEvents() {
    const articles = await getNewsArticles();

    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <FadeIn>
                        <h1>News & Events</h1>
                        <p>Stay updated with the latest from PROBETEK and the industry.</p>
                    </FadeIn>
                </div>
            </section>
            <section className={styles.content}>
                <div className={styles.container}>
                    {articles.length > 0 ? (
                        <div className={styles.articles}>
                            {articles.map((article) => (
                                <article className={styles.articleCard} key={article._id}>
                                    <Link className={styles.articleLink} href={`/news-events/${article.slug}/`} aria-label={`Read ${article.title}`}>
                                        {article.imageUrl ? (
                                            // Sanity image URLs are public asset URLs returned by the dataset.
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img className={styles.articleImage} src={article.imageUrl} alt={article.title} loading="lazy" />
                                        ) : null}
                                        {article.category ? <p className={styles.category}>{article.category}</p> : null}
                                        <h2>{article.title}</h2>
                                    </Link>
                                    {article.publishedAt ? (
                                        <p className={styles.date}>
                                            {new Date(article.publishedAt).toLocaleDateString('en-GB', {
                                                day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
                                            })}
                                        </p>
                                    ) : null}
                                    {article.excerpt ? <p>{article.excerpt}</p> : null}
                                    <Link className={styles.readMore} href={`/news-events/${article.slug}/`}>Read more <span aria-hidden="true">→</span></Link>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <FadeIn>
                            <div className={styles.card}>
                                <h2>Latest Updates</h2>
                                <p>Check back soon for the latest news, press releases, and upcoming event schedules.</p>
                            </div>
                        </FadeIn>
                    )}
                </div>
            </section>
        </main>
    );
}
