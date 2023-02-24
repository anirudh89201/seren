import React from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
const NavBar = () => {
  const nav=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('token')
    nav('/')
  }
  let location = useLocation();
  React.useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div className="navv" id="navmain">
      <nav className="navbar navbar-expand-lg  bg-transparent" id="navmain">
        <div className="container-fluid">
          <Link className="navbar-brand" id="navh1" to='/' >
            Serene
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link id="navl2"
                  className={` nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link id="navl2"
                  className={` nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            { !localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link
                  className="btn btn-primary mx-2"
                  to="/login"
                  role="button" 
                  id="navl1"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-2"
                  to="/signup"
                  role="button"
                  id="navl1"
                >
                  Signup
                </Link>
              </form>
            ): <button id="navl1" className="btn btn-primary" onClick={handleLogout}>Log Out</button>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
