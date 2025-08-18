import React from "react";
import Carousel from "./Carousel"; // Importe o componente Carousel
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    const restaurantImages = [
        "https://thesummerhunter.com/wp-content/uploads/2021/12/bares-salvador-ferahoteis.jpg",
        "https://guiaviajarmelhor.com.br/wp-content/uploads/2022/04/restaurantes-em-frente-ao-mar-salvador-scaled.jpg",
        "https://blog.123milhas.com/wp-content/uploads/2022/05/lugares-para-comer-em-salvador-baia-de-todos-os-santos-conexao123.webp",
    ];


    const teamImages = [
        "https://example.com/team-member-1.jpg",
        "https://example.com/team-member-2.jpg",
        "https://example.com/team-member-3.jpg",
    ];

    return (
        <div className="home-container">
            <div className="main-content">
                <div className="text-section">
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        marginBottom: '20px',
                        color: 'black',
                        lineHeight: '1.2',
                    }}>
                        FIND THE BEST <br /> RESTAURANT OPTIONS <br /> HERE FOR YOU AND <br /> YOUR WHOLE FAMILY
                    </h1>
                </div>

                <Carousel images={restaurantImages} />
            </div>

            <div className="About-Us">
                <div className="False-nav"></div>
                <h2>Our Team</h2>
                <Carousel images={teamImages} />
            </div>
        </div>
    );
};

export default Home;