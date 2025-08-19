import React, { useState } from "react";
import "./Home.css";
import LegendBot from "./LegendBott.png";

const Index = () => {
  const images = [
    "https://master.restaurantemadero.com.br/upload/galeria-foto/163/2.jpg",
    "https://blog.duogourmet.com.br/wp-content/uploads/2020/01/Onde_comer_em_salvador_amado_Duo_gourmet.jpg",
    "https://master.restaurantemadero.com.br/upload/galeria-foto/163/2.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const apartments = [
    {
      title: "Coco Bambu",
      location: "Av. Luís Viana Filho, Salvador",
      rating: "8.8",
      ratingText: "Fabuloso",
      reviews: "21.927 avaliações",
      price: "1.046",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c5/88/e9/imperdivel-para-quem.jpg?w=800&h=500&s=1",
    },
    {
      title: "Paris 6",
      location: "Shopping da Bahia, Salvador",
      rating: "8.7",
      ratingText: "Explêndido",
      reviews: "10.962 avaliações",
      price: "916",
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-m/1280/14/98/e9/dd/paris-6-goiania-ambiente.jpg",
    },
    {
      title: "Camarão Camarada",
      location: "Salvador Shopping,Salvador",
      rating: "9.9",
      ratingText: "Excepcional",
      reviews: "11.872 avaliações",
      price: "3.159",
      imageUrl: "https://mercadoeconsumo.com.br/wp-content/uploads/2023/08/9774a658-d913-4551-9d25-2e6e5dc1afef.jpg",
    },
    {
      title: "Cantina Montanari",
      location: "Boca do Rio, Salvador",
      rating: "9.4",
      ratingText: "Fantástico",
      reviews: "3.223 avaliações",
      price: "2.543",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f1/96/12/mamma-s-pizza-25-de-tradicao.jpg?w=400&h=300&s=1",
    }
  ];

  return (
    <div className="main-container">
      <div className="top-section">
        <div className="text-section">
          <h1 style={{ color: "#000099", fontSize: "3.0rem", textAlign: "Left" }}>
            FIND THE BEST  <br />RESTAURANT OPTIONS <br />HERE FOR  YOU AND YOUR WHOLE FAMILY
          </h1>
        </div>


        <div className="carousel-section">
          <div className="carousel">
            <button className="prev-btn" onClick={prevSlide}>❮</button>
            <img src={images[currentIndex]} alt={`slide-${currentIndex}`} />
            <button className="next-btn" onClick={nextSlide}>❯</button>
          </div>
          <div className="indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="blue-bar" style={{
        backgroundColor: "#000099",
        height: "60px",
        width: "100%",
        marginTop: "18px"
      }}></div>

      <div className="About-us">
        <h1 style={{ marginBottom: '60px', fontSize: '3.0rem' }}>POR QUE USAR O FIND IT?</h1>
        <div className="cards-container">
          <div className="card">
            <div className="icon"></div>
            <h2>Avaliações confiáveis</h2>
            <p>Leia o que clientes como você dizem sobre a comida, serviço e ambiente.</p>
          </div>
          <div className="card">
            <div className="icon"></div>
            <h2>Cardápios e fotos autênticas</h2>
            <p>Navegue pelo menu e veja fotos reais dos pratos e do local antes de ir.</p>
          </div>
          <div className="card">
            <div className="icon"></div>
            <h2>Reservas descomplicadas</h2>
            <p>Reserve sua mesa em segundos, sem precisar ligar ou esperar na fila.</p>
          </div>
          <div className="card">
            <div className="icon"></div>
            <h2>Promoções exclusivas</h2>
            <p>Encontre descontos e ofertas especiais disponíveis apenas para membros.</p>
          </div>
          <div className="card">
            <div className="icon"></div>
            <h2>Suporte 24 horas</h2>
            <p>Estamos sempre aqui para ajudar a resolver qualquer dúvida ou problema.</p>
          </div>
        </div>
      </div>

      <div className="apartments-section">
        <div className="apartments-header">
          <h1 style={{ marginBottom: '60px', fontSize: '3.0rem', textAlign: 'center', color: '#000099' }}>RESTAURANTES QUE AS PESSOAS MAIS AMAM</h1>
        </div>
        <div className="apartment-cards-container">
          {apartments.map((apt, index) => (
            <div key={index} className="apartment-card">
              <div className="apartment-image-container">
                <img src={apt.imageUrl} alt={apt.title} />
                <div className="heart-icon">&#x2764;</div>
              </div>
              <div className="apartment-details">
                <h2 className="apartment-title">{apt.title}</h2>
                <p className="apartment-location">{apt.location}</p>
                <div className="rating-container">
                  <div className="rating-box">{apt.rating}</div>
                  <span className="rating-text">{apt.ratingText}</span>
                </div>
                <p className="apartment-price">
                  Avaliações - <span className="price-value">{apt.reviews}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="chatbot-container">
        {chatOpen && (
          <div className="chatbox">
            <div className="chat-header">LegendBot</div>
            <div className="chat-body">
              <p>👋 Olá sou o LegendBot, em breve vou responder aqui!</p>
            </div>
            <div className="chat-footer">
              <input type="text" placeholder="Digite sua mensagem..." />
              <button>➤</button>
            </div>
          </div>
        )}
        <button
          className="chat-toggle"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <img src={LegendBot} alt="Chatbot Legend" style={{ height: '40px' }} />
        </button>
      </div>
    </div>
  );
};

export default Index;