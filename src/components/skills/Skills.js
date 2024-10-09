import "./Skills.css";
export default function Skills() {
  return (
    <section className="skills" id="skillSection">
      <p>My Skills</p>
      <div className="skillContainer">
        <HtmlSkill />
        <CssSkill />
        <JavascriptSkill />
      </div>
    </section>
  );
}
function HtmlSkill() {
  return (
    <div className="SkillBox">
      <div className="skillLogo">
        <i className="fa-brands fa-html5"></i>
      </div>
      <p>HTML</p>
      <p>Building structured, accessible web pages with semantic markup.</p>
      <div className="percentage_Container">
        <div className="percent html">70%</div>
      </div>
    </div>
  );
}
function CssSkill() {
  return (
    <div className="SkillBox">
      <div className="skillLogo">
        <i className="fa-brands fa-css3-alt"></i>
      </div>
      <p>CSS</p>
      <p>
        Styling websites with modern layouts, animations, and responsive
        designs.
      </p>
      <div className="percentage_Container">
        <div className="percent css">40%</div>
      </div>
    </div>
  );
}
function JavascriptSkill() {
  return (
    <div className="SkillBox">
      <div className="skillLogo">
        <i className="fa-brands fa-js"></i>
      </div>
      <p>JAVASCRIPT</p>
      <p>Creating dynamic, interactive user experiences with ES6+ features.</p>
      <div className="percentage_Container">
        <div className="percent js">50%</div>
      </div>
    </div>
  );
}
