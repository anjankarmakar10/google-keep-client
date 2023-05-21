import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex main-height fixed w-full">
        <Sidebar />
        <div className="flex-1 ">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
