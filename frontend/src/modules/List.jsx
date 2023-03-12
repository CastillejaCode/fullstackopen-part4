const List = ({ blogs }) => {
	return (
		<ul>
			{blogs.map((blog) => (
				<li key={blog.id}>{blog.title}</li>
			))}
		</ul>
	);
};
export default List;
