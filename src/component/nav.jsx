import Companylogo from "../imgs/Group 626553.png";

const Nav = () => {
  return (
    <div>
      <div className="nav_container flex justify-between mx-16 items-center capitalize mt-2 p-4 rounded-xl bg-black text-white">
        <div className="logo">
          <img src={Companylogo} alt="Swilt" className="w-[80%]" />
        </div>
        <div className="nav_options flex items-center gap-8 capitalize">
          <button>Find work</button>
          <button>Find talent</button>
          <button>Articles</button>
          <button>About us</button>
          <button>Contact us</button>
        </div>
        <div className="nav_actions flex items-center gap-4">
          <button>log in</button>
          <button className="bg-white rounded-xl h-10 text-black px-4">
            join now
          </button>
        </div>

        <div className="hidden_menu hidden"></div>
      </div>
    </div>
  );
};

export default Nav;
