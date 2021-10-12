import { useContext, useEffect } from "react";
import { signInWithGoogle, auth } from "../firebase";
import { authContext } from "../AuthProvider";
import { Redirect } from "react-router-dom";
import "./login.css"
let Login = () => {
  let user = useContext(authContext);

  return (
    <div>
      {user ? <Redirect to="/home" /> : ""}
      <div className="login-container">
        <div className="container-fluid">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mx-auto login-form">
            <h2>WELCOME!!</h2>
            <br />
            <h5>Login to continue</h5>
            <br />
            <div className="mb-4 mt-4">
              <button
                onClick={signInWithGoogle}
                type="submit"
                className="btn btn-primary login-button"
              >
                Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
