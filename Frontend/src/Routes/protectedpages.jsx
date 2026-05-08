import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import pagepath from "./pagepath";
import Loadingpage from "../pages/Loadingpage";
import { verify } from "../Services/UserApis";

function ProtectedPages({ children }) {
  const { isLoading, isLoginIn } = useSelector(
    (store) => store.user
  );

  const navigate = useNavigate();

  async function verifyuser() {
    try {
      const response = await verify();

      console.log(response);
    } catch (error) {
      navigate(pagepath.LOGIN);
    }
  }

  useEffect(() => {
    verifyuser();
  }, []);

  // Loading screen
  if (isLoading) {
    return <Loadingpage />;
  }

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoginIn) {
      navigate(pagepath.LOGIN);
    }
  }, [isLoginIn, navigate]);

  // Prevent rendering before redirect
  if (!isLoginIn) {
    return null;
  }

  // Protected content
  return <>{children}</>;
}

export default ProtectedPages;