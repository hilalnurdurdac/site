import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Blog.module.css'; // CSS dosyasını import et

function BlogPage() {
  const tweets = [
    "AI does not replace human decisions; instead, AI adds value to human judgment :)",
    "A literal is data whose values are determined by the literal itself.",
    "Technology is best when it brings people together.",
    "Innovate or stagnate. Technology moves fast, keep up.",
    "The future is tech-driven and it's already here."
  ];

  const articles = [
    { id: 1, title: 'Makale 1', content: 'Bu, ilk makale içeriğidir.' },
    { id: 2, title: 'Makale 2', content: 'Bu, ikinci makale içeriğidir.' },
    { id: 3, title: 'Makale 3', content: 'Bu, üçüncü makale içeriğidir.' },
    { id: 4, title: 'Makale 4', content: 'Bu, dördüncü makale içeriğidir.' },
    { id: 5, title: 'Makale 5', content: 'Bu, beşinci makale içeriğidir.' }
  ];

  const [posts, setPosts] = useState([
    { type: 'article', title: 'Makale 1', content: articles[0].content, date: '2024-07-19' },
    { type: 'article', title: 'Makale 2', content: articles[1].content, date: '2024-07-21' },
    { type: 'tweet', content: tweets[0], date: '2024-07-23' },
    { type: 'tweet', content: tweets[1], date: '2024-07-25' },
    { type: 'tweet', content: tweets[2], date: '2024-07-27' },
    { type: 'tweet', content: tweets[3], date: '2024-07-29' },
    { type: 'article', title: 'Makale 3', content: articles[2].content, date: '2024-07-31' },
    { type: 'article', title: 'Makale 4', content: articles[3].content, date: '2024-08-02' },
    { type: 'article', title: 'Makale 5', content: articles[4].content, date: '2024-08-04' }
  ]);

  const handleAddPost = () => {
    const postType = prompt("Ne eklemek istersiniz? Tweet mi yoksa Makale mi?", "Tweet/Makale");

    // Kullanıcı "İptal" derse veya boş bırakırsa işlem yapmadan çık
    if (!postType) {
      return;
    }

    let newPost = null;

    if (postType.toLowerCase() === "tweet") {
      const selectedTweet = prompt("Bir Tweet seçin:", tweets.join('\n'));
      if (selectedTweet) {
        newPost = { type: 'tweet', content: selectedTweet, date: new Date().toISOString().split('T')[0] };
      }
    } else if (postType.toLowerCase() === "makale") {
      const selectedArticle = prompt("Bir Makale seçin:", articles.map(article => article.title).join('\n'));
      const article = articles.find(article => article.title === selectedArticle);
      if (article) {
        newPost = { type: 'article', title: article.title, content: article.content, date: new Date().toISOString().split('T')[0] };
      }
    }

    if (newPost) {
      const updatedPosts = [newPost, ...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(updatedPosts);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Blog</h1>
      <button onClick={handleAddPost} className={styles.addButton}>+</button>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/photos">Photos</Link>
        <Link href="/videos">Videos</Link>
      </nav>


      <div className={styles.posts}>
        {posts.map((post, index) => (
          <div key={index} className={styles.post}>
            {post.type === 'tweet' ? (
              <div className={styles.tweet}>
                <p>{post.content}</p>
                <small>{post.date}</small>
              </div>
            ) : (
              <div className={styles.article}>
                <h2 onClick={() => alert(post.content)}>{post.title}</h2>
                <small>{post.date}</small>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
