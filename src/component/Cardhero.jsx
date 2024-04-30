import React from 'react';

const Cardhero = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-black mt-7">
      <div className="card_container rounded-xl flex-col py-4 px-10 flex justify-center items-center w-full bg-white">
        <div className="card_container-tab w-fit rounded-md h-10 max-h-10 bg-gray-200/90 text-black flex item-center justify-center pt-12">
          <button className="bg-green-200 font-semibold text-sm rounded-md capitalize px-5 py-4">
            it & Developent
          </button>
          <button className="text-sm capitalize px-5 py-2">it & Developent</button>
        </div>
        <div className="content test-sm h-full w-full flex items-center cursor-pointer justify-between py-10">
          <ul className="list_item flex flex-col gap-4 capitalize">
            <li style={{ transition: "color 0.3s, font-size 0.3s" }} className="hover:text-black hover:text-lg">Phython developer</li>
            <li style={{ transition: "color 0.3s, font-size 0.3s" }} className="hover:text-black hover:text-lg">shopify Developer</li>
            <li style={{ transition: "color 0.3s, font-size 0.3s" }} className=" hover:text-black hover:text-lg"> MERN stack Developer</li>
            <li style={{ transition: "color 0.3s, font-size 0.3s" }} className="hover:text-black hover:text-lg">Full Stack Developer</li>
          </ul>
          <ul className="list_item flex gap-4 flex-col capitalize">
            <li style={{ transition: "color 0.3s, font-size 0.3s" }} className="hover:text-black hover:text-lg">Data Scientist</li>
            <li style={{ transition: "color 0.3s, font-size 0.3s" }} className="hover:text-black hover:text-lg">Front End Developer</li>
            <li style={{ transition: "color 0.3s, font-size 0.3s" }} className="hover:text-black hover:text-lg"> Shopify Developer</li>
            <li style={{ transition: "color 0.3s, font-size 0.3s" }} className="hover:text-black hover:text-lg">Python Developer</li>
          </ul>
          <ul className="list_item gap-4 flex flex-col capitalize">
            <li style={{ transition: "color 0.3s, font-size 0.3s" }} className="hover:text-black hover:text-lg">shopify Developer</li>
            <li style={{ transition: "color 0.3s, font-size 0.3s" }} className="hover:text-black hover:text-lg">Phython developer</li>
            <li style={{ transition: "color 0.3s, font-size 0.3s" }} className="hover:text-black hover:text-lg">Full Stack Developer</li>
            <li style={{ transition: "color 0.3s, font-size 0.3s" }} className=" hover:text-black hover:text-lg"> Explore more</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cardhero;

