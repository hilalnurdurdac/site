import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Blog.module.css'; // CSS dosyasını import et

function BlogPage() {
  // Random tweet cümleleri
  const [posts, setPosts] = useState([
    { id: 1, type: 'tweet', content: "AI does not replace human decisions; instead, AI adds value to human judgment :)", date: '2024-07-19' },
    { id: 2, type: 'tweet', content: "A literal is data whose values are determined by the literal itself.", date: '2024-07-17' },
    { id: 3, type: 'tweet', content: "Technology is best when it brings people together.", date: '2024-07-18' },
    { id: 4, type: 'article', title: 'Makale 1', content: 'Bu, ilk makale içeriğidir.', date: '2024-07-20' },
    { id: 5, type: 'article', title: 'Makale 2', content: 'Bu, ikinci makale içeriğidir.', date: '2024-07-21' },
    { id: 6, type: 'article', title: 'Makale 3', content: 'Bu, üçüncü makale içeriğidir.', date: '2024-07-22' }
  ]);

  const addPost = () => {
    const postType = window.prompt("What type of post would you like to add? (tweet/article)");
    if (postType === 'tweet') {
      const tweetContent = window.prompt("Enter your tweet:");
      setPosts([...posts, { id: posts.length + 1, type: 'tweet', content: tweetContent, date: new Date().toISOString().split('T')[0] }]);
    } else if (postType === 'article') {
      const articleTitle = window.prompt("Enter article title:");
      const articleContent = window.prompt("Enter article content:");
      setPosts([...posts, { id: posts.length + 1, type: 'article', title: articleTitle, content: articleContent, date: new Date().toISOString().split('T')[0] }]);
    }
  };

  // Tarihe göre sıralama
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className={styles.container}>
      <h1>Blog</h1>
      <div className={styles.posts}>
        {sortedPosts.map(post => (
          <div key={post.id} className={styles.post}>
            {post.type === 'tweet' ? (
              <div className={styles.tweet}>
                <p>{post.content}</p>
                <span className={styles.date}>{post.date}</span>
              </div>
            ) : (
              <div className={styles.article}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <span className={styles.date}>{post.date}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className={styles.addButton} onClick={addPost}>+</button>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/photos">Photos</Link>
        <Link href="/videos">Videos</Link>
      </nav>
    </div>
  );
}

export default BlogPage;

