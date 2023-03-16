const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Blog = require('../models/blog');
const helper = require('./test_helper');

const api = supertest(app);

beforeEach(async () => {
	await Blog.deleteMany({});
	await Blog.insertMany(helper.initialBlogs);
});

describe('INITIAL Notes', () => {
	test('notes returned as JSON', async () => {
		await api
			.get('/api/blogs')
			.expect(200)
			.expect('Content-Type', /application\/json/);
	}, 10000);

	test('correct number of notes', async () => {
		const response = await api.get('/api/blogs');
		expect(response.body).toHaveLength(helper.initialBlogs.length);
	});

	test('correct id property exists', async () => {
		const response = await helper.blogsInDB();
		response.forEach((blog) => expect(blog.id).toBeDefined());
		expect(response[0]._id).toBeFalsy();
	});
});

describe('POST new blog', () => {
	test('successful POST to DB', async () => {
		const newBlog = {
			title: 'Successful POST',
			author: 'POST',
			url: 'POST.com',
			likes: 20,
		};

		await api
			.post('/api/blogs')
			.send(newBlog)
			.expect(201)
			.expect('Content-Type', /application\/json/);

		const response = await api.get('/api/blogs');
		expect(response.body).toHaveLength(helper.initialBlogs.length + 1);
		expect(response.body[2].title).toBe('Successful POST');
	});

	test('no likes defaults to 0 likes', async () => {
		const newBlog = {
			title: 'Successful POST',
			author: 'POST',
			url: 'POST.com',
		};

		await api
			.post('/api/blogs')
			.send(newBlog)
			.expect(201)
			.expect('Content-Type', /application\/json/);

		const response = await api.get('/api/blogs');
		expect(response.body[2].likes).toBe(0);
	});

	test('no title returns 400 bad request', async () => {
		const newBlog = {
			author: 'POST',
			url: 'POST.com',
			likes: 20,
		};

		await api.post('/api/blogs').send(newBlog).expect(400);
	});

	test('no author returns 400 bad request', async () => {
		const newBlog = {
			title: 'POST',
			url: 'POST.com',
			likes: 20,
		};

		await api.post('/api/blogs').send(newBlog).expect(400);
	});
});

describe('DELETE', () => {
	test('delete one specific blog', async () => {
		const initialBlogs = await helper.blogsInDB();
		const deletedBlog = initialBlogs[0];

		await api.delete(`/api/blogs/${deletedBlog.id}`).expect(204);

		const blogsAtEnd = await helper.blogsInDB();
		expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1);

		const contents = blogsAtEnd.map((blog) => blog.title);
		expect(contents).not.toContain(deletedBlog.title);
	});
});

afterAll(async () => {
	await mongoose.connection.close();
});
