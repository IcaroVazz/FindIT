import React, { useState } from 'react';
import './Home.css';

const MidBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const botMessage = { text: botResponse, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 500);

    setInput('');
  };

  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    const prompts = {
      saudacao: ['olá', 'oi', 'oie', 'hi', 'ola', 'bom dia', 'boa tarde', 'boa noite'],
      busca: ['restaurante', 'restaurantes', 'comida', 'onde comer', 'buscar', 'encontrar'],
      avaliacao: ['avaliação', 'review', 'comentário', 'feedback', 'opinião', 'nota', 'estrelas'],
      reserva: ['reserva', 'reservar', 'agendar', 'mesa', 'reservar mesa', 'agendar mesa'],
      promocoes: ['promoção', 'promoções', 'desconto', 'oferta', 'ofertas'],
      suporte: ['erro', 'problema', 'ajuda', 'suporte', 'não funciona', 'bug'],
      contato: ['contato', 'falar com alguém', 'falar com', 'telefone', 'email', 'endereço', 'localização'],
      sobre: ['quem é você', 'o que é find it', 'sobre', 'o que você faz'],
      agradecimento: ['obrigado', 'obrigada', 'valeu', 'agradeço', 'muito obrigado'],
    };

    if (prompts.saudacao.some(word => lowerCaseMessage.includes(word))) {
      return 'Olá! Sou o FindBot, o assistente virtual do Find It. Como posso te ajudar hoje?';
    }
    if (prompts.busca.some(word => lowerCaseMessage.includes(word))) {
      return 'Nós temos várias opções de restaurantes. Você pode navegar pela seção "Restaurantes que as pessoas mais amam" ou pesquisar por um tipo de cozinha específico.';
    }
    if (prompts.avaliacao.some(word => lowerCaseMessage.includes(word))) {
      return 'As avaliações são feitas por outros usuários, como você! Elas te dão uma visão real da experiência no restaurante.';
    }
    if (prompts.reserva.some(word => lowerCaseMessage.includes(word))) {
      return 'Para fazer uma reserva, basta ir na página do restaurante desejado e seguir as instruções. É rápido e fácil!';
    }
    if (prompts.promocoes.some(word => lowerCaseMessage.includes(word))) {
      return 'Sim! Fique de olho na nossa seção de promoções exclusivas para encontrar ofertas especiais.';
    }
    if (prompts.suporte.some(word => lowerCaseMessage.includes(word))) {
      return 'Sinto muito pelo transtorno. Por favor, descreva o problema com mais detalhes para que eu possa encaminhá-lo para a equipe de suporte.';
    }
    if (prompts.contato.some(word => lowerCaseMessage.includes(word))) {
      return 'Você pode nos contatar por email em **contato@findit.com** ou pelo telefone **+55 71 9999-8888**. Estamos à disposição para ajudar.';
    }
    if (prompts.sobre.some(word => lowerCaseMessage.includes(word))) {
      return 'O Find It é a sua plataforma para encontrar os melhores restaurantes na sua região, com avaliações de verdade e promoções exclusivas.';
    }
    if (prompts.agradecimento.some(word => lowerCaseMessage.includes(word))) {
      return 'De nada! Estou aqui para ajudar sempre que precisar.';
    }

    return 'Desculpe, não entendi. Tente perguntar sobre **restaurantes**, **reservas** ou **promoções**. Se for um problema, digite **"erro"**.';
  };

  return (
    <div className="chatbox">
      <div className="chat-header">FindBot</div>
      <div className="chat-body">
        {messages.length === 0 && (
          <p className="initial-message">👋 Olá sou o FindBot, em caso de qualquer dúvida, se dirija a mim!</p>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="chat-footer">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">➤</button>
      </form>
    </div>
  );
};

export default MidBot;