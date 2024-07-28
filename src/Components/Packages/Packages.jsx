// import React, { useEffect, useState } from 'react';
// import './hills.css';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import LoadingScreen from '../LoadingScreen/LoadingScreen';



// const Packages = () => {
//   const [hillStations, setHillStations] = useState([]);

//   useEffect(() => {
//     Aos.init({ duration: 2000 })
//     fetchHillStation();
//   }, [])

//   const fetchHillStation = () => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;

//       const data = {
//         latitude: latitude,
//         longitude: longitude,
//       };

//       fetch('https://beachestop-1-r5369029.deta.app/nearest-beaches', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           setHillStations(data);
//           console.log('Success:', data);
          
//         })
//         .catch((error) => {
//           console.error('Error:', error);
          
//         });
//     });
//   };

//   return (
//     <div>

//       <section>
//         <Navbar />
//       </section>
//       <section className='hills container section'>


//         <div className="secTitle">
//           <h1 data-aos='fade-right' className="title">
//             Beaches Near You
//           </h1>
//         </div>

//         {hillStations.length === 0 ? <LoadingScreen /> : null}
        
//           <div className="hillsDiv grid">
//             {hillStations.map((hillStation, index) => (
//               <div
//                 key={index}
//                 data-aos="fade-up"
//                 className="hillStation"
//               >
//                 <div className="ImgDiv">
//                   <img src={hillStation.photo_url} alt={hillStation.hill_station} />
//                 </div>

//                 <div className="CardInfo">
//                   <h2>{hillStation.hill_station}</h2>
//                   <p>{Math.round(hillStation.distance * 100) / 100} km away</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//       </section>

//       <section>
//         <Footer />
//       </section>
//     </div>
//   );
// }

// export default Packages 
import React, { useEffect, useState } from 'react';
import './hills.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import LoadingScreen2 from '../LoadingScreen/LoadingScreen2';

const Packages = () => {
  const [hillStations, setHillStations] = useState([]);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    fetchHillStation();
  }, []);

  const fetchHillStation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Fetch the initial destinations list or use any method to get your list of destinations.
      // You can customize this part based on your data source.
      const destinations = ["Goa", "Udupi", "Kudremukh", "Chikmagalur", "Ooty and Munnar"];

      // Set the initial list of destinations in state and open the modal.
      setSelectedDestinations(destinations);
      setIsModalOpen(true);
    });
  };

  const handleDestinationSelect = (destination) => {
    // Toggle the selected state for the destination.
    if (selectedDestinations.includes(destination)) {
      setSelectedDestinations(selectedDestinations.filter((d) => d !== destination));
    } else {
      setSelectedDestinations([...selectedDestinations, destination]);
    }
  };

  const handleModalClose = () => {
    // Close the modal and fetch the hill stations based on the selected destinations.
    setIsModalOpen(false);
    fetchHillStationsBasedOnDestinations(selectedDestinations);
  };

  const fetchHillStationsBasedOnDestinations = (destinations) => {
    // Send a POST request to your API with the selected destinations and fetch hill stations.
    // Update the state with the fetched hill stations.
    // You'll need to implement this part on the server-side.

    // This is a placeholder code for the example.
    
    const data = {
      "place1": destinations[0],
      "place2": destinations[1],
      "place3": destinations[2],
      "place4": destinations[3],
      "place5": destinations[4]
    };

    //make the data dynamic based on the length of the array
    // for (let i = 0; i < destinations.length; i++) {
    //   const data = {
    //     [`place${i + 1}`]: destinations[i]
    //   };
    // }

    fetch('https://recommnder-1-g2490965.deta.app/recommend', {
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
  };

  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section className="hills container section">
        <div className="secTitle">
          <h1 data-aos="fade-right" className="title">
            Packages For You
          </h1>
        </div>

        {/* {hillStations.length === 0 ? <LoadingScreen /> : null} */}

        <div className="hillsDiv grid">
          {hillStations.map((hillStation, index) => (
            <div key={index} data-aos="fade-up" className="hillStation">
              <div className="ImgDiv">
                <img src={hillStation.photo_url} alt={hillStation.hill_station} />
              </div>

              <div className="CardInfo">
                <h2>{hillStation.package_name}</h2>
                <p>{hillStation.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="destination-modal">
          <div className="destination-modal-content">
            <h2>Select 5 Destinations</h2>
            <ul>
              {selectedDestinations.length === 0 ? <LoadingScreen2 /> : null}
              {selectedDestinations.map((destination) => (
                <li key={destination}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedDestinations.includes(destination)}
                      onChange={() => handleDestinationSelect(destination)}
                    />
                    {destination}
                  </label>
                </li>
              ))}
            </ul>
            <button onClick={handleModalClose}>Submit</button>
          </div>
        </div>
      )}

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Packages;
