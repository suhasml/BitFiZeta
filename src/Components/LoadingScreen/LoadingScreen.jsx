// create loading screen component to show when loading data from react-spinner
import { useRive } from 'rive-react';
import './loadingscreen.css';
import loader from './rive/fetching-location.riv';

const LoadingScreen = () => {
  const { RiveComponent } = useRive({
    src: loader,
    autoplay: true,

  });

  return (
    <div className='loadingScreen'>
      <div className="RiveDiv">
        <RiveComponent />
      </div>
    </div>
  );
}

export default LoadingScreen;