import { useUser } from "../../Context/UserContext";

const Greeting = () => {
  const { user } = useUser();
  console.log({ user });
  if (!user) {
    return <div>Please log in</div>;
  }
  return <div>Hello, {user.name}</div>;
};

export default Greeting;
