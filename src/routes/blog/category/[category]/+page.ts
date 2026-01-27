import { postService } from '$lib/services';

export const load = async ({ params }) => {
	const blogData = await postService.getAllBlogData();
	const posts = blogData.posts.filter(post => post.categories?.includes(params.category));
	
	return {
		posts,
		categories: blogData.categories,
		tags: blogData.tags
	};
};

export const prerender = true;
