import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks";
// import { Redirect } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signingUp, setSigningUp] = useState("");
  const { addToast } = useToasts();
  const auth = useAuth();
  const history = useHistory();

  // Task-2
  // Implement Restricted Route for Signup Page here.
  // After that head over to Home Page

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSigningUp(true);

    let error = false;
    if (!name || !email || !password || !confirmPassword) {
      addToast("Please fill all the fields", {
        appearance: "error",
        autoDismiss: true
      });
      error = true;
    }

    if (password !== confirmPassword) {
      addToast("Make sure password and confirm password matches", {
        appearance: "error",
        autoDismiss: true
      });

      error = true;
    }

    if (error) {
      return setSigningUp(false);
    }

    const response = await auth.signup(name, email, password, confirmPassword);

    if (response.success) {
      history.push("/login");
      setSigningUp(false);

      return addToast("User registered successfully, please login now", {
        appearance: "success",
        autoDismiss: true
      });
    } else {
      addToast(response.message, {
        appearance: "error",
        autoDismiss: true
      });
    }

    setSigningUp(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Signup</h1>
      <div>
        <label>Name:</label>
        <br />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Confirm Password:</label>
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" disabled={signingUp}>
          {signingUp ? "Signing up ..." : "Sign Up"}
        </button>
      </div>
    </form>
  );
};

export default Signup;
