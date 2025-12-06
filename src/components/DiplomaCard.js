'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './DiplomaCard.module.css';

export default function DiplomaCard({ nominacion }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      className={styles.diploma}
      style={{ '--diploma-color': nominacion.color }}
      onClick={() => setIsRevealed(!isRevealed)}
    >
      {!isRevealed ? (
        <div className={styles.hidden}>
          <div className={styles.ribbon}>DIPLOMA</div>
          <h2 className={styles.categoria}>{nominacion.categoria}</h2>
          <p className={styles.clickHint}>✦ Click para revelar ✦</p>
        </div>
      ) : (
        <div className={styles.revealed}>
          <div className={styles.photoContainer}>
            <Image
              src={nominacion.foto}
              alt={nominacion.nombre}
              fill
              className={styles.photo}
            />
          </div>
          <h3 className={styles.nombre}>{nominacion.nombre}</h3>
          <p className={styles.categoria}>{nominacion.categoria}</p>
        </div>
      )}
    </div>
  );
}
