import { useState } from "react";
import LogIn from "./Components/Auth/Login";
import LogOut from "./Components/Auth/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      <h1>Honor and Glory</h1>
      <div>{isLoggedIn ? <LogOut /> : <LogIn />}</div>
    </div>
  );
}

export default App;
