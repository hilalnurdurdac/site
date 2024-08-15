import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Blog.module.css'; // CSS dosyasını import et

function BlogPage() {
  // Random tweet cümleleri
  const tweets = [
    "AI does not replace human decisions; instead, AI adds value to human judgment :)",
    "A literal is data whose values are determined by the literal itself.",
    "Technology is best when it brings people together."
  ];

  // Makaleler
  const [articles, setArticles] = useState([
    { id: 1, title: 'Makale 1', content: 'Bu, ilk makale içeriğidir.' },
    { id: 2, title: 'Makale 2', content: 'Bu, ikinci makale içeriğidir.' },
    { id: 3, title: 'Makale 3', content: 'Bu, üçüncü makale içeriğidir.' },
    { id: 4, title: 'Makale 4', content: 'Bu, dördüncü makale içeriğidir.' },
    { id: 5, title: 'Makale 5', content: 'Bu, beşinci makale içeriğidir.' }
  ]);

  return (
    <div className={styles.container}>
      <h1>Blog</h1>
      <div className={styles.tweets}>
        {tweets.map((tweet, index) => (
          <div key={index} className={styles.tweet}>
            {tweet}
          </div>
        ))}
      </div>
      <button className={styles.addButton}>+</button>
      <div className={styles.articles}>
        {articles.map(article => (
          <div key={article.id} className={styles.article}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/photos">Photos</Link>
        <Link href="/videos">Videos</Link>
      </nav>
    </div>
  );
}

export default BlogPage;
