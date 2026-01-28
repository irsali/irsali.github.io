import type { MarkdownModule, PostMetaWithUrl, BlogData } from '$lib/types';

class PostService {

  readonly blogUrlPrefix = '/blog/';
  private cachedData: BlogData | null = null;

  /**
   * Extract all blog data (posts, categories, tags) in a single pass
   * Results are cached for subsequent calls
   */
  private async extractAllBlogData(): Promise<BlogData> {
    if (this.cachedData) {
      return this.cachedData;
    }

    const modules = import.meta.glob<MarkdownModule>(
      '../../posts/blog/*.md'
    );
    
    const posts: PostMetaWithUrl[] = [];
    const categorySet = new Set<string>();
    const tagSet = new Set<string>();
    
    // Single pass through all modules - now with lazy loading
    for (const [path, importFn] of Object.entries(modules)) {
      const slug = path.split('/').pop()?.replace(/\.md$/, '');
      const mod = await importFn(); // Lazy load each module
      const meta = mod.metadata;
      
      // Extract post data
      posts.push({
        url: `${this.blogUrlPrefix}${slug}`,
        ...meta
      } as PostMetaWithUrl);
      
      // Extract categories
      meta?.categories?.forEach((cat: string) => {
        categorySet.add(cat);
      });
      
      // Extract tags
      meta?.tags?.forEach((tag: string | Array<string>) => {
        if (typeof tag === 'string') {
          tagSet.add(tag);
        } else if (Array.isArray(tag)) {
          tag.forEach(t => tagSet.add(t));
        }
      });
    }
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    
    this.cachedData = {
      posts,
      categories: Array.from(categorySet).sort(),
      tags: Array.from(tagSet).sort()
    };
    
    return this.cachedData;
  }

  async getAllPosts(): Promise<PostMetaWithUrl[]> {
    const data = await this.extractAllBlogData();
    return data.posts;
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
    const data = await this.extractAllBlogData();
    return data.tags;
  }

  async getAllCategories(): Promise<string[]> {
    const data = await this.extractAllBlogData();
    return data.categories;
  }

  /**
   * Get all blog data at once - optimized for pages that need everything
   */
  async getAllBlogData(): Promise<BlogData> {
    return this.extractAllBlogData();
  }

}

export const postService = new PostService();