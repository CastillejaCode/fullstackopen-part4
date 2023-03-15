const dummy = (blogs) => 1;

const likes = (blogs) => {
	if (blogs.length === 0) return 0;
	return blogs.reduce((previous, current) => previous + current.likes, 0);
};

const favorite = (blogs) => {
	const sorted = blogs.sort((a, b) => a.likes - b.likes);
	return sorted[sorted.length - 1];
};

const mostBlogs = (blogs) => {};

module.exports = {
	dummy,
	likes,
	favorite,
	mostBlogs,
};
