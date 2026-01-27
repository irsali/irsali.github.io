import type { MarkdownModule, PostMetaWithUrl } from '$lib/types';

class PostService {

  readonly blogUrlPrefix = '/blog/';

  async getAllPosts(): Promise<PostMetaWithUrl[]> {
    const modules = import.meta.glob<MarkdownModule>(
      '../../posts/blog/*.md',
      { eager: true }
    );
    
    const posts: PostMetaWithUrl[] = [];
    
    for (const [path, mod] of Object.entries(modules)) {
      const slug = path.split('/').pop()?.replace(/\.md$/, '');
      const meta = mod.metadata ?? {};
      
      posts.push({
        url: `${this.blogUrlPrefix}${slug}`,
        ...meta
      } as PostMetaWithUrl);
    }
    
    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    return posts;
  }

  async getAllCategoryPosts(category: string): Promise<PostMetaWithUrl[]> {
    const posts = await this.getAllPosts();
    return posts.filter(x => x.categories?.includes(category));
  }

  async getAllTagPosts(tag: string): Promise<PostMetaWithUrl[]> {
    const posts = await this.getAllPosts();
    return posts.filter(x => x.tags?.includes(tag));
  }

  async getAllTags(): Promise<string[]> {
    const modules = import.meta.glob<MarkdownModule>(
      '../../posts/blog/*.md',
      { eager: true }
    );
    const set = new Set<string>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(modules).forEach(([path, mod]) => {
      mod.metadata?.tags?.forEach((tags: string | Array<string>) => {
        if (typeof tags === 'string') {
          set.add(tags);
        } else if (Array.isArray(tags)) {
          tags.forEach(tag => set.add(tag));
        }
      })
    });

    return Array.from(set);
  }

  async getAllCategories(): Promise<string[]> {
    const modules = import.meta.glob<MarkdownModule>(
      '../../posts/blog/*.md',
      { eager: true }
    );
    const set = new Set<string>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(modules).forEach(([path, mod]) => {
      mod.metadata?.categories?.forEach(cat => {
        set.add(cat);
      })
    });

    return Array.from(set);
  }

}

export const postService = new PostService();