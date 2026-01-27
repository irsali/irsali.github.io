export interface BlogPost {
	title: string;
	date: string;
	url: string;
	[key: string]: unknown;
}

export interface PostMeta {
	title: string;
	date: string | Date;
	description: string;
	categories: string[];
	tags: string[];
	icon?: string;
	readingTime?: string;
}

export interface PostMetaWithUrl extends PostMeta {
	url: string;
}

export interface BlogData {
	posts: PostMetaWithUrl[];
	categories: string[];
	tags: string[];
}

export interface SlugPostDto {
	slug: string;
	post: {
		content?: typeof import('svelte').SvelteComponent | null;
		metadata?: PostMeta;
	}
}

export interface MarkdownModule {
	metadata?: PostMetaWithUrl;
	[key: string]: unknown;
}
