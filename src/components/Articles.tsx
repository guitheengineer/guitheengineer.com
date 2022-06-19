import BlogPostPreview from './BlogPostPreview';
import { createSignal } from 'solid-js';

export default function Articles(props: { allPosts: any }) {
  const [query, setQuery] = createSignal('');
  return (
    <>
      <label class="flex flex-col mb-12">
        <span class="mb-3 text-gray-400 text-sm">Search for articles</span>

        <input
          onKeyUp={(e) => {
            setQuery(e.target.value);
          }}
          value={query()}
          type="text"
          class="py-2 rounded bg-[#373764] px-3"
        />
      </label>
      <section aria-label="Blog post list">
        {props.allPosts
          .filter((post) => {
            const title = post.frontmatter.title.toLowerCase();
            const description = post.frontmatter.description.toLowerCase();
            const searchQuery = query().toLowerCase();
            return (
              title.includes(searchQuery) || description.includes(searchQuery)
            );
          })
          .map((post) => (
            <BlogPostPreview post={post} />
          ))}
      </section>
    </>
  );
}
