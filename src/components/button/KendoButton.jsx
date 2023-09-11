import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@progress/kendo-react-buttons';
import "./KendoButton.css";

const KendoButton = ({ className, style, children }) => {
  return (
    <div>
      <button  className={`custom-button ${className}`} style={style}>
        {children}
      </button>
    </div>
  );
};

KendoButton.propTypes = {
  className: PropTypes.string, // Additional CSS classes
  style: PropTypes.object, // Inline styles
  children: PropTypes.node, // Button content
};

export default KendoButton;
