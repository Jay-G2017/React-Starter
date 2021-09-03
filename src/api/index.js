import request from '../request';

function fetchTodos(params) {
  return request({
    url: '/api/todos',
    method: 'get',
    params,
  });
}

function createTodo(data) {
  return request({
    url: '/api/todo',
    method: 'post',
    data,
  });
}

function deleteTodo(id) {
  return request({
    url: '/api/todo/' + id,
    method: 'delete',
  });
}

export { createTodo, fetchTodos, deleteTodo };
