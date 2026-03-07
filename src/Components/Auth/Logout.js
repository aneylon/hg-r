import { useUser } from "../../Context/UserContext";
import Button from "../Buttons/Button";

const LogOut = () => {
  const { logout } = useUser();
  const signOut = () => {
    console.log("log it out");
    logout();
  };
  return <Button text="Log Out!" action={signOut} />;
};

export default LogOut;
