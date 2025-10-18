import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import rehypeRaw from 'rehype-raw';
import shiki from 'rehype-shiki';
import remarkLintRecommended from 'remark-preset-lint-recommended';
import remarkSmartypants from 'remark-smartypants';
import remarkFootnotes from 'remark-footnotes';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			rehypePlugins: [
				[
					shiki,
					{
						theme: 'nord' //'github-dark', // or 'nord', 'light-plus', etc.
					}
				],
				// rehypeRaw,
			],
			remarkPlugins: [
				remarkLintRecommended,
				remarkSmartypants,
				remarkFootnotes
			],
		})
	],
	kit: {
		adapter: adapter(),
		paths: {
			base: '', 
		},
		prerender: {
			handleHttpError: 'warn'
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
