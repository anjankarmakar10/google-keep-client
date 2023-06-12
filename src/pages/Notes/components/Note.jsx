import { useEffect, useRef, useState } from "react";
import { MoreVertical, Trash2 } from "react-feather";
import { BsPin, BsFillPinFill } from "react-icons/bs";
import { MdOutlineColorLens } from "react-icons/md";
import Icon from "./Icon";
import Colors from "./Colors";
import useAxios from "../../../hooks/useAxios";
import useNotes from "../../../hooks/useNotes";
import usePins from "../../../hooks/usePins";
import Swal from "sweetalert2";

const Note = ({ note }) => {
  const [pin, setPin] = useState(false);
  const [color, setColor] = useState("#fff");
  const [isColor, setIsColor] = useState(false);
  const axios = useAxios();
  const { refetch } = useNotes();
  const { refetch: refetchPins } = usePins();

  useEffect(() => {
    setPin(note?.pin);
    setColor(note?.color);
  }, []);

  const onColorChange = async (color) => {
    setColor(color);
    await axios.patch(`/notes/${note._id}`, { pin, color });
  };

  const handleUpdate = async (pin, color) => {
    await axios.patch(`/notes/${note._id}`, { pin, color });
    refetchPins();
    refetch();
  };

  const handleDelete = async () => {
    await axios.delete(`/notes/${note._id}`);
    refetch();
    refetchPins();
  };

  const handleUpdateNote = async () => {
    Swal.fire({
      title: "",
      html:
        `<input id="titleInput" value='${note?.title}' class="m-0 border outline-none">` +
        `<textarea id="noteInput" class="m-0 border outline-none">${note?.note} </textarea>`,
      focusConfirm: false,
      preConfirm: async () => {
        const noteTitle = document.getElementById("titleInput").value;
        const noteNote = document.getElementById("noteInput").value;
        return { noteTitle, noteNote };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { noteTitle, noteNote } = result.value;
        if (noteTitle.trim() === "" || noteNote.trim() === "") return;

        const { data } = await axios.post(`/notes/${note._id}`, {
          noteTitle,
          noteNote,
        });

        if (data.acknowledged) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Note updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      }
    });
  };

  return (
    <article
      style={{
        backgroundColor: `${color}`,
      }}
      className="border w-full border-[e0e0e0] rounded-lg relative h-fit cursor-pointer overflow-hidden"
    >
      <div className="absolute z-10 right-[-12px] top-[-1px]">
        <>
          {pin ? (
            <Icon
              onClick={() => {
                setPin(false);
                handleUpdate(false, color);
              }}
              icon={<BsFillPinFill />}
            />
          ) : (
            <Icon
              onClick={() => {
                setPin(true);
                handleUpdate(true, color);
              }}
              icon={<BsPin />}
            />
          )}
        </>
      </div>
      <div
        onClick={handleUpdateNote}
        className="py-3 px-4 flex flex-col gap-1 text-[#202124]"
      >
        <div className="flex  justify-between gap-2">
          <h4 className="text-base font-medium">{note?.title}</h4>
        </div>
        <p className="text-sm">{note?.note}</p>
      </div>
      <div className=" mt-1 ml-[-3px] mr-[-3px] mb-[4px] flex justify-between items-center">
        <Icon
          onClick={() => setIsColor((prev) => !prev)}
          icon={<MdOutlineColorLens />}
        />
        <Icon
          title={"Delete"}
          onClick={handleDelete}
          icon={<Trash2 size={18} />}
        />
      </div>
      {isColor && (
        <div className="absolute bottom-[-1.8rem] left-10 z-40">
          <Colors onColorChange={onColorChange} />
        </div>
      )}
    </article>
  );
};

export default Note;
