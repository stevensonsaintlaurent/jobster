import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);

  console.log("ProtectedRoute user:", user);

  if (!user) {
    return <Navigate to="/landing" replace />;
  }

  return children;
};

export default ProtectedRoute;
