import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Paths
export const BLOGS_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');
export const BLOG_IMAGES_DIRECTORY = path.join(process.cwd(), 'public/images/blog');

// Author type that can be either a string or an object with a name property
export type Author = string | { name: string; [key: string]: any };

// Types
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: Author;
  readTime: number;
  categories: string[];
  tags: string[];
  image: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: Author;
  readTime: number;
  categories: string[];
  tags: string[];
  image: string;
}

// Get all blog posts (without content for listing)
export function getAllBlogPosts(): BlogMeta[] {
  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(BLOGS_DIRECTORY)) {
      fs.mkdirSync(BLOGS_DIRECTORY, { recursive: true });
      return [];
    }

    const fileNames = fs.readdirSync(BLOGS_DIRECTORY);
    
    const allBlogsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(BLOGS_DIRECTORY, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        try {
          // Use gray-matter to parse the post metadata section
          const { data } = matter(fileContents);
          
          // Default image path if not specified
          const defaultImage = `/images/blog/default.jpg`;
          const imagePath = data.image || `/images/blog/${slug}.jpg`;
          const finalImagePath = fs.existsSync(path.join(process.cwd(), 'public', imagePath.startsWith('/') ? imagePath.slice(1) : imagePath)) 
            ? imagePath 
            : defaultImage;
          
          // Format data
          return {
            slug,
            title: data.title || '',
            excerpt: data.excerpt || '',
            date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
            author: data.author || 'Admin',
            readTime: data.readTime || 5,
            categories: Array.isArray(data.categories) ? data.categories : data.categories?.split(',').map((c: string) => c.trim()) || [],
            tags: Array.isArray(data.tags) ? data.tags : data.tags?.split(',').map((t: string) => t.trim()) || [],
            image: finalImagePath
          };
        } catch (e) {
          console.error(`Error processing ${fileName}:`, e);
          return null;
        }
      })
      .filter(Boolean) as BlogMeta[];
    
    // Sort blogs by date, newest first
    return allBlogsData.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
}

// Get a specific blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(BLOGS_DIRECTORY, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);
    
    // Default image path if not specified
    const defaultImage = `/images/blog/default.jpg`;
    const imagePath = data.image || `/images/blog/${slug}.jpg`;
    const finalImagePath = fs.existsSync(path.join(process.cwd(), 'public', imagePath.startsWith('/') ? imagePath.slice(1) : imagePath)) 
      ? imagePath 
      : defaultImage;
    
    // Format data
    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content: content || '',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      author: data.author || 'Admin',
      readTime: data.readTime || 5,
      categories: Array.isArray(data.categories) ? data.categories : data.categories?.split(',').map((c: string) => c.trim()) || [],
      tags: Array.isArray(data.tags) ? data.tags : data.tags?.split(',').map((t: string) => t.trim()) || [],
      image: finalImagePath
    };
  } catch (error) {
    console.error(`Error getting blog post ${slug}:`, error);
    return null;
  }
}

// Save a blog post
export async function saveBlogPost(
  slug: string, 
  title: string,
  excerpt: string,
  content: string,
  author: string,
  readTime: number,
  categories: string,
  tags: string,
  imageFile?: File,
): Promise<{ success: boolean; message: string; filePath?: string }> {
  try {
    // Ensure directories exist
    if (!fs.existsSync(BLOGS_DIRECTORY)) {
      fs.mkdirSync(BLOGS_DIRECTORY, { recursive: true });
    }
    
    if (!fs.existsSync(BLOG_IMAGES_DIRECTORY)) {
      fs.mkdirSync(BLOG_IMAGES_DIRECTORY, { recursive: true });
    }
    
    // Format frontmatter
    const date = new Date().toISOString();
    const frontmatter = {
      title,
      excerpt,
      date,
      author,
      readTime,
      categories,
      tags,
    };
    
    // Create markdown file with frontmatter
    const markdown = matter.stringify(content, frontmatter);
    const filePath = path.join(BLOGS_DIRECTORY, `${slug}.md`);
    fs.writeFileSync(filePath, markdown);
    
    // Save image if provided
    let imagePath;
    if (imageFile) {
      const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
      imagePath = path.join(BLOG_IMAGES_DIRECTORY, `${slug}${path.extname(imageFile.name)}`);
      fs.writeFileSync(imagePath, imageBuffer);
    }
    
    return {
      success: true,
      message: 'Blog post saved successfully',
      filePath,
    };
  } catch (error) {
    console.error('Error saving blog post:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
} 