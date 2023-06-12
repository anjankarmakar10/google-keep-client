import axios from "axios";
import { useAuth } from "../context/AuthProvider";

const useAxios = () => {
  const { user } = useAuth();
  const instance = axios.create({
    baseURL: "https://google-keep-server-seven.vercel.app",
  });
  instance.defaults.headers.common["Authorization"] = `${user.uid}`;
  return instance;
};

export default useAxios;
