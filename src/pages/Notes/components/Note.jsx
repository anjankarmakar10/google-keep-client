import { useEffect, useRef, useState } from "react";
import { MoreVertical } from "react-feather";
import { BsPin, BsFillPinFill } from "react-icons/bs";
import { MdOutlineColorLens } from "react-icons/md";
import Icon from "./Icon";
import Colors from "./Colors";

const Note = ({ note }) => {
  const [pin, setPin] = useState(false);
  const [color, setColor] = useState("#fff");
  const [isColor, setIsColor] = useState(false);

  const onColorChange = (color) => {
    setColor(color);
  };

  useEffect(() => {
    setPin(note?.pin);
    setColor(note?.color);
  }, []);

  return (
    <article
      style={{
        backgroundColor: `${color}`,
      }}
      className="border w-full border-[e0e0e0] rounded-lg relative"
    >
      <div className="py-3 px-4 flex flex-col gap-1 text-[#202124]">
        <div className="flex  justify-between gap-2">
          <h4 className="text-base font-medium">{note?.title}</h4>
          <div className=" mr-[-20px] mt-[-8px]">
            <>
              {pin ? (
                <Icon
                  onClick={() => setPin((pin) => !pin)}
                  icon={<BsFillPinFill />}
                />
              ) : (
                <Icon onClick={() => setPin((pin) => !pin)} icon={<BsPin />} />
              )}
            </>
          </div>
        </div>
        <p className="text-sm">{note?.title}</p>
      </div>
      <div className=" mt-1 ml-[-3px] mr-[-3px] mb-[4px] flex justify-between items-center">
        <Icon
          onClick={() => setIsColor((prev) => !prev)}
          icon={<MdOutlineColorLens />}
        />
        <Icon icon={<MoreVertical size={18} />} />
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