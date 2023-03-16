import axios from 'axios';
const baseURL = '/api/blogs';

const getAll = () => {
	return axios.get(baseURL).then((response) => response.data);
};

const post = (info) => {
	return axios.post(baseURL, info).then((response) => response.data);
};

const remove = (id) => {
	return axios.delete(`${baseURL}/${id}`).then((response) => response.data);
};

const update = (id, newBlog) => {
	return axios.put(`${baseURL}/${id}`, newBlog).then((response) => response.data);
};

export default { getAll, post, remove, update };
