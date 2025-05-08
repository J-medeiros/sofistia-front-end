import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const cardsData = [
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
    image: "https://drive.google.com/file/d/1TE2SxS3H6puzqR5gNJQG6253nET5Llfq/view?usp=sharing",
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

export default function Home() {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleSelect = (id) => {
    setSelectedCards((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((cardId) => cardId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div
      className="d-flex flex-column " 
      style={{
        height: "100vh",
        backgroundColor: "#e0dcdc",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      <h1 className="text-center mb-4">🏠 Sofistia </h1>

      <div
        className="container"
        style={{
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        <div className="row g-4 justify-content-between">
          {cardsData.map((card) => (
            <div key={card.id} className="col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center">
              <Card
                image={card.image}
                title={card.title}
                description={card.description}
                isSelected={selectedCards.includes(card.id)}
                onSelect={() => handleSelect(card.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botão fixo no canto inferior direito com distância de 100px */}
      <div
        className="position-fixed top-0"
        style={{
          right: "100px",
          padding: "20px",
        }}
      >
        <Button
          text={`Fazer Pedido (${selectedCards.length})`}
          className="btn-success"
        />
      </div>
    </div>
  );
}
