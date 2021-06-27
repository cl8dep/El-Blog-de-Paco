import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    width: "100%",
    height: "100%",
    display: "block",
  },
  coverImage: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export default useStyles;
