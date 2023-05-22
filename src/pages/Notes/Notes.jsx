import { useState } from "react";
import { MoreVertical, X } from "react-feather";
import { BsPin } from "react-icons/bs";
import { MdOutlineColorLens } from "react-icons/md";

const Notes = () => {
  const [open, setOpen] = useState(true);

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
              style={{ boxShadow: "0 3px 5px rgba(0,0,0,.20)" }}
              className={`flex max-w-[600px]  w-full transition-all rounded-lg relative bg-[#f1f3f4]"
           py-3 px-4 border border-[#e0e0e0] flex-col`}
            >
              <form className="w-full flex flex-col gap-3" action="">
                <input
                  className="bg-transparent placeholder:font-semibold font-medium text-[15px] placeholder:text-[#4C4C4C] outline-none w-full"
                  type="text"
                  placeholder="Title"
                />
                <textarea
                  className="bg-transparent text-sm placeholder:font-semibold font-medium   placeholder:text-[#4C4C4C] outline-none w-full"
                  name=""
                  id=""
                  autoFocus
                  placeholder="Take a note..."
                  cols="30"
                  rows={4}
                ></textarea>
              </form>
              <div className=" ml-[-16px] mb-[-6px] mt-1 flex justify-between items-center">
                <div className="flex items-center">
                  <Icon icon={<BsPin />} />
                  <Icon icon={<MdOutlineColorLens />} />
                </div>
                <div className="px-6 py-2 bg-white text-sm rounded-md hover:bg-[rgba(95,99,104,.039)] cursor-pointer text-[#000000dd]">
                  Save
                </div>
              </div>
              <div
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 hover:bg-slate-100 rounded-full p-1 cursor-pointer"
              >
                <X size={18} />
              </div>
            </div>
          )}
        </>
      </header>
    </div>
  );
};

const Icon = ({ icon }) => {
  return (
    <article className="w-8 h-8 rounded-full mx-2 grid place-content-center border border-transparent hover:bg-[rgba(95,99,104,0.157)] hover:opacity-[0.87] text-[#212121] mb-[-2px] cursor-pointer">
      {icon}
    </article>
  );
};

export default Notes;
