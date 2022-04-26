import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { NavBar } from "./NavBar";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NotFoundScreen } from "./NotFoundScreen";

export const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={ <HomeScreen /> } />
          <Route path="/about" element={ <AboutScreen /> }></Route>
          <Route path="/login" element={ <LoginScreen /> }></Route>
          <Route path="*" element={ <NotFoundScreen /> } />
        </Routes>
      </div>
    </div>
  )
}
