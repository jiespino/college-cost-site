import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './navBar.css'

import CollegeSearch from './subComponents/collegeSearch'
import Favorites from './subComponents/favorites'
import About from './subComponents/about'
import StatePrograms from "./subComponents/statePrograms";


export default function NavBar() {

  return (
    <Router>
      <div className="nav-bar-container">
        <nav className="nav-bar">
          <ul className="nav-links">
            <li className="nav-item">
              <NavLink activeClassName="underline" exact to="/">Search</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="underline" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="underline" to="/favorites">Favorites</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="underline" to="/statePrograms">State Low Income Aid Programs</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/statePrograms">
            <StatePrograms />
          </Route>
          <Route path="/">
            <CollegeSearch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}