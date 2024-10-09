import "./About.css";
export default function About() {
  return (
    <section className="about" id="about">
      <p>About Me</p>
      <div className="aboutContainer">
        <AboutPhoto />
        <AboutExperience />
      </div>
    </section>
  );
}
function AboutPhoto() {
  return (
    <div className="foto">
      <img src="images/inafoto.jpeg" alt="foto" />
    </div>
  );
}
function AboutExperience() {
  return (
    <div class="experience">
      <p>
        My name is Xhanina Çela, and I hold a Bachelor's Degree in Business
        Informatics. I have completed specialized training in React JS at
        icubINFO Academy, where I gained a solid foundation in front-end
        development.
      </p>
      <p>
        I have worked on various web development projects, including a MERN Real
        Estate Application, a Travel List Application, and a Shopping Cart
        Application. These experiences allowed me to hone my skills in React,
        JavaScript, and full-stack development using the MERN stack. In my free
        time, I enjoy playing volleyball and listening to music, which help me
        maintain a balanced and active lifestyle.
      </p>
    </div>
  );
}
