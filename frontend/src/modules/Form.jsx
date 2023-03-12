const Form = ({ title, handleTitle, author, handleAuthor, url, handleURL, likes, handleLikes, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<input
				value={title}
				onChange={handleTitle}
				type='text'
				placeholder='Title'
			/>
			<input
				value={author}
				onChange={handleAuthor}
				type='text'
				placeholder='Author'
			/>
			<input
				value={url}
				onChange={handleURL}
				type='text'
				placeholder='URL'
			/>
			<input
				value={likes}
				onChange={handleLikes}
				type='number'
				placeholder='Likes'
			/>
			<button>Submit</button>
		</form>
	);
};

export default Form;
