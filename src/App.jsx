import { Element, scroller } from 'react-scroll'
import Header from './components/Header.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Certificates from './sections/Certificates.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'

export default function App(){
  return (
    <div>
      <Header onNav={(target)=> scroller.scrollTo(target, {smooth:true, offset: -70, duration:600})} />
      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="certificates"><Certificates /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="contact"><Contact /></Element>
    </div>
  )
}
