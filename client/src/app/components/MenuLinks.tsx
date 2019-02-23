import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

// import { userState } from '../../User/userState';

export const MenuLinks = () => {
  // const { roles } = userState();
  // @TODO get roles from graphQL
  const roles = ['Admin'];
  return (
    <Fragment>
      <li>
        <NavLink exact to="/">Dashboard</NavLink>
      </li>
      {
        roles.includes('Admin') &&
        <Fragment>
          <li>
            <NavLink exact to="/clubs">Clubs</NavLink>
          </li>
          <li>
            <NavLink exact to="/members">Members</NavLink>
          </li>
          <li>
            <NavLink exact to="/attendance">Attendance</NavLink>
          </li>
          <li>
            <NavLink exact to="/users">Users</NavLink>
          </li>
        </Fragment>
      }
      <li>
        <NavLink exact to="/seasons">Seasons</NavLink>
      </li>
    </Fragment>
  );
}
