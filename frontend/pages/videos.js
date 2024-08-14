import Link from 'next/link';
import styles from '../styles/Home.module.css'; // CSS dosyasını import et

function VideosPage() {
  return (
    <div className={styles.container}>
      <h1>Videos</h1>
      <p>This is the videos page.</p>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/photos">Photos</Link>
      </nav>
    </div>
  );
}

export default VideosPage;
