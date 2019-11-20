// Core
import React from 'react';
// Componets
import FilterLink from './FilterLink';
import { ALL, DONE, IN_PROGRESS } from '../../store/actions/types';

const NavBar = () => (
  <p>
    Show: <FilterLink filter={ALL}>All</FilterLink>
    {' | '}
    <FilterLink filter={IN_PROGRESS}>Active</FilterLink>
    {' | '}
    <FilterLink filter={DONE}>Completed</FilterLink>
  </p>
);

export default NavBar;
