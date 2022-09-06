import BlurbBox from '../components/blurbBox';
import './skills.css';

const Skills = () => {

  const skillList = [
    "CSS",
    "HTML",
    "Ruby",
    "Rails",
    "MySql",
    "JavaScript",
    "React",
    "Redux",
    "Java",
    "Casandra",
    "SpringBoot",
    ".NET",
    "Python",
    "AWS",
    "Node",
    "JUnit"
  ]
  
  return (
    <>
      <section className="skills">
        <div>
          <ul className="skillList">
            { skillList.map((skill, index) => {
                return <li key={index}>{skill}</li>
            }) }
          </ul>
        </div>
        <div className="projectMosaic">
          <p>project image</p>
        </div>
      </section>
      <BlurbBox title="skills" blurb="a little bit of how I use the skill day to day" />
    </>
  );
};

export default Skills;