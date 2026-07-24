import { useEffect, useState } from 'react';

function App() {
  const [content, setContent] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch(() => setContent({ hero: {}, topics: [], faqs: [] }));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    });

    const data = await response.json();
    setSubmitMessage(data.message || data.error);
  };

  if (!content) {
    return <div className="container loading">Loading Tech.Live...</div>;
  }

  const { hero, topics, faqs } = content;

  return (
    <>
      <header className="site-header">
        <nav className="container nav">
          <a href="#home" className="brand">Tech.Live</a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
            <a href="#faq">FAQ</a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow">{hero.subtitle || 'Technology news • tutorials • reviews'}</p>
            <h1>{hero.title || 'Welcome to Tech.Live'}</h1>
            <p className="lead">
              {hero.description ||
                'Tech.Live is your trusted destination for technology news, tutorials, reviews, and digital learning.'}
            </p>
            <div className="hero-actions">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container grid two-col">
            <div>
              <p className="eyebrow">About Us</p>
              <h2>Who We Are</h2>
              <p>
                Tech.Live is an independent technology platform dedicated to delivering
                accurate, practical, and engaging content for readers around the world.
              </p>
              <p>
                Our mission is to make technology accessible through in-depth articles,
                step-by-step tutorials, honest product reviews, and timely industry news.
              </p>
            </div>
            <div className="card">
              <h3>Our Mission</h3>
              <ul>
                <li>Deliver reliable technology news.</li>
                <li>Publish high-quality educational content.</li>
                <li>Help developers and digital professionals grow their skills.</li>
                <li>Simplify complex technology topics for everyone.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section alt-bg">
          <div className="container">
            <p className="eyebrow">What We Cover</p>
            <h2>Topics We Explore</h2>
            <div className="topics-grid">
              {topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container grid two-col">
            <div>
              <p className="eyebrow">Contact Us</p>
              <h2>Have questions or ideas?</h2>
              <p>
                We would love to hear from you. Use the contact form or reach out
                directly through one of our email addresses.
              </p>
              <ul className="contact-list">
                <li><strong>General Inquiries:</strong> <a href="mailto:contact@tech.live">contact@tech.live</a></li>
                <li><strong>Editorial:</strong> <a href="mailto:editorial@tech.live">editorial@tech.live</a></li>
                <li><strong>Business & Advertising:</strong> <a href="mailto:business@tech.live">business@tech.live</a></li>
                <li><strong>Technical Support:</strong> <a href="mailto:support@tech.live">support@tech.live</a></li>
              </ul>
            </div>
            <form className="card form-card" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formState.email}
                  onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                />
              </label>
              <label>
                Message
                <textarea
                  rows="5"
                  placeholder="Tell us more..."
                  value={formState.message}
                  onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                />
              </label>
              <button type="submit" className="btn btn-primary">Send Message</button>
              {submitMessage ? <p className="form-feedback">{submitMessage}</p> : null}
            </form>
          </div>
        </section>

        <section id="privacy" className="section alt-bg">
          <div className="container">
            <p className="eyebrow">Privacy Policy</p>
            <h2>Respecting Your Privacy</h2>
            <p>
              Tech.Live respects your privacy and is committed to protecting your
              personal information. We may collect limited information such as your
              name, email address, IP address, browser information, and cookies to
              improve our website and services.
            </p>
            <p>
              Your information is never sold to third parties. Data may be shared with
              trusted service providers when necessary to operate the website or comply
              with legal obligations.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container grid two-col">
            <div>
              <p className="eyebrow">Terms of Service</p>
              <h2>Using Tech.Live Responsibly</h2>
              <p>
                By accessing Tech.Live, you agree to use the website lawfully and
                responsibly. Users may not copy, distribute, or republish our content
                without permission.
              </p>
              <p>
                We strive to provide accurate information, but we cannot guarantee that
                all content is free from errors or always up to date. Tech.Live reserves
                the right to modify content, policies, or services without prior notice.
              </p>
            </div>
            <div>
              <p className="eyebrow">Disclaimer</p>
              <h2>Educational Information Only</h2>
              <p>
                The information published on Tech.Live is provided for educational and
                informational purposes only. Although we make every effort to ensure
                accuracy, readers should independently verify important information
                before making business, financial, legal, or technical decisions.
              </p>
              <p>
                External links are provided for convenience and do not imply endorsement.
              </p>
            </div>
          </div>
        </section>

        <section className="section alt-bg">
          <div className="container grid two-col">
            <div>
              <p className="eyebrow">Advertise With Us</p>
              <h2>Reach a global technology audience</h2>
              <p>
                Reach thousands of technology professionals, developers, students,
                entrepreneurs, and digital marketers through Tech.Live.
              </p>
              <ul>
                <li>Banner Advertising</li>
                <li>Sponsored Articles</li>
                <li>Product Reviews</li>
                <li>Newsletter Sponsorships</li>
                <li>Brand Partnerships</li>
              </ul>
              <p>
                For advertising inquiries, contact <a href="mailto:business@tech.live">business@tech.live</a>.
              </p>
            </div>
            <div>
              <p className="eyebrow">Write for Us</p>
              <h2>Share your expertise</h2>
              <p>
                Tech.Live welcomes contributions from experienced writers, developers,
                researchers, and industry professionals. We accept articles related to
                programming, web development, AI, cybersecurity, cloud computing, DevOps,
                mobile apps, digital marketing, software reviews, and tech tutorials.
              </p>
              <p>Original, well-researched content is preferred.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <p className="eyebrow">FAQ</p>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <div className="card" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt-bg">
          <div className="container grid two-col">
            <div>
              <p className="eyebrow">Careers</p>
              <h2>Interested in joining Tech.Live?</h2>
              <p>
                We occasionally hire writers, editors, developers, designers, SEO
                specialists, and digital marketers. Current openings will be listed on
                this page.
              </p>
            </div>
            <div>
              <p className="eyebrow">Newsletter</p>
              <h2>Stay informed</h2>
              <p>
                Subscribe to receive the latest technology news, tutorials, product
                reviews, and industry insights directly in your inbox.
              </p>
              <form className="card form-card compact">
                <label>
                  Email
                  <input type="email" placeholder="you@example.com" />
                </label>
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container error-card">
            <p className="eyebrow">404 Page</p>
            <h2>Oops! Page Not Found</h2>
            <p>
              The page you are looking for does not exist or may have been moved.
              Return to the homepage or use the navigation links to find what you need.
            </p>
            <a href="#home" className="btn btn-primary">Back to Home</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div>
            <h3>Tech.Live</h3>
            <p>
              Your source for technology news, programming tutorials, AI updates,
              cybersecurity insights, digital marketing guides, software reviews, and
              developer resources.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2026 Tech.Live. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
