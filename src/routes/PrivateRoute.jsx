import {Navigate} from "react-router-dom";
import LoaderSpinner from "../components/LoaderSpinner";
import {uesAuthContext} from "../context/AuthContext";

const PrivateRoute = ({children}) => {
  const {user, loading} = uesAuthContext();

  if (loading) return <LoaderSpinner />;

  if (user) return children;

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
