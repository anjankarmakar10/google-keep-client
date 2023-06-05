import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePins = () => {
  const axios = useAxios();

  const getData = async () => {
    const { data } = await axios("/pins");
    return data;
  };

  return useQuery({
    queryKey: ["pins"],
    queryFn: getData,
  });
};

export default usePins;
