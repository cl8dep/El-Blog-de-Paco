import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bottomShape: {
    marginTop: 0,
    height: "250px",
  },
  wave: {
    height: "250px",
    fill: theme.palette.primary.main,
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  footerContainer: {
    padding: "25px 30px 0px 30px",
  },
  content: {
    paddingBottom: "1.5rem !important",
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  credits: {
    position: "relative",
    paddingTop: "1.5rem !important",
    paddingBottom: "1.5rem !important",

    "&:before": {
      position: "absolute",
      bottom: 0,
      left: "50%",
      display: "block",
      width: "80%",
      height: "2px",
      marginLeft: "-40%",
      content: "''",
      background: `radial-gradient(ellipse at center, #ffffff 0, ${theme.palette.primary.main} 75%)`,
      opacity: 0.6,
    },
  },
}));

export default useStyles;
