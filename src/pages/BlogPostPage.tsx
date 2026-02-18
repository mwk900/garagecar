import { Link, Navigate, useParams } from 'react-router-dom';
import { posts } from '../content/posts';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main>
      <section className="section heroSectionMini">
        <div className="container">
          <h1>{post.title}</h1>
          <p className="heroSub">{post.excerpt}</p>
        </div>
      </section>
      <section className="section">
        <div className="container articleWrap">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="textAction" to="/blog">
            Back to blog
          </Link>
        </div>
      </section>
    </main>
  );
}
