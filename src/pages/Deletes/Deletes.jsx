import { useEffect } from "react";
import { useApp } from "../../context/AppProvider";
import useDeletes from "../../hooks/useDeletes";
import NoteContainer from "../Notes/components/NoteContainer";
import DeleteNote from "./DeleteNote";

const Deletes = () => {
  const { setTitle } = useApp();

  const { data } = useDeletes();

  useEffect(() => {
    setTitle("Deletes");
  }, []);

  return (
    <div className="main-height py-8">
      <NoteContainer>
        {data?.map((note) => (
          <DeleteNote key={note?._id} note={note} />
        ))}
      </NoteContainer>
    </div>
  );
};

export default Deletes;
