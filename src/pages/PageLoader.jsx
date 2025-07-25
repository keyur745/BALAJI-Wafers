import React, { useEffect, useState } from 'react'

      // Page Loader Component
const PageLoader = () => {
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const timer = setTimeout(() => {
            setLoading(false);
          }, 3000);
          return () => clearTimeout(timer);
        }, []);
      
        if (!loading) return null;
     

  return ( 
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="loader flex flex-col items-center justify-center ">
              <div className="w-20 h-20 border-10 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-yellow-300 font-[pally3]  text-9xl text-center">Your <span className='text-red-600'>Test</span> is Loading...</p>
            </div>
          </div>
        );
};   


export default PageLoader