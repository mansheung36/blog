import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import Login from './Login';


function App() {
  return (
    <div>

      <BrowserRouter>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossOrigin="anonymous"></script>

        <h1>
          <Link to="/" className='header-logo' >BLOG</Link>
        </h1>

        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid row">
            <span className='col d-flex justify-content-end '>
              <button type="button" class="btn btn-outline-secondary mx-1">Sign Up</button>
              <Link to="/login">
                <button type="button" class="btn btn-outline-secondary mx-1">Login</button>
              </Link>
            </span>
          </div>
        </nav>

        <Routes>
          
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
