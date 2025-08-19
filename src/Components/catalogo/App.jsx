// App.js
import React, { useState, useEffect } from 'react';
import RestaurantList from './components/RestaurantList';
import SearchFilters from './components/SearchFilters';
import Header from './components/Header';
import Footer from './components/Footer';
import restaurantData from './data/restaurants.json';
import './App.css';

function App() {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [filters, setFilters] = useState({
        searchTerm: '',
        cuisine: '',
        price: '',
        location: '',
        rating: ''
    });

    useEffect(() => {
        // Simulando carregamento de dados
        setRestaurants(restaurantData.catalogo_restaurantes.restaurantes);
        setFilteredRestaurants(restaurantData.catalogo_restaurantes.restaurantes);
    }, []);

    useEffect(() => {
        // Aplicar filtros
        let results = restaurants;

        if (filters.searchTerm) {
            results = results.filter(restaurant =>
                restaurant.nome.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                restaurant.culinaria.toLowerCase().includes(filters.searchTerm.toLowerCase())
            );
        }

        if (filters.cuisine) {
            results = results.filter(restaurant =>
                restaurant.culinaria === filters.cuisine
            );
        }

        if (filters.price) {
            results = results.filter(restaurant =>
                restaurant.faixa_preco === filters.price
            );
        }

        if (filters.location) {
            results = results.filter(restaurant =>
                restaurant.bairro === filters.location
            );
        }

        if (filters.rating) {
            results = results.filter(restaurant => {
                const avgRating = restaurant.detalhes.avaliacoes.reduce((acc, curr) => acc + curr.estrelas, 0) /
                    restaurant.detalhes.avaliacoes.length;
                return avgRating >= parseInt(filters.rating);
            });
        }

        setFilteredRestaurants(results);
    }, [filters, restaurants]);

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    return (
        <div className="App">
            <Header />
            <div className="hero-section">
                <div className="container">
                    <h2>Descubra os melhores restaurantes de Salvador</h2>
                    <p>Encontre o lugar perfeito para sua próxima refeição</p>
                </div>
            </div>

            <main className="container">
                <SearchFilters
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    options={restaurantData.catalogo_restaurantes.filtros_disponiveis}
                />

                <div className="results-info">
                    <h3>{filteredRestaurants.length} restaurantes encontrados</h3>
                </div>

                <RestaurantList restaurants={filteredRestaurants} />
            </main>

            <Footer />
        </div>
    );
}

export default App;