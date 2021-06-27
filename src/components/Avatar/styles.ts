import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "flex",
    alignItems: "center",
  },
  innerAvatar: {
    width: 32,
    height: 32,
  },
  text: {
    marginLeft: 5,
    fontWeight: 500,
  },
}));

export default useStyles;
