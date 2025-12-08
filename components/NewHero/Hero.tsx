// Hero.tsx
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          <span>Royal Fade</span>
          <span>Experience the art</span>
          <span>of grooming.</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;