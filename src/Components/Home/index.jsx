import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const restaurantImages = [
    "https://thesummerhunter.com/wp-content/uploads/2021/12/bares-salvador-ferahoteis.jpg",
    "https://guiaviajarmelhor.com.br/wp-content/uploads/2022/04/restaurantes-em-frente-ao-mar-salvador-scaled.jpg",
    "https://blog.123milhas.com/wp-content/uploads/2022/05/lugares-para-comer-em-salvador-baia-de-todos-os-santos-conexao123.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Troca automática a cada 10s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
   setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? restaurantImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === restaurantImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="home-container">
      <div className="main-content">
        <div className="text-section">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              textAlign: "left",
              marginBottom: "20px",
              color: "black",
              lineHeight: "1.2",
            }}
          >
            FIND THE BEST <br /> RESTAURANT OPTIONS <br /> HERE FOR YOU AND <br /> YOUR WHOLE FAMILY
          </h1>
        </div>

        {/* Carrossel React */}
        <div className="carousel-container" style={{ position: "relative", maxWidth: "800px" }}>
          <img
            src={restaurantImages[currentIndex]}
            alt={`Restaurant ${currentIndex + 1}`}
            className="d-block w-100"
            style={{
              borderRadius: "20px",
              maxHeight: "500px",
              objectFit: "cover",
              width: "100%",
              transition: "opacity 0.8s ease-in-out",
            }}
          />

          {/* Botões */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              borderRadius: "50%",
              color: "white",
              fontSize: "1.5rem",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              borderRadius: "50%",
              color: "white",
              fontSize: "1.5rem",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            ›
          </button>

          {/* Indicadores */}
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            {restaurantImages.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  display: "inline-block",
                  height: "10px",
                  width: "10px",
                  margin: "0 5px",
                  backgroundColor: index === currentIndex ? "black" : "lightgray",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
