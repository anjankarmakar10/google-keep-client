import { useApp } from "../../context/AppProvider";

const Deletes = () => {
  const { setTitle } = useApp();
  setTitle("Deletes");
  return <div className="main-height">Deletes</div>;
};

export default Deletes;
