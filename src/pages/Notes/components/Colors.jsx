import React, { useState } from "react";

const Colors = ({ onColorChange }) => {
  const [color, setColor] = useState("#ffffff");

  const colors = [
    { id: 1, color: "#ffffff" },
    { id: 2, color: "#f28b82" },
    { id: 3, color: "#fbbc04" },
    { id: 4, color: "#fff475" },
    { id: 5, color: "#ccff90" },
    { id: 6, color: "#a7ffeb" },
    { id: 7, color: "#cbf0f8" },
    { id: 8, color: "#aecbfa" },
    { id: 9, color: "#d7aefb" },
    { id: 10, color: "#fdcfe8" },
    { id: 11, color: "#e6c9a8" },
    { id: 12, color: "#e8eaed" },
  ];

  return (
    <section
      style={{
        boxShadow: "0 1px 2px 0 #3c40434d, 0 2px 6px 2px #3c404325",
      }}
      className="max-w-[454px] rounded-lg h-fit py-2 gap-1 px-[9px] items-center bg-white flex flex-wrap sm:flex-nowrap "
    >
      {colors.map((item) => (
        <article
          style={{ backgroundColor: item?.color }}
          key={item?.id}
          onClick={() => {
            setColor(item?.color);
            onColorChange(item?.color);
          }}
          className={`w-7 h-7 p-[2px] border-2 border-transparent rounded-full cursor-pointer ${
            color === item.color && "border-[#9d35f8]"
          }`}
        ></article>
      ))}
    </section>
  );
};

export default Colors;
