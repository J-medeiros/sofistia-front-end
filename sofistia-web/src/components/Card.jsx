import React from "react";
import PropTypes from "prop-types";

export default function Card({ image, title, description, onSelect, isSelected }) {
  return (
    <div
      className="card position-relative"
      style={{
        width: "450px",
        height: "380px",
      }}
    >
      <div style={{ position: "relative", height: "70%" }}>
        {image && (
          <img
            src={image}
            alt={title}
            className="card-img-top h-100"
            style={{ objectFit: "cover" }}
          />
        )}
        {/* Checkbox sobre a imagem */}
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "20px",
            height: "20px",
          }}
        />
      </div>
      <div
        className="card-body d-flex flex-column justify-content-between"
        style={{ height: "30%" }}
      >
        {title && <h5 className="card-title">{title}</h5>}
        {description && <p className="card-text text-muted">{description}</p>}
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool,
};

Card.defaultProps = {
  image: "",
  title: "",
  description: "",
  onSelect: () => {},
  isSelected: false,
};
