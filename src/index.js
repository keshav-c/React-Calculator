import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

function Calculator(props) {
  const { name } = props;
  return (
    <h1>
      This is
      {' '}
      { name }
      {' '}
      Calculator!
    </h1>
  );
}

Calculator.defaultProps = {
  name: 'React',
};

Calculator.propTypes = {
  name: PropTypes.string,
};

ReactDOM.render(<Calculator name="Second Milestone" />, document.getElementById('root'));
