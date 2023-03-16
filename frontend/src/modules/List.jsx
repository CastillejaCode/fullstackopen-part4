const Delete = ({ handleDelete, id }) => {
	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				handleDelete(id);
			}}>
			Delete
		</button>
	);
};

const List = ({ blogs, handleDelete }) => {
	return (
		<ul>
			{blogs.map((blog) => (
				<li key={blog.id}>
					<h2 style={{ margin: '0' }}>{blog.title}</h2> <br /> Author: {blog.author} <br /> Link: {blog.url} <br />{' '}
					Likes: {blog.likes}
					<Delete
						handleDelete={handleDelete}
						id={blog.id}
					/>
				</li>
			))}
		</ul>
	);
};
export default List;
