import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const AuthLayout = ({ children, authentication = true }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (authentication && authStatus !== authentication) navigate("/login");
    else if (!authentication && authStatus !== authentication) navigate("/");
    setLoader(false);
  }, [authStatus, authentication, navigate]);
  return loader ? null : <>{children}</>;
};

export default AuthLayout;
