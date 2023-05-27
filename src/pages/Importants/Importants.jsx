import { useApp } from "../../context/AppProvider";

const Importants = () => {
  const { setTitle } = useApp();
  setTitle("Importants");
  return <div className="main-height">Importants</div>;
};

export default Importants;
