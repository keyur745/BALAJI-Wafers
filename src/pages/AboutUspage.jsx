import Footer from "../components/Footer";

const AboutUspage = () => {

  return (
    <section className=" bg-gray">
      <div className="container mx-auto ">

          <div className=" w-full about-image">
            <img src=" https://www.balajiwafers.com/cdn/shop/files/How_We_Do_It_Banner_Banner.jpg?v=1749541734&width=1500" alt="Balaji Wafers Team" className="rounded-lg shadow-md w-full h-auto" />
          </div>

          <h1 className="mt-10 mb-24 text-center font-[pally3] text-6xl text-blue-700  ">Ever seen a potato <br /> turn into a wafer?</h1>

          <div className="w-full flex flex-col gap-32 justify-center  mb-40 px-20 ">

             <div className="card flex justify-center h-fit gap-7">
                  <img className="w-1/2 object-cover rounded-2xl" src="./Aboutus_1.png" alt="" srcset="" />
                  <div className="text h-fit flex flex-col gap-5">
                        <span className="bg-cyan-100 w-fit px-3 py-1.5 rounded-xl text-2xl font-[pally3] text-blue-900">Stage 01</span>
                        <h2 className="text-3xl font-[pally3]">Prepping the potatoes</h2>
                        <ul className="flex flex-col gap-5 justify-start font-[pally1] text-lg">
                              <li>🔹  Trucks unload farm-fresh potatoes straight from the fields</li>
                              <li>🔹  Only the plumpest spuds pass our quality check</li>
                              <li>🔹  Extra potatoes are stashed in cool silos for future use</li>
                              <li>🔹  The rest are washed, peeled, and cleaned to perfection</li>
                              <li>🔹  Each potato is sliced wafer-thin with the perfect thickness</li>
                              <li>🔹  Every slice is checked—if it’s not just right, it’s out</li>
                        </ul>
                  </div>
             </div>

             <div className="card flex justify-center h-fit gap-7">
                  <img className="w-1/2 object-cover rounded-2xl" src="./Aboutus_2.png" alt="" srcset="" />
                  <div className="text h-fit flex flex-col gap-5">
                        <span className="bg-cyan-100 w-fit px-3 py-1.5 rounded-xl text-2xl font-[pally3] text-blue-900">Stage 02</span>
                        <h2 className="text-3xl font-[pally3]">Firing up the fryer</h2>
                        <ul className="flex flex-col gap-5 justify-start font-[pally1] text-lg">
                              <li>🔹  Wafer slices dive into bubbling hot oil</li>
                              <li>🔹  They’re cooked to the signature golden perfection</li>
                              <li>🔹  Any slice that doesn’t meet the mark is tossed aside</li>
                              <li>🔹  Bold seasonings coat the wafers for a flavorful punch</li>
                              <li>🔹  Wafers are cooled to ensure they’re not too hot to handle</li>
                              <li>🔹  Every slice is checked—if it’s not just right, it’s out</li>
                        </ul>                     
                  </div>
             </div>

             <div className="card flex justify-center h-fit gap-7">
                  <img className="w-1/2 object-cover rounded-2xl" src="./Aboutus_3.png" alt="" srcset="" />
                  <div className="text h-fit flex flex-col gap-5">
                        <span className="bg-cyan-100 w-fit px-3 py-1.5 rounded-xl text-2xl font-[pally3] text-blue-900">Stage 03</span>
                        <h2 className="text-3xl font-[pally3]">Rolling into packets</h2>
                        <ul className="flex flex-col gap-5 justify-start font-[pally1] text-lg">
                              <li>🔹  Wafers are packed fresh by automated lines</li>
                              <li>🔹  Bags are sealed airtight to lock in crunch</li>
                              <li>🔹  Every batch is inspected for quality</li>
                              <li>🔹  Cartons are filled automatically</li>
                              <li>🔹  Loading trucks full of crispy wafers</li>
                              <li>🔹 Wafers are cooled to ensure they’re not too hot to handle</li>
                        </ul>
                  </div>
             </div>

          </div>
         
      </div>
      <Footer />
    </section>
  );
};

export default AboutUspage