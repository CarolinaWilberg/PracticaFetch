import './App.css'
//import { useState } from 'react'
//import { Contador } from './components/Contador/Contador'
//import { Cursor } from './components/Cursor/Cursor'
//import { Header } from './components/Header/Header'
//import { CardContainer } from './components/CardContainer/CardContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Characters, About, Character, Error404, Login } from './pages'
import { Navbar } from './components/Navbar/Navbar'
import { ProtectedRoutes } from './components/ProtectedRoutes/ProtectedRoutes'
import { Profile } from './components/Profile/Profile'


function App() {
  //const [count, setCount] = useState(0)
  let user = true

  return (
    <div className="App">
      {/*<header>Contador de Clicks</header>
      <Contador />*/}
      {/*<Cursor/>*/}
      {/*<Header/>
      <CardContainer />*/}
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/login" element={
            <ProtectedRoutes user={user} path="/profile" switchLogin={true}>
              <Login/>
            </ProtectedRoutes>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/" element={<Home/>}/>
            <Route
              path="/characters"
              element={
              <ProtectedRoutes user={user} path="/login" switchLogin={false}>
                <Characters/>
              </ProtectedRoutes>
            }/>
            {/*<Route path="/characters" element={<Characters/>}/>*/}
            <Route path="/characters/:id" element={<Character/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App
