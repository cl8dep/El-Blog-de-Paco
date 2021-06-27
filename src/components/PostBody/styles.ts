import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "10px 40px 40px 40px",
  },
  body: {
    "& p": {
      textAlign: "justify",
    },

    "& table": {
      display: "table",
      width: " 100%",
      border: "1px solid rgba(224, 224, 224, 1)",
      borderRadius: 4,
      borderSpacing: 0,
      borderCollapse: "collapse",
    },
    "& thead": {
      display: "table-header-group",

      "& tr": {
        color: "inherit",
        display: "table-row",
        outline: 0,
        verticalAlign: "middle",

        "& th": {
          display: "table-cell",
          color: "rgba(0, 0, 0, 0.87)",
          fontWeight: 500,
          lineHeight: "1.5rem",
          fontSize: "0.875rem",
          borderBottom: "1px solid rgba(224, 224, 224, 1)",
          padding: '16px',
        },
      },
    },
    "& tbody": {
      display: "table-row-group",

      "& tr": {
        color: "inherit",
        display: "table-row",
        outline: 0,
        verticalAlign: "middle",

        "& td": {
          borderBottom: "1px solid rgba(224, 224, 224, 1)",
          padding: '10px',
        },
      },
    },
  },
}));

export default useStyles;
