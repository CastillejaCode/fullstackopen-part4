import axios from 'axios';
const baseURL = 'api/blogs';

const getAll = () => {
	return axios.get(baseURL).then((response) => response.data);
};

const post = (info) => {
	return axios.post(baseURL, info).then((response) => response.data);
};

export default { getAll, post };