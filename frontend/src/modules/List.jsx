const List = ({ blogs }) => {
	return (
		<ul>
			{blogs.map((blog) => (
				<li key={blog.id}>
					<h2 style={{ margin: '0' }}>{blog.title}</h2> <br /> Author: {blog.author} <br /> Link: {blog.url} <br />{' '}
					Likes: {blog.likes}
				</li>
			))}
		</ul>
	);
};
export default List;
