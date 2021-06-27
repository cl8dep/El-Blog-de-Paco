import { Typography } from "@material-ui/core";
import PostPreview from "../../components/PostPreview";
import Separator from "../../components/Separator";
import Post from "../../types/Post";
import useStyles from "./styles";

type Props = {
  posts: Post[];
};

function LatestPostsSection(props: Props) {
  const { posts } = props;

  const classes = useStyles();

  return (
    <section>
      <Separator title="Entradas más recientes" />

      <div className={classes.posts}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            resume={post.resume}
          />
        ))}
      </div>
    </section>
  );
}

export default LatestPostsSection;
