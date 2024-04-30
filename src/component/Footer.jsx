
import React from 'react';
import styled from 'styled-components';
import Companylogo from "../imgs/Group 626553.png";
const FooterContainer = styled.footer`
  background-color: #000;
  opacity: 0.9;
  padding: 40px;
  color: #fff;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 20px;
  margin-bottom: 100px;
`;

const BottomSection = styled.div`
  display: flex;
  gap: 12px;
  margin: 20px
`;

const LeftSection = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top:20px
  margin-bottom:20px
`;

const Logo = styled.div`
  img {
    width: 30%;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 60px
`;

const Lists = styled.ul`
list-style-type: none;
padding: 10px;
margin: 34px;

li {
  cursor: pointer;
}

a li:hover {
  text-decoration: underline;
}
`;

const FooterPage = () => {
    return (
        <FooterContainer>
            <TopSection>
                <div className='box_slant h-[500px] w-full flex items-center justify-center  bg-[#525AA0]'>
                    <h1 className='text-white text-5xl font-bold w-[520px] text-center'>
                        Need a job done, and done well? Get started
                    </h1>
                </div>
            </TopSection>
            <BottomSection>
                <LeftSection>
                    <Logo>
                        <img src={Companylogo} alt='Swilt' />
                    </Logo>
                    <p className='text-sm text-gray-100 w-[260px]'>We take complex hiring processes - and simplify them. Connecting you to the world&apos;s highly qualified talent pool.</p>
                    <p className='uppercase text-gray-300/70 text-sm'>Links and redirect</p>
                    <ActionButtons>
                        <button className='bg-gray-300/10 px-10 rounded-2xl py-2 text-white text-sm'>Hire now</button>
                        <button className='bg-gray-300/10 px-10 rounded-2xl py-2 text-white text-sm'>Apply Now</button>
                    </ActionButtons>
                </LeftSection>
                <RightSection>
                    <div className='top'>
                        <div className='text-6xl font-bold px-20 text-white'>
                            Connecting the right people to the right businesses.
                        </div>
                    </div>
                    <div className='bottom text-sm flex px-20  py-20 flex-row gap-8 '>
                        <Lists>
                            <li>
                                <div className='header text-base uppercase text-gray-400 '>Platform</div>
                                <ul className='text-lg text-white flex flex-col gap-4'>
                                    <li>Find Work</li>
                                    <li>Find Talent</li>
                                    <li>Articles</li>
                                    <li>About Us</li>
                                </ul>
                            </li>
                        </Lists>
                        <Lists>
                            <li>
                                <div className='header text-base uppercase  text-gray-400'>Categories      </div>
                                <ul className='text-lg text-white flex flex-col gap-2'>
                                    <li>Data Science</li>
                                    <li>It & Networking</li>
                                    <li>Web and Mobile</li>
                                </ul>
                            </li>
                        </Lists>
                        <Lists>
                            <li>
                                <div className='header text-base uppercase text-gray-400'>Help</div>
                                <ul className='text-lg text-white flex flex-col gap-2'>
                                    <li>Contact Us</li>
                                </ul>
                            </li>
                        </Lists>
                        <Lists>
                            <li >
                                <div className='header ttext-base uppercase text-gray-400'>Get in touch@</div>
                                <ul className='text-lg text-white flex flex-col gap-2'>
                                    <li>Instagram</li>
                                    <li>Linkedin</li>
                                    <li>Twitter</li>
                                </ul>
                            </li>
                        </Lists>
                    </div>
                </RightSection>
            </BottomSection>
            <div className='end border-t-2 text-sm border-gray-300/50 py-3 flex items-center justify-between'>
                <p className='uppercase text-sm text-gray-100'>all rights reserved</p>
                <div className='others flex items-center gap-5'>
                    <p className='decoration-white decoration-slice'>Privacy Policy</p>
                    <p>Terms and Condition</p>
                </div>
            </div>
        </FooterContainer>
    );
}

export default FooterPage;
