import { useState } from "react";
import { useUser } from "../../Context/UserContext";
import validator from "validator";
import useFetch from "../../Hooks/useFetch";

const LogIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { error, isLoading, request } = useFetch(); // data?
  const valid = () => {
    if (
      email !== "" &&
      email !== null &&
      email !== undefined &&
      validator.isEmail(email) &&
      password !== "" &&
      password !== null &&
      password !== undefined
    ) {
      return true;
    } else {
      return false;
    }
  };
  const { login } = useUser();
  const signIn = () => {
    console.log("log in");
    // TODO : figure out way for this to work with json server...
    login({ name: "steve" });
    request("http://localhost:4200/user", "POST", {
      email: email,
      password: password,
    })
      .then((result) => {
        console.log(result);
        // TODO : Set user data.
        // login(user)
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        console.log("last");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form action={signIn}>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            className="input-field"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <input type="submit" value="Sign Up" disabled={isLoading || !valid()} />
        {error && <div className="errorText">{error.message}</div>}
      </form>
    </div>
  );
};

export default LogIn;
