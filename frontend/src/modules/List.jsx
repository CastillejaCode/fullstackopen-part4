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

const Edit = ({ handleEdit, id }) => {
	return (
		<div>
			<button
				className='edit'
				onClick={() => handleEdit(id)}>
				Edit
			</button>
		</div>
	);
};

const List = ({ blogs, handleDelete, handleEdit }) => {
	return (
		<ul>
			{blogs.map((blog) => (
				<li key={blog.id}>
					<h2>{blog.title}</h2> Author: {blog.author} <br /> Link: {blog.url} <br /> Likes: {blog.likes}
					<div className="buttons">
						<Delete
							handleDelete={handleDelete}
							id={blog.id}
						/>
						<Edit
							handleEdit={handleEdit}
							id={blog.id}
						/>
					</div>
				</li>
			))}
		</ul>
	);
};
export default List;
