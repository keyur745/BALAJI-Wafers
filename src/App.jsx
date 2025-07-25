import React, { useEffect, useState } from 'react';
import Mainroutes from './routes/Mainroutes';
import Navbar from './components/Navbar';
import PageLoader from './pages/PageLoader';
import Footer from './components/Footer';
import { Router } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);


// Header Component


// Footer Component


// Home Page


// Product Component

// Products Page

// Product Details Page


// About Us Page


// Main App Component
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className='  '>
            <Navbar />

            <div className=' bg-transparent font-pally'>
                  <PageLoader />
                  <main className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000 relative`}>
                  <Mainroutes/>
                  </main>
            </div>
            
            {/* <Footer /> */}
            
      </div>
  );
}

export default App;