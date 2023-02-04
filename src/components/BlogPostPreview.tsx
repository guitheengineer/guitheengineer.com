export default function BlogPostPreview({ post }: { post: any }) {
  return (
    <a class="hover:no-underline" href={post.url}>
      <article>
        <header class="flex flex-col items-start text-left">
          {/* <p class="text-sm mb-1">{post.frontmatter.publishDate}</p> */}

          <h1 class="text-4xl font-bold -mb-1.5">{post.frontmatter.title}</h1>
        </header>
        <p className="mb-0">{post.frontmatter.description}</p>
      </article>
    </a>
  );
}
