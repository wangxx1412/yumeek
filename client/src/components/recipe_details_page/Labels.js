import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "80%",
    display: "flex",
    flexDirection: "column",
  },
}));

export default function Labels(props) {
  const { labels } = props;
  const classes = useStyles();


  return (
    <section className={classes.root}>
        {labels.map((label, index) => <p key={index}>{label}</p>)}
    </section>
  );
}