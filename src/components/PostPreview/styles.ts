import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: theme.shadows[2],
    transitions: theme.transitions.create('box-shadow'),

    "&:hover": {
      boxShadow: theme.shadows[4],
      cursor: "pointer",
    }
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    maxHeight: 240,
    minHeight: 240,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: `${theme.palette.primary.main} !important`,

    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  resume: {
    flexGrow: 1,
    opacity: .8,
  },
  cover: {
    width: '30%',
  },
  metadata: {
    display: "flex",
    alignItems: "center",
  },
  date: {
    display: "flex",
    alignItems: "center",
    marginRight: 10,
  },
}));

export default useStyles;
