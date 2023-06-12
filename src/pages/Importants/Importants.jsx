import { useEffect } from "react";
import { useApp } from "../../context/AppProvider";
import usePins from "../../hooks/usePins";
import Note from "../Notes/components/Note";
import NoteContainer from "../Notes/components/NoteContainer";
import Loading from "../../components/Loading/Loading";

const Importants = () => {
  const { setTitle } = useApp();

  const { data, isLoading } = usePins();

  useEffect(() => {
    setTitle("Importants");
  }, []);

  return (
    <div className="main-height py-8">
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

export default Importants;
