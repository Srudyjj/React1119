import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import { getTodos } from '../../store/actions/todoActions';

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
