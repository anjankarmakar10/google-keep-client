import { Heart, Trash2 } from "react-feather";
import note from "../../assets/note.svg";
import trash from "../../assets/trash.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-[80px] py-2 px-2 ">
      <ul className="flex flex-col items-center">
        <li>
          <Link to={"/"} icon={<img src={note} alt="" />} />
        </li>
        <li>
          <Link to={"/importants"} icon={<Heart size={20} />} />
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
      className="rounded-full grid place-content-center mx-1 p-3 hover:bg-[#FEEFC3] text-[#707378]  hover:text-black transition-all cursor-pointer"
    >
      {icon}
    </NavLink>
  );
};

export default Sidebar;
