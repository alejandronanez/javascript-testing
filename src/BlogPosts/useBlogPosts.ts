import useSWR from "swr";

// don't care about ts errors for this example.
// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

type BlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useBlogPosts = ({ id }: { id: number }) => {
  return useSWR<BlogPost>(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : undefined,
    fetcher,
  );
};
