import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 35,
    fontWeight: 500,
    textAlign: "center",
    color: theme.palette.primary.main,
    padding: "20px 0 10px 0"
  },
}));

export default useStyles;
