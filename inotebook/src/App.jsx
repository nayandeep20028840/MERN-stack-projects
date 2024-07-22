import './App.css'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/home' element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
