import { useRouter } from "next/router";
import Container from "../../components/Container";
import PostBody from "../../components/PostBody";
import PostHeader from "../../components/PostHeader";
import { getPostBySlug, getAllPosts } from "../../lib/files";
import PostTitle from "../../components/PostTitle";
import markdownToHtml from "../../lib/markdownToHtml";
import Post from "../../types/Post";
import { NextSeo } from "next-seo";

type Props = {
  post: Post;
};

function PostDetails({ post }: Props) {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={post.title}
        openGraph={{
          images: [{ url: post.openGraph.url }],
        }}
      />
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </>
  );
}

export default PostDetails;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
