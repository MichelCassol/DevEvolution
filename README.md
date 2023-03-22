<h1 align="center">
    <p> Projeto API DevEvolution </p>
    <img src="https://img.shields.io/github/last-commit/MichelCassol/DevEvolution" alt="last-commit">&nbsp;&nbsp;&nbsp;
    <img src="https://img.shields.io/github/repo-size/MichelCassol/DevEvolution" alt="repo-size">&nbsp;&nbsp;&nbsp;
</h1>

# :rocket: Projeto
Esse é um projeto de API simples desenvolvido ao fim do programa DevEvolution da [IXCSoft](https://www.ixcsoft.com.br) a fim de aplicar os conhecimento adquiridos.

# :boom: Start

Para iniciar clone o projeto para a máquina utilizando Git ou realize o download do arquivo zip:

~~~ 
git clone https://github.com/MichelCassol/DevEvolution.git
~~~

Após o download concluído, utilizando o terminal navegue até a pasta do projeto e instale as dependências com o comando: 

~~~
npm install
~~~

Agora você precisará ter o gerenciador de processos PM2 instalado, caso não o tenha execute o comando abaixo para instalar ele como uma dependência global do nodejs:

~~~
npm install -g pm2
~~~

Em sistema unix, o comando acima pode retornar um erro por falta de permissão, caso isso ocorra execute-o novamente utilizando o ```sudo``` no inicio do comando.

## :wrench: Configuração inicial
Agora será necessário realizar algumas configurações. O projeto utiliza o banco de dados Mongodb, caso não o tenha instalado consulte o guia de instalação em [Download Mongodb](https://www.mongodb.com/try/download/community), ou utilize o serviço de armazenamento em cloud [Mongodb Atlas](https://account.mongodb.com/account/login).

Com o banco de dados instalado e rodando é necessário inserir a URL do Mongodb no sistema, para isso faça uma cópia do arquivo ```.env.example``` removendo o ```.example``` do nome do arquivo e insira a URL do banco de dados na variável ```BD_HOST``` do arquivo env. 

Se estiver executando o Mongodb localmente, a URL para o banco de dados será:

~~~
mongodb://127.0.0.1:27017/database
~~~ 

Caso esteja utilizando o Mongodb Atlas, a URL é fornecida no momento da criação do database.

Para maiores informações sobre conexão do Mongodb consulte a [seção de conexão](https://mongoosejs.com/docs/connections.html) na documentação do Mongoose.

Também será necessário definir uma KEY para o JWT, para isso preencha a variável ```SECRET_KEY_JWT``` dentro do arquivo ```.env``` com uma senha de sua escolha.

Com tudo instalado e configurado, inicie o sistema com o comando:

~~~
npm run start
~~~

## :arrows_counterclockwise: Rotas da aplicação

### Usuários
 
 - POST ```/usuarios``` - Cadastro de novos usuários
 
    A requisição para esta rota não requer autenticação, porém, deve conter um body do tipo JSON com os seguintes campos:
    ~~~
    {
	    "nome":  "",
	    "email": "",
	    "senha": ""
    }
    ~~~
 
 - POST ```/usuarios/login`` - Obtém o TOKEN e acesso a API
 
    A requisição para esta rota realiza a autenticação através de e-mail e senha, ela de conter um body do tipo JSON com os seguintes campos:
    ~~~
    {
	    "email": "",
	    "senha": ""
    }
    ~~~
 
 - GET ```/usuarios``` - Listagem de nome e e-mail de todos os usuários cadastrados
 
    A requisição para esta rota requer apenas um TOKEN de autenticação válido repassado no header da requisição.
 
 - PUT ```/usuarios``` - Atualização da senha do usuário
    
    A requisição para esta rota requer um TOKEN de autenticação válido repassado no header da requisição e um body do tipo JSON com os seguintes campos:
    ~~~
    {
	    "email": "",
	    "senha": "",
	    "senhaAntiga": ""
    }
    ~~~

### Produtos

 - POST ```/produtos``` - Insere um novo produto
 
    A requisição para esta rota requer um TOKEN de autenticação válido repassado no header da requisição e um body do tipo JSON com os seguintes campos:
    ~~~
    {
	    "descricao": "",
	    "valor": -.--,
	    "quantidade": -
    }
    ~~~

 - GET ```/produtos``` - Lista todos os produtos cadastrados no sistema
 
    A requisição para esta rota requer apenas um TOKEN de autenticação válido repassado no header da requisição.
 
 - GET ```/produtos/cadastro``` - Cria os produtos automaticamente no banco de dados
 
    A requisição para esta rota requer apenas um TOKEN de autenticação válido repassado no header da requisição.
 
 - GET ```/produtos/:id_produto``` - Lista um produto especifico
 
    A requisição para esta rota requer um TOKEN de autenticação válido repassado no header da requisição e o ID do produto a ser listado repassado no final da URL.
 
 - PUT ```/produtos``` - Atualiza a quantidade de um produto disponível 
 
    A requisição para esta rota requer um TOKEN de autenticação válido repassado no header da requisição, o ID do produto a ser atualizado e um body do tipo JSON com os seguintes campos:
    ~~~
    {
	    "quantidade": -
    }
    ~~~
 
 - DELETE ```/produtos/:id_produto``` - Deleta um produto do sistema
 
    A requisição para esta rota requer um TOKEN de autenticação válido repassado no header da requisição e o ID do produto a ser excluído repassado no final da URL.

### Pedidos

 - GET ```/pedidos``` - Lista todos os pedidos cadastrados
 
    A requisição para esta rota requer apenas um TOKEN de autenticação válido repassado no header da requisição.
 
 - GET ```/pedidos/:numero_pedido``` - Lista um pedido e todos os seus produtos
    
    A requisição para esta rota requer um TOKEN de autenticação válido repassado no header da requisição e o ID do pedido a ser listado repassado no final da URL.
 
 - GET ```/pedidos/finalizar/:numero_pedido``` - Altera o status de um pedido para finalizado
 
    A requisição para esta rota requer um TOKEN de autenticação válido repassado no header da requisição e o ID do pedido a ser finalizado repassado no final da URL.

 - DELETE ```/pedidos/:numero_pedido``` - Deleta um pedido 
 
    A requisição para esta rota requer um TOKEN de autenticação válido repassado no header da requisição e o ID do pedido a ser excluído repassado no final da URL.

 - DELETE ```/pedidos/:numero_pedido/:id_produto``` - Remove um produto de um pedido
 
    A requisição para esta rota requer um TOKEN de autenticação válido repassado no header da requisição, o numero do pedido de onde será removido o produto e o ID do produto a ser removido repassado no final da URL separados por uma ```/```.
 
 - POST ```/pedidos``` - Cria um novo pedido
 
    A requisição para esta rota requer um TOKEN de autenticação válido repassado no header da requisição e um body do tipo JSON com os seguintes campos:
    ~~~
    {
	    "produtos": ["ID_PRODUTO","ID_PRODUTO"]
    }
    ~~~
    Note que esta rota receber um Array com os ID dos produtos que serão inseridos no pedidos, caso nenhum produto seja informado o sistema irá criar um pedido vazio que poderá ser preenchido com os produtos posteriormente. 

 - POST ```/pedidos/produtos``` - Insere novos produtos em um pedido
 
    A requisição para esta rota requer um TOKEN de autenticação válido repassado no header da requisição e um body do tipo JSON com os seguintes campos:
    ~~~
    {
	    "numeroPedido": "",
	    "produtos": ["ID_PRODUTO","ID_PRODUTO"]
    }

