import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <main className="flex main-height fixed w-full ">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </AppProvider>
  );
}

export default App;
