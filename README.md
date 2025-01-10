# Musics Top

## Referência
[Projeto - GitHub](https://github.com/jansenfelipe/top5-tiao-carreiro)

## Tecnologias

O projeto utiliza as seguintes tecnologias:

* React
* TailwindCSS
* Redux
* Docker

## Serviços Usados

Consulta se a URL do Youtube era valida e captura dos dados do vídeo do Youtube.

## Para Iniciar

* Ambiente:
    - É necessário que o Docker esteja instalado no ambiente para facilitar a instalação e execução.

* Instalação:
    - Execute o comando abaixo para iniciar os serviços `docker compose up` ou para executar sem visualizar os logs no terminal, utilize `docker compose up -d`
    - Caso a API esteja configurada em outro URL, atualize o arquivo `src/core/services/musics-top-api.ts` e altere a URL base para o endereço correto.

* Uso:
    - Após a instalação, acesse o projeto pelo seguinte endereço: [http://localhost:8080](http://localhost:8080)

* Observações
    - Certifique-se de que as portas configuradas no arquivo `docker-compose.yml` estejam disponíveis antes de executar o comando. Conflitos de portas podem gerar erros durante a inicialização.

### Rotas

![Rota de Login](https://github.com/ThiagoAlvesPHP/musics-top-frontend/blob/main/readme/login.png)
![Rota de Registro de Usuário](https://github.com/ThiagoAlvesPHP/musics-top-frontend/blob/main/readme/register.png)
![Rota de Registro da Música](https://github.com/ThiagoAlvesPHP/musics-top-frontend/blob/main/readme/home.png)
![Rota de Listar as Músicas](https://github.com/ThiagoAlvesPHP/musics-top-frontend/blob/main/readme/home_logged.png)
