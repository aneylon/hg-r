import { useUser } from "../../Context/UserContext";
import Button from "../Buttons/Button";

const LogIn = () => {
  const { login } = useUser();
  const signIn = () => {
    console.log("log in");
    login({ name: "steve" });
  };

  return <Button text="Log In" action={signIn} />;
};

export default LogIn;
