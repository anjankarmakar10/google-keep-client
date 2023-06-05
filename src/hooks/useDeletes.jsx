import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useDeletes = () => {
  const axios = useAxios();

  const getData = async () => {
    const { data } = await axios("/deletes");
    return data;
  };

  return useQuery({
    queryKey: ["deletes"],
    queryFn: getData,
  });
};

export default useDeletes;
