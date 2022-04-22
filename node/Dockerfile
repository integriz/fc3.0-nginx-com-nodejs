# puxa a imagem do node.js
FROM node:alpine
# cria um diretório no container
WORKDIR /usr/src/app

#RUN apt-get update && apt-get install -y wget
RUN apk update
RUN apk add --no-cache wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# copia os arquivos da package.json da máquina local para a pasta informada no workdir do container
COPY package*.json ./

# executa a instalação do npm install na imagem
RUN npm install 

# copia todos os arquivos da máquina local para a imagem
COPY . .
RUN npm install mysql
RUN npm install express --save 

# a aplicação estará sendo executada na porta abaixo no container
EXPOSE 5000
