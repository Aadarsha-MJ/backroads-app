import Name from "./Name";
import aboutImg from "../images/about.jpeg";

const About = () => {
  return (
    <section className="section" id="about">
      <Name title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a
            href="https://www.facebook.com"
            className="btn"
            aria-label="Placeholder link for future functionality"
          >
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
