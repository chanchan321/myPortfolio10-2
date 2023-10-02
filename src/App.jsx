import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage'
import About from './Components/About'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './index.css'
import Examplesvg from './Components/svgs/example';

function App() {
 
  return (
    <>
        <Navbar/>
        <Homepage/>
        <About/>
        <Projects/>
        <Contact/>
        {/* <div className='w-full h-[10vh] flex items-center justify-center'> 
          <Examplesvg/>
        </div> */}
    </>
  )
}

export default App
