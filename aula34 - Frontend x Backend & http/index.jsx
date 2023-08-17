/*
  FRONTEND X BACKEND & HTTP

    Frontend -> Backend -> Dados

    Frontend: Lado do Cliente
    Backend: Lado do Servidor

    Protocolo Http: protocolo de comunicação entre frontend e backend

    Resquest: requisição
    Response: resposta da requisição

    Padrões de requisição:

    Get - Leitura
    Post - Criação
    Put - Atualização
    Delete - Deleção
    Patch - Atualização parcial

    PARAMS - São os parametros das requisições

    Query Params - informações pela url do navegador "Não indicado para dados sensiveis", apenas get
    Route Params - informações bem específicas, podemos burcar, atualizar ou deletar
    Body Params - usando para enviar informações para o servidor usando metodo post


    CODIGOS HTTP

      * - 2xx Confirmação / Sucesso
      * - 200 - Requisição realizada com sucesso
      * - 201 - Requisição de criação realizada com sucesso
      
  todo  - 4xx Erro do cliente(Frontend)
  todo  - 400 Bad Request
  todo  - 401 Unauthorized
  todo  - 403 Forbidden(Proibido)
  todo  - 404 Not Found(Não foi encontrado)

        ! 5xx - Erro no servidor(falha ao concluir solicitação)
        ! 500 - Internal Server Error
        ! 502 - Bad Gateway     


  
      HTTPS : É UM HTTP COM UMA CAMADA MAIOR DE SEGURANÇA
*/
