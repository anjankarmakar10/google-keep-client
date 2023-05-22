import moment from "moment/moment";
import { useRef, useState } from "react";
import { MoreVertical, X } from "react-feather";
import { BsPin, BsFillPinFill } from "react-icons/bs";
import { MdOutlineColorLens } from "react-icons/md";
import Colors from "./components/Colors";

const Notes = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#fff");
  const [pin, setPin] = useState(false);

  const titleRef = useRef();
  const noteRef = useRef();
  const date = moment().format("l");

  const onColorChange = (color) => {
    setColor(color);
  };

  const handleAdd = () => {
    const title = titleRef.current.value;
    const note = noteRef.current.value;

    if (note.trim("") === "") {
      alert("Note can not be empty!");
      return;
    }

    const newNote = {
      title: title || "Untitle",
      note,
      color,
      pin,
      date,
    };
    console.log(newNote);
    titleRef.current.value = "";
    noteRef.current.value = "";
  };

  return (
    <div className="main-height">
      <header className=" pt-8 flex justify-center px-4">
        <>
          {!open ? (
            <div
              style={{ boxShadow: "0 3px 5px rgba(0,0,0,.20)" }}
              className={`flex max-w-[600px] items-center w-full transition-all rounded-lg h-12 bg-[#f1f3f4]" 
           py-3 px-4 border border-[#e0e0e0]`}
            >
              <form className="w-full" action="">
                <input
                  className="bg-transparent placeholder:font-semibold font-medium text-[15px] placeholder:text-[#4C4C4C] outline-none w-full"
                  type="text"
                  onFocus={() => setOpen(true)}
                  onBlur={() => setOpen(false)}
                  placeholder="Take a note..."
                />
              </form>
            </div>
          ) : (
            <div
              style={{
                boxShadow: "0 3px 5px rgba(0,0,0,.20)",
                backgroundColor: `${color}`,
              }}
              className={`flex max-w-[600px]  w-full transition-all rounded-lg relative bg-[#f1f3f4]"
           py-3 px-4 border border-[#e0e0e0] flex-col`}
            >
              <form className="w-full flex flex-col gap-3" action="">
                <input
                  className="bg-transparent placeholder:font-semibold font-medium text-[15px] placeholder:text-[#4C4C4C] outline-none w-full"
                  type="text"
                  placeholder="Title"
                  ref={titleRef}
                />
                <textarea
                  className="bg-transparent text-sm placeholder:font-semibold font-medium   placeholder:text-[#4C4C4C] outline-none w-full"
                  name=""
                  id=""
                  autoFocus
                  placeholder="Take a note..."
                  cols="30"
                  rows={4}
                  ref={noteRef}
                ></textarea>
              </form>
              <div className=" ml-[-16px] mb-[-6px] mt-1 flex justify-between items-center">
                <div className="flex items-center">
                  <>
                    {pin ? (
                      <Icon
                        onClick={() => setPin((pin) => !pin)}
                        icon={<BsFillPinFill />}
                      />
                    ) : (
                      <Icon
                        onClick={() => setPin((pin) => !pin)}
                        icon={<BsPin />}
                      />
                    )}
                  </>
                  <Icon icon={<MdOutlineColorLens />} />
                </div>
                <div
                  onClick={handleAdd}
                  className="px-6 py-2 bg-transparent text-sm rounded-md hover:bg-[#5f636849] cursor-pointer text-[#000000dd]"
                >
                  Save
                </div>
              </div>
              <div
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 hover:bg-slate-100 rounded-full p-1 cursor-pointer"
              >
                <X size={18} />
              </div>
              <div className="absolute bottom-[-2.3rem] left-10 z-40">
                <Colors onColorChange={onColorChange} />
              </div>
            </div>
          )}
        </>
      </header>
    </div>
  );
};

const Icon = ({ icon, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="w-8 h-8 rounded-full mx-2 grid place-content-center border border-transparent hover:bg-[rgba(95,99,104,0.157)] hover:opacity-[0.87] text-[#212121] mb-[-2px] cursor-pointer"
    >
      {icon}
    </article>
  );
};

export default Notes;
