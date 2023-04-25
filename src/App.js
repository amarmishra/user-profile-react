import "./styles.css";
// import { useAuth } from "./hooks";
import Navbar from "./components/Navbar";
import { Fof, Home, Login, Signup, Profile } from "./pages";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// Task-1
// Create a Private Route for My Profile Page.

// Task-2
// Create a Restricted Route for Login and Signup page.
// Head over to ./components/Login.js and ./components/Signup.js

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <Fof />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}