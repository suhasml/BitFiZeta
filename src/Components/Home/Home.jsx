import React, { useEffect, useState } from "react"
import "./home.css"
import video from "../../Assets/Videos/video.mp4"
import { LiaSearchLocationSolid } from "react-icons/lia"
import { FiFacebook } from "react-icons/fi"
import { AiOutlineInstagram } from "react-icons/ai"
import { BsListTask } from "react-icons/bs"
import { TbApps } from "react-icons/tb"
import Aos from "aos"
import 'aos/dist/aos.css'



const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const [searchText, setSearchText] = useState('');
    const [generatedText, setGeneratedText] = useState('');

    const handleSearch = () => {
        fetch('http://localhost:5000/generate_text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: searchText }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Generated text:', data.generated_text);
                setGeneratedText(data.generated_text); // Update the generated text state
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop typeof="video/mp4" ></video>

            <div className="homeContent container">
                <div className="textDiv">

                    <span data-aos='fade-up' className="smallText">
                        Yaan Technologies
                    </span>

                    <h1 data-aos='fade-up' className="homeTitle">
                        One stop for all your travel needs
                    </h1>

                </div>

                <div data-aos='fade-up' className="cardDiv block">
                    <div className="destinationInput">
                        <label htmlFor="city">Get your Itinerary</label>
                        <div className="input flex">
                            <input
                                type="text"
                                placeholder="Get Started..."
                                name="city"
                                value={searchText}
                                method="POST"
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <LiaSearchLocationSolid className="icon" onClick={handleSearch} />
                        </div>
                        
                    </div>

                    {/* <div className="dateInput">
                        <label htmlFor="date">Select your Date</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price: </label>
                            <h3 className="total"> Rs.2500</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" min="2500" max="100000" />
                        </div>
                    </div> */}
                    

                    {/* <div className="searchOptions flex">
                        <LiaSearchLocationSolid className="icon" />
                        <span onClick={handleSearch}>Search</span>
                    </div> */}
                    <div className="generatedText">
                        <h2>Your Itinerary:</h2>                        
                        <p>{generatedText}</p>
                    </div>
                </div>

                <div data-aos='fade-up' className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                    </div>

                    <div className="leftIcons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Home