import React from 'react';
import './catalogo.css';

const catalog_data = {
  "catalogo_restaurantes": {
    "cidade": "Salvador",
    "estado": "BA",
    "total_restaurantes": 15,
    "filtros_disponiveis": {
      "culinaria": ["baiana", "japonesa", "italiana", "árabe", "churrascaria", "frutos-do-mar", "vegetariana", "hamburguer", "pizza", "brasileira", "mineira", "doces & sobremesas", "cafeteria", "sorveteria", "sucos & vitaminas"],
      "faixa_preco": ["baixo custo", "médio", "alto custo"],
      "bairros": ["Barra", "Rio Vermelho", "Pituba", "Ondina", "Stella Maris", "Itaigara", "Brotas", "Graça", "Corredor da Vitória", "Comércio", "Pelourinho", "Amaralina", "Piatã", "Jaguaribe", "Imbuí"],
      "avaliacoes": [1, 2, 3, 4, 5]
    },
    "restaurantes": [
      {
        "id": 1,
        "nome": "Tempero da Bahia",
        "foto_destaque": "https://muitogourmet.com/wp-content/uploads/2023/08/encantos-da-mare-para-festival-tempero-bahia.jpg",
        "faixa_preco": "médio",
        "culinaria": "baiana",
        "endereco": "Rua da Paz, 45",
        "bairro": "Rio Vermelho",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/tempero-bahia-1.jpg",
            "https://exemplo.com/fotos/tempero-bahia-2.jpg",
            "https://exemplo.com/fotos/tempero-bahia-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/tempero-bahia.pdf",
          "avaliacoes": [
            {
              "cliente": "Maria Silva",
              "estrelas": 5,
              "comentario": "Melhor acarajé da cidade! Atendimento excelente."
            },
            {
              "cliente": "João Santos",
              "estrelas": 4,
              "comentario": "Comida deliciosa, mas demorou um pouco para ser servida."
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Rua+da+Paz+45+Rio+Vermelho+Salvador+BA",
            "lat": -12.987654,
            "lng": -38.512345
          },
          "contatos": {
            "telefone": "+557133331234",
            "whatsapp": "+557199998888",
            "ifood": "https://www.ifood.com.br/tempero-bahia"
          }
        }
      },
      {
        "id": 2,
        "nome": "Sushi Yama",
        "foto_destaque": "https://sushiyamafloripa.com.br/wp-content/uploads/2023/11/Shogun_SalmonCombo02_NOVO.jpg",
        "faixa_preco": "alto custo",
        "culinaria": "japonesa",
        "endereco": "Av. Otávio Mangabeira, 245",
        "bairro": "Pituba",
        "detalhes": {
          "galeria_fotos": [
            "https://www.google.com/imgres?q=sushi&imgurl=https%3A%2F%2Fi0.wp.com%2Fwww.ufrgs.br%2Flaranjanacolher%2Fwp-content%2Fuploads%2F2021%2F08%2F1.png%3Ffit%3D960%252C960%26ssl%3D1&imgrefurl=https%3A%2F%2Fwww.ufrgs.br%2Flaranjanacolher%2F2021%2F08%2F05%2Forigens-e-difusao-do-sushi%2F&docid=Cpp4ctUf0eJ3FM&tbnid=N6M4CgCPD30BWM&vet=12ahUKEwi9tcvag5yPAxUiGbkGHZDgCCYQM3oECF8QAA..i&w=960&h=960&hcb=2&ved=2ahUKEwi9tcvag5yPAxUiGbkGHZDgCCYQM3oECF8QAA",
            "https://exemplo.com/fotos/sushiyama-2.jpg",
            "https://exemplo.com/fotos/sushiyama-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/sushiyama.pdf",
          "avaliacoes": [
            {
              "cliente": "Carlos Tanaka",
              "estrelas": 5,
              "comentario": "Sushi fresco e de alta qualidade. Preço justo para a qualidade."
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Av+Otávio+Mangabeira+245+Pituba+Salvador+BA",
            "lat": -12.987123,
            "lng": -38.456789
          },
          "contatos": {
            "telefone": "+557133334567",
            "whatsapp": "+557199997777",
            "ifood": "https://www.ifood.com.br/sushi-yama"
          }
        }
      },
      {
        "id": 3,
        "nome": "Trattoria Bella Napoli",
        "foto_destaque": "https://media-cdn.tripadvisor.com/media/photo-s/03/f9/36/02/bella-napoli-130-madison.jpg",
        "faixa_preco": "alto custo",
        "culinaria": "italiana",
        "endereco": "Rua Portugal, 123",
        "bairro": "Barra",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/bellanapoli-1.jpg",
            "https://exemplo.com/fotos/bellanapoli-2.jpg",
            "https://exemplo.com/fotos/bellanapoli-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/bella-napoli.pdf",
          "avaliacoes": [
            {
              "cliente": "Ana Costa",
              "estrelas": 5,
              "comentario": "Massas frescas e autênticas. Ambiente romântico e aconchegante."
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Rua+Portugal+123+Barra+Salvador+BA",
            "lat": -13.010101,
            "lng": -38.531313
          },
          "contatos": {
            "telefone": "+557133338888",
            "whatsapp": "+557199996666",
            "rappi": "https://www.rappi.com.br/trattoria-bella-napoli"
          }
        }
      },
      {
        "id": 4,
        "nome": "Esfiharia Al Mustafa",
        "foto_destaque": "https://guiafranquiasdesucesso.com/wp-content/uploads/2019/06/franquia-arabis.jpg",
        "faixa_preco": "baixo custo",
        "culinaria": "árabe",
        "endereco": "Rua das Laranjeiras, 78",
        "bairro": "Brotas",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/almustafa-1.jpg",
            "https://exemplo.com/fotos/almustafa-2.jpg",
            "https://exemplo.com/fotos/almustafa-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/al-mustafa.pdf",
          "avaliacoes": [
            {
              "cliente": "Ahmed Hassan",
              "estrelas": 4,
              "comentario": "Esfihas autênticas e bem recheadas. Preço justo."
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Rua+das+Laranjeiras+78+Brotas+Salvador+BA",
            "lat": -12.989898,
            "lng": -38.505050
          },
          "contatos": {
            "telefone": "+557133339999",
            "whatsapp": "+557199995555"
          }
        }
      },
      {
        "id": 5,
        "nome": "Churrascaria Gaúcha",
        "foto_destaque": "https://shopblob.blob.core.windows.net/1204-produtoimagem/zoom-grou-ALMOCONACHURRASCARIA.jpg",
        "faixa_preco": "alto custo",
        "culinaria": "churrascaria",
        "endereco": "Av. ACM, 1024",
        "bairro": "Itaigara",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/gaucha-1.jpg",
            "https://exemplo.com/fotos/gaucha-2.jpg",
            "https://exemplo.com/fotos/gaucha-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/gaucha.pdf",
          "avaliacoes": [
            {
              "cliente": "Pedro Almeida",
              "estrelas": 5,
              "comentario": "Melhor churrascaria de Salvador! Carnes premium e atendimento excelente."
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Av+ACM+1024+Itaigara+Salvador+BA",
            "lat": -12.976543,
            "lng": -38.465432
          },
          "contatos": {
            "telefone": "+557133330000",
            "whatsapp": "+557199994444",
            "ifood": "https://www.ifood.com.br/churrascaria-gaucha"
          }
        }
      },
      {
        "id": 6,
        "nome": "Casa de Tereza",
        "foto_destaque": "https://casadetereza.com.br/wp-content/uploads/2016/12/banner-3-1080x705.jpg",
        "faixa_preco": "médio",
        "culinaria": "baiana",
        "endereco": "Rua Odilon Santos, 45",
        "bairro": "Rio Vermelho",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/casatereza-1.jpg",
            "https://exemplo.com/fotos/casatereza-2.jpg",
            "https://exemplo.com/fotos/casatereza-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/casa-tereza.pdf",
          "avaliacoes": [
            {
              "cliente": "Tereza Santos",
              "estrelas": 5,
              "comentario": "Comida caseira e saborosa, me lembra a comida da minha avó!"
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Rua+Odilon+Santos+45+Rio+Vermelho+Salvador+BA",
            "lat": -12.982345,
            "lng": -38.512987
          },
          "contatos": {
            "telefone": "+557133331111",
            "whatsapp": "+557199993333"
          }
        }
      },
      {
        "id": 7,
        "nome": "Maremonti",
        "foto_destaque": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/84/8e/17/externa.jpg?w=700&h=400&s=1",
        "faixa_preco": "alto custo",
        "culinaria": "frutos-do-mar",
        "endereco": "Av. Sete de Setembro, 3959",
        "bairro": "Ondina",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/maremonti-1.jpg",
            "https://exemplo.com/fotos/maremonti-2.jpg",
            "https://exemplo.com/fotos/maremonti-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/maremonti.pdf",
          "avaliacoes": [
            {
              "cliente": "Marina Oliveira",
              "estrelas": 5,
              "comentario": "Frutos do mar fresquíssimos e preparo impecável. Vista maravilhosa!"
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Av+Sete+de+Setembro+3959+Ondina+Salvador+BA",
            "lat": -13.004321,
            "lng": -38.523456
          },
          "contatos": {
            "telefone": "+557133332222",
            "whatsapp": "+557199992222"
          }
        }
      },
      {
        "id": 8,
        "nome": "Veg & Tal",
        "foto_destaque": "https://blog.duogourmet.com.br/wp-content/uploads/2019/07/11-Duo-Gourmet-Culinaria.jpg",
        "faixa_preco": "médio",
        "culinaria": "vegetariana",
        "endereco": "Rua Baependi, 78",
        "bairro": "Ondina",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/vegtal-1.jpg",
            "https://exemplo.com/fotos/vegtal-2.jpg",
            "https://exemplo.com/fotos/vegtal-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/vegtal.pdf",
          "avaliacoes": [
            {
              "cliente": "Paula Mendes",
              "estrelas": 4,
              "comentario": "Opções variadas e saborosas, mesmo para não vegetarianos."
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Rua+Baependi+78+Ondina+Salvador+BA",
            "lat": -13.005678,
            "lng": -38.521234
          },
          "contatos": {
            "telefone": "+557133333333",
            "whatsapp": "+557199991111",
            "ifood": "https://www.ifood.com.br/vegtal"
          }
        }
      },
      {
        "id": 9,
        "nome": "Burger House",
        "foto_destaque": "https://www.jornaldocomercio.com/_midias/jpg/2023/07/21/tm_180723_burger_house___3_-10273889.jpg",
        "faixa_preco": "médio",
        "culinaria": "hamburguer",
        "endereco": "Rua das Hortênsias, 223",
        "bairro": "Pituba",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/burgerhouse-1.jpg",
            "https://exemplo.com/fotos/burgerhouse-2.jpg",
            "https://exemplo.com/fotos/burgerhouse-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/burger-house.pdf",
          "avaliacoes": [
            {
              "cliente": "Ricardo Alves",
              "estrelas": 4,
              "comentario": "Hambúrgueres suculentos e combos bem servidos. Batata crocante!"
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Rua+das+Hortênsias+223+Pituba+Salvador+BA",
            "lat": -12.987654,
            "lng": -38.458765
          },
          "contatos": {
            "telefone": "+557133334444",
            "whatsapp": "+557199990000",
            "ifood": "https://www.ifood.com.br/burger-house",
            "rappi": "https://www.rappi.com.br/burger-house"
          }
        }
      },
      {
        "id": 10,
        "nome": "Pizzaria Forno a Lenha",
        "foto_destaque": "https://d2yghbees9788u.cloudfront.net/foodconnection/2022/03/Alternativas-buscam-reduzir-o-uso-de-lenha-nas-pizzarias.png",
        "faixa_preco": "médio",
        "culinaria": "pizza",
        "endereco": "Av. Magalhães Neto, 1250",
        "bairro": "Pituba",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/fornoalenha-1.jpg",
            "https://exemplo.com/fotos/fornoalenha-2.jpg",
            "https://exemplo.com/fotos/fornoalenha-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/forno-a-lenha.pdf",
          "avaliacoes": [
            {
              "cliente": "Fernanda Lima",
              "estrelas": 5,
              "comentario": "Massa perfeita e ingredientes de qualidade. Entrega rápida."
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Av+Magalhães+Neto+1250+Pituba+Salvador+BA",
            "lat": -12.984321,
            "lng": -38.461234
          },
          "contatos": {
            "telefone": "+557133335555",
            "whatsapp": "+557199988888",
            "ifood": "https://www.ifood.com.br/forno-a-lenha"
          }
        }
      },
      {
        "id": 11,
        "nome": "Restaurante Sabor Mineiro",
        "foto_destaque": "https://media-cdn.tripadvisor.com/media/photo-s/05/77/87/49/sabor-mineiro-charneca.jpg",
        "faixa_preco": "médio",
        "culinaria": "mineira",
        "endereco": "Rua Professor Plínio Garcez, 88",
        "bairro": "Brotas",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/sabormineiro-1.jpg",
            "https://exemplo.com/fotos/sabormineiro-2.jpg",
            "https://exemplo.com/fotos/sabormineiro-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/sabor-mineiro.pdf",
          "avaliacoes": [
            {
              "cliente": "José Carlos",
              "estrelas": 4,
              "comentario": "Comida caseira mineira autêntica. Porções generosas."
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Rua+Professor+Plínio+Garcez+88+Brotas+Salvador+BA",
            "lat": -12.991234,
            "lng": -38.503456
          },
          "contatos": {
            "telefone": "+557133336666",
            "whatsapp": "+557199987777"
          }
        }
      },
      {
        "id": 12,
        "nome": "Cantinho Baiano",
        "foto_destaque": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/16/10/9e/misto-baiano-e-moqueca.jpg?w=900&h=500&s=1",
        "faixa_preco": "baixo custo",
        "culinaria": "baiana",
        "endereco": "Travessa Luiz Gama, 12",
        "bairro": "Pelourinho",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/cantinhobaiano-1.jpg",
            "https://exemplo.com/fotos/cantinhobaiano-2.jpg",
            "https://exemplo.com/fotos/cantinhobaiano-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/cantinho-baiano.pdf",
          "avaliacoes": [
            {
              "cliente": "Antônio Silva",
              "estrelas": 4,
              "comentario": "Comida típica baiana com preço acessível. Localização excelente no Pelourinho."
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Travessa+Luiz+Gama+12+Pelourinho+Salvador+BA",
            "lat": -12.972345,
            "lng": -38.508765
          },
          "contatos": {
            "telefone": "+557133337777",
            "whatsapp": "+557199986666"
          }
        }
      },
      {
        "id": 13,
        "nome": "Doceria da Maria",
        "foto_destaque": "https://mariaameliadoces.com.br/images/coffeeShops/cafeteria-aguas-claras.jpg",
        "faixa_preco": "baixo custo",
        "culinaria": "doces & sobremesas",
        "endereco": "Rua Carlos Gomes, 67",
        "bairro": "Centro",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/doceriamaria-1.jpg",
            "https://exemplo.com/fotos/doceriamaria-2.jpg",
            "https://exemplo.com/fotos/doceriamaria-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/doceria-maria.pdf",
          "avaliacoes": [
            {
              "cliente": "Sofia Mendonça",
              "estrelas": 5,
              "comentario": "Melhores doces caseiros de Salvador! Preço justo e atendimento familiar."
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Rua+Carlos+Gomes+67+Centro+Salvador+BA",
            "lat": -12.974321,
            "lng": -38.513456
          },
          "contatos": {
            "telefone": "+557133338888",
            "whatsapp": "+557199985555"
          }
        }
      },
      {
        "id": 14,
        "nome": "Café Cultura",
        "foto_destaque": "https://cafeculturabrasil.com/wp-content/uploads/2024/04/SQUARE-CORPORATIVA.webp",
        "faixa_preco": "médio",
        "culinaria": "cafeteria",
        "endereco": "Rua Professor Lopes Gama, 345",
        "bairro": "Graça",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/cafecultura-1.jpg",
            "https://exemplo.com/fotos/cafecultura-2.jpg",
            "https://exemplo.com/fotos/cafecultura-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/cafe-cultura.pdf",
          "avaliacoes": [
            {
              "cliente": "Luiza Campos",
              "estrelas": 5,
              "comentario": "Café especial e ambiente aconchegante. Perfeito para trabalhar ou encontrar amigos."
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Rua+Professor+Lopes+Gama+345+Graça+Salvador+BA",
            "lat": -12.988765,
            "lng": -38.517654
          },
          "contatos": {
            "telefone": "+557133339999",
            "whatsapp": "+557199984444"
          }
        }
      },
      {
        "id": 15,
        "nome": "Soptt Touch",
        "foto_destaque": "https://i.pinimg.com/originals/0c/8f/dd/0c8fddd092b6ac8783623734eaae585a.jpg",
        "faixa_preco": "baixo custo",
        "culinaria": "sorveteria",
        "endereco": "Av. Jorge Amado, 567",
        "bairro": "Imbuí",
        "detalhes": {
          "galeria_fotos": [
            "https://exemplo.com/fotos/gelattoecia-1.jpg",
            "https://exemplo.com/fotos/gelattoecia-2.jpg",
            "https://exemplo.com/fotos/gelattoecia-3.jpg"
          ],
          "cardapio": "https://exemplo.com/cardapios/gelatto-cia.pdf",
          "avaliacoes": [
            {
              "cliente": "Roberto Santos",
              "estrelas": 4,
              "comentario": "Sorvetes cremosos e sabores variados. Ótimo custo-benefício."
            }
          ],
          "localizacao": {
            "maps_embed": "https://maps.google.com/?q=Av+Jorge+Amado+567+Imbuí+Salvador+BA",
            "lat": -12.934567,
            "lng": -38.432109
          },
          "contatos": {
            "telefone": "+557133330101",
            "whatsapp": "+557199983333",
            "ifood": "https://www.ifood.com.br/gelatto-cia"
          }
        }
      }
    ]
  }
};

const getRatingText = (stars) => {
  switch (stars) {
    case 5:
      return "Excepcional";
    case 4:
      return "Ótimo";
    case 3:
      return "Muito Bom";
    default:
      return "Bom";
  }
};

const Catalog = () => {
  const { restaurantes } = catalog_data.catalogo_restaurantes;

  return (
    <div className="catalog-container">
      <div className="apartments-section">
        <div className="apartments-header">
          <h1 style={{ marginBottom: '60px', fontSize: '3.0rem', textAlign: 'center', color: '#000099' }}>
            Restaurantes em Salvador
          </h1>
        </div>
        <div className="apartment-cards-container">
          {restaurantes.map((restaurante) => {
            const averageRating = (restaurante.detalhes.avaliacoes.reduce((sum, review) => sum + review.estrelas, 0) / restaurante.detalhes.avaliacoes.length).toFixed(1);
            const reviewsCount = restaurante.detalhes.avaliacoes.length;

            return (
              <div key={restaurante.id} className="apartment-card">
                <div className="apartment-image-container">
                  <img src={restaurante.foto_destaque} alt={restaurante.nome} />
                  <div className="heart-icon">❤</div>
                </div>
                <div className="apartment-details">
                  <h2 className="apartment-title">{restaurante.nome}</h2>
                  <p className="apartment-location">{restaurante.bairro}, {catalog_data.catalogo_restaurantes.cidade}</p>
                  <div className="rating-container">
                    <div className="rating-box">{averageRating}</div>
                    <span className="rating-text">{getRatingText(Math.round(parseFloat(averageRating)))}</span>
                  </div>
                  <p className="apartment-price">
                    Avaliações - <span className="price-value">{reviewsCount} avaliações</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Catalog;