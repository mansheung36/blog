import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Content from "./Content";
import Footer from "./Footer";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { IsloggedInContext } from './IsloggedInContext';
import { useState } from 'react';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null)

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }

  return (
    <div>

      <BrowserRouter>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossOrigin="anonymous"></script>

        <IsloggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>

          <h1>
            <Link to="/" className='header-logo' >BLOG</Link>
          </h1>

          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid row">
              <span className='col d-flex justify-content-end '>


                {(!isLoggedIn) && <div>
                  <Link to="/register">
                    <button type="button" className="btn btn-outline-secondary mx-1">Sign Up</button>
                  </Link>

                  <Link to="/login">
                    <button type="button" className="btn btn-outline-secondary mx-1">Login</button>
                  </Link>
                </div>}

                {(isLoggedIn)
                  && <button type="button" className="btn btn-outline-secondary mx-1" onClick={handleLogout}>Logout</button>}

              </span>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>


          </Routes>

        </IsloggedInContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
