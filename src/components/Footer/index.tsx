import { Grid, IconButton, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.bottomShape}>
        <svg
          className={classes.wave}
          preserveAspectRatio="none"
          version="1.1"
          viewBox="5 0 1366 222"
          width="100%"
        >
          <path
            d="M-2.19,238H1366v-4.27c-67.87-24-146.44-43.08-230.75-53.19-253.33-27.78-293.94,51.64-541.13,29.89C318.08,186.31,289.49,32.92,6.9,11.73c-5.21-.42-10.56-.7-15.9-1V238Z"
            transform="translate(9.5 -10.22)"
          ></path>
        </svg>
      </div>

      <footer className={classes.footer}>
        <div className={classes.footerContainer}>
          <Grid container className={classes.content}>
            <Grid item xs={12} sm={4}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              itaque omnis id odit reiciendis aperiam temporibus excepturi optio
              quod impedit qui odio sequi iure? Doloribus repellendus porro
              provident dolor optio.
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4" className={classes.title}>Categorías</Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.credits}>
            <Grid item xs={12} sm={6}>
              <div>© 2021 El Blog de Paco. Todos los derechos reservados.</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <IconButton></IconButton>
              </div>
            </Grid>
          </Grid>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
