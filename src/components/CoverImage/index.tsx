import Link from "next/link";
import useStyles from "./styles";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const classes = useStyles();

  const image = (
    <img
      alt={`Cover Image for ${title}`}
      className={classes.coverImage}
      src={src}
    />
  );

  return slug ? (
    <Link as={`/post/${slug}`} href="/post/[slug]">
      <a aria-label={title}>{image}</a>
    </Link>
  ) : (
    image
  );
};

export default CoverImage;
