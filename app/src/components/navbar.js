import { NavLink, Link } from 'react-router-dom';
import css from '../index.css'
import { IoCodeDownloadOutline } from "react-icons/io5";
import { GrDocumentDownload } from "react-icons/gr";
import downloadcv from "../assets/download/Geography Guide 2019 - English.pdf"

function Navbar() {
 
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.


    let unactiveClassName = "font-prata m-3 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-black after:opacity-0 after:transition after:duration-200 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100";

    let activeClassName = "          font-prata m-3 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-black after:opacity-0 after:transition after:duration-200 after:ease-in-out hover:after:translate-y-0 after:opacity-100";
    // here we add the TAILWIND ^^

  return (

    <div>     
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-2xl font-prata">Alice</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

            <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : unactiveClassName }>
                Me
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName : unactiveClassName }>
                Contact
            </NavLink>
        </nav>

        <a href={downloadcv} download>
        <div class="group text-gray-500 hover:text-emerald-900 transition ease-in-out duration-200 font-lato">Download CV<span aria-hidden="true" class=" inline-block translate-y-0 group-hover:translate-y-2 transition-transform ease-in-out duration-200"><GrDocumentDownload className="m-1 align-bottom" size={20}/></span></div>
        </a>
  </div>
</header>
    </div>


  );

}
export default Navbar;
