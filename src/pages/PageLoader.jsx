import React, { useEffect, useState } from 'react'

      // Page Loader Component
const PageLoader = () => {
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const timer = setTimeout(() => {
            setLoading(false);
          }, 2000);
          return () => clearTimeout(timer);
        }, []);
      
        if (!loading) return null;
     

  return ( 
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="loader">
              <div className="w-20 h-20 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-red-500 font-semibold">Loading Balaji Wafers...</p>
            </div>
          </div>
        );
};   


export default PageLoader