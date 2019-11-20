import { ALL, DONE, IN_PROGRESS } from '../../store/actions/types';

export default function getVisibleTodos(todos, filter) {
  switch (filter) {
    case ALL:
      return todos;
    case DONE:
      return todos.filter(t => t.isDone);
    case IN_PROGRESS:
      return todos.filter(t => !t.isDone);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}
