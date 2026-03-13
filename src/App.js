import { useState } from "react";
import LogIn from "./Components/Auth/Login";
import LogOut from "./Components/Auth/Logout";
import GameList from "./Components/GameTypes/GameList";
import Counter from "./Components/Counter/Counter/Counter";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import Greeting from "./Components/Auth/Greeting";
import { useUser } from "./Context/UserContext";
import FiveAway from "./Components/FiveAway/FiveAway";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useUser();
  return (
    <div>
      <h1>Honor and Glory</h1>
      {/* <div>{isLoggedIn ? <LogOut /> : <LogIn />}</div> */}
      <div>{user ? <LogOut /> : <LogIn />}</div>
      <Greeting />
      <FiveAway />
      <GameList />
      <Counter />
      <TicTacToe />
    </div>
  );
}

export default App;
