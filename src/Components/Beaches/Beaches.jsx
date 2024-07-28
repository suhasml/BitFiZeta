import React, { useEffect, useState } from 'react';
import './hills.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import LoadingScreen from '../LoadingScreen/LoadingScreen';



const Beaches = () => {
  const [hillStations, setHillStations] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 })
    fetchHillStation();
  }, [])

  const fetchHillStation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const data = {
        latitude: latitude,
        longitude: longitude,
      };

      fetch('https://beachestop-1-r5369029.deta.app/nearest-beaches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setHillStations(data);
          console.log('Success:', data);
          
        })
        .catch((error) => {
          console.error('Error:', error);
          
        });
    });
  };

  return (
    <div>

      <section>
        <Navbar />
      </section>
      <section className='hills container section'>


        <div className="secTitle">
          <h1 data-aos='fade-right' className="title">
            Beaches Near You
          </h1>
        </div>

        {hillStations.length === 0 ? <LoadingScreen /> : null}
        
          <div className="hillsDiv grid">
            {hillStations.map((hillStation, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="hillStation"
              >
                <div className="ImgDiv">
                  <img src={hillStation.photo_url} alt={hillStation.hill_station} />
                </div>

                <div className="CardInfo">
                  <h2>{hillStation.hill_station}</h2>
                  <p>{Math.round(hillStation.distance * 100) / 100} km away</p>
                </div>
              </div>
            ))}
          </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Beaches 