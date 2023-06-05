import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useNotes = () => {
  const axios = useAxios();

  const getData = async () => {
    const { data } = await axios("/notes");
    return data;
  };

  return useQuery({
    queryKey: ["notes"],
    queryFn: getData,
  });
};

export default useNotes;
