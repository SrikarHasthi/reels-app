import { useContext, useEffect } from "react";
import { signInWithGoogle, auth } from "../firebase";
import { authContext } from "../AuthProvider";
import { Redirect } from "react-router-dom";
import "./login.css"
let Login = () => {
  let user = useContext(authContext);

  return (
    <>
      {user ? <Redirect to="/" /> : ""}
      <div className="login-container">
        <div className="container-fluid">
          <form className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mx-auto">
          <h2>WELCOME!!</h2>
          <br/>
          <h5>Login to continue</h5>
          <br/>
          <div className="mb-4 mt-4">
            <button
              onClick={() => {
                signInWithGoogle();
              }}
              className="btn btn-primary login-button"
            >
              LOGIN WITH GOOGLE
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
