import { Link } from 'react-router-dom'
import { posts } from '@/data/blog'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Blog() {
  return (
    <section id="blog" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>Blog</h2>
          <p className="caption">日記 — notes, in public</p>
        </Reveal>

        <RevealGroup
          as="div"
          style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
          stagger={0.08}
        >
          {posts.map((post) => (
            <RevealItem as="div" key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="project-card" style={{ display: 'block', textDecoration: 'none' }}>
                <p className="kicker">{formatDate(post.date)}</p>
                <h3>{post.title}</h3>
                <p className="summary">{post.excerpt}</p>
                <div className="tags">
                  {post.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
