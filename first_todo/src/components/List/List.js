// Core
import React, { useEffect } from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { getTodos } from '../../store/actions/todoActions';
// Components
import ListItem from '../ListItem/ListItem';

function List(props) {
  const { list, getTodos } = props;

  useEffect(() => getTodos(), [getTodos]);

  return (
    <ul>
      {list.map(item => (
        <ListItem key={item.id} {...props} {...item} />
      ))}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    list: state.todos.list
  };
};

export default connect(mapStateToProps, { getTodos })(List);
