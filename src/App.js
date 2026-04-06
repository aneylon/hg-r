import { useState } from "react";
import LogIn from "./Components/Auth/Login";
import LogOut from "./Components/Auth/Logout";
import GameList from "./Components/GameTypes/GameList";
import Counter from "./Components/Counter/Counter/Counter";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import Greeting from "./Components/Auth/Greeting";
import { useUser } from "./Context/UserContext";
import FiveAway from "./Components/FiveAway/FiveAway";
import Version from "./Components/Version/Version";
import Warband from "./Components/AureliaSancta/Warband";
import Warbands from "./Components/AureliaSancta/Warbands";
import LocationAdd from "./Components/AureliaSancta/LocationAdd";
import LocationList from "./Components/AureliaSancta/LocationList";
import About from "./Components/AureliaSancta/About";
import Campaign from "./Components/AureliaSancta/Campaign";
import Modal from "./Components/Modal/Modal";
import VersionModal from "./Components/Modal/VersionModal";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useUser();
  return (
    <div>
      <h1>Honor and Glory</h1>
      {/* <div>{isLoggedIn ? <LogOut /> : <LogIn />}</div> */}
      <div>{user ? <LogOut /> : <LogIn />}</div>
      {/*
       <Greeting />
      <FiveAway />
      <GameList />
      <Counter />
      <TicTacToe /> 
      <Warbands />
      <Warband />
      */}
      <LocationAdd />
      <Campaign />
      <About />
      <Version />
      <VersionModal />
    </div>
  );
}

export default App;
