import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: "all 0.4s ease 0s",
    backgroundColor: "transparent",
  },
  elevatedAppBar: {
    backgroundColor: "white",
    color: `${theme.palette.primary.main} !important`,

    "& $menuItem": {
      color: `${theme.palette.primary.main} !important`,
    },
    "& $mobileNavigation": {
      color: `${theme.palette.primary.main} !important`,
    },
  },
  appBarRoot: {},
  logo: {
    maxWidth: "100px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "75px",
    },
  },
  grow: {
    flexGrow: 1,
  },
  columnRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "white",
  },
  mobileNavigation: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  desktopNavigation: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navbarNav: {
    listStyle: "none",
    display: "flex",
  },
  menuItem: {
    margin: "0px 15px",
    position: "relative",
    color: "white",
    fontSize: "16px",
    textDecoration: "none",
    cursor: "pointer",
    fontWeight: 500,
  },
  fakeToolbar: {
    //...theme.mixins.toolbar
  },
  drawerList: {
    minWidth: "200px",
  },
}));

export default useStyles;
