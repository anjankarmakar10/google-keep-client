import { useApp } from "../../context/AppProvider";
import usePins from "../../hooks/usePins";
import Note from "../Notes/components/Note";

import NoteContainer from "../Notes/components/NoteContainer";

const Importants = () => {
  const { setTitle } = useApp();
  setTitle("Importants");

  const { data } = usePins();

  return (
    <div className="main-height py-8">
      <NoteContainer>
        {data?.map((note) => (
          <Note key={note?._id} note={note} />
        ))}
      </NoteContainer>
    </div>
  );
};

export default Importants;
