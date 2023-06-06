import { useLocation } from "react-router-dom";
import { useApp } from "../../context/AppProvider";
import NoteContainer from "../Notes/components/NoteContainer";
import Note from "../Notes/components/Note";

const Search = () => {
  const { setTitle } = useApp();
  setTitle("Search");

  const { state } = useLocation();

  if (state?.data?.length === 0) {
    return (
      <div className="main-height py-8 text-center text-sm">
        No matching results.
      </div>
    );
  }

  return (
    <div className="main-height py-8">
      <NoteContainer>
        {state?.data?.map((note) => (
          <Note key={note?._id} note={note} />
        ))}
      </NoteContainer>
    </div>
  );
};

export default Search;
