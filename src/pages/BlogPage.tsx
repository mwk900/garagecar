import { Link } from 'react-router-dom';
import { posts } from '../content/posts';

export function BlogPage() {
  return (
    <main>
      <section className="section heroSectionMini">
        <div className="container">
          <h1>Garage Tips & Guides</h1>
          <p className="heroSub">Practical advice from local mechanics in Nottingham.</p>
        </div>
      </section>
      <section className="section">
        <div className="container cardGrid">
          {posts.map((post) => (
            <article key={post.slug} className="surfaceCard">
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="textAction">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
