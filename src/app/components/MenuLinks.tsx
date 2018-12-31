import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { userState } from '../../User/userState';

export const MenuLinks = () => {
  const { roles } = userState();
  return (
    <Fragment>
      <li>
        <NavLink exact to="/">Dashboard</NavLink>
      </li>
      {
        roles.includes('Admin') &&
        <Fragment>
          <li>
            <NavLink exact to="/members">Members</NavLink>
          </li>
          <li>
            <NavLink exact to="/attendance">Attendance</NavLink>
          </li>
        </Fragment>
      }
    </Fragment>
  );
}
