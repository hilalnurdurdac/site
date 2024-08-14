import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function HomePage() {
  return (
    <div>
      <h1>Hilal Nur DURDAÇ</h1>
      <nav>
        <Link href="/blog">Blog</Link> {/* Doğru kullanım */}
        <Link href="/photos">Photos</Link>
        <Link href="/videos">Videos</Link>
      </nav>
    </div>
  );
}

export default HomePage;
