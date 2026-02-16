import { Link, Navigate, useParams } from 'react-router-dom';
import { Page } from '../components/Page';
import { posts } from '../content/posts';
import { useSiteContext, useTranslation } from '../hooks/useSiteContext';

export function BlogPostPage() {
  const { slug } = useParams();
  const { language } = useSiteContext();
  const t = useTranslation();
  const post = posts.find((item) => item.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <Page metaKey="blog">
      <section className="container section">
        <Link to="/blog">← {t.common.backToBlog}</Link>
        <h1>{post.title[language]}</h1>
        <p>{post.date}</p>
        {post.content[language].map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </Page>
  );
}
