import React from 'react';
import useStyle from './FooterStyle';

const Footer = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        DEVELOPED BY RAJAT KAUSHIK - 2021 - AS AN ASSIGNMENT FOR GRAPHY.
      </div>
    </div>
  );
};

export default Footer;
