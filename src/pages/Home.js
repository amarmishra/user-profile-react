// import { Link } from "react-router-dom";
import { useAuth } from "../hooks";

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <h1>Welcome, {auth.user?.name}</h1>
      {/* 
          Task-3
          Create LogOut button which is visible to user whe he/she is logged in.
          Use auth.logout function. 
      */}
    </div>
  );
};

export default Home;
