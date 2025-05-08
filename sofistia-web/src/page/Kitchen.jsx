import React, { useState } from "react";
import KitchenCard from "../components/KitchenCard";

const ordersData = [
  {
    id: 1,
    title: "Pizza Margherita",
    description: "Pizza tradicional com molho de tomate, mussarela e manjericão fresco.",
    image: "https://images.pexels.com/photos/4109084/pexels-photo-4109084.jpeg",
  },
  {
    id: 2,
    title: "Hambúrguer Artesanal",
    description: "Hambúrguer artesanal com pão brioche, cheddar e bacon crocante.",
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
  },
  {
    id: 3,
    title: "Spaghetti à Bolonhesa",
    description: "Massa com molho bolonhesa e parmesão ralado.",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
  },
  {
    id: 4,
    title: "Salada Caesar",
    description: "Alface, frango grelhado, croutons e molho Caesar.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: 5,
    title: "Sushi Combo 12 peças",
    description: "Combo com nigiris, uramakis e hossomakis.",
    image: "https://images.pexels.com/photos/3577566/pexels-photo-3577566.jpeg",
  },
  {
    id: 6,
    title: "Tábua de Frios",
    description: "Queijos, presunto parma, salame e pães artesanais.",
    image: "https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg",
  },
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
            <div
              key={order.id}
              className="col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center"
            >
              <KitchenCard
                title={order.title}
                description={order.description}
                onReady={() => handleOrderReady(order.id)}
                onNotPossible={() => handleOrderNotPossible(order.id)}
              />
            </div>
          ))}
          {orders.length === 0 && (
            <p className="text-center mt-5">
              🎉 Nenhum pedido pendente no momento!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
