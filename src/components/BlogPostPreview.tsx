export default function BlogPostPreview({ post }: { post: any }) {
  return (
    <a class="hover:no-underline" href={post.url}>
      <article class="pb-7 mb-8 border-b-2 border-slate-600">
        <header class="flex flex-col items-start text-left">
          <p class="text-sm mb-1">{post.frontmatter.publishDate}</p>

          <h1 class="text-4xl font-bold">{post.frontmatter.title}</h1>
        </header>
        <p>{post.frontmatter.description}</p>
      </article>
    </a>
  );
}
