import LogIn from "./Components/Auth/Login";
import LogOut from "./Components/Auth/Logout";

import { useUser } from "./Context/UserContext";

import SignUp from "./Components/Auth/SignUp";
import Spring from "./Components/Seasons/Spring";
import Fall from "./Components/Seasons/Fall";

function App() {
  const { user } = useUser();
  return (
    <div>
      <h1>Honor and Glory</h1>
      <div>{user ? <LogOut /> : <LogIn />}</div>
      <SignUp />
      <Spring />
      <Fall />
    </div>
  );
}

export default App;
