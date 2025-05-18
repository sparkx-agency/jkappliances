import { marked } from 'marked';

/**
 * Convert markdown content to HTML
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  // Configure marked options if needed
  marked.use({
    gfm: true, // GitHub Flavored Markdown
    breaks: true, // Convert line breaks to <br>
  });

  // Convert markdown to HTML
  const content = marked.parse(markdown);
  return content;
}