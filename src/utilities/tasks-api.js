import sendRequest from './send-request';

const BASE_URL = '/api/tasks';

// needs to match the tasks router
export function createAddTask(formData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', formData);
}

export function getAllTasks(formData) {
  return sendRequest(BASE_URL);
}

export function getDetails(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function updateTask(formData, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData);
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}/user`);
}
