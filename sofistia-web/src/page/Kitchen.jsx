import React, { useState } from "react";
import KitchenCard from "../components/KitchenCard";

const ordersData = [
  { id: 1, title: "Pizza Margherita", description: "Massa fina com tomate e manjericão" },
  { id: 2, title: "Hamburguer Artesanal", description: "200g de carne, queijo e salada" },
  { id: 3, title: "Sushi Combo", description: "20 peças variadas" },
  { id: 4, title: "Salada Caesar", description: "Alface, frango grelhado e molho Caesar" },
  { id: 5, title: "Lasanha Bolonhesa", description: "Massa caseira, carne e queijo" },
];

export default function Kitchen() {
  const [orders, setOrders] = useState(ordersData);

  const handleOrderReady = (id) => {
    alert(`Pedido ${id} está pronto!`);
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  const handleOrderNotPossible = (id) => {
    alert(`Pedido ${id} não é possível fazer.`);
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  return (
    <div
      className="d-flex flex-column"
      style={{
        height: "100vh",
        backgroundColor: "#e0dcdc",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      <h1 className="text-center mb-4">👨‍🍳 Cozinha - Pedidos em Preparação</h1>

      <div
        className="container"
        style={{
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        <div className="row g-4 justify-content-between">
          {orders.map((order) => (
            <div key={order.id} className="col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center">
              <KitchenCard
                title={order.title}
                description={order.description}
                onReady={() => handleOrderReady(order.id)}
                onNotPossible={() => handleOrderNotPossible(order.id)}
              />
            </div>
          ))}
          {orders.length === 0 && (
            <p className="text-center mt-5">🎉 Nenhum pedido pendente no momento!</p>
          )}
        </div>
      </div>
    </div>
  );
}
