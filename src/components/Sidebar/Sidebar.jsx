import { Heart, Trash2 } from "react-feather";
import note from "../../assets/note.svg";
import trash from "../../assets/trash.svg";
import { NavLink } from "react-router-dom";
import { AiOutlineBulb } from "react-icons/ai";
import { BsPin } from "react-icons/bs";
import { useApp } from "../../context/AppProvider";
import MobileNav from "./MobileNav";
const Sidebar = () => {
  const { mobileNav } = useApp();

  return (
    <>
      <aside className="w-[90px] py-2 px-2 sm:block hidden">
        <ul className="flex flex-col gap-1 items-center">
          <li title="Notes">
            <Link to={"/"} icon={<AiOutlineBulb size={24} />} />
          </li>
          <li title="Importants">
            <Link to={"/importants"} icon={<BsPin size={24} />} />
          </li>
          <li title="Deletes" className="ml-[-4px]">
            <Link to={"/deletes"} icon={<Trash2 size={20} />} />
          </li>
        </ul>
      </aside>
      <MobileNav />
    </>
  );
};

const Link = ({ icon, to }) => {
  return (
    <NavLink
      to={to}
      className="rounded-full grid place-content-center mr-1 p-3 hover:bg-[#F1F3F4] text-[#5f6368]  hover:text-black transition-all cursor-pointer"
    >
      {icon}
    </NavLink>
  );
};

export default Sidebar;
