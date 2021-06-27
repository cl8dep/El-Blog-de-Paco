import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    position: "relative",
    zIndex: 1,

    "&:after": {
      background: "linear-gradient(-47deg, #bf263d 0%, #00205c 100%)",
      opacity: 0.7,
      zIndex: -2,
      position: "absolute",
      content: '""',
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
    },
  },
  bg: {
    backgroundImage: `url(/images/bg1.webp)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  shapeBottom: {
    position: "absolute",
    zIndex: -1,
    top: "auto",
    bottom: "-1px",
    left: 0,
    right: 0,
  },
  svg: {
    overflow: "hidden",
    verticalAlign: "middle",
    fill: "currentColor",
    color: theme.palette.background.default,
  },
  content: {
    paddingTop: `calc(${theme.mixins.toolbar.minHeight}px + 15vh)`,
    color: "#fff",
    maxWidth: "70%",
    paddingLeft: "10%",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "95%",
      paddingTop: `calc(${theme.mixins.toolbar.minHeight}px + 10vh)`,
    },
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: 700,

    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
  subtitle: {
    marginTop: 7,
  },
  button: {
    marginTop: "20px",
    padding: "15px 30px !important",
    fontSize: "1.2rem !important",
  },
}));

export default useStyles;
