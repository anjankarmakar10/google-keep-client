import { Grid, List, Menu, Search, ArrowLeft, LogOut } from "react-feather";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { useAuth } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { useApp } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [onProfile, setOnProfile] = useState(false);
  const { user, logOut } = useAuth();
  const axios = useAxios();

  const navigate = useNavigate();

  const { title, grid, setGrid, setMobileNav } = useApp();

  const handleSignOut = async () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign Out",
    }).then((result) => {
      const signOut = async () => {
        try {
          await logOut();
          setOnProfile(false);
        } catch (error) {
          console.log(error.message);
          return;
        }
      };

      if (result.isConfirmed) {
        signOut();
        Swal.fire("Successfully Sign Out!", "", "success");
      }
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    if (value.trim("") === "") {
      navigate("/");
      return;
    }

    try {
      const { data } = await axios.get(`/search?query=${value}`);

      navigate("/search", { state: { data } });
    } catch (error) {
      console.log(error.message);
    }
  };

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
                className="rounded-full grid place-content-center  p-2 hover:bg-[#F0F0F0] text-[#5f6368] hover:text-black transition-all cursor-pointer"
              >
                <ArrowLeft color="#5f6368" />
              </div>
            </div>
            <form onSubmit={handleSearch} className="w-full" action="">
              <input
                autoFocus
                className="bg-transparent outline-none w-full"
                type="text"
                name="search"
                placeholder="Search"
                onBlur={() => setToggle(false)}
              />
            </form>
          </div>
        ) : (
          <div className="flex items-center mr-[90px]">
            <Icon
              onClick={() => setMobileNav((prev) => !prev)}
              icon={<Menu size={20} />}
            />

            <div className="flex items-center gap-4">
              <img className="w-[30px]" src={logo} alt="" />
              <h2 className=" text-[22px] hover:underline cursor-pointer font-medium text-[#5F6368]">
                {title}
              </h2>
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
          <Search color="#5f6368" size={18} />
        </div>
        <form onSubmit={handleSearch} className="w-full" action="">
          <input
            className="bg-transparent outline-none w-full"
            type="text"
            placeholder="Search"
            name="search"
            onFocus={() => setBg(true)}
            onBlur={() => setBg(false)}
          />
        </form>
      </div>
      <div className="flex ml-auto items-center">
        <div onClick={() => setToggle(true)} className="md:hidden">
          <Icon icon={<Search />} />
        </div>
        <>
          {grid ? (
            <Icon onClick={() => setGrid((prev) => !prev)} icon={<Grid />} />
          ) : (
            <Icon onClick={() => setGrid((prev) => !prev)} icon={<List />} />
          )}
        </>

        <div
          onClick={() => setOnProfile((prev) => !prev)}
          className="p-[1px] border-2 border-transparent hover:border-[#887075] rounded-full cursor-pointer"
        >
          <img className="w-8 rounded-full" src={`${user.photoURL}`} alt="" />
        </div>
        {onProfile && (
          <div
            onClick={() => setOnProfile(false)}
            className="absolute z-40 top-[64px] p-4 right-0 left-0 bottom-0"
          >
            <article className="bg-[#AECBFA] p-4 rounded-lg max-w-xs ml-auto">
              <div className="bg-white rounded-md h-14 flex gap-4 items-center px-3 mb-4 ">
                <img
                  className="w-9 rounded-full"
                  src={`${user.photoURL}`}
                  alt=""
                />
                <div className="text-sm font-medium">
                  <h4>{user?.displayName}</h4>
                  <h5 className="text-xs mt-[-2px]">{user?.email}</h5>
                </div>
              </div>
              <div
                onClick={handleSignOut}
                className="cursor-pointer h-10 gap-6 flex items-center rounded-md pl-9 pr-6   hover:bg-[#cedff8]"
              >
                <LogOut />
                <span className="text-sm font-medium text-[#1f1f1f]">
                  Sign out
                </span>
              </div>
            </article>
          </div>
        )}
      </div>
    </nav>
  );
};

const Icon = ({ icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="rounded-full grid place-content-center mx-1 p-3 hover:bg-[#F0F0F0] text-[#5f6368] hover:text-black transition-all cursor-pointer"
    >
      {icon}
    </div>
  );
};

export default Navbar;
