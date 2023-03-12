import axios from 'axios';
const baseURL = 'http://localhost:3003/api/blogs';

const getAll = () => {
	return axios.get(baseURL).then((response) => response.data);
};

export default { getAll };
