import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <h1 className="text-center mb-4">🏠 Bem-vindo ao Melhor Restaurante da Cidade</h1>
      <div className="d-flex gap-3">
        <NavLink to="/kitchen">
          <button className="btn btn-primary">Ir para Cozinha</button>
        </NavLink>
        <NavLink to="/orders">
          <button className="btn btn-info">Fazer Pedido</button>
        </NavLink>
      </div>
    </div>
  );
}