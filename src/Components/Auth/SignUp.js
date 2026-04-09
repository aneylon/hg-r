import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const signUp = () => {
    console.log("sign up", email, password);
    // TODO : Add try/catch/finally.
    // TODO : use fetch to post signup info.
    setEmail("");
    setPassword("");
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
          />{" "}
          <span>{email}</span>
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
          />{" "}
          <span>{password}</span>
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
