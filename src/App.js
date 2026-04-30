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

function App() {
  const { user } = useUser();
  return (
    <div>
      <h1>Honor and Glory</h1>
      <Navigation />
      <div>{user ? <LogOut /> : null}</div>
      <Settings />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
