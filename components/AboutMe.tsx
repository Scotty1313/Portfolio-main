import styles from '../styles/AboutMe.module.css';
import Image from 'next/image';
import headshot from '../public/headshot_portfolio.jpg';
import SkillsList from '../components/SkillsList';

interface AboutProps {
  animateAbout: boolean;
}

function AboutMe({ animateAbout }: AboutProps): JSX.Element {
  return (
    <>
      <h2
        className={styles.header}
        id="aboutMe"
        style={{
          opacity: animateAbout ? 1 : 0,
          transform: animateAbout ? 'translateY(0px)' : 'translateY(20px)',
        }}
      >
        About Me
      </h2>
      <section
        className={styles.container}
        style={{
          opacity: animateAbout ? 1 : 0,
          transform: animateAbout ? 'translateY(0px)' : 'translateY(20px)',
        }}
      >
        <div className={styles.leftSection}>
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              I am a front-end React developer from Australia. I started my 
              coding journey in the beginning of 2020 as a hobby and it 
              quickly became practically all I could think about. Since then
              I've been juggling work and family life with my need to learn 
              as much as I can about coding, web development and UI/UX.

              It's been an incredible journey and I've created applications with
              the following technologies:
            </p>
          </div>
          <div className={styles.skillsListWrapper}>
            <SkillsList />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.image}>
            <Image src={headshot} width={399} height={468} />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
