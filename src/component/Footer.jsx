import React from 'react';
import styled from 'styled-components';
import Companylogo from "../imgs/Group 626553.png";

const FooterContainer = styled.footer`
  background-color: #000;
  opacity: 0.9;
  padding: 20px;
  color: #fff;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
    margin-bottom: 100px;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    margin: 20px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

const Logo = styled.div`
  img {
    width: 100%;
    max-width: 200px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc(100% - 400px);
  }
`;

const Lists = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .header {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .sub-items {
    padding-left: 1rem;
    margin-top: 0.5rem;
  }
`;

const FooterPage = () => {
    return (
        <FooterContainer>
            <TopSection>
                <div className='box_slant h-[500px] w-full flex items-center justify-center  bg-[#525AA0]'>
                    <h1 className='text-white text-5xl font-bold w-[90%] max-w-[520px] text-center'>
                        Need a job done, and done well? Get started
                    </h1>
                </div>
            </TopSection>
            <BottomSection>
                <LeftSection>
                    <Logo>
                        <img src={Companylogo} alt='Swilt' />
                    </Logo>
                    <p className='text-sm text-gray-100'>We take complex hiring processes - and simplify them. Connecting you to the world's highly qualified talent pool.</p>
                    <p className='uppercase text-gray-300/70 text-sm'>Links and redirect</p>
                    <ActionButtons>
                        <button className='bg-gray-300/10 px-6 rounded-2xl py-2 text-white text-sm'>Hire now</button>
                        <button className='bg-gray-300/10 px-6 rounded-2xl py-2 text-white text-sm'>Apply Now</button>
                    </ActionButtons>
                </LeftSection>
                <RightSection>
                    <div className='top'>
                        <div className='text-4xl font-bold text-white'>
                            Connecting the right people to the right businesses.
                        </div>
                    </div>
                    <div className='bottom text-sm flex flex-row gap-8'>
                        <Lists>
                            <li>
                                <div className='header'>Platform</div>
                                <ul className='sub-items'>
                                    <li><a href="#">Find Work</a></li>
                                    <li><a href="#">Find Talent</a></li>
                                    <li><a href="#">Articles</a></li>
                                    <li><a href="#">About Us</a></li>
                                </ul>
                            </li>
                        </Lists>
                        <Lists>
                            <li>
                                <div className='header'>Categories</div>
                                <ul className='sub-items'>
                                    <li><a href="#">Data Science</a></li>
                                    <li><a href="#">IT & Networking</a></li>
                                    <li><a href="#">Web and Mobile</a></li>
                                </ul>
                            </li>
                        </Lists>
                        <Lists>
                            <li>
                                <div className='header'>Help</div>
                                <ul className='sub-items'>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </li>
                        </Lists>
                        <Lists>
                            <li>
                                <div className='header'>Get in touch@</div>
                                <ul className='sub-items'>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">Linkedin</a></li>
                                    <li><a href="#">Twitter</a></li>
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
