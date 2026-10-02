import { Link, useParams } from 'react-router-dom'
import { getPostBySlug } from '@/data/blog'
import { Reveal } from '@/components/ui/reveal'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <section>
        <div className="wrap" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p className="caption">404</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500 }}>Post not found</h2>
          <Link to="/blog" className="btn ghost" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
            ← Back to blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="wrap" style={{ maxWidth: 720 }}>
        <Reveal as="div">
          <Link to="/blog" className="case-link">
            ← Back to blog
          </Link>
          <p className="caption" style={{ marginTop: '1.5rem' }}>
            {formatDate(post.date)}
          </p>
          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 500,
              fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)',
              margin: '0.3rem 0 1rem',
            }}
          >
            {post.title}
          </h1>
          <div className="tags" style={{ marginBottom: '2rem' }}>
            {post.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          {post.body.map((p, i) => (
            <p key={i} style={{ color: 'var(--ink-soft)', marginBottom: '1.2rem' }}>
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
