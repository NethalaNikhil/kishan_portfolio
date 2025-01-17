import HomePage from '../app/HomePage/homepage';
import About from '../app/About/about';
import Projects from '../app/Projects/projects';
import Education from '../app/Education/education';
import Clicks from '../app/Clicks/clicks';
import Contact from '../app/Contact/contact';
export default function Home() {
  return (
    <div>
      <HomePage/>
      <About/>
      <Projects/>
      <Education/>
      <Clicks/>
      <Contact/>
    </div>
  );
}
