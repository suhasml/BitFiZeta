import React, {useState} from "react"
import "./navbar.css"
import { MdOutlineTravelExplore } from "react-icons/md"
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"
import { Link } from "react-router-dom"


const Navbar = () => {
    const [active, setActive] = useState('navBar')
    // Function to toggle the navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    // Function to close the navbar
    const closeNav = () => {
        setActive('navBar')
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <Link to='/' className="logo flex">
                        <h1><MdOutlineTravelExplore className='icon'/>  Yaan</h1>
                    </Link>
                </div>
                <div className= {active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <Link to='/' className="navLink">Home</Link>
                        </li>

                        <li className="navItem">
                            <Link to="/packages" className="navLink">Packages</Link>
                        </li>

                        <li className="navItem">
                            <Link to="/" className="navLink">Shop</Link>
                        </li>

                        <li className="navItem">
                            <Link to="/" className="navLink">About</Link>
                        </li>

                        <li className="navItem">
                            <Link to='/' className="navLink">News</Link>
                        </li>

                        <li className="navItem">
                            <Link to='/' className="navLink">Contact</Link>
                        </li>

                        <button className="btn">
                            <Link to='/' className="">Sign In/Sign Up</Link>
                        </button>
                    </ul>

                    <div onClick={closeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>

            </header>
        </section>

    );
}

export default Navbar