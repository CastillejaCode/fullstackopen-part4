const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Blog = require('../models/blog');
const helper = require('./test_helper');

const api = supertest(app);

beforeEach(async () => {
	await Blog.deleteMany({});
	let blogObject = new Blog(helper.initialBlogs[0]);
	await blogObject.save();
	blogObject = new Blog(helper.initialBlogs[1]);
	await blogObject.save();
});

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

afterAll(async () => {
	await mongoose.connection.close();
});
