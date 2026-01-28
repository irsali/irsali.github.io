import type { PostMeta, SlugPostDto } from '$lib/types';
import type { SvelteComponent } from 'svelte';

export const load = async ({ params }) => {
    const slug = params.slug;
    let content: typeof SvelteComponent | null = null;
    let metadata: PostMeta | undefined = undefined;

    if (slug) {
        try {
            // Dynamically import only the specific post needed
            const mod = await import(`../../../posts/blog/${slug}.md`);
            content = mod.default;
            metadata = mod.metadata ?? mod;
        } catch (error) {
            console.warn('Could not load post:', slug, error);
        }
    }

    return {
        slug,
        post: {
            content,
            metadata
        }
    } as SlugPostDto;
};

export const prerender = true;
