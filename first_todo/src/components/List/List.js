// Core
import React, { useEffect } from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { getTodos } from '../../store/actions/todoActions';
// Components
import ListItem from '../ListItem/ListItem';
// Helper
import listFilter from './listFilter';

function List(props) {
  const { list, getTodos } = props;

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <ul>
      {list.map(item => (
        <ListItem key={item.id} {...props} {...item} />
      ))}
    </ul>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: listFilter(state.todos.list, ownProps.filter)
  };
};

export default connect(mapStateToProps, { getTodos })(List);
