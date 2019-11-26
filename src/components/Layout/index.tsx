import React from "react";

import { Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

import Header from "../Header";
import BackgroundImage from "../../assets/img/profile-background.png";

interface ILayoutProps {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperContainer: {
      height: theme.spacing(36),
      backgroundImage: `url(${BackgroundImage})`
    },
    paperBodyContainer: {
      zIndex: theme.spacing(0.375)
    },
    paperRaised: {
      marginTop: theme.spacing(-5),
      marginLeft: theme.spacing(3.75),
      marginRight: theme.spacing(3.75)
    },
    paperBody: {
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "15px",
      paddingRight: "15px"
    }
  })
);
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={1} className={classes.paperContainer}>
        <Header />
      </Paper>
      <Paper className={clsx(classes.paperBodyContainer, classes.paperRaised)}>
        <Paper className={classes.paperBody}>{children}</Paper>
      </Paper>
    </>
  );
};
export default Layout;
