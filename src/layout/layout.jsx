import Carousel from "../component/Carousel";

import NavHeader from "../component/Header";

import Avatar1 from "../imgs/image 6.png";
import Avatar2 from "../imgs/portrait-charming-attractive-young-african-american-female-with-voluminous-afro-haircut-with-broad-confident-smile-keeping-her-arms-folded-chest-wearing-striped-nightgown 1.png";

import Iconbtnn from "../imgs/Frame 626653.png";
import Iconbtnn2 from "../imgs/Frame 626624.png";
import Iconbtn from "../imgs/Vector.png";

import Iconbtn2 from "../imgs/Vector (9).png";
import Icon from "../imgs/Vector (15).png";
import Iconn from "../imgs/Frame 626623.png";
import Groove from "../imgs/Frame 626655.png";
import Group from "../imgs/Groupp.png";
import Cardhero from "../component/Cardhero";

import FooterPage from "../component/Footer";
import ContainerPage from "../component/Container1";
import FAQSection from "../component/FAQSection";
import { items1, items2,items3, items4 } from "../Data";
import ArtImg from "../component/ColoredLines";
import ExploreSection from "../component/Explore";

const LayoutPage = () => {
  
  return (
    <div className="bg-white/50">
      <section>
        <NavHeader />

        <ContainerPage />
        <div >
          <Cardhero />
        </div>
      </section>

     <ArtImg/>
     <ExploreSection/>


      <section>

        <div className="howit_worked p-20 ">
          <div className="left flex-1 text-white h-48 flex flex-col gap-5">
            <h1 className=" text-white font-bold gap-4 text-6xl h-48 flex flex-col items-start justify-start text-left">
              How it worked
              <div className="flex flex-row flex-wrap">
                for jason
                <div className=" flex mx-2 items-center overflow-hidden justify-center w-14 h-14 rounded-full">
                  <img src={Avatar1} alt="" />
                </div>
                at
              </div>
              <div>
                <img src={Group} alt="groove" />
              </div>
            </h1>
            <p className=" w-100 text-left text-2xl h-16 font-normal mt-10 text-gray-200">
              Zwilt enabled us to deliver on time and they've <br /> been heavy
              hitters in out corner since.
            </p>
            <div className="actions flex gap-2">
              <button>
                <img src={Iconbtnn} alt="" />
              </button>
              <button>
                <img src={Iconbtnn2} alt="" />
              </button>
            </div>
          </div>
          <div className="right flex1-1 w-[50%]  mt-[100px] pb-20">
            <div className="groove flex gap-4 flex-col">
              <div className="flex gap-4">
                <div className="itext-3xl w-20 h-20 rounded-3xl  overflow-hidden">
                  <img src={Groove} alt="groove" />
                </div>
                <div className="title">
                  <h2 className=" font-bold text-4xl text-white">
                    Jason Makki
                  </h2>
                  <p className="text-gray-500 font-medium text-base">
                    Engineer at GROOVE
                  </p>
                  <p className="text-gray-500 font-medium text-base">
                    San Francisco
                  </p>
                </div>
              </div>

              <div className="content w-[460px] font-normal text-xl mt-10">
                Zwilt enabled us to deliver on time and they've been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they've been heavy hitters in our corner since.Zwilt enabled
                us to deliver on time and they've been heavy hitters.
              </div>
            </div>
          </div>
        </div>
      </section>

   

      <section>
        <div className=" flex p-20 gap-20">
          <div className="left flex flex-col gap-4 flex-1">
            <h1 className=" font-bold text-6xl w-[570px] leading-10 flex items-center text-left justify-center text-black">
              How we ensure you&apos;re in good hands.
            </h1>
            <p className="w-[646px] text-gray-500 font-normal  text-xl ">
              With our comprehensive screening process, we hand-pick highly
              skilled candidates so you can onboard them in a matter of days.
            </p>

            <div className="box flex flex-col gap-1">
              <div className="top text-black flex items-center gap-3 w-[635px] py-2 px-4 rounded-md border-gray-100 border-[1px]">
                <div className="img_cont flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                  <img src={Icon} alt="" className="w-[10%]" />
                </div>
                <p className="text-sm py-4">
                  <span className="font-bold">Step 1:</span> Resume Screening
                </p>
              </div>
              <div className="bottom text-black shadow-md flex flex-col justify-center gap-3 w-[635px] py-6 px-4 rounded-md border-gray-100 border-[1px]">
                <div className="top flex items-center  gap-3">
                  <div className="img_cont flex items-center justify-center w-10 h-10 overflow-hidde rounded-full">
                    <img src={Iconn} alt="" className="w-[10%]" />
                  </div>
                  <p className="text-sm">
                    <span className="font-bold">Step 2:</span> Video Interview
                  </p>
                </div>
                <div className="bottom">
                  <p className=" text-gray-500 font-normal text-base">
                    Candidates are assessed through skill based questions in a
                    virtual setting. Allowing you to gauge personality and
                    cultural fit.
                  </p>
                </div>
              </div>
              <div className="top text-black flex items-center gap-3 w-[635px] py-2 px-4 rounded-md border-gray-100 border-[1px]">
                <div className="img_cont flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                  <img src={Icon} alt="" className="w-[10%]" />
                </div>
                <p className="text-sm h-5 py-6 ">
                  <span className="font-bold text-base">Step 3:</span> Technical
                  Evaluation
                </p>
              </div>
              <div className="top text-black flex items-center gap-3 w-[635px] py-2 px-4 rounded-md border-gray-100 border-[1px]">
                <div className="img_cont flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                  <img src={Icon} alt="" className="w-[10%]" />
                </div>
                <p className="text-sm h-5 py-6">
                  <span className="font-bold text-base">Step 1:</span>{" "}
                  Application Evaluation
                </p>
              </div>
              <div className="top text-black flex items-center gap-3 w-[635px] py-2 px-4 rounded-md border-gray-100 border-[1px]">
                <div className="img_cont flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                  <img src={Icon} alt="" className="w-[10%]" />
                </div>
                <p className="text-sm h-5 py-6">
                  <span className="font-bold text-base">Step 1:</span> Lets get
                  to work
                </p>
              </div>
            </div>
          </div>
          <div className="right flex-1 flex items-end">
            <div className="image_vi relative w-[400px]">
              <div className="img w-40 h-40 rounded-full overflow-hidden absolute flex items-center justify-center -right-14 -top-20">
                <img src={Avatar2} alt="" className="w-full" />
              </div>
              <div className="boxm p-6 w-[400px] mt-10  flex shadow-md ">
                <div className="rectangle w-12 h-80 bg-blue-600/70 rounded-lg flex flex-col gap-8 items-center p-2">
                  <div className="w-8 h-8 flex items-center justify-center border-2 rounded-full border-white open-circle relative">
                    <span className="text-white text-xl font-semibold">1</span>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center border-2 rounded-full border-white open-circle relative opacity-50">
                    <span className="text-white text-xl font-semibold">2</span>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center border-2 rounded-full border-white open-circle relative opacity-50">
                    <span className="text-white text-xl font-semibold">3</span>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center border-2 rounded-full border-white open-circle relative opacity-50">
                    <span className="text-white text-xl font-semibold">4</span>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center border-2 rounded-full border-white open-circle relative opacity-50">
                    <span className="text-white text-xl font-semibold">5</span>
                  </div>
                </div>
                <div className="article mt-2  flex flex-col gap-8 items-center p-2 text-black">
                  <p className=" w-80 ">Tell us something about yourself</p>
                  <p className=" w-80 opacity-50">
                    Give a short brief about your experience
                  </p>
                  <p className=" w-80 opacity-50">
                    Explain about goood curstomer experience
                  </p>
                  <p className=" w-80 opacity-50">
                    How to mange SOP of customers care?
                  </p>
                  <p className=" w-80 opacity-50">
                    Tell us something about yourself
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="journey p-18  text-black ">
          <div className="title text-center text-6xl font-bold">
            Start Your Journey today.
          </div>
          <div className="flex flex-col m-20">
            {items3.map((item) => (
              <div
                key={item.title}
                className="box  flex h-[350px]"
                style={{ backgroundColor: `${item.color}` }}
              >
                <div className="left flex gap-3 p-28">
                  <div className="num w-12 h-12">
                    <img src={item.image2} alt="1" />
                  </div>
                  <div className="article flex flex-col gap-7">
                    <h1 className="text-4xl font-semibold w-96">
                      {item.title}
                    </h1>
                    <p>{item.context}</p>

                    <div className="action flex gap-2 items-center cursor-pointer">
                      <div className="button w-12 h-12 flex items-center justify-center bg-black rounded-2xl">
                        <img src={Iconbtn2} alt="" className="w-[50%]" />
                      </div>
                      <p>Join Now</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="img flex items-center justify-center">
                    <img src={item.image} alt="cards" className="w-[90%] " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="why_choose text-black px-20 py-80 mx-20 flex">
          <div className="left w-[340px] min-w-[300px] p-10 flex flex-col gap-10">
            <div className="title text-5xl font-bold">Why choose Zwilt</div>
            <p className="w-[230px]">
              We take complex hiring processes - and simplify them. Connecting
              you to the world&apos;s highly qualified talent pool.
            </p>
          </div>
          <Carousel />
        </div>
      </section>

      
      <FAQSection/>


      <FooterPage />
    </div>
  );
};

export default LayoutPage;
