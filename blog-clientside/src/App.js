import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from 'react';
import { Context } from "./context/Context";

// Importing components and pages
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Compose from "./pages/compose/Compose";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

// Main App component
export default function App() {
  // Access user information from the global context
  const { user } = useContext(Context);

  return (
    <Router>
      {/* Render the top navigation bar */}
      <TopBar />

      {/* Define routes for different pages */}
      <Switch>
        {/* Home Page */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* Register Page: Show Home if user is already logged in, otherwise show Register */}
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>

        {/* Login Page: Show Home if user is already logged in, otherwise show Login */}
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>

        {/* Compose Page: Show Compose if user is logged in, otherwise show Register */}
        <Route path="/compose">
          {user ? <Compose /> : <Register />}
        </Route>

        {/* Settings Page: Show Settings if user is logged in, otherwise show Register */}
        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>

        {/* Single Post Page */}
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

// Cleaned up 1/23/2024
