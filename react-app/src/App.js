import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import LoggedInFooter from "./components/Footers/LoggedIn";
import "./index.css";
import AllBadges from "./components/Badges/AllBadges";
import UserProfile from "./components/UserProfile";
import LandingPage from "./components/LandingPage";
import GenreQuiz from "./components/Quizzes/GenreQuiz";
import QuizHomepage from "./components/Quizzes/QuizHomepage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <ToastContainer />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/badges">
            <AllBadges />
          </Route>
          <Route exact path="/profile">
            <UserProfile />
          </Route>
          <Route exact path="/quizzes/genre">
            <GenreQuiz />
          </Route>
          <Route exact path="/quizzes">
            <QuizHomepage />
          </Route>
        </Switch>
      )}
      <LoggedInFooter />
    </>
  );
}

export default App;
