import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import AboutUs from './components/about/AboutUs';
import Pricing from './components/pricing/Pricing';


function App() {
 return (
  <>
   <body>
    <Header />
    <main>
     <Intro />
     <Skills />
     <AboutUs />
     <Pricing />
    </main>
    <footer></footer>
   </body>
  </>
 );
}

export default App;
