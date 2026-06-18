import LogIn from "./Components/Auth/Login";
import LogOut from "./Components/Auth/Logout";

import { useUser } from "./Context/UserContext";

import SignUp from "./Components/Auth/SignUp";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { Routes, Route } from "react-router";
import NotFound from "./Components/NotFound/NotFound";
import Navigation from "./Components/Navigation/Navigation";
import Settings from "./Components/Settings/Settings";
import Game from "./Components/Game/Game";
import { Counter } from "./Components/Reduxed/counter/counter";
import { Example } from "./Components/Reduxed/example/example";
import RTK_EXAMPLE from "./Components/Reduxed/example/rtk_example";

function App() {
  const { user } = useUser();
  return (
    <div>
      <h1 className="mfc-font">Honor and Glory</h1>
      <h3 className="elr">A game of fantastical adventure role playing</h3>
      <hr />
      <Navigation />
      <div>{user ? <LogOut /> : null}</div>
      <Settings />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Counter />
      <Example />
      <RTK_EXAMPLE />
    </div>
  );
}

export default App;
