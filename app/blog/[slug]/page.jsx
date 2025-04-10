import { latestNews, featuredArticle, electricCars,carAccessoriesArticle,latestBikeNews,latestCarNews, goMechanicBasics } from '@/utils/blog';

// Generate static paths
export async function generateStaticParams() {
  const allPosts = [...latestNews, ...featuredArticle, ...electricCars, ...carAccessoriesArticle, ...latestBikeNews,...latestCarNews, ...goMechanicBasics];
  return allPosts.map((post) => ({
    slug: post.url,
  }));
}

// Generate metadata
export async function generateMetadata({ params }) {
    if (!params || !params.slug) {
      return {
        title: "Blog Post",
      };
    }
  
    const allPosts = [...latestNews, ...featuredArticle, ...electricCars, ...carAccessoriesArticle, ...latestBikeNews,...latestCarNews, ...goMechanicBasics];
    const post = allPosts.find((p) => p.url === params.slug);
  
    return {
      title: post?.title || "Blog Post",
    };
  }

export default function Page({ params }) {
  const allPosts = [...latestNews, ...featuredArticle, ...electricCars, ...carAccessoriesArticle, ...latestBikeNews,...latestCarNews, ...goMechanicBasics];
  const post = allPosts.find((p) => p.url === params.slug);

  if (!post) {
    return <div className="container text-red-500 text-center py-8">Post not found</div>;
  }

  return (
    <main className="paddings py-8">
      <article className="mx-auto">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover rounded-xl mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex gap-4 text-gray-600 mb-6">
          <span>By {post.author}</span>
          <span>{post.date}</span>
        </div>
        <div className="">
          <p>Blog content for {post.title}</p>
        </div>
      </article>
    </main>
  );
}