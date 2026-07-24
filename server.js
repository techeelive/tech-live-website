import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 5001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Tech.Live backend is running' });
});

app.get('/api/content', (_req, res) => {
  res.json({
    hero: {
      title: 'Welcome to Tech.Live',
      subtitle: 'Technology news • tutorials • reviews',
      description:
        'Tech.Live is your trusted destination for technology news, tutorials, reviews, and digital learning.',
    },
    topics: [
      'Web Development',
      'Programming',
      'Artificial Intelligence',
      'Machine Learning',
      'Cybersecurity',
      'Cloud Computing',
      'Digital Marketing',
      'Mobile Development',
      'Software Reviews',
      'Startups',
      'Gadgets',
      'Tech Careers',
    ],
    faqs: [
      {
        question: 'Is Tech.Live free?',
        answer: 'Yes. Most articles and tutorials are available free of charge.',
      },
      {
        question: 'How often is new content published?',
        answer: 'New articles, tutorials, and news are published regularly.',
      },
      {
        question: 'Can I contribute articles?',
        answer: 'Yes. Visit the Write for Us section for submission guidelines.',
      },
      {
        question: 'How do I report an error?',
        answer: 'Contact our editorial team using the Contact page.',
      },
      {
        question: 'Do you review products?',
        answer: 'Yes. We publish honest and independent technology reviews.',
      },
    ],
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  res.json({
    success: true,
    message: `Thanks ${name}! Your message has been received.`,
  });
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Tech.Live server running on http://localhost:${port}`);
});
