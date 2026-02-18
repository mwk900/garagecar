import { Link } from 'react-router-dom';
import { posts } from '../content/posts';
import { Page } from '../components/Page';
import { useSiteContext, useTranslation } from '../hooks/useSiteContext';

export function BlogPage() {
  const t = useTranslation();
  const { language } = useSiteContext();

  return (
    <Page metaKey="blog">
      <section className="container section">
        <h1>{t.blog.title}</h1>
        <p>{t.blog.subtitle}</p>
        <div className="grid3">
          {posts.map((post) => (
            <article key={post.slug} className="card">
              <h2>{post.title[language]}</h2>
              <p>{post.excerpt[language]}</p>
              <Link to={`/blog/${post.slug}`}>{t.common.readMore}</Link>
            </article>
          ))}
        </div>
      </section>
    </Page>
  );
}
