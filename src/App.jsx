import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Notes from "./pages/Notes/Notes";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex main-height fixed w-full">
        <Sidebar />
        <div className="flex-1 ">
          <Notes />
        </div>
      </main>
    </>
  );
}

export default App;
