const Blog = require('../models/blog');

const initialBlogs = [
	{
		title: 'Cats are great',
		author: 'Beans',
		url: 'catbeans.com',
		likes: 20,
		id: '640d12b7224b5f4abd6d0538',
	},
	{
		title: 'Cats are amazing',
		author: 'Peanut',
		url: 'catbeans.com',
		likes: 20,
		id: '640d339b535c8d6fc1cda148',
	},
];

const blogsInDB = async () => {
	const blogs = await Blog.find({});
	return blogs.map((blog) => blog.toJSON());
};

module.exports = {
	initialBlogs,
	blogsInDB,
};
