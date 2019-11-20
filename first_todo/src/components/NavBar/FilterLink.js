// Core
import React from 'react';
// Router
import { NavLink } from 'react-router-dom';

import { ALL } from '../../store/actions/types';

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === ALL ? '/' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;
