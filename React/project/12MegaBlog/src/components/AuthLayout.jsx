import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  // useEffect(() => {
  //   //TODO: make it more easy to understand
  //   if (authentication && authStatus !== authentication) {
  //     navigate("/login");
  //   } else if (!authentication && authStatus !== authentication) {
  //     navigate("/");
  //   }
  //   setLoader(false);
  // }, [authStatus, navigate, authentication]);

  useEffect(() => {
    // Check if user is authenticated and the authentication status has changed
    if (authentication && authStatus !== authentication) {
      // If yes, navigate to the "/login" page
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      // Check if user is not authenticated and the authentication status has changed
      // If yes, navigate to the "/" (home) page
      navigate("/");
    }

    // Regardless of the authentication status, set the loader to false to indicate loading is complete
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};
