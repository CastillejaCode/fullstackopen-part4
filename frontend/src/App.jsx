import { useState, useEffect } from 'react';
import './App.css';
import List from './modules/List';
import backend from './services/backend';

function App() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		backend.getAll().then((init) => setBlogs(init));
	}, []);

	return (
		<div>
			<h1>Julian's Blog</h1>
			<List blogs={blogs} />
		</div>
	);
}

export default App;
