import React from 'react';

function FAQSection() {
    return (
        <section>
            <div
                className="faq_cont text-black mx-10 py-40 "
                style={{ backgroundColor: "#f9f9f9" }}
            >
                <div className="header text-6xl font-bold text-center ">
                    Frequently asked questions
                </div>
                <div className="questions_cont mt-20 flex flex-col mb-40">
                    <div className="flex rect border-t-2 border-b-2 border-gray-300/50 w-full h-24 ">
                        <div className="box w-48 text-lg border-gray-300 border-r-2 flex items-center justify-center">
                            General
                        </div>
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box flex items-center text-lg px-20 justify-center">
                            I want to work part-time, is that possible
                        </div>
                    </div>
                    <div className="flex rect  border-b-2 border-gray-300/50 w-full h-24 ">
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box flex items-center text-lg px-20 justify-center">
                            How long are the average projects?
                        </div>
                    </div>
                    <div className="flex rect  border-b-2 bg-gray-300/50 w-full h-24 ">
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box flex items-center text-lg px-20 justify-center">
                            How does the payment works?
                        </div>
                    </div>
                    <div className="flex rect   w-full h-24 ">
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box flex items-center text-lg px-20 justify-center">
                            How much can I earn?
                        </div>
                    </div>
                    <div className="flex rect border-t-2 border-b-2 border-gray-300/50 w-full h-24 ">
                        <div className="box w-48 border-gray-300 text-lg  border-r-2 flex items-center justify-center">
                            General
                        </div>
                        <div className="box w-48 flex items-center justify-center">
                            Joining Process
                        </div>
                        <div className="box flex text-lg items-center px-20 justify-center">
                            I want to work part-time, is that possible
                        </div>
                    </div>
                    <div className="flex rect  border-b-2 border-gray-300/50 w-full h-24 ">
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box flex items-center text-lg px-20 justify-center">
                            How long are the average projects?
                        </div>
                    </div>
                    <div className="flex rect  border-b-2 bg-gray-300/50 w-full h-24 ">
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box flex items-center text-lg px-20 justify-center">
                            How does the payment works?
                        </div>
                    </div>
                    <div className="flex rect  border-b-2 border-gray-300/50 w-full h-24 ">
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box flex items-center text-lg px-20 justify-center">
                            How long are the average projects?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
