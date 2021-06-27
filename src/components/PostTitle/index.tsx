import { ReactNode } from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  const classes = useStyles();

  return <Typography variant="h2" className={classes.title}>{children}</Typography>;
};

export default PostTitle;
