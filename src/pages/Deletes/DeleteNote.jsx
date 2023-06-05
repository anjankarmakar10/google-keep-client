import { RotateCcw, Trash2 } from "react-feather";
import { MdOutlineColorLens } from "react-icons/md";
import Icon from "../Notes/components/Icon";
import useAxios from "../../hooks/useAxios";
import useDeletes from "../../hooks/useDeletes";

const DeleteNote = ({ note }) => {
  const axios = useAxios();
  const { refetch } = useDeletes();

  const handleRestore = async () => {
    try {
      await axios.delete(`/restore/${note?._id}`);
      refetch();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/deletes/${note?._id}`);
      refetch();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <article
      style={{
        backgroundColor: `${note?.color}`,
      }}
      className="border w-full border-[#e0e0e0] rounded-lg relative"
    >
      <div className="py-3 px-4 flex flex-col gap-1 text-[#202124]">
        <div className="flex  justify-between gap-2">
          <h4 className="text-base font-medium">{note?.title}</h4>
        </div>
        <p className="text-sm">{note?.title}</p>
      </div>
      <div className=" mt-1 ml-[-3px] mr-[-3px] mb-[4px] flex  items-center">
        <Icon onClick={handleDelete} icon={<Trash2 size={18} />} />
        <Icon onClick={handleRestore} icon={<RotateCcw size={18} />} />
      </div>
    </article>
  );
};

export default DeleteNote;
