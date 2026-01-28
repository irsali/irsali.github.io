<script lang="ts">
	import type { SlugPostDto } from '$lib/types';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';



	export let data: SlugPostDto;
	let content = data.post.content;
	let metadata = data.post.metadata;
	let giscusScript: HTMLScriptElement | null = null;

	// Reactively update content and metadata when data changes (e.g., on slug change)
	$: if (data?.post) {
		content = data.post.content;
		metadata = data.post.metadata;
	}

	/**
	 * Maps application theme to Giscus theme
	 */
	function getGiscusTheme(appTheme: string): string {
		return appTheme === 'dark' ? 'noborder_dark' : 'noborder_light';
	}

	/**
	 * Updates Giscus theme when application theme changes
	 */
	function updateGiscusTheme(newTheme: string) {
		if (typeof window !== 'undefined' && (window as any).giscus) {
			(window as any).giscus.setTheme(getGiscusTheme(newTheme));
		}
	}

	/**
	 * Creates and initializes Giscus script
	 */
	function initializeGiscus() {
		// Remove existing script if it exists
		if (giscusScript) {
			giscusScript.remove();
		}

		const script = document.createElement('script');
		script.src = 'https://giscus.app/client.js';
		script.setAttribute('data-repo', 'irsali/irsali.github.io');
		script.setAttribute('data-repo-id', 'R_kgDOPSSJrg');
		script.setAttribute('data-category', 'General');
		script.setAttribute('data-category-id', 'DIC_kwDOPSSJrs4CtYa4');
		script.setAttribute('data-mapping', 'title');
		script.setAttribute('data-strict', '0');
		script.setAttribute('data-reactions-enabled', '1');
		script.setAttribute('data-emit-metadata', '0');
		script.setAttribute('data-input-position', 'bottom');
		script.setAttribute('data-theme', getGiscusTheme($theme));
		script.setAttribute('data-lang', 'en');
		script.setAttribute('data-loading', 'lazy');
		script.crossOrigin = 'anonymous';
		script.async = true;
		
		giscusScript = script;
		document.querySelector('.giscus')?.appendChild(script);
	}

	onMount(() => {
		initializeGiscus();

		// Subscribe to theme changes
		const unsubscribe = theme.subscribe((newTheme) => {
			// Wait a bit for Giscus to load before updating theme
			setTimeout(() => {
				updateGiscusTheme(newTheme);
			}, 1000);
		});

		// Cleanup subscription on component destroy
		return () => {
			unsubscribe();
			if (giscusScript) {
				giscusScript.remove();
			}
		};
	});
</script>

<article class="prose prose-lg bg-[var(--color-bg)] text-[var(--color-text)]">
	{#if content}
		<!-- Reading time and date info -->
		<div class="post-meta">
			{#if metadata?.date}
				<span class="post-date">
					<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
					</svg>
					{metadata.date}
				</span>
			{/if}
			{#if metadata?.readingTime}
				<span class="reading-time">
					<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<circle cx="12" cy="12" r="10"/>
						<polyline points="12,6 12,12 16,14"/>
					</svg>
					{metadata.readingTime}
				</span>
			{/if}
		</div>
		
		<svelte:component this={content} />
	{:else}
		<h1 class="text-[var(--color-primary,#19c7a6)]">Not found</h1>
	{/if}
</article>

<div class="giscus"></div>

<style>
	/* Ensure Giscus container follows theme */
	.giscus {
		margin-top: 2rem;
		padding: 1rem;
		border-radius: var(--radius-lg);
		background: var(--color-bg);
		border: 1px solid var(--color-border);
	}

	/* Smooth theme transitions for Giscus */
	.giscus iframe {
		border-radius: var(--radius-md);
		transition: all 0.3s ease;
	}

	/* Post meta information styling */
	.post-meta {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
		padding: 1rem;
		background: var(--color-bg-alt);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		font-size: 0.875rem;
		color: var(--color-text-light);
	}

	.post-date,
	.reading-time {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 500;
	}

	.icon {
		width: 1rem;
		height: 1rem;
		color: var(--color-primary);
	}

	/* Responsive design for post meta */
	@media (max-width: 768px) {
		.post-meta {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
		}
	}


</style>
