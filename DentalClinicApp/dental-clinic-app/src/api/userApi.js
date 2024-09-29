import apiClient from './apiClient';

const USER_URL = '/api/v1/user';

export const fetchUsers = () => apiClient.get(USER_URL);

export const createUser = (user) => apiClient.post(USER_URL, user);
