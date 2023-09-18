CREATE TABLE `usuarios` (
  `nome` VARCHAR(255) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `data_nascimento` VARCHAR(10) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cpf`)
);

CREATE TABLE `livros` (
  `nome_livro` VARCHAR(255) NOT NULL,
  `codigo_de_barras` VARCHAR(13) NOT NULL,
  `imagem` VARCHAR(255) NOT NULL,
  `preco` FLOAT NOT NULL,
  `numero_paginas` INT NOT NULL,
  `autor` VARCHAR(255) NOT NULL,
  `editora` VARCHAR(255) NOT NULL,
  `ano_lancamento` INT NOT NULL,
  PRIMARY KEY (`codigo_de_barras`)
);

CREATE TABLE `livros_comprados` (
  `cpf` VARCHAR(14) NOT NULL,
  `codigo_de_barras` VARCHAR(13) NOT NULL,
  `data_compra` VARCHAR(10) NOT NULL, /* dd:mm:aaaa */ 
  `hora_compra` VARCHAR(8) NOT NULL, /* hh:mm:ss */ 
  `link_pdf` VARCHAR(255) NOT NULL,
  `id_compra` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_compra`)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

INSERT INTO usuarios(
    nome, 
    cpf, 
    data_nascimento, 
    email, 
    senha
  ) 
  VALUES (
    'Murilo Souza da Silva', 
    '123.456.789-10', 
    '08-07-1998',
    'murilo@teste.com',
    'teste123'
  );

INSERT INTO livros(
    nome_livro, 
    codigo_de_barras,
    imagem,
    preco,
    numero_paginas,
    autor,
    editora,
    ano_lancamento
  ) 
  VALUES (
    'Guerra do Velho', 
    '7893214432123',
    'https://m.media-amazon.com/images/I/71qYuQsuiUL._SY522_.jpg',
    7.70,
    338,
    'John Scalzi',
    'Aleph',
    2016
  );

INSERT INTO livros(
    nome_livro, 
    codigo_de_barras,
    imagem,
    preco,
    numero_paginas,
    autor,
    editora,
    ano_lancamento
  ) 
  VALUES (
    '1984', 
    '7893221232123',
    'https://m.media-amazon.com/images/I/51-DZ1v5gSL._SY445_SX342_.jpg',
    9.90,
    320,
    'George Orwell',
    'Excelsior',
    2021
  );
