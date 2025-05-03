import './App.css'
import Header from './Layout/Header.jsx'
import Footer from './Layout/Footer.jsx'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='flex flex-col bg-[#222831] h-screen md:p-8 p-4 min-w-[320]'>
        <Header/>
        <div className='flex-1 w-full bg-[#393E46] text-white overflow-y-auto py-5'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
