import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "../hooks";
// import { Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const { addToast } = useToasts();
  const auth = useAuth();

  // Task-2
  // Implement Restricted Route for Login Page here.
  // After that head over to Home Page

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);

    if (!email || !password) {
      setLoggingIn(false);
      return addToast("Please enter both email and password", {
        appearance: "error"
      });
    }

    const response = await auth.login(email, password);

    if (response.success) {
      addToast("Successfully logged in", {
        appearance: "success"
      });
    } else {
      addToast(response.message, {
        appearance: "error"
      });
    }

    setLoggingIn(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" disabled={loggingIn}>
          {loggingIn ? "Logging in ..." : "Log In"}
        </button>
      </div>
    </form>
  );
};

export default Login;
