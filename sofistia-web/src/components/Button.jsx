import React from "react";
import PropTypes from "prop-types";

export default function Button({ text, className, onClick, type = "button" }) {
  const baseClasses = "btn"; // Bootstrap usa 'btn' como base
  return (
    <button
      type={type}
      className={`${baseClasses} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  className: "btn-primary", // Bootstrap 'btn-primary'
  onClick: () => {},
  type: "button",
};
