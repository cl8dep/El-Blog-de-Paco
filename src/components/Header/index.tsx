import { AppBar, Toolbar, Grid, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import clsx from "clsx";
import ElevationScroll from "../ElevationScroll";
import Link from "../Link";
import useStyles from "./styles";

function Header() {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll
        className={classes.appBar}
        onTriggerClassName={clsx({
          [classes.elevatedAppBar]: true,
        })}
      >
        <AppBar
          elevation={0}
          color="transparent"
          className={classes.appBarRoot}
        >
          <Toolbar>
            <Grid container>
              <Grid
                item
                xs={10}
                sm={3}
                style={{ display: "flex", alignItems: "center" }}
              ></Grid>
              <Grid item xs={2} sm={9} className={classes.columnRoot}>
                <nav className={classes.desktopNavigation}>
                  <Link href="/" className={classes.menuItem}>
                    Inicio
                  </Link>
                  <Link href="/posts" className={classes.menuItem}>
                    Entradas
                  </Link>
                  <Link href="/about-us" className={classes.menuItem}>
                    Acerca de
                  </Link>
                </nav>
                <div className={classes.mobileNavigation}>
                  <IconButton color="inherit">
                    <MenuIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.fakeToolbar} />
    </>
  );
}

export default Header;
