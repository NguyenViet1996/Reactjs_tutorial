import { useState } from "react";
import "./scss/App.scss";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  const [show, setShow] = useState("signup");

  return (
    <div className="App">
      <div className="Content">
        <h1 onClick={() => setShow("signup")}>Sign Up</h1>
        <h1 onClick={() => setShow("login")}>Login</h1>
      </div>
      <div className="SelectForm">
        {show === "signup" ? <SignUp /> : <Login />}
      </div>
    </div>
  );
}

export default App;
