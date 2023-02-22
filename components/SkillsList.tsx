import Skill from '../components/Skill';
import styles from '../styles/SkillsList.module.css';

const skills: string[] = [
  'JavaScript',
  'React',
  'Typescript',
  'Next.js',
  'Tailwind CSS',
  'Material UI',
  'Bootstrap',
  'Git & Github',
  'PostgreSQL / StepZen',
  'NoSQL / Firebase',
  'Database / Supabase',
  'Apollo client',
];

function SkillsList() {
  return (
    <div className={styles.container}>
      <div className={styles.skillsWrapper}>
        {skills.map((skill) => (
          <Skill key={skill} text={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsList;
