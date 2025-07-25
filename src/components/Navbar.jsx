import {  NavLink } from "react-router-dom";
import SplitText from "../Animation/SplitText";
// import TextPressure from '../Animation/TextPressure';


const Navbar = () => {
  return (
    <header className="sticky top-0 bg-yellow-300 shadow-md font-[pally1]  text-white z-40 ">
      <div className="container  mx-auto px-40 py-2 flex justify-between items-start">
        <NavLink to="/" className=" text-4xl font-[banana] text-red-700 tracking-[1px] flex justify-start ">  
            <img className="absolute z-90 h-25 w-30 top-2 left-50" src="./BalajiWafersLogo.svg.png" alt="Balaji Wafers" srcset="" />

        {/* Balaji <br /><span className="absolute -bottom-3 text-black text-center w-full font-[banana] font-[100]  tracking-[11px] text-sm">Wafers</span> */}
            {/* <div style={{position: 'relative', letterSpacing: '2px', fontSize: '3rem'}}>
            <TextPressure
            text= "Balaji Wafers"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={false}
            italic={false}
            textColor="red"
            strokeColor="#fff"
            minFontSize={40}
            />
            </div> */}
        </NavLink>

        <nav className=" py-3  text-blue-600 font-[pally3] tracking-[2px] text-sm flex justify-center items-center md:flex  gap-12">
          <NavLink  to="/" className={e => e.isActive ? " px-4 py-0.5 rounded bg-indigo-600 text-yellow-200" : " "}>
            <SplitText
                  text="Home"
                  // className="  text-center"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  // onLetterAnimationComplete={handleAnimationComplete}
                  />
          </NavLink>
          <NavLink  to="/products" className={e => e.isActive ? " px-4 py-0.5 rounded bg-indigo-600 text-yellow-200" : " "}>
            <SplitText
                  text="Product"
                  className="  "
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  // onLetterAnimationComplete={handleAnimationComplete}
                  />
          </NavLink>
          
          <NavLink  to="/about" className={e => e.isActive ? " px-4 py-0.5 rounded bg-indigo-600 text-yellow-200" : " "}>
            <SplitText
                  text="About Us"
                  // className="text-sm   text-center"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  // onLetterAnimationComplete={handleAnimationComplete}
                  />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
