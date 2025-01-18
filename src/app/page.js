import HomePage from '../app/HomePage/homepage';
import About from '../app/About/about';
import Projects from '../app/Projects/projects';
import Education from '../app/Education/education';
import Clicks from '../app/Clicks/clicks';
import Contact from '../app/Contact/contact';

export default function Home() {
  return (
    <div>
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="clicks">
        <Clicks />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
