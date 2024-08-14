import Link from 'next/link';
import styles from '../styles/Home.module.css'; // CSS dosyasını import et

function PhotosPage() {
  return (
    <div className={styles.container}>
      <h1>Photos</h1>
      <p>This is the photos page.</p>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/videos">Videos</Link>
      </nav>
    </div>
  );
}

export default PhotosPage;
