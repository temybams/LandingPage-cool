import React from 'react'
import Companylogo from "../imgs/Group 626553.png";
function FooterPage() {
    return (
        <footer>
            <div className='footer bg-black/90 flex flex-col gap-20 px-20 py-10'>
                <div className='top'>
                    <div className='box_slant h-[500px] w-full flex items-center justify-center  bg-[#525AA0]'>
                        <h1 className='text-white text-5xl font-bold w-[520px] text-center'>
                            Need a job done, and done well? Get started
                        </h1>
                    </div>
                </div>
                <div className='bottom flex gap-10'>
                    <div className='left w-[400px] flex flex-col gap-10'>
                        <div className='logo'>
                            <img src={Companylogo} alt='Swilt' className='w-[30%]' />
                        </div>
                        <p className='text-sm text-gray-100 w-[260px]'>
                            We take complex hiring processes - and simplify them. Connecting you to the
                            world&apos;s highly qualified talent pool.
                        </p>
                        <p className='uppercase text-gray-300/70 text-sm'>Links and redirect</p>
                        <div className='action flex items-center gap-2'>
                            <button className=' bg-gray-300/10 px-10 rounded-2xl py-2 text-white text-sm'>
                                Hire now
                            </button>
                            <button className=' bg-gray-300/10 px-10 rounded-2xl py-2 text-white text-sm'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                    <div className='right flex flex-col gap-10'>
                        <div className='top'>
                            <div className='text-5xl font-semibold text-white'>
                                Connecting the right people to the right businesses.
                            </div>
                        </div>
                        <div className='bottom text-sm flex flex-row gap-5'>
                            <div className='lists flex-1 flex flex-col gap-4'>
                                <div className='top'>
                                    <div className='header text-xs uppercase text-gray-400'>Platform</div>
                                </div>
                                <div className='bottom text-lg text-white flex flex-col gap-2'>
                                    <div className='text-white'>Find Work</div>
                                    <div>Find Talent</div>
                                    <div>Articles</div>
                                    <div>About Us</div>
                                </div>
                            </div>
                            <div className='lists flex-1 flex flex-col gap-4'>
                                <div className='top'>
                                    <div className='header text-xs uppercase text-gray-400'>Platform</div>
                                </div>
                                <div className='bottom text-lg  text-white flex flex-col gap-2'>
                                    <div>Data Science</div>
                                    <div>It & Networking</div>
                                    <div>Web and Mobile</div>
                                </div>
                            </div>
                            <div className='lists flex-1 flex flex-col gap-4'>
                                <div className='top'>
                                    <div className='header text-xs uppercase text-gray-400'>Help</div>
                                </div>
                                <div className='bottom text-lg text-white flex flex-col gap-2'>
                                    <div>Contact Us</div>
                                </div>
                            </div>
                            <div className='lists flex-1 flex flex-col gap-4'>
                                <div className='top'>
                                    <div className='header text-xs uppercase text-gray-400'>Get in touch@</div>
                                </div>
                                <div className='bottom text-lg text-white flex flex-col gap-2'>
                                    <div>Instagram</div>
                                    <div>Linkedin</div>
                                    <div>Twitter</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='end border-t-2 text-sm border-gray-300/50 py-3 flex items-center justify-between'>
                    <p className='uppercase text-sm text-gray-100'>all rights reserved</p>
                    <div className='others flex items-center gap-5'>
                        <p className='decoration-white decoration-slice'>Privacy Policy</p>
                        <p>Terms and Condition</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterPage
