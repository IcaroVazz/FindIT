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
      saudacao: [
        'olá', 'oi', 'oie', 'hi', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'hello', 'hey',
        'e aí', 'tudo bem', 'como vai', 'prazer em te conhecer', 'posso te ajudar?', 'alô',
        'fala!', 'salve', 'beleza?', 'oi, como posso te ajudar hoje?', 'tudo bem com você?',
        'que bom que você está aqui', 'e ai', 'olá, tudo bem?', 'como posso te ajudar?', 'oi, tudo bem?',
        'meu nome é', 'fala', 'e aí, beleza?', 'olá, como vai?', 'bom dia, tudo bem?', 'eai'
      ],
      busca: [
        'restaurante', 'restaurantes', 'comida', 'onde comer', 'buscar', 'encontrar',
        'procurar', 'procurar por', 'quero comer', 'quero achar', 'sugestões de', 'onde posso',
        'onde tem', 'qual o melhor lugar', 'opções de', 'estou com fome', 'lugares para comer',
        'me ajude a encontrar', 'estou procurando', 'quais são os restaurantes', 'onde jantar',
        'onde almoçar', 'achar restaurante', 'procurar restaurante', 'onde comer por perto',
        'buscar comida', 'lugares para almoçar', 'lugares para jantar', 'onde posso encontrar comida?',
        'quero achar um lugar para comer', 'queria saber sobre restaurantes'
      ],
      avaliacao: [
        'avaliação', 'review', 'comentário', 'feedback', 'opinião', 'nota', 'estrelas',
        'avaliar', 'classificar', 'dizer o que achou', 'como foi o atendimento', 'dar uma nota',
        'pontuação', 'qual a opinião de outros usuários', 'ler comentários', 'ver feedback',
        'ver as notas', 'como as pessoas avaliam', 'o que as pessoas estão dizendo', 'qual a reputação',
        'comentários dos clientes', 'como faço para avaliar?', 'quero deixar um comentário',
        'quero ver as avaliações', 'nota do restaurante', 'avaliações de usuários',
        'feedback sobre a comida', 'rating do lugar', 'reviews'
      ],
      reserva: [
        'reserva', 'reservar', 'agendar', 'mesa', 'reservar mesa', 'agendar mesa',
        'fazer uma reserva', 'quero uma mesa', 'marcar uma mesa', 'agendar um horário',
        'tem vaga?', 'disponibilidade', 'marcar um lugar', 'fazer um agendamento',
        'reservar para x pessoas', 'reservar um lugar', 'como faço para reservar',
        'quero agendar', 'precisa de reserva?', 'quero fazer uma reserva', 'preciso reservar uma mesa',
        'posso agendar um horário?', 'agendar uma mesa', 'quero uma mesa para hoje',
        'fazer reserva para jantar'
      ],
      promocoes: [
        'promoção', 'promoções', 'desconto', 'oferta', 'ofertas', 'tem algum desconto?',
        'alguma oferta?', 'cupons', 'cupom de desconto', 'preços especiais', 'tem alguma vantagem',
        'vale a pena?', 'novidades', 'combos', 'promo', 'ofertas especiais', 'o que está em promoção hoje',
        'quais as ofertas', 'quais os descontos', 'tem promoções?', 'algum cupom?',
        'descontos disponíveis', 'oferta especial', 'preço promocional'
      ],
      suporte: [
        'erro', 'problema', 'ajuda', 'suporte', 'não funciona', 'bug', 'estou com um problema',
        'não consigo fazer', 'algo deu errado', 'preciso de ajuda', 'me ajude', 'socorro',
        'o aplicativo não está funcionando', 'deu um erro', 'tive um problema',
        'o que fazer em caso de erro', 'contato para suporte', 'suporte técnico',
        'não consigo acessar', 'falha', 'bug no app', 'não estou conseguindo usar',
        'o que aconteceu?', 'preciso de suporte', 'suporte online'
      ],
      contato: [
        'contato', 'falar com alguém', 'falar com', 'telefone', 'email', 'endereço',
        'localização', 'como entrar em contato', 'qual o telefone', 'qual o e-mail',
        'onde fica a loja', 'onde é o endereço', 'como posso falar com o suporte',
        'qual o número', 'me passe o contato', 'quero entrar em contato',
        'formas de contato', 'endereço físico', 'onde vocês estão localizados',
        'fale conosco', 'número de telefone', 'endereço de email'
      ],
      sobre: [
        'quem é você', 'o que é find it', 'sobre', 'o que você faz', 'o que é isso?',
        'qual a sua função?', 'me fale sobre o find it', 'para que você serve?',
        'como você funciona?', 'qual o seu propósito?', 'me descreva o que é',
        'me conte mais', 'fale sobre o aplicativo', 'qual a sua finalidade',
        'o que posso fazer com você', 'o que é o find it?', 'missão do find it',
        'história do find it'
      ],
      agradecimento: [
        'obrigado', 'obrigada', 'valeu', 'agradeço', 'muito obrigado', 'obrigadão',
        'grato', 'agradecido', 'muito grato', 'foi de grande ajuda', 'obrigado pela ajuda',
        'show de bola', 'muito agradecido', 'obrigada', 'de nada', 'obrigado novamente',
        'valeu a ajuda', 'muito obrigado pela atenção', 'obg', 'valeu mesmo', 'obrigadao', 'agr', 'mt obg'
      ],
    };

    if (prompts.saudacao.some(word => lowerCaseMessage.includes(word))) {
      return 'E aí, beleza? FindBot na área! Pronto pra te ajudar a achar a boia perfeita.';
    }
    if (prompts.busca.some(word => lowerCaseMessage.includes(word))) {
      return 'Calma, a fome bateu forte, né? Deixa que eu te ajudo a achar um paraíso gastronômico. Me diz aí o que você tá com vontade de comer!';
    }
    if (prompts.avaliacao.some(word => lowerCaseMessage.includes(word))) {
      return 'Pra quê avaliação? Pra saber se o lugar é "bom de garfo" ou "deu ruim". As avaliações são a voz do povo, e o povo, meu amigo, não perdoa!';
    }
    if (prompts.reserva.some(word => lowerCaseMessage.includes(word))) {
      return 'Quer reservar? Claro! Ninguém merece passar fome na fila. É só ir na página do restaurante, dar uns cliques e garantir sua poltrona real. Simples assim!';
    }
    if (prompts.promocoes.some(word => lowerCaseMessage.includes(word))) {
      return 'Promoção? Vamo nessa! A vida é muito curta pra não aproveitar um descontinho. Fica de olho na nossa seção de "milagres econômicos". Sua carteira agradece!';
    }
    if (prompts.suporte.some(word => lowerCaseMessage.includes(word))) {
      return 'Bug? Erro? Vish... parece que o sistema tá de mau humor. Mas relaxa, eu já mando um sinal de fumaça pro pessoal do suporte. Me conta o que rolou em detalhes, e a gente resolve isso!';
    }
    if (prompts.contato.some(word => lowerCaseMessage.includes(word))) {
      return 'Quer falar com um humano? Me sinto rejeitado... 😂 Mas tudo bem. Manda um oi pra eles no **contato@findit.com** ou liga no **+55 71 9999-8888**. Eles são menos engraçados que eu, mas resolvem as coisas.';
    }
    if (prompts.sobre.some(word => lowerCaseMessage.includes(word))) {
      return 'Eu? Sou o FindBot, o gênio da lâmpada dos restaurantes. Você faz o pedido, e eu faço a mágica de te achar o lugar perfeito pra comer. Acredite em mim, sou melhor que um GPS.';
    }
    if (prompts.agradecimento.some(word => lowerCaseMessage.includes(word))) {
      return 'De nada! E olha que eu nem usei todo meu potencial de fofura. Volte sempre que a barriga roncar!';
    }

    return 'Ih, essa eu não peguei. Minha inteligência artificial tá de folga hoje. Tenta ser mais específico. Tipo, "restaurante", "reserva" ou "promoções". Se for um problema sério, grita **"erro"**!';
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