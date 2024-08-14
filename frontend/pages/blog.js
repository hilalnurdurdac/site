import Link from 'next/link';
import styles from '../styles/Home.module.css'; // CSS dosyasını import et

function BlogPage() {
  return (
    <div className={styles.container}>
      <h1>Blog</h1>
      <p>This is the blog page.</p>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/photos">Photos</Link>
        <Link href="/videos">Videos</Link>
      </nav>
    </div>
  );
}

export default BlogPage;
