import React, { useEffect } from "react"
import "./main.css"
import img1 from "../../Assets/Images/hills.jpg"
import img2 from "../../Assets/Images/beaches.jpg"
import img3 from "../../Assets/Images/hikes.jpg"
import { HiOutlineClipboardCheck } from "react-icons/hi"
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Home from "../Home/Home"

// Data for the categories

const data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: "Hill Stations",
        description: "Travel to the Hills to cool down from the summer heat",
        link: "/hills"
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: "Beaches",
        description: "Travel to the Beaches to enjoy the sea and the sun",
        link: "/beaches"
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: "Hike Trails",
        description: "Hike through the trails to enjoy the nature",
        link: "/hikes"
    },

]
const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <div>
            <Navbar />
            <Home />
            <section className="main container section">

                <div className="secTitle">
                    <h3 data-aos='fade-right' className="title">
                        Categories
                    </h3>
                </div>

                <div className="secContent grid">

                    {
                        data.map(({ id, imgSrc, destTitle, description, link }) => {
                            return (
                                <div key={id}
                                    data-aos="fade-up"
                                    className="singleDestination">

                                    <div className="imgDiv">
                                        <img src={imgSrc} alt={destTitle} />
                                    </div>

                                    <div className="cardInfo">
                                        <h4 className="destTile">{destTitle}</h4>
                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>

                                        <Link to={link} className="btn">
                                            Details <HiOutlineClipboardCheck className="icon" />
                                        </Link>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>


            </section>
            <Footer />
        </div>
    );
}

export default Main