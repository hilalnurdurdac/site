import Link from 'next/link';
import styles from '../styles/Photos.module.css'; // Ensure correct CSS file
import { useState } from 'react';

function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photoIndex) => {
    setSelectedPhoto(photoIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextPhoto = () => {
    setSelectedPhoto((prev) => (prev + 1) % 10);
  };

  const goToPreviousPhoto = () => {
    setSelectedPhoto((prev) => (prev === 0 ? 9 : prev - 1));
  };

  return (
    <div className={styles.container}>
      <h1>Photos</h1>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/videos">Videos</Link>
      </nav>

      <div className={styles.photoGrid}>
        {[...Array(9)].map((_, index) => (
          <div key={index} className={styles.photoContainer}>
            <img
              className={styles.photo}
              src={`/photos/photo${index + 1}.jpg`}
              alt={`Photo ${index + 1}`}
              onClick={() => openModal(index)}
            />
            <p className={styles.photoDescription}>Photo {index + 1} Description</p>
          </div>
        ))}

        <div className={styles.addPhotoContainer}>
          <button className={styles.addButton}>+</button>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <span className={styles.close} onClick={closeModal}>&times;</span>
          <img
            className={styles.modalContent}
            src={`/photos/photo${selectedPhoto + 1}.jpg`}
            alt={`Photo ${selectedPhoto + 1}`}
          />
          <div className={styles.caption}>Photo {selectedPhoto + 1} Description</div>
          <button className={styles.prev} onClick={goToPreviousPhoto}>&#10094;</button>
          <button className={styles.next} onClick={goToNextPhoto}>&#10095;</button>
        </div>
      )}
    </div>
  );
}

export default PhotosPage;

