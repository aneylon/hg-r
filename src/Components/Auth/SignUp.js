import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import validator from "validator";

const SignUp = () => {
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

  const signUp = () => {
    request("http://localhost:4200/user", "POST", {
      email: email,
      password: password,
    })
      .then((result) => {
        console.log(result);
        // TODO : Set user data.
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
      <h1>Sign Up</h1>
      <form action={signUp}>
        <div>
          <label htmlFor="email">Email : </label>
          <input
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

export default SignUp;
