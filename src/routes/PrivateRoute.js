import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const token = Cookies.get("tkn");
  if (!token) {
    return <Navigate to="/sign-in" />;
  } else {
    return props.children;
  }
};

export default PrivateRoute;
