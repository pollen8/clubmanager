import React, { SFC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;

  li {
    padding: 0 1rem 0 0;
    line-height: 4.7rem;

    a {
      color: ${(props) => props.theme.grey500};
      text-decoration: none;
      display: block;
      height: 100%;
    }

    a.active {
      border-bottom: 2px solid  ${({ theme }) => theme.primary500};
      color: ${({ theme }) => theme.primary500};
    }

    a:focus {
      outline: 0;
      border-bottom: 2px solid  ${({ theme }) => theme.primary400};
      color: ${({ theme }) => theme.primary400};
    }
  }
`;

export const Menu: SFC<{}> = () => {
  return (
    <Wrapper>
      <li>
        <NavLink exact to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink exact to="/members">Members</NavLink>
      </li>
      <li>
        <NavLink exact to="/register">Register</NavLink>
      </li>
    </Wrapper>)
};

