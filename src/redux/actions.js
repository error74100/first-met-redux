export const ACTION_TYPE_ADD_TODO = 'ADD_TODO';
export const ACTION_TYPE_REMOVE_TODO = 'REMOVE_TODO';
export const ACTION_TYPE_REMOVE_ALL = 'REMOVE_ALL';

export function addTodoActionCreator(text) {
  return {
    type: ACTION_TYPE_ADD_TODO,
    text: text,
  };
}

export function removeTodoActionCreator(text) {
  return {
    type: ACTION_TYPE_REMOVE_TODO,
  };
}

export function removeAllActionCreator(text) {
  return {
    type: ACTION_TYPE_REMOVE_ALL,
  };
}
