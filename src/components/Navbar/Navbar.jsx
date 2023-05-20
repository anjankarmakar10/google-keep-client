import { Grid, List, Menu, Search, User, ArrowLeft } from "react-feather";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center h-16 border-b p-2">
      <>
        {toggle ? (
          <div
            className={`md:hidden flex border items-center w-full transition-all max-w-3xl rounded-lg h-12 py-3 
              bg-white shadow-md 
            `}
          >
            <div className="cursor-pointer px-1">
              <div
                onClick={() => setToggle(false)}
                className="rounded-full grid place-content-center  p-2 hover:bg-[#F0F0F0] text-[#707378] hover:text-black transition-all cursor-pointer"
              >
                <ArrowLeft color="#707378" />
              </div>
            </div>
            <form className="w-full" action="">
              <input
                autoFocus
                className="bg-transparent outline-none w-full"
                type="text"
                placeholder="Search"
                onBlur={() => setToggle(false)}
              />
            </form>
          </div>
        ) : (
          <div className="flex items-center mr-[90px]">
            <Icon icon={<Menu />} />

            <div className="flex items-center gap-4">
              <img className="w-[30px]" src={logo} alt="" />
              <h2 className=" text-[22px] font-medium text-[#5F6368]">Keep</h2>
            </div>
          </div>
        )}
      </>
      <div
        className={`hidden md:flex border border-transparent items-center w-full transition-all max-w-3xl rounded-lg h-12 py-3 ${
          bg ? "bg-white shadow-md border-gray-200" : "bg-[#f1f3f4]"
        }`}
      >
        <div className="cursor-pointer px-4">
          <Search color="#707378" size={18} />
        </div>
        <form className="w-full" action="">
          <input
            className="bg-transparent outline-none w-full"
            type="text"
            placeholder="Search"
            onFocus={() => setBg(true)}
            onBlur={() => setBg(false)}
          />
        </form>
      </div>
      <div className="flex ml-auto items-center">
        <div onClick={() => setToggle(true)} className="md:hidden">
          <Icon icon={<Search />} />
        </div>
        <>{true ? <Icon icon={<Grid />} /> : <Icon icon={<List />} />}</>
        <Icon icon={<User />} />
      </div>
    </nav>
  );
};

const Icon = ({ icon }) => {
  return (
    <div className="rounded-full grid place-content-center mx-1 p-3 hover:bg-[#F0F0F0] text-[#707378] hover:text-black transition-all cursor-pointer">
      {icon}
    </div>
  );
};

export default Navbar;
