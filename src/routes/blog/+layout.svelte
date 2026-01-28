<script lang="ts">
	import Fuse from 'fuse.js';
	import { onMount } from 'svelte';
	import { X, Search, Sun, Moon } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import Preloader from '$lib/components/Preloader.svelte';
	import { postService } from '$lib/services/post.service';
	import type { PostMetaWithUrl } from '$lib/types';
	
	let searchQuery = '';
	let showSearch = false;
	let results: any[] = [];
	let fuse: Fuse<any>;
	let posts: PostMetaWithUrl[] = [];
	let postsLoaded = false;
	let isLoadingPosts = false;

	onMount(() => {
		// Keyboard shortcut Ctrl+K to open search
		const handler = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				openSearch();
			}
		};
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	});

	async function loadPostsForSearch() {
		if (postsLoaded || isLoadingPosts) return;
		
		isLoadingPosts = true;
		try {
			const blogData = await postService.getAllBlogData();
			posts = blogData.posts;
			postsLoaded = true;
			
			// Initialize Fuse.js with loaded posts
			fuse = new Fuse(posts, {
				keys: ['title', 'description', 'tags', 'categories'],
				threshold: 0.3
			});
		} catch (error) {
			console.error('Failed to load posts for search:', error);
		} finally {
			isLoadingPosts = false;
		}
	}

	function handleSearchInput(e: Event) {
		searchQuery = (e.target as HTMLInputElement).value;
		if (searchQuery.length > 0 && fuse) {
			results = fuse.search(searchQuery).map((r) => r.item);
		} else {
			results = [];
		}
	}

	async function openSearch() {
		showSearch = true;
		
		// Lazy load posts on first search
		if (!postsLoaded) {
			await loadPostsForSearch();
		}
		
		setTimeout(() => {
			const input = document.getElementById('blog-search-input');
			if (input) input.focus();
		}, 0);
	}
	
	function closeSearch() {
		showSearch = false;
		searchQuery = '';
		results = [];
	}
</script>

<svelte:head>
	<title>Blogs | Irshad Ali</title>
</svelte:head>

<!-- Preloader -->
<Preloader duration={0} />

<div class="blog-list-layout">
	<header class="blog-header">
		<div class="blog-header__container">
			<div class="blog-header__left">
				<a href="/" class="blog-header__logo">Irshad Ali</a>
			</div>
			<nav class="blog-header__nav">
				<button
					class="search-btn"
					on:click={openSearch}
					title="Search blogs"
					aria-label="Open search modal"
				>
					<Search class="search-btn__icon" />
					<span class="search-btn__text">Ctrl K</span>
				</button>
				<a href="/blog" class="blog-header__link">Blog</a>
				<button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
					{#if $theme === 'dark'}
						<Sun class="theme-toggle__icon" />
					{:else}
						<Moon class="theme-toggle__icon" />
					{/if}
				</button>
			</nav>
		</div>
	</header>

	{#if showSearch}
		<div
			class="search-modal-overlay"
			style="background: var(--color-modal-overlay); backdrop-filter: blur(8px);"
		>
			<div
				class="search-modal"
				style="box-shadow: 0 8px 32px var(--color-modal-shadow,rgba(0,0,0,0.10));"
			>
				<button
					class="search-modal__close"
					on:click={closeSearch}
					aria-label="Close search modal"
				>
					<X class="search-modal__close-icon" />
				</button>
				<h2 class="search-modal__title">
					<Search class="search-modal__title-icon" />
					<span>Search Blog</span>
				</h2>
				<input
					id="blog-search-input"
					class="search-modal__input"
					type="text"
					placeholder="Type to search..."
					bind:value={searchQuery}
					on:input={handleSearchInput}
					autocomplete="off"
				/>
				{#if results.length > 0}
					<ul class="search-modal__results">
						{#each results as post}
							<li class="search-modal__result-item">
								<a
									href={post.url}
									class="search-modal__result-link"
									on:click={closeSearch}
								>
									{post.title}
									<small class="search-modal__result-date">{post.date}</small>
								</a>
							</li>
						{/each}
					</ul>
				{:else if searchQuery.length > 0}
					<p class="search-modal__no-results">No results found.</p>
				{/if}
			</div>
		</div>
	{/if}
</div>

<div class="blog-content">
	<slot />
</div>

<style>
	/* Blog Header */
	.blog-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: var(--color-header-bg);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		z-index: var(--z-index-header);
		transition: var(--theme-transition);
	}

	.blog-header__container {
		max-width: var(--container-max-width);
		margin: 0 auto;
		padding: 0 var(--container-padding);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 64px;
	}

	.blog-header__left {
		display: flex;
		align-items: center;
	}

	.blog-header__logo {
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--color-text);
		text-decoration: none;
		transition: var(--theme-transition);
	}

	.blog-header__logo:hover {
		color: var(--color-primary);
	}

	.blog-header__nav {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.search-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		border: none;
		background: rgba(0, 0, 0, 0.05);
		color: var(--color-text);
		border-radius: var(--radius-md);
		transition: var(--theme-transition);
		cursor: pointer;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.search-btn:hover {
		background: rgba(0, 0, 0, 0.1);
		color: var(--color-primary);
		transform: translateY(-1px);
	}

	[data-theme="dark"] .search-btn {
		background: rgba(255, 255, 255, 0.1);
	}

	[data-theme="dark"] .search-btn:hover {
		background: rgba(255, 255, 255, 0.15);
	}

	.search-btn__icon {
		width: 1.5rem;
		height: 1.5rem;
	}

	.search-btn__text {
		font-weight: 500;
	}

	.blog-header__link {
		color: var(--color-text);
		text-decoration: none;
		font-weight: 500;
		transition: var(--theme-transition);
		position: relative;
		padding: 0.5rem 0.75rem;
		border-radius: var(--radius-md);
	}

	.blog-header__link:hover {
		color: var(--color-primary);
		background: rgba(0, 0, 0, 0.05);
	}

	[data-theme="dark"] .blog-header__link:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	/* Blog Content */
	.blog-content {
		margin-top: 64px;
		padding: 2rem var(--container-padding);
	}

	/* Theme toggle button */
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border: none;
		background: transparent;
		color: var(--color-text);
		border-radius: var(--radius-md);
		cursor: pointer;
		transition: var(--theme-transition);
		margin-left: 1rem;
	}

	.theme-toggle:hover {
		background: var(--color-muted);
		color: var(--color-primary);
	}

	.theme-toggle__icon {
		width: 1.25rem;
		height: 1.25rem;
		transition: var(--theme-transition);
	}

	/* Search Modal */
	.search-modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		z-index: var(--z-index-modal);
		display: flex;
		height: 100vh;
		width: 100vw;
		align-items: flex-start;
		justify-content: center;
		padding: 0 1rem;
	}

	.search-modal {
		position: relative;
		margin-top: 5vh;
		max-height: 90vh;
		width: 100%;
		overflow-y: auto;
		border: 1px solid var(--color-modal-border);
		background: var(--color-modal-bg);
		padding: 1.5rem;
		border-radius: var(--radius-lg);
	}

	.search-modal__close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		cursor: pointer;
		border: none;
		background: none;
		color: var(--color-modal-close);
		font-size: 1.25rem;
		transition: color 0.2s;
	}

	.search-modal__close:hover {
		color: var(--color-primary);
	}

	.search-modal__close-icon {
		width: 1.5rem;
		height: 1.5rem;
	}

	.search-modal__title {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 1rem 0;
		color: var(--color-modal-title);
	}

	.search-modal__title-icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-primary);
	}

	.search-modal__input {
		width: 100%;
		margin-bottom: 1.25rem;
		padding: 0.75rem 1.25rem;
		border: 1px solid var(--color-modal-input-border);
		background: var(--color-modal-input-bg);
		color: var(--color-modal-input-text);
		border-radius: var(--radius-lg);
		font-size: 1.125rem;
		box-shadow: var(--shadow-sm);
		transition: border-color 0.2s;
	}

	.search-modal__input:focus {
		outline: none;
		border-color: var(--color-primary);
	}

	.search-modal__results {
		margin: 0;
		padding: 0;
		list-style: none;
		border-top: 1px solid var(--color-modal-divider);
	}

	.search-modal__result-item {
		border-bottom: 1px solid var(--color-modal-divider);
	}

	.search-modal__result-link {
		display: block;
		padding: 0.75rem;
		color: var(--color-primary);
		text-decoration: none;
		font-size: 1.125rem;
		font-weight: 500;
		transition: background-color 0.2s;
		border-radius: var(--radius-md);
	}

	.search-modal__result-link:hover {
		background: var(--color-modal-hover);
	}

	.search-modal__result-date {
		display: block;
		margin-top: 0.25rem;
		color: var(--color-modal-date);
		font-size: 0.875rem;
		font-weight: normal;
	}

	.search-modal__no-results {
		color: var(--color-modal-date);
		font-style: italic;
		margin: 0;
		padding: 0.75rem;
	}

	/* Responsive Design */
	@media (min-width: 640px) {
		.search-modal {
			width: 500px;
			padding: 2rem;
		}
	}

	@media (min-width: 768px) {
		.search-modal {
			width: 700px;
		}
	}

	@media (min-width: 1024px) {
		.search-modal {
			width: 900px;
		}
	}

	@media (max-width: 768px) {
		.blog-header__nav {
			gap: 1rem;
		}

		.search-btn__text {
			display: none;
		}

		.theme-toggle {
			margin-left: 0.5rem;
		}
	}
</style>
