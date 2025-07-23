import "./App.css";
import ToDoList from "./components/ToDoList";
import { Topbar } from "./components/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <div className="main-content">
        <div className="todo-and-links-container">
          <ToDoList />
        </div>
      </div>
    </>
  );
}

export default App;
