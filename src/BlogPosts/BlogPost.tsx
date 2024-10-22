import { useBlogPosts } from "./useBlogPosts.ts";

export const BlogPost = ({ id }: { id: number }) => {
  const blogPost = useBlogPosts({ id });

  if (blogPost.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{blogPost.data?.title}</h1>
      <p>{blogPost.data?.body}</p>
    </>
  );
};
