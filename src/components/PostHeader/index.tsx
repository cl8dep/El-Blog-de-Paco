import Avatar from "../Avatar";
import DateFormatter from "../DateFormatter";
import CoverImage from "../CoverImage";
import PostTitle from "../PostTitle";
import Author from "../../types/Author";
import useStyles from "./styles";
import { CalendarToday as CalendarViewDayIcon } from "@material-ui/icons";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

function PostHeader(props: Props): JSX.Element {
  const { title, coverImage, date, author } = props;

  const classes = useStyles();

  return (
    <>
      <div className={classes.cover}>
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>

      <div className={classes.metadata}>
       
      <span className={classes.date}>
              <CalendarViewDayIcon color="primary"/> <DateFormatter dateString={date} />
            </span>
            <Avatar name={author.name} picture={author.picture} />
      </div>
    </>
  );
}

export default PostHeader;
