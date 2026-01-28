<script lang="ts">
	import type { PostMetaWithUrl } from '$lib/types';
	import BlogMetaSidebar from '$lib/templates/blogMetaSidebar.svelte';
	import { MessageCircle, CalendarDays } from 'lucide-svelte';
	import { page } from '$app/stores';

	export let data: { posts: PostMetaWithUrl[]; categories?: string[]; tags?: string[] };
	const { tag } = $page.params;
	const posts = data.posts; // Already filtered on server

	const pageSize = 10;
	let currentPage = 1;
	const totalPages = Math.ceil(posts.length / pageSize);

	$: paginatedPosts = posts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	function goToPage(page: number) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
		}
	}
</script>

<div class="min-h-screen bg-[var(--color-bg)] py-2">
	<div class="mx-auto max-w-5xl px-4">
		<h1 class="mb-8 py-8 text-center text-4xl font-light text-[var(--color-text)]">
			Blogs with tag: #{tag}
		</h1>
		<div class="flex flex-col gap-8 lg:flex-row">
			<div class="flex-1">
				<ul class="">
					{#each paginatedPosts as post}
						<li>
							<a
								href={post.url}
								class="group block flex flex-col bg-[var(--color-bg)] px-6 py-4 shadow-sm transition-colors hover:bg-[var(--color-modal-hover)] focus:bg-[var(--color-modal-hover)]"
							>
								<span
									class="text-2xl font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)] group-focus:text-[var(--color-primary)]"
									>{post.title}</span
								>
								<div class="mt-1 flex items-center gap-6 text-base text-[var(--color-modal-date)]">
									<span class="flex items-center gap-1">
										<MessageCircle class="inline h-5 w-5" /> Comments (0)
									</span>
									<span class="flex items-center gap-1">
										<CalendarDays class="inline h-5 w-5" />
										{post.date}
									</span>
								</div>
							</a>
						</li>
					{/each}
				</ul>
				{#if totalPages > 1}
					<div class="mt-8 flex items-center justify-between">
						<span class="text-lg text-gray-500">Page: {currentPage} of {totalPages}</span>
						<nav class="flex gap-2">
							<button
								on:click={() => goToPage(currentPage - 1)}
								disabled={currentPage === 1}
								class="rounded border border-gray-200 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
								>Prev</button
							>
							<button
								on:click={() => goToPage(currentPage + 1)}
								disabled={currentPage === totalPages}
								class="rounded border border-gray-200 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
								>Next</button
							>
						</nav>
					</div>
				{/if}
			</div>
		</div>
		<!-- Move BlogMetaSidebar to bottom -->
		<div class="mt-12">
			<BlogMetaSidebar categories={data.categories ?? []} tags={data.tags ?? []} />
		</div>
	</div>
</div>

<style>
</style>
