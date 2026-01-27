<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();
	let gradientElement: HTMLDivElement;
	let mouseX = 0;
	let mouseY = 0;

	/**
	 * Updates the radial gradient position based on mouse movement
	 */
	function updateGradientPosition(x: number, y: number) {
		if (gradientElement) {
			// Get current theme to determine gradient color
			const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
			const gradientColor = isDark 
				? 'rgba(25, 199, 166, 0.08)' // Your primary color with low opacity for dark theme
				: 'rgba(25, 199, 166, 0.12)'; // Your primary color with slightly higher opacity for light theme
			
			gradientElement.style.background = `radial-gradient(600px at ${x}px ${y}px, ${gradientColor}, transparent 80%)`;
		}
	}

	/**
	 * Handles mouse movement to update gradient position
	 */
	function handleMouseMove(event: MouseEvent) {
		// Use pageX/pageY to get absolute coordinates (includes scroll position)
		mouseX = event.clientX;
		mouseY = event.clientY;
		updateGradientPosition(mouseX, mouseY);
	}

	onMount(() => {
		// Set initial position to center of page (not just viewport)
		mouseX = window.innerWidth / 2;
		mouseY = window.scrollY + window.innerHeight / 2;
		updateGradientPosition(mouseX, mouseY);

		// Add mouse move listener
		document.addEventListener('mousemove', handleMouseMove);

		// Listen for theme changes to update gradient color
		const observer = new MutationObserver(() => {
			updateGradientPosition(mouseX, mouseY);
		});
		
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		// Cleanup on unmount
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<title>Profile | Irshad Ali</title>
	<script>
		var huOptions = {"appID":"irsaligithubio-598adbb","currentLanguage":"en","blocking":true,"globalCookie":false}
	</script>
	<script src="https://stage-app.hu-manity.co/banner/hu-banner.min.js" type="text/javascript" charset="utf-8"></script>
</svelte:head>

<!-- Dynamic radial gradient background -->
<div 
	bind:this={gradientElement}
	class="pointer-events-none fixed inset-0 z-[9999] transition duration-300"
	style="background: radial-gradient(600px at 50% 50%, rgba(25, 199, 166, 0.12), transparent 80%);"
></div>

{@render children()}
