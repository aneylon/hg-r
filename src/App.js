import { useState } from "react";
import LogIn from "./Components/Auth/Login";
import LogOut from "./Components/Auth/Logout";
import GameList from "./Components/GameTypes/GameList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      <h1>Honor and Glory</h1>
      <div>{isLoggedIn ? <LogOut /> : <LogIn />}</div>
      <GameList />
    </div>
  );
}

export default App;
