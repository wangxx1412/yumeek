import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      width: "30%"
    }
     
  },
  label: {
    display: "flex"
  }
}));

export default function Labels(props) {
  const { labels } = props;
  const classes = useStyles();


  return (
    <section className={classes.root}>
        {labels.map((label, index) => 
        <div className={classes.label}>
          <Checkbox defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}/>
          <p key={index}>{label}</p>
        </div>
        )}
    </section>
  );
}
