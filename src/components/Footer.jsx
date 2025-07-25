import TextPressure from '../Animation/TextPressure';


const Footer = () => {
  return (
    <footer className="bg-blue-600 absolute mt-20 z-40  w-full flex items-end text-white  rounded-tl-4xl rounded-tr-4xl">
      <div className="container  mx-auto px-4 text-center">
            <div >
            <TextPressure
            text= "Balaji Wafers"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={false}
            textColor="yellow"
            strokeColor="blue"
            minFontSize={36}
            />
            </div>

        {/* <p>&copy; {new Date().getFullYear()} Balaji Wafers. All rights reserved.</p> */}
      </div>
    </footer>
  );
};

export default Footer