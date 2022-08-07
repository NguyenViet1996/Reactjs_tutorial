import "./App.css";
import TodoList from "./components/Home";

function App() {

  return (
    <div className="App" style={{ color: "red", textTransform: "upperCase" }}>
      <h1>Hello world React </h1>
      <TodoList />
    </div>
  );
  
}

export default App;
