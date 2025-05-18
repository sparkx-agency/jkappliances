import { marked } from 'marked';

/**
 * Convert markdown content to HTML
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  // Configure marked options for better styling
  marked.use({
    gfm: true, // GitHub Flavored Markdown
    breaks: true, // Convert line breaks to <br>
    renderer: {
      heading(text, level) {
        // Add styling for different heading levels
        if (level === 1) {
          return `<h1 class="text-3xl font-bold text-gray-900 mb-6">${text}</h1>`;
        } else if (level === 2) {
          return `<h2 class="text-2xl font-semibold text-blue-800 mt-8 mb-4">${text}</h2>`;
        } else if (level === 3) {
          return `<h3 class="text-xl font-semibold text-blue-700 mt-6 mb-3">${text}</h3>`;
        }
        return `<h${level} class="font-semibold text-gray-900 mt-4 mb-2">${text}</h${level}>`;
      },
      paragraph(text) {
        return `<p class="mb-4 text-gray-700">${text}</p>`;
      },
      list(body, ordered) {
        const tag = ordered ? 'ol' : 'ul';
        const className = ordered 
          ? 'list-decimal pl-6 mb-6 space-y-2 text-gray-700' 
          : 'list-disc pl-6 mb-6 space-y-2 text-gray-700';
        return `<${tag} class="${className}">${body}</${tag}>`;
      },
      listitem(text) {
        return `<li class="mb-1">${text}</li>`;
      },
      strong(text) {
        return `<strong class="font-semibold text-gray-900">${text}</strong>`;
      },
      blockquote(quote) {
        return `<blockquote class="border-l-4 border-blue-500 pl-4 py-2 mb-4 italic text-gray-700">${quote}</blockquote>`;
      },
    }
  });

  // Convert markdown to HTML
  const content = marked.parse(markdown);
  return content;
}