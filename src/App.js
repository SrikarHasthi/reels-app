import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import AuthProvider from "./AuthProvider";
import Profile from "./components/profile";
let App = () => {
  return (
    <>
      <AuthProvider>
        <Router >
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
