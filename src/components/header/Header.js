import { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faMoon } from "@fortawesome/free-solid-svg-icons";
import { IoSunnyOutline } from "react-icons/io5";
import { Link, NavLink} from 'react-router-dom'


const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [mode]);
  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div></div>
      <nav>
        
        <ul className="flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li></li>
          <li></li>
          
        </ul>
        
       
      </nav>
      
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            mode === "dark" ? "light" : "dark"
          );
          setMode(localStorage.getItem("currentMode"));
        }}
        className="mode"
      >
        {mode === "dark"? <span>
          <FontAwesomeIcon icon={faMoon} />
        </span> :
        <span>
        <IoSunnyOutline />
        </span>}
      </button>

      {showModal && (
        <div className="border fixed">
          <ul className="modal">
            <li>
              <button
                onClick={() => {
                  setshowModal(false);
                }}
                className="close"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </li>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/about">About</NavLink>
            </li>
           
            <li>
            <NavLink to="/projects">Projects</NavLink>
            </li>
           
            <li>
            <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
