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
        className={`${grid ? "note-container-grid" : "note-container-flex"}`}
      >
        {children}
      </div>
    </section>
  );
};

export default NoteContainer;
