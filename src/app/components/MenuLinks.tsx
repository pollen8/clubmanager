import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';


export const MenuLinks = () => {
  return (
    <Fragment>
      <li>
        <NavLink exact to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink exact to="/members">Members</NavLink>
      </li>
      <li>
        <NavLink exact to="/register">Register</NavLink>
      </li>
    </Fragment>
  );
}
