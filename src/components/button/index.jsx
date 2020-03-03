import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {classList = 'blue', handleClick, children} = props;

  return (
    <button
      className={`button ${classList ? classList : ''}`}
      type='button'
      onClick={handleClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  classList: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.element,
};

export default Button;