<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import {
		Mail,
		ExternalLink,
		Code,
		Database,
		Cloud,
		Globe,
		Users,
		Award,
		Calendar,
		MapPin,
		Star,
		Zap,
		Shield,
		Sun,
		Moon,
		Linkedin,
		Server,
		Monitor,
		Bot,
		Brain,
		GitBranch,
		Bug,
		Settings,
		BarChart3,
		Clock,
		CircleDot,
		Menu,
		X
	} from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import Preloader from '$lib/components/Preloader.svelte';
	import VersionModal from '$lib/components/VersionModal.svelte';
	import {
		profile,
		companies,
		skills,
		skillCategories,
		achievements,
		recentProjects,
		experienceYears
	} from '$lib/data/profile';
	import { siGithub } from 'simple-icons';
	import 'animate.css';

	let showVersionModal = false;
	let showMobileMenu = false;

	// Version history data
	const versionHistory = [
		{
			version: 'v1.0',
			title: 'Portfolio v1.0',
			description: 'Initial version with basic layout',
			image: undefined // Add actual screenshot path here
		}
	];

	/**
	 * Returns the appropriate icon component based on the icon name
	 * @param iconName - The name of the icon to return
	 * @returns The icon component
	 */
	function getIconComponent(iconName: string) {
		const iconMap: Record<string, any> = {
			Code: Code,
			Server: Server,
			Globe: Globe,
			Database: Database,
			Cloud: Cloud,
			Brain: Brain,
			Monitor: Monitor,
			Award: Award,
			Git: GitBranch,
			Bug: Bug,
			Settings: Settings,
			BarChart3: BarChart3,
			Users: Users,
			Shield: Shield
		};
		return iconMap[iconName] || Code; // Default to Code if icon not found
	}

	/**
	 * Toggle the version modal
	 */
	function toggleVersionModal() {
		showVersionModal = !showVersionModal;
		if (typeof window !== 'undefined' && typeof document !== 'undefined') {
			if (showVersionModal) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	}

	/**
	 * Close the version modal
	 */
	function closeVersionModal() {
		showVersionModal = false;
		if (typeof window !== 'undefined' && typeof document !== 'undefined') {
			document.body.style.overflow = '';
		}
	}

	/**
	 * Handle keyboard events
	 */
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && showVersionModal) {
			closeVersionModal();
		}
		if (event.key === 'Escape' && showMobileMenu) {
			toggleMobileMenu();
		}
	}

	/**
	 * Toggle mobile menu
	 */
	function toggleMobileMenu() {
		showMobileMenu = !showMobileMenu;
		if (typeof window !== 'undefined' && typeof document !== 'undefined') {
			if (showMobileMenu) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	}

	onMount(() => {
		// Add keyboard event listener for ESC key
		if (typeof document !== 'undefined') {
			document.addEventListener('keydown', handleKeydown);

			// Add smooth scrolling for anchor links
			const links = document.querySelectorAll('a[href^="#"]');
			links.forEach((link) => {
				link.addEventListener('click', (e) => {
					e.preventDefault();
					const target = document.querySelector(link.getAttribute('href') || '');
					if (target) {
						target.scrollIntoView({ behavior: 'smooth' });
					}
				});
			});

			// Setup Intersection Observer for animations
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const element = entry.target as HTMLElement;
							const animationType = element.dataset.animate;

							requestAnimationFrame(() => {
								// Add animation classes
								element.classList.add('animate__animated');
								if (animationType) {
									element.classList.add(`animate__${animationType}`);
								}
							});

							// Stop observing after animation is triggered
							observer.unobserve(element);
						}
					});
				},
				{
					threshold: 0.1,
					rootMargin: '-50px 0px'
				}
			);

			// Observe all elements with data-animate attribute
			const animatedElements = document.querySelectorAll('[data-animate]');
			animatedElements.forEach((element) => observer.observe(element));

			// Start typing animation for hero title
			startTypingAnimation();
		}
	});

	onDestroy(() => {
		// Remove keyboard event listener
		if (typeof window !== 'undefined' && typeof document !== 'undefined') {
			document.removeEventListener('keydown', handleKeydown);
		}
	});

	/**
	 * Creates a typing effect for the hero description
	 */
	function startTypingAnimation() {
		if (typeof window === 'undefined' || typeof document === 'undefined') return;

		const descriptionElement = document.querySelector('.hero__description') as HTMLElement;

		if (!descriptionElement) return;

		const descriptionText = descriptionElement.textContent || '';

		// Hide the original text but keep it in the layout
		descriptionElement.style.visibility = 'hidden';
		descriptionElement.classList.add('typing'); // Add typing class for cursor

		// Create a visible overlay for typing
		const typingOverlay = document.createElement('span');
		typingOverlay.style.cssText = `
			position: absolute;
			top: 0;
			left: 0;
			visibility: visible;
			background: transparent;
			pointer-events: none;
		`;
		descriptionElement.appendChild(typingOverlay);

		let currentIndex = 0;
		const typeSpeed = 50; // milliseconds per character

		function typeNextChar() {
			if (currentIndex < descriptionText.length) {
				typingOverlay.textContent += descriptionText[currentIndex];
				currentIndex++;
				setTimeout(typeNextChar, typeSpeed);
			} else {
				// Remove typing class when finished
				setTimeout(() => {
					descriptionElement.classList.remove('typing');
					// Show the original text and remove overlay
					descriptionElement.style.visibility = 'visible';
					typingOverlay.remove();
				}, 500);
			}
		}

		// Start typing after a short delay
		setTimeout(typeNextChar, 1000);
	}
</script>

<svelte:head>
	<title>{profile.name} - {profile.title}</title>
	<meta name="description" content={profile.description} />
</svelte:head>

<!-- Preloader -->
<Preloader duration={0} />

<!-- Header -->
<header class="header">
	<div class="header__container">
		<div class="header__left">
			<a href="/" class="header__logo">{profile.name}</a>
		</div>
		<nav class="header__nav">
			<a href="#about" class="nav-link">About</a>
			<a href="#experience" class="nav-link">Experience</a>
			<a href="#projects" class="nav-link">Projects</a>
			<a href="#skills" class="nav-link">Skills</a>
			<a href={profile.blog} class="nav-link">Blog</a>
			<button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
				{#if $theme === 'dark'}
					<Sun class="theme-toggle__icon" />
				{:else}
					<Moon class="theme-toggle__icon" />
				{/if}
			</button>
		</nav>
		<button class="mobile-menu-toggle" on:click={toggleMobileMenu} aria-label="Toggle mobile menu">
			{#if showMobileMenu}
				<X class="mobile-menu-toggle__icon" />
			{:else}
				<Menu class="mobile-menu-toggle__icon" />
			{/if}
		</button>
	</div>
</header>

<!-- Mobile Menu -->
{#if showMobileMenu}
	<div
		class="mobile-menu-overlay"
		role="button"
		tabindex="0"
		on:click={toggleMobileMenu}
		on:keydown={(e) => e.key === 'Enter' && toggleMobileMenu()}
	>
		<div
			class="mobile-menu-container"
			role="dialog"
			aria-modal="true"
			tabindex="-1"
			on:click|stopPropagation
			on:keydown|stopPropagation
		>
			<!-- Header Section -->
			<div class="mobile-menu-header">
				<div class="profile-section">
					<div class="profile-avatar">
						<img src="/static/profile/profile_40.jpg" alt={profile.name} />
						<div class="status-indicator"></div>
					</div>
					<div class="profile-info">
						<h3 class="profile-name">{profile.name}</h3>
						<p class="profile-title">{profile.title}</p>
					</div>
				</div>
				<button class="mobile-menu-close" on:click={toggleMobileMenu} aria-label="Close menu">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M18 6 6 18M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Navigation Section -->
			<div class="mobile-menu-body">
				<div class="nav-section">
					<h4 class="nav-section-title">Navigation</h4>
					<ul class="nav-list">
						<li class="nav-item">
							<a href="#about" class="nav-link" on:click={toggleMobileMenu}>
								<div class="nav-icon">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								</div>
								<span class="nav-text">About Me</span>
								<div class="nav-arrow">
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="m9 18 6-6-6-6"></path>
									</svg>
								</div>
							</a>
						</li>
						<li class="nav-item">
							<a href="#experience" class="nav-link" on:click={toggleMobileMenu}>
								<div class="nav-icon">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
										<line x1="8" y1="21" x2="16" y2="21"></line>
										<line x1="12" y1="17" x2="12" y2="21"></line>
									</svg>
								</div>
								<span class="nav-text">Experience</span>
								<div class="nav-arrow">
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="m9 18 6-6-6-6"></path>
									</svg>
								</div>
							</a>
						</li>
						<li class="nav-item">
							<a href="#projects" class="nav-link" on:click={toggleMobileMenu}>
								<div class="nav-icon">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<polyline points="16 18 22 12 16 6"></polyline>
										<polyline points="8 6 2 12 8 18"></polyline>
									</svg>
								</div>
								<span class="nav-text">Projects</span>
								<div class="nav-arrow">
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="m9 18 6-6-6-6"></path>
									</svg>
								</div>
							</a>
						</li>
						<li class="nav-item">
							<a href="#skills" class="nav-link" on:click={toggleMobileMenu}>
								<div class="nav-icon">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
										<polyline points="2 17 12 22 22 17"></polyline>
										<polyline points="2 12 12 17 22 12"></polyline>
									</svg>
								</div>
								<span class="nav-text">Skills</span>
								<div class="nav-arrow">
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="m9 18 6-6-6-6"></path>
									</svg>
								</div>
							</a>
						</li>
						<li class="nav-item">
							<a href={profile.blog} class="nav-link" on:click={toggleMobileMenu}>
								<div class="nav-icon">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
										<polyline points="14 2 14 8 20 8"></polyline>
										<line x1="16" y1="13" x2="8" y2="13"></line>
										<line x1="16" y1="17" x2="8" y2="17"></line>
										<polyline points="10 9 9 9 8 9"></polyline>
									</svg>
								</div>
								<span class="nav-text">Blog</span>
								<div class="nav-arrow">
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="m9 18 6-6-6-6"></path>
									</svg>
								</div>
							</a>
						</li>
					</ul>
				</div>

				<!-- Settings Section -->
				<div class="nav-section">
					<h4 class="nav-section-title">Settings</h4>
					<div class="settings-list">
						<button class="settings-item theme-toggle-btn" on:click={toggleTheme}>
							<div class="settings-icon">
								{#if $theme === 'dark'}
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<circle cx="12" cy="12" r="5"></circle>
										<path
											d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
										></path>
									</svg>
								{:else}
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
									</svg>
								{/if}
							</div>
							<div class="settings-content">
								<span class="settings-label">Theme</span>
								<span class="settings-value">{$theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
							</div>
							<div class="settings-toggle">
								<div class="toggle-switch" class:active={$theme === 'dark'}>
									<div class="toggle-handle"></div>
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Hero Section -->
<section class="hero section">
	<div class="hero__container">
		<div class="hero__content">
			<h1 class="hero__title">
				<span class="hero__name">{profile.name}</span>
				<span class="hero__subtitle">{profile.title}</span>
			</h1>
			<p class="hero__description">
				{profile.description}
			</p>
			<div class="hero__stats">
				<div class="stat">
					<span class="stat__number">{experienceYears}+</span>
					<span class="stat__label">Years Experience</span>
				</div>
				<div class="stat">
					<span class="stat__number">15+</span>
					<span class="stat__label">Projects Delivered</span>
				</div>
			</div>
			<div class="hero__actions">
				<a href="#contact" class="btn btn--primary">
					<Mail class="btn__icon" />
					Get in Touch
				</a>
				<a href={profile.blog} class="btn btn--secondary">
					<ExternalLink class="btn__icon" />
					Read My Blog
				</a>
			</div>
		</div>
		<div class="hero__visual">
			<div class="hero__image">
				<img src="/static/profile/profile.jpg" alt={profile.name} class="profile-image" />
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="section" data-animate="fadeInUp">
	<div class="container">
		<h2 class="section__title">About Me</h2>
		<div class="about__content">
			<div class="about__text">
				<p>
					I'm a result-driven software engineer with extensive experience in full-stack development,
					specializing in .NET technologies, modern JavaScript frameworks, and cloud-native
					architectures.
				</p>
				<p>
					I help businesses create smart and scalable solutions to their general and unique
					problems. With expertise in cloud platforms, microservices, and modern development
					practices, I've successfully delivered enterprise-level applications and led development
					teams.
				</p>
				<p>
					My focus areas include performance optimization, security implementation, and building
					maintainable, scalable systems that drive business value.
				</p>
			</div>
			<div class="about__achievements">
				{#each achievements as achievement}
					<div class="achievement" data-animate="fadeInRight">
						<div class="achievement__content">
							<h3 class="achievement__title">{achievement.title}</h3>
							<p class="achievement__description">{achievement.description}</p>
							{#if achievement.year}
								<span class="achievement__year">{achievement.year}</span>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Experience Section -->
<section id="experience" class="section section--alt" data-animate="fadeInUp">
	<div class="container">
		<h2 class="section__title">Professional Experience</h2>
		<div class="experience__timeline">
			{#each companies as company, index}
				<div class="timeline__item" data-animate="fadeInLeft">
					<div class="timeline__marker"></div>
					<div class="timeline__content">
						<div class="timeline__header">
							<h3 class="timeline__title">{company.role}</h3>
							<span class="timeline__company">{company.name}</span>
							<span class="timeline__period">{company.period}</span>
						</div>
						<p class="timeline__description">{company.description}</p>
						<div class="timeline__technologies">
							{#each company.technologies as tech}
								<span class="tech-tag">{tech}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Projects Section -->
<section id="projects" class="section" data-animate="fadeInUp">
	<div class="container">
		<h2 class="section__title">Featured Projects</h2>
		<div class="projects__grid">
			{#each recentProjects as project}
				<div class="project-card" data-animate="fadeInUp">
					<div class="project__header">
						<h3 class="project__title">{project.title}</h3>
					</div>
					<p class="project__description">{project.description}</p>
					<div class="project__technologies">
						{#each project.technologies as tech}
							<span class="tech-tag">{tech}</span>
						{/each}
					</div>
					<div class="project__links">
						{#if project.github}
							<a href={project.github} target="_blank" rel="noopener" class="project__link">
								<svg class="project__link-icon" viewBox="0 0 24 24" fill="currentColor">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
								GitHub
							</a>
						{/if}
						{#if project.live}
							<a href={project.live} target="_blank" rel="noopener" class="project__link">
								<ExternalLink class="project__link-icon" />
								Live Demo
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Skills Section -->
<section id="skills" class="section section--alt" data-animate="fadeInUp">
	<div class="container">
		<h2 class="section__title">Skills & Technologies</h2>
		<div class="skills__grid">
			{#each skillCategories as category}
				<div class="skills__category" data-animate="fadeInUp">
					<h3 class="skills__category-title">
						<svelte:component this={getIconComponent(category.icon)} class="skills__icon" />
						{category.title}
					</h3>
					<div class="skills__list">
						{#each category.skills as skill}
							<span class="skill-tag">{skill}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="section" data-animate="fadeInUp">
	<div class="container">
		<h2 class="section__title">Get in Touch</h2>
		<div class="contact__content">
			<div class="contact__info">
				<div class="contact__item">
					<Mail class="contact__icon" />
					<a href="mailto:{profile.email}" class="contact__link">{profile.email}</a>
				</div>
				<div class="contact__item">
					<MapPin class="contact__icon" />
					<span class="contact__text">{profile.location}</span>
				</div>
			</div>
			<div class="contact__social">
				<a href={profile.github} class="social-link" target="_blank" rel="noopener">
					<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
						<path d={siGithub.path} />
					</svg>
					<span>GitHub</span>
				</a>
				<a href={profile.linkedin} class="social-link" target="_blank" rel="noopener">
					<Linkedin class="social-icon" />
					<span>LinkedIn</span>
				</a>
				<a href={profile.blog} class="social-link">
					<ExternalLink class="social-icon" />
					<span>Blog</span>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="footer">
	<div class="container">
		<p class="footer__text">
			Built with curiosity, creativity, and a bit of AI magic. © {new Date().getFullYear()}
			{profile.name}.
		</p>
	</div>
</footer>

<!-- Version History Modal -->
<VersionModal show={showVersionModal} versions={versionHistory} onClose={toggleVersionModal} />

<!-- Version History Button -->
<button
	class="version-history-btn portal-btn"
	on:click={toggleVersionModal}
	aria-label="View version history"
>
	<div class="portal-icon">
		<CircleDot />
	</div>
	<!-- <span>Time Portal</span> -->
</button>

<style>
	/* Header */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: var(--color-header-bg);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid var(--color-border);
		z-index: var(--z-index-header);
		transition: var(--theme-transition);
	}

	.header__container {
		max-width: var(--container-max-width);
		margin: 0 auto;
		padding: 0 var(--container-padding);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 64px;
	}

	.header__logo {
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--color-text);
		text-decoration: none;
		transition: var(--theme-transition);
	}

	.header__logo:hover {
		color: var(--color-primary);
	}

	.header__nav {
		display: flex;
		gap: 2rem;
	}

	.mobile-menu-toggle {
		display: none;
		background: none;
		border: none;
		color: var(--color-text);
		cursor: pointer;
		padding: 0.5rem;
		border-radius: var(--radius-md);
		transition: var(--theme-transition);
	}

	.mobile-menu-toggle:hover {
		background: var(--color-bg-alt);
	}

	.mobile-menu-toggle__icon {
		width: 1.5rem;
		height: 1.5rem;
	}

	.nav-link {
		color: var(--color-text);
		text-decoration: none;
		font-weight: 500;
		transition: var(--theme-transition);
		position: relative;
	}

	.nav-link:hover {
		color: var(--color-primary);
	}

	/* Header specific nav-links - override mobile menu styles */
	.header__nav .nav-link {
		display: inline;
		padding: 0;
		background: none;
		border: none;
		border-radius: 0;
		overflow: visible;
		transform: none;
		box-shadow: none;
		position: relative;
		font-size: 18px;
	}

	.header__nav .nav-link::before {
		display: none;
	}

	.header__nav .nav-link::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--color-primary);
		transition: width 0.3s ease;
	}

	.header__nav .nav-link:hover {
		background: none;
		transform: none;
		box-shadow: none;
		border-color: transparent;
		color: var(--color-primary);
	}

	.header__nav .nav-link:hover::after {
		width: 100%;
	}

	/* Modern Mobile Menu Styles */
	.mobile-menu-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		z-index: 1000;
		display: flex;
		justify-content: flex-end;
		align-items: stretch;
		animation: fadeInOverlay 0.3s ease-out;
	}

	.mobile-menu-container {
		width: 360px;
		max-width: 85vw;
		height: 100vh;
		background: var(--color-bg);
		display: flex;
		flex-direction: column;
		box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
		animation: slideInFromRight 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		overflow: hidden;
		position: relative;
	}

	/* Dark theme overlay gradient */
	.mobile-menu-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 200px;
		background: linear-gradient(135deg, rgba(25, 199, 166, 0.1) 0%, rgba(102, 126, 234, 0.05) 100%);
		pointer-events: none;
		z-index: 0;
	}

	/* Header Section */
	.mobile-menu-header {
		padding: 2rem 1.5rem 1.5rem;
		border-bottom: 1px solid var(--color-border);
		background: var(--color-bg-alt);
		position: relative;
		z-index: 1;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}

	.profile-section {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex: 1;
	}

	.mobile-menu-close {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		color: var(--color-text-light);
		cursor: pointer;
		transition: all 0.3s ease;
		flex-shrink: 0;
		position: relative;
		overflow: hidden;
	}

	.mobile-menu-close::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(239, 68, 68, 0.1);
		opacity: 0;
		transition: all 0.3s ease;
	}

	.mobile-menu-close:hover {
		background: rgba(239, 68, 68, 0.1);
		border-color: rgba(239, 68, 68, 0.3);
		color: #ef4444;
		transform: scale(1.05);
	}

	.mobile-menu-close:hover::before {
		opacity: 1;
	}

	.mobile-menu-close:active {
		transform: scale(0.95);
		transition: transform 0.1s ease;
	}

	.profile-avatar {
		position: relative;
		width: 60px;
		height: 60px;
		border-radius: 18px;
		overflow: hidden;
		background: linear-gradient(135deg, var(--color-primary), rgba(25, 199, 166, 0.7));
		padding: 2px;
		animation: pulseGlow 2s ease-in-out infinite;
	}

	.profile-avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 16px;
	}

	.status-indicator {
		position: absolute;
		bottom: 2px;
		right: 2px;
		width: 16px;
		height: 16px;
		background: #10b981;
		border: 3px solid var(--color-bg);
		border-radius: 50%;
		animation: statusPulse 2s ease-in-out infinite;
	}

	.profile-info {
		flex: 1;
	}

	.profile-name {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--color-text);
		margin: 0 0 0.25rem 0;
	}

	.profile-title {
		font-size: 0.875rem;
		color: var(--color-text-light);
		margin: 0;
		opacity: 0.8;
	}

	/* Body Section */
	.mobile-menu-body {
		flex: 1;
		padding: 1.5rem;
		overflow-y: auto;
		position: relative;
		z-index: 1;
	}

	.nav-section {
		margin-bottom: 2rem;
	}

	.nav-section:last-child {
		margin-bottom: 0;
	}

	.nav-section-title {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-light);
		margin: 0 0 1rem 0;
		opacity: 0.7;
	}

	.nav-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.nav-item {
		margin: 0;
	}

	.nav-link {
		display: flex;
		align-items: center;
		padding: 1rem;
		background: var(--color-bg-alt);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		text-decoration: none;
		color: var(--color-text);
		font-weight: 500;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.nav-link::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(25, 199, 166, 0.1), transparent);
		transition: left 0.5s ease;
	}

	.nav-link:hover::before {
		left: 100%;
	}

	.nav-link:hover {
		background: var(--color-primary);
		color: white;
		transform: translateX(4px);
		box-shadow: 0 4px 15px rgba(25, 199, 166, 0.3);
		border-color: var(--color-primary);
	}

	.nav-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: rgba(25, 199, 166, 0.1);
		border-radius: 10px;
		color: var(--color-primary);
		transition: all 0.3s ease;
		flex-shrink: 0;
	}

	.nav-link:hover .nav-icon {
		background: rgba(255, 255, 255, 0.2);
		color: white;
		transform: scale(1.1);
	}

	.nav-text {
		flex: 1;
		margin: 0 1rem;
		font-size: 0.95rem;
	}

	.nav-arrow {
		display: flex;
		align-items: center;
		color: var(--color-text-light);
		opacity: 0.5;
		transition: all 0.3s ease;
	}

	.nav-link:hover .nav-arrow {
		opacity: 1;
		color: white;
		transform: translateX(2px);
	}

	/* Settings Section */
	.settings-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.settings-item {
		display: flex;
		align-items: center;
		padding: 1rem;
		background: var(--color-bg-alt);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		cursor: pointer;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.settings-item::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
		transition: left 0.5s ease;
	}

	.settings-item:hover::before {
		left: 100%;
	}

	.settings-item:hover {
		background: rgba(102, 126, 234, 0.1);
		transform: translateX(2px);
		border-color: rgba(102, 126, 234, 0.3);
	}

	.settings-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		background: rgba(102, 126, 234, 0.1);
		border-radius: 8px;
		color: #667eea;
		transition: all 0.3s ease;
		flex-shrink: 0;
	}

	.settings-item:hover .settings-icon {
		background: rgba(102, 126, 234, 0.2);
		transform: scale(1.05);
	}

	.settings-content {
		flex: 1;
		margin: 0 1rem;
	}

	.settings-label {
		display: block;
		font-weight: 500;
		color: var(--color-text);
		font-size: 0.95rem;
		margin-bottom: 0.25rem;
	}

	.settings-value {
		display: block;
		font-size: 0.8rem;
		color: var(--color-text-light);
		opacity: 0.7;
	}

	.settings-toggle {
		flex-shrink: 0;
	}

	.toggle-switch {
		width: 44px;
		height: 24px;
		background: var(--color-border);
		border-radius: 12px;
		position: relative;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.toggle-switch.active {
		background: var(--color-primary);
	}

	.toggle-handle {
		width: 20px;
		height: 20px;
		background: white;
		border-radius: 10px;
		position: absolute;
		top: 2px;
		left: 2px;
		transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.toggle-switch.active .toggle-handle {
		left: 22px;
	}

	/* Animations */
	@keyframes fadeInOverlay {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideInFromRight {
		from {
			transform: translateX(100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes pulseGlow {
		0%,
		100% {
			box-shadow: 0 0 0 0 rgba(25, 199, 166, 0.4);
		}
		50% {
			box-shadow: 0 0 0 8px rgba(25, 199, 166, 0.1);
		}
	}

	@keyframes statusPulse {
		0%,
		100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.2);
			opacity: 0.8;
		}
	}

	/* Responsive adjustments */
	@media (max-width: 480px) {
		.mobile-menu-container {
			width: 100vw;
			max-width: none;
		}
	}

	/* Hero Section */
	.hero {
		padding: 120px 0 80px;
		background: var(--color-bg-alt);
		color: var(--color-text);
		position: relative;
		overflow: hidden;
	}

	.hero__container {
		max-width: var(--container-max-width);
		margin: 0 auto;
		padding: 0 var(--container-padding);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		position: relative;
		z-index: 4;
	}

	/* Animated Tech Stack Background */
	.tech-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 3;
	}

	.tech-icon {
		position: absolute;
		left: var(--x);
		top: var(--y);
		background: rgba(25, 199, 166, 0.1);
		color: var(--color-primary);
		padding: 0.5rem 1rem;
		border-radius: var(--radius-md);
		border: 1px solid rgba(25, 199, 166, 0.2);
		font-size: 0.875rem;
		font-weight: 500;
		white-space: nowrap;
		animation: float var(--speed) ease-in-out infinite;
		animation-delay: var(--delay);
		opacity: 0.7;
		transition: all 0.3s ease;
	}

	.tech-icon:hover {
		opacity: 1;
		background: rgba(25, 199, 166, 0.15);
		transform: scale(1.05);
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		25% {
			transform: translateY(-10px) rotate(1deg);
		}
		50% {
			transform: translateY(-5px) rotate(-1deg);
		}
		75% {
			transform: translateY(-15px) rotate(0.5deg);
		}
	}

	/* Dark theme adjustments for tech icons */
	[data-theme='dark'] .tech-icon {
		background: rgba(25, 199, 166, 0.15);
		border-color: rgba(25, 199, 166, 0.3);
	}

	[data-theme='dark'] .tech-icon:hover {
		background: rgba(25, 199, 166, 0.2);
	}

	.hero__title {
		margin: 0 0 2rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.hero__name {
		font-size: 3.5rem;
		font-weight: 800;
		line-height: 1.1;
		position: relative;
	}

	.hero__subtitle {
		font-size: 1.5rem;
		font-weight: 400;
		opacity: 0.9;
	}

	.hero__description {
		font-size: 1.125rem;
		margin: 0 0 2.5rem 0;
		opacity: 0.9;
		line-height: 1.7;
		position: relative;
		min-height: 1.7em;
	}

	.hero__stats {
		display: flex;
		gap: 2rem;
		margin-bottom: 2.5rem;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.stat__number {
		font-size: 2rem;
		font-weight: 700;
		color: var(--color-primary);
	}

	.stat__label {
		font-size: 0.875rem;
		opacity: 0.8;
		text-align: center;
	}

	.hero__actions {
		display: flex;
		gap: 1rem;
	}

	.hero__visual {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero__image {
		width: 350px;
		height: 350px;
		border-radius: 50%;
		overflow: hidden;
		border: 4px solid var(--color-hero-border);
		box-shadow: var(--shadow-lg);
	}

	.profile-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* About Section */
	.about__content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.about__text p {
		font-size: 1.125rem;
		margin: 0 0 1.5rem 0;
		color: var(--color-text-light);
		line-height: 1.7;
	}

	.achievement {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: var(--color-bg);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.achievement:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.achievement__icon {
		width: 2rem;
		height: 2rem;
		color: var(--color-primary);
		flex-shrink: 0;
	}

	.achievement__title {
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		color: var(--color-text);
	}

	.achievement__description {
		margin: 0;
		color: var(--color-text-light);
		line-height: 1.6;
	}

	/* Experience Section */
	.experience__timeline {
		position: relative;
		max-width: 800px;
		margin: 0 auto;
	}

	.experience__timeline::before {
		content: '';
		position: absolute;
		left: 1rem;
		top: 0;
		bottom: 0;
		width: 2px;
		background: var(--color-border);
	}

	.timeline__item {
		position: relative;
		margin-bottom: 3rem;
		padding-left: 3rem;
	}

	.timeline__marker {
		position: absolute;
		left: 0.5rem;
		top: 0.5rem;
		width: 1rem;
		height: 1rem;
		background: var(--color-primary);
		border-radius: 50%;
		border: 3px solid var(--color-bg);
		box-shadow: var(--shadow-sm);
	}

	.timeline__content {
		background: var(--color-bg);
		padding: 2rem;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.timeline__content:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.timeline__header {
		margin-bottom: 1rem;
	}

	.timeline__title {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		color: var(--color-text);
	}

	.timeline__company {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-primary);
		margin-right: 1rem;
	}

	.timeline__period {
		font-size: 0.875rem;
		color: var(--color-text-light);
		background: var(--color-bg-alt);
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius-md);
	}

	.timeline__description {
		margin: 0 0 1rem 0;
		color: var(--color-text-light);
		line-height: 1.6;
	}

	.timeline__technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-tag {
		background: var(--color-primary);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius-md);
		font-size: 0.75rem;
		font-weight: 500;
	}

	/* Projects Grid Section */
	.projects__grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		position: relative;
		z-index: 2;
	}

	.project-card {
		background: var(--color-bg);
		padding: 2rem;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.project-card:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.project__header {
		margin-bottom: 1rem;
	}

	.project__title {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		color: var(--color-text);
	}

	.project__meta {
		display: flex;
		gap: 1rem;
		font-size: 0.875rem;
		color: var(--color-text-light);
	}

	.project__period {
		font-size: 0.875rem;
		color: var(--color-primary);
		font-weight: 500;
	}

	.project__company {
		font-size: 0.875rem;
		color: var(--color-text-light);
		background: var(--color-bg-alt);
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius-md);
	}

	.project__description {
		margin: 0 0 1rem 0;
		color: var(--color-text-light);
		line-height: 1.6;
	}

	.project__technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.project__link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-primary);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s;
	}

	.project__link:hover {
		color: var(--color-primary-hover);
	}

	.project__link-icon {
		width: 1rem;
		height: 1rem;
	}

	/* Skills Section */
	.skills__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		position: relative;
		z-index: 2;
	}

	.skills__category {
		background: var(--color-bg);
		padding: 2rem;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.skills__category:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.skills__category-title {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 1.5rem 0;
		color: var(--color-text);
	}

	.skills__icon {
		width: 1.5rem;
		height: 1.5rem;
		color: var(--color-primary);
	}

	.skills__list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.skill-tag {
		background: var(--color-bg-alt);
		color: var(--color-text);
		padding: 0.5rem 1rem;
		border-radius: var(--radius-md);
		font-size: 0.875rem;
		font-weight: 500;
		transition: all 0.2s;
	}

	.skill-tag:hover {
		background: var(--color-primary);
		color: white;
		transform: translateY(-1px);
	}

	/* Contact Section */
	.contact__content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.contact__info {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.contact__item {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.contact__icon {
		width: 1.5rem;
		height: 1.5rem;
		color: var(--color-primary);
	}

	.contact__link {
		color: var(--color-text);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s;
	}

	.contact__link:hover {
		color: var(--color-primary);
	}

	.contact__text {
		color: var(--color-text);
		font-weight: 500;
	}

	.contact__social {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.social-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 1.5rem;
		background: var(--color-bg);
		border-radius: var(--radius-md);
		text-decoration: none;
		color: var(--color-text);
		font-weight: 500;
		transition: all 0.2s;
		box-shadow: var(--shadow-sm);
	}

	.social-link:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		color: var(--color-primary);
	}

	.social-icon {
		width: 1.25rem;
		height: 1.25rem;
	}

	/* Footer */
	.footer {
		background: var(--color-bg-alt);
		color: var(--color-text);
		padding: 2rem 0;
		text-align: center;
	}

	.footer__text {
		margin: 0;
		opacity: 0.8;
	}

	/* Animation Controls */
	.animate__animated {
		--animate-duration: 0.8s;
	}

	/* Initial state for elements that will be animated */
	[data-animate] {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;
	}

	[data-animate].animate__animated {
		opacity: 1;
		transform: translateY(0);
	}

	/* Staggered delays for grid items */
	.project-card:nth-child(1) {
		animation-delay: 0.1s;
	}
	.project-card:nth-child(2) {
		animation-delay: 0.2s;
	}
	.project-card:nth-child(3) {
		animation-delay: 0.3s;
	}

	.skills__category:nth-child(1) {
		animation-delay: 0.1s;
	}
	.skills__category:nth-child(2) {
		animation-delay: 0.2s;
	}
	.skills__category:nth-child(3) {
		animation-delay: 0.3s;
	}
	.skills__category:nth-child(4) {
		animation-delay: 0.4s;
	}

	.timeline__item:nth-child(1) {
		animation-delay: 0.1s;
	}
	.timeline__item:nth-child(2) {
		animation-delay: 0.2s;
	}
	.timeline__item:nth-child(3) {
		animation-delay: 0.3s;
	}
	.timeline__item:nth-child(4) {
		animation-delay: 0.4s;
	}

	.achievement:nth-child(1) {
		animation-delay: 0.1s;
	}
	.achievement:nth-child(2) {
		animation-delay: 0.2s;
	}
	.achievement:nth-child(3) {
		animation-delay: 0.3s;
	}

	/* Responsive Design */
	@media (max-width: 1024px) {
		.projects__grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.hero__container {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 2rem;
		}

		.hero__name {
			font-size: 2.5rem;
		}

		.hero__subtitle {
			font-size: 1.25rem;
		}

		.hero__stats {
			justify-content: center;
		}

		.hero__actions {
			justify-content: center;
			flex-wrap: wrap;
		}

		.about__content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.contact__content {
			grid-template-columns: 1fr;
			gap: 2rem;
			text-align: center;
		}

		.skills__grid {
			grid-template-columns: 1fr;
		}

		.projects__grid {
			grid-template-columns: 1fr;
		}

		.header__nav {
			display: none;
		}

		.mobile-menu-toggle {
			display: block;
		}
	}

	@media (max-width: 480px) {
		.hero {
			padding: 100px 0 60px;
		}

		.hero__name {
			font-size: 2rem;
		}

		.hero__stats {
			flex-direction: column;
			gap: 1rem;
		}

		.hero__actions {
			flex-direction: column;
		}

		.project-card {
			margin: 0 0.5rem;
			padding: 1.5rem;
		}

		/* Version Modal Mobile Styles */
		.version-modal__content {
			padding: 2rem 1rem;
			width: 95%;
		}

		.version-modal__orb {
			width: 150px;
			height: 150px;
		}

		.version-modal__orb-content h2 {
			font-size: 1.25rem;
		}

		.version-modal__orb-content p {
			font-size: 0.8rem;
		}

		.version-modal__grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.version-history-btn {
			bottom: 1rem;
			right: 1rem;
			padding: 0.5rem 1rem;
			font-size: 0.8rem;
		}
	}

	/* Version History Button */
	.version-history-btn {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		background: var(--color-primary);
		color: white;
		border: none;
		border-radius: var(--radius-md);
		padding: 0.75rem 1.25rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
		box-shadow: var(--shadow-md);
		z-index: 999;
		transition:
			background 0.2s,
			transform 0.2s;
	}

	.version-history-btn:hover {
		background: var(--color-primary-hover);
		transform: translateY(-2px);
	}

	.version-history-btn:focus {
		outline: none;
	}

	.version-history-btn .lucide-clock {
		width: 1.25rem;
		height: 1.25rem;
	}

	/* Portal Button Styles */
	.portal-btn {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border-radius: 50px;
		padding: 0.75rem 1.5rem;
		gap: 0.75rem;
		box-shadow:
			0 8px 32px rgba(102, 126, 234, 0.3),
			0 0 0 1px rgba(255, 255, 255, 0.1);
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
	}

	.portal-btn:hover {
		background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
		transform: translateY(-3px) scale(1.05);
		box-shadow:
			0 12px 40px rgba(102, 126, 234, 0.4),
			0 0 0 1px rgba(255, 255, 255, 0.2);
	}

	.portal-icon {
		position: relative;
		animation: portal-pulse 2s ease-in-out infinite;
	}

	.portal-icon::before,
	.portal-icon::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		transform: translate(-50%, -50%);
		animation: portal-rings 3s ease-in-out infinite;
	}

	.portal-icon::before {
		width: 2.5rem;
		height: 2.5rem;
		animation-delay: 0s;
	}

	.portal-icon::after {
		width: 3.5rem;
		height: 3.5rem;
		animation-delay: 0.5s;
	}

	.portal-icon svg {
		width: 1.5rem;
		height: 1.5rem;
		filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
		position: relative;
		z-index: 2;
	}

	@keyframes portal-pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}

	@keyframes portal-rings {
		0%,
		100% {
			opacity: 0.3;
			transform: translate(-50%, -50%) scale(0.8);
		}
		50% {
			opacity: 0.8;
			transform: translate(-50%, -50%) scale(1.2);
		}
	}
</style>
