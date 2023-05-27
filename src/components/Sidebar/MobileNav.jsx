import { Trash2 } from "react-feather";
import { NavLink } from "react-router-dom";
import { AiOutlineBulb } from "react-icons/ai";
import { BsPin } from "react-icons/bs";
import { useApp } from "../../context/AppProvider";
const MobileNav = () => {
  const { mobileNav, setMobileNav } = useApp();

  const exit = () => {
    setMobileNav(false);
  };

  return (
    <>
      <aside
        className={`${
          mobileNav ? "w-[300px]" : "w-0"
        } py-2 absolute bg-white z-40 top-0 bottom-0 overflow-hidden pl-[15px] nav`}
      >
        <ul className="flex flex-col gap-1 justify-center ">
          <li onClick={exit}>
            <Link title={"Notes"} to={"/"} icon={<AiOutlineBulb size={24} />} />
          </li>
          <li onClick={exit}>
            <Link
              title={"Importants"}
              to={"/importants"}
              icon={<BsPin size={24} />}
            />
          </li>
          <li onClick={exit}>
            <Link
              title={"Deletes"}
              to={"/deletes"}
              icon={<Trash2 size={20} />}
            />
          </li>
        </ul>
      </aside>
    </>
  );
};

const Link = ({ icon, to, title }) => {
  return (
    <NavLink
      to={to}
      title={title}
      className="rounded-full place-content-start mx-1 p-3 hover:bg-[#F1F3F4] text-[#5f6368]  hover:text-black transition-all cursor-pointer flex items-center gap-9"
    >
      {icon}
    </NavLink>
  );
};

export default MobileNav;
