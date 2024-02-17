import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"; // Ensure this path is correct for your project structure

const PrivateRoute = ({ children }) => {
  const { currentUser } = UserAuth(); // Use the UserAuth hook to get the current user

  return currentUser ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
