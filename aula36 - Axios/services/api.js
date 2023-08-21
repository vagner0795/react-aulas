import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "1929e8b3b29030b6028cd61a6e50cef5",
    language: "pt-BR",
    page: 1,
  },
});

export default api;

// nesse trecho estamos criando a conexão entre o frontend e a API
// baseURL -> o site que buscamos nossas informações
// api_key -> chave de acesso gerada no cadastro
// language -> idioma que quero receber os dados
// page -> quantidade de paginas
