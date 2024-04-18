import { px } from "../../data/data";

const AboutCss = ` ${px}`;

function About() {
  return (
    <div className={AboutCss}>
      <div>
        <h1>
          <span>About</span>
          <span>Me</span>
        </h1>
      </div>
      <div></div>
    </div>
  );
}

export default About;
