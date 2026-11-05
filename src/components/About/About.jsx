import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">About the author</h2>

        <p className="about__description">
          Hi! I'm a software engineering student at TripleTen. I created News
          Explorer to help people discover news articles about topics that
          interest them.
        </p>

        <p className="about__description">
          This project was built using React, JavaScript, HTML, and CSS.
        </p>
      </div>
    </section>
  );
}

export default About;
