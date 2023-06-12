import { useEffect } from "react";
import { useApp } from "../../context/AppProvider";
import useDeletes from "../../hooks/useDeletes";
import NoteContainer from "../Notes/components/NoteContainer";
import DeleteNote from "./DeleteNote";
import Loading from "../../components/Loading/Loading";

const Deletes = () => {
  const { setTitle } = useApp();

  const { data, isLoading } = useDeletes();

  useEffect(() => {
    setTitle("Deletes");
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
          <DeleteNote key={note?._id} note={note} />
        ))}
      </NoteContainer>
    </div>
  );
};

export default Deletes;
