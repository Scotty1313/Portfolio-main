import styles from '../styles/Intro.module.css';

function Intro(): JSX.Element {
  return (
    <div className={styles.introductionWrapper}>
      <section className={styles.introduction}>
        <h4 className={styles.hello}>Hello, I'm</h4>
        <h1 className={styles.name}>Scott</h1>
        <h2 className={styles.developer}>I'm a React developer.</h2>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            I'm a front-end developer specializing in building React applications. 
            I enjoy learning new things, build visually pleasing interfaces, and 
            the sensation I get from solving difficult problems.
            I hope to join a team of talented individuals who are passionate about 
            their job, I can learn from and build great experiences with.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Intro;
