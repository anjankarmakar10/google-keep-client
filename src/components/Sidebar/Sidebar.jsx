import { Heart, Trash2 } from "react-feather";
import note from "../../assets/note.svg";
import trash from "../../assets/trash.svg";
import { NavLink } from "react-router-dom";
import { AiOutlineBulb } from "react-icons/ai";
import { BsPin } from "react-icons/bs";
const Sidebar = () => {
  return (
    <aside className="w-[80px] py-2 px-2 ">
      <ul className="flex flex-col gap-1 items-center">
        <li>
          <Link to={"/"} icon={<AiOutlineBulb size={24} />} />
        </li>
        <li>
          <Link to={"/importants"} icon={<BsPin size={24} />} />
        </li>
        <li>
          <Link to={"/deletes"} icon={<Trash2 size={20} />} />
        </li>
      </ul>
    </aside>
  );
};

const Link = ({ icon, to }) => {
  return (
    <NavLink
      to={to}
      className="rounded-full grid place-content-center mx-1 p-3 hover:bg-[#FEEFC3] text-[#5f6368]  hover:text-black transition-all cursor-pointer"
    >
      {icon}
    </NavLink>
  );
};

export default Sidebar;
