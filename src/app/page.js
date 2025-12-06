'use client';

import { useEffect, useState } from 'react';
import DiplomaCard from '@/components/DiplomaCard';
import styles from './page.module.css';

export default function Home() {
  const [nominaciones, setNominaciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNominaciones = async () => {
      try {
        const response = await fetch('/api/nominaciones');
        const data = await response.json();
        setNominaciones(data.nominaciones);
      } catch (error) {
        console.error('Error cargando nominaciones:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNominaciones();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Cargando diplomas...</div>;
  }

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>🎄 POSADA 2025 🎄</h1>
        <p className={styles.subtitle}>Nominaciones Especiales</p>
      </div>

      <div className={styles.grid}>
        {nominaciones.map((nominacion) => (
          <DiplomaCard key={nominacion.id} nominacion={nominacion} />
        ))}
      </div>

      <div className={styles.footer}>
        <p>Haz click en cada diploma para revelar al nominado</p>
      </div>
    </main>
  );
}
