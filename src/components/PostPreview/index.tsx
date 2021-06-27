import Link from "next/link";
import { Card, Typography } from "@material-ui/core";
import { CalendarToday as CalendarViewDayIcon } from "@material-ui/icons";
import Avatar from "../Avatar";
import DateFormatter from "../DateFormatter";
import CoverImage from "../CoverImage";
import Author from "../../types/Author";
import useStyles from "./styles";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  resume: string;
  author: Author;
  slug: string;
};

const PostPreview = (props: Props) => {
  const { title, coverImage, date, resume, author, slug } = props;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <div className={classes.content}>
          <Typography variant="h3" className={classes.title}>
            <Link as={`/post/${slug}`} href="/post/[slug]">
              {title}
            </Link>
          </Typography>

          <p className={classes.resume}>{resume}</p>

          <div className={classes.metadata}>
            <span className={classes.date}>
              <CalendarViewDayIcon color="primary"/> <DateFormatter dateString={date} />
            </span>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
        <div className={classes.cover}>
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      </div>
    </Card>
  );
};

export default PostPreview;
