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

Em sistema unix, o comando acima pode retornar um erro por falta de permissão, caso isso ocorra execute-o novamente utilizando o sudo no inicio do comando.

## :wrench: Configuração inicial
Agora será necessário realizar algumas configurações. O projeto utiliza o banco de dados Mongodb, caso não o tenha instalado consulte o guia de instalação em [Download Mongodb](https://www.mongodb.com/try/download/community), ou utilize o serviço de armazenamento em cloud [Mongodb Atlas](https://account.mongodb.com/account/login).

Com o banco de dados instalado e rodando é necessário inserir a URL do mongodb no sistema, para isso faça uma cópia do arquivo ```.env.example``` removendo o ```.example``` do nome do arquivo e insira a URL do banco de dados na variável ```BD_HOST``` do arquivo env. 

Se estiver executando o mongodb localmente, a URL para o banco de dados será:

~~~
mongodb://127.0.0.1:27017/database
~~~ 

Caso esteja utilizando o Mongodb Atlas, a URL é fornecida no momento da criação do database.

Com tudo instalado e configurado, inicie o sistema com o comando:

~~~
npm run start
~~~


