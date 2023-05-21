import { useAuth } from "../context/AuthProvider";
import Loading from "../components/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const { pathname } = useLocation();

  if (loading) {
    return (
      <div className="h-screen bg-[#eef5fe] grid place-content-center">
        <Loading />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ path: pathname }} to="/signin" />;
};

export default PrivateRoute;
