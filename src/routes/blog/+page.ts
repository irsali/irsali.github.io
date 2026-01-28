import { postService } from '$lib/services';

export const load = async () => {
	return await postService.getAllBlogData();
};

export const prerender = true;
