import React, { useState } from 'react';
import Avatar from "../imgs/zwilt-tba-1-01 2.png";
import Iconbtn2 from "../imgs/Vector (9).png";


function ContainerPage() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <div className="flex items-center justify-center gap-0.5em">
                <div className="flex items-center justify-center flex-col text-4xl w-1/2 px-9">
                    <h1
                        className=" font-bold text-5xl  flex items-center text-center justify-center text-black "
                        style={{
                            marginTop: "2em",
                            width: "100%",
                        }}
                    >
                        Finding the right fit
                        <img
                            style={{
                                width: "10%",
                                height: "10%",
                            }}
                            src={Avatar}
                            alt="avatars"
                        />
                        has
                    </h1>
                    <h1 className="font-bold text-5xl text-center text-black">never been easier</h1>
                    <div className="small mt-6 text-black/80">
                        <p className="text-xl text-center mt-6">
                            With our rigorous pre-vetting process, you'll never have to{" "}
                            <br /> worry about finding the ideal candidate ever again
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-white mt-6">
                <div className="input relative flex items-center rounded-xl">
                    <input
                        type="text"
                        className="w-full bg-white text-gray-800 border outline-none rounded-xl py-4 px-4 md:py-6 md:px-6"
                        placeholder="Design"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button className="bg-yellow-500 absolute rounded-xl flex items-center justify-center top-0 right-0 bottom-0 outline-none min-h-full w-20">
                        <img src={Iconbtn2} alt="" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContainerPage;
