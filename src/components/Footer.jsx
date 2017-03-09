import React from 'react';
import FilterLink from '../containers/FilterLink'
import { FILTERS } from '../reducers/filter'

const Footer = ({ setFilter }) => (
  <div className="text-center">
    <FilterLink filter={FILTERS.ALL}>All</FilterLink>
    {' '}
    <FilterLink filter={FILTERS.ACTIVE}>Active</FilterLink>
    {' '}
    <FilterLink filter={FILTERS.COMPLETED}>Completed</FilterLink>
  </div>
)

export default Footer
