import moment from "moment/moment";
import { useEffect, useRef, useState } from "react";
import { X } from "react-feather";
import { BsPin, BsFillPinFill } from "react-icons/bs";
import { MdOutlineColorLens } from "react-icons/md";
import Colors from "./components/Colors";
import Note from "./components/Note";
import Icon from "./components/Icon";
import { useApp } from "../../context/AppProvider";
import { useAuth } from "../../context/AuthProvider";
import useAxios from "../../hooks/useAxios";
import useNotes from "../../hooks/useNotes";
import NoteContainer from "./components/NoteContainer";
import Loading from "../../components/Loading/Loading";

const Notes = () => {
  const { setTitle } = useApp();

  const [open, setOpen] = useState(false);
  const [isColor, setIsColor] = useState(false);
  const [color, setColor] = useState("#fff");
  const [pin, setPin] = useState(false);

  const { data, refetch, isLoading } = useNotes();

  const axios = useAxios();

  const { user } = useAuth();

  const titleRef = useRef();
  const noteRef = useRef();
  const date = moment().format("l");

  useEffect(() => {
    setTitle("Keep");
  }, []);

  const onColorChange = (color) => {
    setColor(color);
  };

  const handleAdd = async () => {
    const title = titleRef.current.value;
    const note = noteRef.current.value;

    if (note.trim("") === "" || title.trim("") === "") {
      alert("Note can not be empty!");
      return;
    }

    const newNote = {
      title: title,
      note,
      color,
      pin,
      date,
      uid: user.uid,
    };

    try {
      const { data } = await axios.post("/notes", newNote);

      if (data.insertedId) {
        refetch();
        titleRef.current.value = "";
        noteRef.current.value = "";
        setOpen(false);
        setPin(false);
        setColor("#fff");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="">
      <header className=" pt-8 flex justify-center px-4 mb-4">
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
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full flex flex-col gap-3"
                action=""
              >
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
                  <Icon
                    onClick={() => setIsColor((prev) => !prev)}
                    icon={<MdOutlineColorLens />}
                  />
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
              {isColor && (
                <div className="absolute bottom-[-2.3rem] left-10 z-40">
                  <Colors onColorChange={onColorChange} />
                </div>
              )}
            </div>
          )}
        </>
      </header>
      {isLoading && (
        <div className="py-8 felx justify-center">
          <div className="w-fit mx-auto">
            <Loading />
          </div>
        </div>
      )}
      <NoteContainer>
        {data?.map((note) => (
          <Note key={note?._id} note={note} />
        ))}
      </NoteContainer>
    </div>
  );
};

export default Notes;
