import { useState } from "react";
import LogIn from "./Components/Auth/Login";
import LogOut from "./Components/Auth/Logout";
import GameList from "./Components/GameTypes/GameList";
import Counter from "./Components/Counter/Counter/Counter";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1>Honor and Glory</h1>
      <div>{isLoggedIn ? <LogOut /> : <LogIn />}</div>
      <GameList />
      <Counter />
    </div>
  );
}

export default App;
