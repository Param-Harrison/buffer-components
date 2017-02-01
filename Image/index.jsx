import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';


const Image = ({ src, alt, width, height, border }) => {
  const classes = classNames(styles, undefined, {
    circle: border === 'circle',
    rounded: border === 'rounded',
  });

  const inlineStyle = {
    height,
    width,
  };

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      style={inlineStyle}
    />
  );
};


Image.propTypes = {
  alt: PropTypes.string,
  border: PropTypes.oneOf(['circle', 'rounded']),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Image.defaultProps = {
  alt: 'Image',
};

export default Image;