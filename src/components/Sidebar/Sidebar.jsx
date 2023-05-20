import { Heart } from "react-feather";
import note from "../../assets/note.svg";
import trash from "../../assets/trash.svg";

const Sidebar = () => {
  return (
    <aside className="w-[80px] py-2 px-2 ">
      <ul className="flex flex-col items-center">
        <li>
          <Link icon={<img src={note} alt="" />} />
        </li>
        <li>
          <Link icon={<Heart size={19} />} />
        </li>
        <li>
          <Link icon={<img src={trash} alt="" />} />
        </li>
      </ul>
    </aside>
  );
};

const Link = ({ icon }) => {
  return (
    <div className="rounded-full grid place-content-center mx-1 p-3 hover:bg-[#FEEFC3]  hover:text-black transition-all cursor-pointer">
      {icon}
    </div>
  );
};

export default Sidebar;
