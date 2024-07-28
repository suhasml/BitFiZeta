import React, { useEffect } from "react"
import "./footer.css"
import video2 from "../../Assets/Videos/video2.mp4"
import { FiSend, FiChevronRight } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos='fade-up' className="text">
                    <small>Connect with us</small>
                    <h2>Travel and share</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos='fade-up' type="text" placeholder="Enter Email Address"/>
                        <button data-aos='fade-up' className="btn flex" type="submit">
                            SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#top"className="logo flex">
                                <MdOutlineTravelExplore className="icon"/> Yaan
                            </a>
                        </div>

                        <div data-aos='fade-up' className="footerParagraph">
                            Yaan is a travel blog website that allows users to share their travel experiences with the world.
                        </div>

                        <div data-aos='fade-up' className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                        </div>
                    </div>
                    <div className="footerLinks grid">
                        {/* 1st Group */}
                        <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
                            <span className="groupTitle">
                                OUR COMPANY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Company
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>

                        </div>
                         {/* 2st Group */}
                         <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
                            <span className="groupTitle">
                                OUR PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                OLA
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Uber
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rahul Ram
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Trip Advisor
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Suhas ML
                            </li>

                        </div>
                        
                        <div className="footerDiv flex">
                            <small>Travel at your Fingertips</small>
                            <small>© 2023 Yaan. All rights reserved</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer

// 1:16:28 / 2:07:58 time in the video