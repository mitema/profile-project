import React from "react";

import { Paper, Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import ProfileImage from "../../assets/img/profile.jpg";

interface Props {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profileContainer: {
      width: "100%"
    },
    profileBodyImage: {
      textAlign: "center",
      width: `${theme.spacing(12.5)}%`,
      height: theme.spacing(27.25)
    },
    profileTextContainer: {
      marginBottom: theme.spacing(1.25)
    },
    profileImage: {
      margin: "auto",
      width: theme.spacing(20),
      height: theme.spacing(20),
      transform: "translate3d(0, -50%, 0)"
    },
    profileText: {
      marginTop: theme.spacing(-15),
      fontFamily: "Roboto Slab"
    },
    profileBody: {
      width: "auto",
      textAlign: "center"
    },
    profileDescriptionContainer: {
      maxWidth: theme.spacing(65)
    },
    profileDescription: {
      textTransform: "none",
      lineHeight: theme.spacing(0.25)
    }
  })
);
const WorkPage: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.profileContainer} container justify="center">
      <Grid className={classes.profileBody} item>
        <div className={classes.profileBodyImage}>
          <Avatar className={classes.profileImage} src={ProfileImage} />
        </div>
        <div className={classes.profileTextContainer}>
          <Typography
            color="textSecondary"
            variant="h4"
            className={classes.profileText}
          >
            Mitema Emmanuel
          </Typography>
        </div>
        <div>
          <Typography color="textPrimary" variant="overline">
            Software Developer
          </Typography>
        </div>
        <div className={classes.profileDescriptionContainer}>
          <Typography
            className={classes.profileDescription}
            color="textSecondary"
            variant="overline"
          >
            A unique Software Developer, AKA Binary Player - the name taken by a
            Nigerian born, Sydney based creative developer - passionate about
            using technology to provide meaningful solutions, a learner, thinker
            and musician.
          </Typography>
        </div>
        <Paper elevation={2}>Tessssssssssss</Paper>
      </Grid>
    </Grid>
  );
};

export default WorkPage;
