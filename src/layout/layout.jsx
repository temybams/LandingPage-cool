import Nav from "../component/Nav";
import Carousel from "../component/Carousel";
import Companylogo from "../imgs/Group 626553.png";
import Avatar from "../imgs/zwilt-tba-1-01 2.png";
import Avatar1 from "../imgs/image 6.png";
import Avatar2 from "../imgs/portrait-charming-attractive-young-african-american-female-with-voluminous-afro-haircut-with-broad-confident-smile-keeping-her-arms-folded-chest-wearing-striped-nightgown 1.png";
import Card1 from "../imgs/Group 1094.png";
import Card2 from "../imgs/Group 626351.png";
import Card3 from "../imgs/Group 626358.png";

import Card4 from "../imgs/Group 626340.png";
import Card5 from "../imgs/Group 626552(1).png";
import Card6 from "../imgs/Group 626552.png";

import Num1 from "../imgs/1.png";
import Num2 from "../imgs/2.png";
import Num3 from "../imgs/3.png";
import Iconbtnn from "../imgs/Frame 626653.png";
import Iconbtnn2 from "../imgs/Frame 626624.png";
import Iconbtn from "../imgs/Vector.png";

import Iconbtn2 from "../imgs/Vector (9).png";
import Icon from "../imgs/Vector (15).png";
import Iconn from "../imgs/Frame 626623.png";
import Groove from "../imgs/Frame 626655.png";
import Group from '../imgs/Groupp.png'
import Cardhero from "../component/Cardhero";
import Pic1 from "../imgs/pexels-christina-morillo-1181424-removebg-preview 1.png";
import Pic2 from "../imgs/pexels-puwadon-sangngern-13419240-removebg-preview 1.png";
import Pic3 from "../imgs/image 244.png";
import Pic4 from "../imgs/image 246.png";
import Pic5 from "../imgs/image 248.png";

import Pic6 from "../imgs/image 249 (1).png";
import Pic7 from "../imgs/image 249.png";
import Pic8 from "../imgs/image 250.png";
import Pic9 from "../imgs/image 251.png";
import Pic10 from "../imgs/image 247.png";
import FooterPage from "../component/Footer";
const LayoutPage = () => {
  const items1 = [
    {
      name: "shopify developer",
      image: Pic1,
    },
    {
      name: "magento Developer",
      image: Pic2,
    },
    {
      name: "Data  Scientist",
      image: Pic3,
    },
    {
      name: "webflow Developer",
      image: Pic10,
    },
    {
      name: "dot net Developer",
      image: Pic4,
    },
  ];

  const items2 = [
    {
      name: "UX Designer",
      image: Pic5,
    },
    {
      name: "Graphics Designer",
      image: Pic6,
    },
    {
      name: "Illustration Artist",
      image: Pic7,
    },
    {
      name: "Unreal Engine",
      image: Pic8,
    },
    {
      name: "Cinema 4D",
      image: Pic9,
    },
  ];

  const items3 = [
    {
      title: "Find your next star performer.",
      context: "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
      image: Card1,
      image2: Num1,
      color: "#cccccc34",
    },
    {
      title: "Evaluate to your heart’s content.",
      context: "Assess the candidate through work history, transparent tests and video interviews.",
      image: Card2,
      image2: Num2,
      color: "#FDDD8B",
    },
    {
      title: "Start building your team.",
      context: "Assess the candidate through work history, transparent tests and video interviews.",
      image: Card3,
      image2: Num3,
      color: "#cccccc34",
    },

  ];

  const items4 = [
    {
      title: "Onboard without the risk",
      context1: "We pick the best for you to select.",
      context2: "Thousands of vetted candidates in dozens of categories.",
      context3: "Risk-free resource swapping for the best fit..",
      image: Card4,
      color: "#50589F",
    },
    {
      title: "An open book.",
      context1: " Easy and transparent one-to-one chat with candidates.",
      context2: "Simple and convenient payment methods.",
      context3: "Review past ratings.",
      image: Card5,
      color: "#FDDD8B",
    },
    {
      title: "Stay in the loop.",
      context1: " Track your staff activity down to every minute with screenshots.",
      context2: "Comprehensive timesheet data to process payments.",
      context3: "Create projects to organize and assign tasks more effectively.",
      image: Card6,
      color: "#50589F",
    },
  ];





  return (
    <div className='bg-white/50'>
      <section className=''>
        <div className='nav p-4'>
          <Nav />
        </div>
        <div className='hero_content flex items-center justify-center  w-96'>
          <div className='hero_text flex items-center justify-center flex-col text-4xl w-[50%] px-9'>
            <h1 className=' font-bold text-5xl  flex items-center text-center justify-center text-black '>
              Finding the right fit
              <div className='hero_person_img bg-green flex items-center justify-center w-20 h-20 rounded-full'>
                <img src={Avatar} alt='' />
              </div>
              has
            </h1>

            <h1 className=' font-bold text-5xl  flex items-center text-center justify-center text-black'>
              never been easier
            </h1>

            <div className='small mt-6 text-black/80'>
              <p className='text-xl text-center  mt-6 '>
                with our rigorous pre-vetting process, you&apos;ll never have to <br /> worry about
                finding the ideal candidate ever again
              </p>
            </div>
          </div>
        </div>
        <div className='hero_content_input flex justify-center bg-white mt-6 '>
          <div className='input relative flex items-center rounded-xl '>
            <input
              type='text'
              className='w-full bg-white text-gray-800 border outline-none rounded-xl  py-6'
              placeholder='Design'
            />
            <button className=' bg-yellow-500 absolute rounded-xl flex items-center justify-center top-0 right-0 bottom-0 outline-none min-h-full w-20'>
              <img src={Iconbtn2} alt='' width='10px' />
            </button>
          </div>
        </div>
        <div className='hero_article'>
          <Cardhero />
        </div>
      </section>

      <div className='art_img mt-20'>
        <div className='rectangle'></div>
        <div className='rectangle'></div>
        <div className='rectangle'></div>
        <div className='rectangle'></div>
        <div className='rectangle'></div>
      </div>

      <section>
        <div className='one_step p-20'>
          <div className='one_step-top text-center text-6xl text-black m-20 p-20'>
            Your one-stop marketplace for finding the talent your business needs.
          </div>

          <div className='one_step-bottom text-black gap-10 flex px-20 pb-20 flex-col justify-center'>
            <div className='flex flex-wrap gap-5 items-center justify-center'>
              <div className='article w-96 flex flex-col gap-4'>
                <div className='text-2xl font-semibold '>
                  Find Dev and IT professionals to scale your business.
                </div>
                <div className='icon_x_text grid grid-cols-2 gap-4'>
                  <div className='flex text-sm items-center gap-2'>
                    <i className='fa-solid fa-award icon-primary rotate-180'></i>
                    989 Skils
                  </div>
                  <div className='flex text-sm items-center gap-2'>
                    <i className='fa-solid fa-award icon-primary rotate-180'></i>
                    45 Sub-Categories
                  </div>
                  <div className='flex text-sm items-center gap-2'>
                    <i className='fa-solid fa-award icon-primary rotate-180'></i>
                    1011 Profiles
                  </div>
                </div>
              </div>
              <div className='right-box min-w-96 flex flex-col items-center justify-end  '>
                <div className='box mx-20 bg-white max-w-[700px] min-w-80 p-4  rounded-2xl w-full'>
                  <p className=' text-lg'>It & Development</p>
                  <div className='item flex flex-wrap gap-4 mt-2 p-2'>
                    {items1.map((item) => (
                      <div
                        className='item_box w-[100px] flex flex-col items-center justify-center gap-2'
                        key={item.name}
                      >
                        <div className='img_cont flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full'>
                          <img src={item.image} alt='' />
                        </div>
                        <div className='article w-[70px] font-semibold capitalize text-center'>
                          {item.name}
                        </div>
                      </div>
                    ))}
                    <button className='item-button w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-gray-200'>
                      <img src={Iconbtn} alt='' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap gap-8 items-center  justify-center'>
              <div className='article w-96  flex flex-col gap-4'>
                <div className='text-2xl font-semibold '>
                  Explore Creative individuals with a Keen eye for details
                </div>
                <div className='icon_x_text grid grid-cols-2 gap-4'>
                  <div className='flex text-sm items-center gap-2'>
                    <i className='fa-solid fa-award icon-primary rotate-180'></i>
                    989 Skils
                  </div>
                  <div className='flex text-sm items-center gap-2'>
                    <i className='fa-solid fa-award icon-primary rotate-180'></i>
                    1011 Sub-Categories
                  </div>
                  <div className='flex text-sm items-center gap-2'>
                    <i className='fa-solid fa-award icon-primary rotate-180'></i>
                    1011 Profiles
                  </div>
                </div>
              </div>
              <div className='right-box flex flex-col items-center justify-end  '>
                <div className='box mx-20 bg-white max-w-[700px] min-w-80 p-4  rounded-2xl w-full '>
                  <p className=' text-lg'>Design & Creative</p>
                  <div className='item flex flex-wrap gap-4 mt-2 p-2'>
                    <button className='item-button rotate-180 w-[70px] ml-5 h-[70px] flex items-center justify-center rounded-2xl bg-gray-200'>
                      <img src={Iconbtn} alt='' />
                    </button>
                    {items2.map((item) => (
                      <div
                        className='item_box w-[100px] flex flex-col items-center justify-center gap-2'
                        key={item.name}
                      >
                        <div className='img_cont flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full'>
                          <img src={item.image} alt='' />
                        </div>
                        <div className='article w-[70px] font-semibold capitalize text-center'>
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
            <div className='flex flex-wrap items-center'>
              <div className='article w-96 flex items-center gap-4'>
                <button className='item-button w-[70px]  h-[70px] flex items-center justify-center rounded-2xl bg-black'>
                  <img src={Iconbtn2} alt='' />
                </button>
                <p className='text-black font-semibold text-xl'>Explore More</p>
              </div>
              <div className='right-box flex items-center justify-end '>
                <div className='box mx-20 max-w-[700px] p-4 rounded-xl w-full text-xl'>
                  <span className='font-semibold'>30 More</span> to explore
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='howit_worked p-20  flex flex-row flex-wrap'>
          <div className='left flex-1 text-white h-48 flex flex-col gap-5'>
            <h1 className=' text-white font-bold gap-4 text-6xl h-48 flex flex-col items-start justify-start text-left'>
              How it worked
              <div className='flex flex-row'>
                for jason
                <div className='hero_person_img bg-green flex mx-2 items-center overflow-hidden justify-center w-14 h-14 rounded-full'>
                  <img src={Avatar1} alt='' />
                </div>
                at
              </div>
              <div >
                <img src={Group} alt='groove' />
              </div>
            </h1>
            <p className=' w-100 text-left text-2xl h-16 font-normal mt-10 text-gray-200'>
              Zwilt enabled us to deliver on time and they've <br /> been heavy hitters in out corner
              since.
            </p>
            <div className='actions flex gap-2'>
              <button >
                <img src={Iconbtnn} alt='' />
              </button>
              <button >
                <img src={Iconbtnn2} alt='' />
              </button>
            </div>
          </div>
          <div className='right flex1-1 w-[50%]  mt-[100px] pb-20'>
            <div className='groove flex gap-4 flex-col'>
              <div className='flex gap-4'>
                <div className='itext-3xl w-20 h-20 rounded-3xl  overflow-hidden'>
                  <img src={Groove} alt='groove' />
                </div>
                <div className='title'>
                  <h2 className=' font-bold text-4xl text-white'>Jason Makki</h2>
                  <p className='text-gray-500 font-medium text-base'>Engineer at GROOVE</p>
                  <p className='text-gray-500 font-medium text-base'>San Francisco</p>
                </div>
              </div>

              <div className='content w-[460px] font-normal text-xl mt-10'>
                Zwilt enabled us to deliver on time and they've been heavy hitters in our corner
                since. Zwilt enabled us to deliver on time and they've been heavy hitters in our
                corner since.Zwilt enabled us to deliver on time and they've been heavy hitters.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=' flex p-20 gap-20'>
          <div className='left flex flex-col gap-4 flex-1'>
            <h1 className=' font-bold text-6xl w-[570px] leading-10 flex items-center text-left justify-center text-black'>
              How we ensure you&apos;re in good hands.
            </h1>
            <p className='w-[646px] text-gray-500 font-normal  text-xl '>
              With our comprehensive screening process, we hand-pick highly skilled candidates so
              you can onboard them in a matter of days.
            </p>

            <div className='box flex flex-col gap-1'>
              <div className='top text-black flex items-center gap-3 w-[635px] py-2 px-4 rounded-md border-gray-100 border-[1px]'>
                <div className='img_cont flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full'>
                  <img src={Icon} alt='' className='w-[10%]' />
                </div>
                <p className='text-sm py-4'>
                  <span className='font-bold'>Step 1:</span> Resume Screening
                </p>
              </div>
              <div className='bottom text-black shadow-md flex flex-col justify-center gap-3 w-[635px] py-6 px-4 rounded-md border-gray-100 border-[1px]'>
                <div className='top flex items-center  gap-3'>
                  <div className='img_cont flex items-center justify-center w-10 h-10 overflow-hidde rounded-full'>
                    <img src={Iconn} alt='' className='w-[10%]' />
                  </div>
                  <p className='text-sm'>
                    <span className='font-bold'>Step 2:</span> Video Interview
                  </p>
                </div>
                <div className='bottom'>
                  <p className=' text-gray-500 font-normal text-base'>
                    Candidates are assessed through skill based questions in a virtual setting.
                    Allowing you to gauge personality and cultural fit.
                  </p>
                </div>
              </div>
              <div className='top text-black flex items-center gap-3 w-[635px] py-2 px-4 rounded-md border-gray-100 border-[1px]'>
                <div className='img_cont flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full'>
                  <img src={Icon} alt='' className='w-[10%]' />
                </div>
                <p className='text-sm h-5 py-6 '>
                  <span className='font-bold text-base'>Step 3:</span> Technical Evaluation
                </p>
              </div>
              <div className='top text-black flex items-center gap-3 w-[635px] py-2 px-4 rounded-md border-gray-100 border-[1px]'>
                <div className='img_cont flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full'>
                  <img src={Icon} alt='' className='w-[10%]' />
                </div>
                <p className='text-sm h-5 py-6'>
                  <span className='font-bold text-base'>Step 1:</span> Application Evaluation
                </p>
              </div>
              <div className='top text-black flex items-center gap-3 w-[635px] py-2 px-4 rounded-md border-gray-100 border-[1px]'>
                <div className='img_cont flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full'>
                  <img src={Icon} alt='' className='w-[10%]' />
                </div>
                <p className='text-sm h-5 py-6'>
                  <span className='font-bold text-base'>Step 1:</span> Lets get to work
                </p>
              </div>
            </div>
          </div>
          <div className='right flex-1 flex items-end'>
            <div className='image_vi relative w-[400px]'>
              <div className='img w-40 h-40 rounded-full overflow-hidden absolute flex items-center justify-center -right-14 -top-20'>
                <img src={Avatar2} alt='' className='w-full' />
              </div>
              <div className='boxm p-6 w-[400px] mt-10  flex shadow-md '>
                <div className='rectangle w-12 h-80 bg-blue-600/70 rounded-lg flex flex-col gap-8 items-center p-2'>
                  <div className='w-8 h-8 flex items-center justify-center border-2 rounded-full border-white open-circle relative'>
                    <span className='text-white text-xl font-semibold'>1</span>
                  </div>
                  <div className='w-8 h-8 flex items-center justify-center border-2 rounded-full border-white open-circle relative opacity-50'>
                    <span className='text-white text-xl font-semibold'>2</span>
                  </div>
                  <div className='w-8 h-8 flex items-center justify-center border-2 rounded-full border-white open-circle relative opacity-50'>
                    <span className='text-white text-xl font-semibold'>3</span>
                  </div>
                  <div className='w-8 h-8 flex items-center justify-center border-2 rounded-full border-white open-circle relative opacity-50'>
                    <span className='text-white text-xl font-semibold'>4</span>
                  </div>
                  <div className='w-8 h-8 flex items-center justify-center border-2 rounded-full border-white open-circle relative opacity-50'>
                    <span className='text-white text-xl font-semibold'>5</span>
                  </div>
                </div>
                <div className='article mt-2  flex flex-col gap-8 items-center p-2 text-black'>
                  <p className=' w-80 '>Tell us something about yourself</p>
                  <p className=' w-80 opacity-50'>Give a short brief about your experience</p>
                  <p className=' w-80 opacity-50'>Explain about goood curstomer experience</p>
                  <p className=' w-80 opacity-50'>How to mange SOP of customers care?</p>
                  <p className=' w-80 opacity-50'>Tell us something about yourself</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='journey p-10 m-20 text-black '>
          <div className='title text-center text-6xl font-bold'>Start Your Journey today.</div>
          <div className='flex flex-col m-20'>
            {items3.map((item) => (
              <div
                key={item.title}
                className='box  flex h-[350px]'
                style={{ backgroundColor: `${item.color}` }}
              >
                <div className='left flex gap-3 p-28'>
                  <div className='num w-12 h-12'>
                    <img src={item.image2} alt='1' />
                  </div>
                  <div className='article flex flex-col gap-7'>
                    <h1 className='text-4xl font-semibold w-96'>{item.title}</h1>
                    <p>{item.context}</p>

                    <div className='action flex gap-2 items-center cursor-pointer'>
                      <div className='button w-12 h-12 flex items-center justify-center bg-black rounded-2xl'>
                        <img src={Iconbtn2} alt='' className='w-[50%]' />
                      </div>
                      <p>Join Now</p>
                    </div>
                  </div>
                </div>
                <div className='right'>
                  <div className='img flex items-center justify-center'>
                    <img src={item.image} alt='cards' className='w-[90%] ' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className='why_choose text-black px-20 py-80 mx-20 flex'>
          <div className='left w-[340px] min-w-[300px] p-10 flex flex-col gap-10'>
            <div className='title text-5xl font-bold'>Why choose Zwilt</div>
            <p className='w-[230px]'>
              We take complex hiring processes - and simplify them. Connecting you to the
              world&apos;s highly qualified talent pool.
            </p>
          </div>
          {/* <div className='right box_constrain shadow-lg '>
            <div className='flex  gap-4 '>
              {items4.map((item) => (
                <div
                  className='box bg-white shadow-lg rounded-3xl p-10 flex items-center min-w-[100%]'
                  key={item.title}
                >
                  <div className='left  w-[500px]  flex flex-col gap-12'>
                    <h1 className='text-5xl w-[450px] font-bold'>{item.title}</h1>
                    <div className='lists'>
                      <div className='list flex flex-col gap-3'>
                        <div className='flex gap-5 items-center'>
                          <div
                            className=' w-6 h-2  rounded-md'
                            style={{ backgroundColor: `${item.color}` }}
                          ></div>
                          <p>{item.context1}</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                          <div
                            className=' w-6 h-2 bg-[#50589F] rounded-md'
                            style={{ backgroundColor: `${item.color}` }}
                          ></div>
                          <p>{item.context2}</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                          <div
                            className=' w-6 h-2 rounded-md'
                            style={{ backgroundColor: `${item.color}` }}
                          ></div>
                          <p>{item.context3}</p>
                        </div>
                      </div>
                    </div>
                    <div className='action flex gap-2 items-center cursor-pointer'>
                      <div className=' w-20 h-20 flex items-center justify-center bg-black rounded-[30px]'>
                        <img src={Iconbtn2} alt='' className='w-[40%]' />
                      </div>
                      <p className='text-3xl'>Learn More</p>
                    </div>
                  </div>
                  <div className='right w-[100%] '>
                    <div className='img_sid w-[500px] h-[500px] flex items-center justify-center'>
                      <img src={item.image} alt='' className='w-[200%]' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <Carousel/>
        </div>
      </section>

      <section>
        <div className='faq_cont text-black mx-20 py-40' style={{ backgroundColor: "#f9f9f9" }}>
          <div className='header text-6xl font-bold text-center '>Frequently asked questions</div>
          <div className='questions_cont mt-20 flex flex-col mb-40'>
            <div className='flex rect border-t-2 border-b-2 border-gray-300/50 w-full h-24 '>
              <div className='box w-48 text-lg border-gray-300 border-r-2 flex items-center justify-center'>
                General
              </div>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box flex items-center text-lg px-20 justify-center'>
                I want to work part-time, is that possible
              </div>
            </div>
            <div className='flex rect  border-b-2 border-gray-300/50 w-full h-24 '>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box flex items-center text-lg px-20 justify-center'>
                How long are the average projects?
              </div>
            </div>
            <div className='flex rect  border-b-2 bg-gray-300/50 w-full h-24 '>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box flex items-center text-lg px-20 justify-center'>
                How does the payment works?
              </div>
            </div>
            <div className='flex rect   w-full h-24 '>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box flex items-center text-lg px-20 justify-center'>How much can I earn?</div>
            </div>
            <div className='flex rect border-t-2 border-b-2 border-gray-300/50 w-full h-24 '>
              <div className='box w-48 border-gray-300 text-lg  border-r-2 flex items-center justify-center'>
                General
              </div>
              <div className='box w-48 flex items-center justify-center'>Joining Process</div>
              <div className='box flex text-lg items-center px-20 justify-center'>
                I want to work part-time, is that possible
              </div>
            </div>
            <div className='flex rect  border-b-2 border-gray-300/50 w-full h-24 '>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box flex items-center text-lg px-20 justify-center'>
                How long are the average projects?
              </div>
            </div>
            <div className='flex rect  border-b-2 bg-gray-300/50 w-full h-24 '>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box flex items-center text-lg px-20 justify-center'>
                How does the payment works?
              </div>
            </div>
            <div className='flex rect  border-b-2 border-gray-300/50 w-full h-24 '>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box w-48 flex items-center justify-center'></div>
              <div className='box flex items-center text-lg px-20 justify-center'>
                How long are the average projects?
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterPage />
    </div>
  );
};

export default LayoutPage;




