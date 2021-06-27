import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cover: {
    height: "60vh",
    maxHeight: "60vh",
    position: 'relative',

    "& img": {
        position: 'relative',
        zIndex: -3,
    },

    "&:after": {
      background: "linear-gradient(-47deg, #bf263d 0%, #00205c 100%)",
      opacity: 0.2,
      zIndex: -2,
      position: "absolute",
      content: '""',
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
    },
  },
  metadata: {
    display: 'flex',
    alignItems: 'center',
    margin: "10px 40px 10px 40px",
    position: "relative",

    "&:after": {
      position: "absolute",
      top: 0,
      left: "50%",
      display: "block",
      width: "80%",
      height: "2px",
      marginLeft: "-40%",
      content: "''",
      background: `radial-gradient(ellipse at center, #ffffff 0, rgba(255, 255, 255, 0) 75%)`,
      opacity: 0.6,
    },
  },
  date: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
  }
}));

export default useStyles;
