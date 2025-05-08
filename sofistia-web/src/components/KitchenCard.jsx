import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function KitchenCard({ title, description, onReady, onNotPossible }) {
  return (
    <div
      className="card"
      style={{
        width: "450px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {description && <p className="card-text text-muted">{description}</p>}
      </div>
      <div className="d-flex justify-content-between p-3">
        <Button
          text="Pedido Pronto"
          className="btn-success w-45"
          onClick={onReady}
        />
        <Button
          text="Não é possível"
          className="btn-danger w-45"
          onClick={onNotPossible}
        />
      </div>
    </div>
  );
}

KitchenCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onReady: PropTypes.func,
  onNotPossible: PropTypes.func,
};

KitchenCard.defaultProps = {
  title: "",
  description: "",
  onReady: () => {},
  onNotPossible: () => {},
};
