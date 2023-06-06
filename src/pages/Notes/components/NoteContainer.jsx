import React from "react";
import { useApp } from "../../../context/AppProvider";

const NoteContainer = ({ children }) => {
  const { grid } = useApp();

  return (
    <section
      className={`${
        grid ? "max-w-[1040px]" : "max-w-[632px]"
      } max-w-[1040px] mx-auto px-4 `}
    >
      <div
        className={`${
          grid
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 grid-flow-dense"
            : "flex flex-col gap-3"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default NoteContainer;
