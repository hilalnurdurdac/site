import Link from 'next/link';
import styles from '../styles/Videos.module.css'; // CSS dosyasının doğru olduğundan emin olun

function VideosPage() {
  return (
    <div className={styles.container}>
      <h1>Videos</h1>
      
      {/* Add button for uploading the 10th video */}
      <div className={styles.addVideoContainer}>
        <button className={styles.addButton}>+</button>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/photos">Photos</Link>
      </nav>

      <div className={styles.videoGrid}>
        {/* Render 9 video placeholders */}
        {[...Array(9)].map((_, index) => (
          <div key={index} className={styles.videoContainer}>
            <video
              className={styles.video}
              src={`/videos/video${index + 1}.mp4`}
              controls
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
              onDoubleClick={(e) => {
                if (e.target.paused) {
                  e.target.play();
                } else {
                  e.target.pause();
                }
              }}
            />
            <p className={styles.videoDescription}>Video {index + 1} Description</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideosPage;

