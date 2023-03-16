import { useState, useEffect } from 'react';
import './App.css';
import List from './modules/List';
import Form from './modules/Form';
import backend from './services/backend';

function App() {
	const [blogs, setBlogs] = useState([]);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [url, setURL] = useState('');
	const [likes, setLikes] = useState('');

	useEffect(() => {
		backend.getAll().then((init) => setBlogs(init));
	}, []);

	const addBlog = (e) => {
		e.preventDefault();
		backend
			.post({ title, author, url, likes })
			.then((result) => setBlogs(blogs.concat(result)))
			.catch((error) => console.log(error));

		setTitle('');
		setAuthor('');
		setURL('');
		setLikes('');
	};

	const deleteBlog = (id) => {
		if (!window.confirm('Are you sure you want to delete that?')) return;
		else {
			backend
				.remove(id)
				.then((response) => setBlogs(blogs.filter((blog) => blog.id !== id)))
				.catch((error) => console.log(error));
		}
	};

	return (
		<div>
			<h1>Julian's Blog</h1>
			<List
				blogs={blogs}
				handleDelete={deleteBlog}
			/>
			<h2>Add Blog</h2>
			<Form
				handleSubmit={addBlog}
				title={title}
				handleTitle={(e) => setTitle(e.target.value)}
				author={author}
				handleAuthor={(e) => setAuthor(e.target.value)}
				url={url}
				handleURL={(e) => setURL(e.target.value)}
				likes={likes}
				handleLikes={(e) => setLikes(e.target.value)}
			/>
		</div>
	);
}

export default App;
