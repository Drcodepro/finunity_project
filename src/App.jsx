
import './App.css'
import HomePage from './Components/Home/HomePage'

import { useState, useEffect } from 'react';
import Loader from './Components/Other_components/Loader/Loader';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Add event listener for window load
    window.addEventListener('load', handleLoad);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (<>
      {/* {loading ? <Loader/> : <HomePage/>} */}
      <HomePage/>
  </>

  )
}

export default App
