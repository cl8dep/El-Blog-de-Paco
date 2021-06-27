import Author from "./Author";

type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  resume: string;
  openGraph: {
    url: string;
  };
  content: string;
};

export default Post;
