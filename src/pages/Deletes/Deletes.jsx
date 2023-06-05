import { useApp } from "../../context/AppProvider";
import useDeletes from "../../hooks/useDeletes";
import NoteContainer from "../Notes/components/NoteContainer";
import DeleteNote from "./DeleteNote";

const Deletes = () => {
  const { setTitle } = useApp();
  setTitle("Deletes");

  const { data } = useDeletes();

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
