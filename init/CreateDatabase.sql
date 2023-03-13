CREATE TABLE `usuarios` (`nome` VARCHAR(255) NOT NULL,`telefone` VARCHAR(45) NOT NULL,`email` VARCHAR(255) NOT NULL,`cep` VARCHAR(45) NOT NULL,`endereco_logradouro` VARCHAR(255) NOT NULL,`endereco_numero` INT NOT NULL,`endereco_complemento` VARCHAR(255) NULL,`endereco_bairro` VARCHAR(255) NOT NULL,`endereco_cidade` VARCHAR(255) NOT NULL,`endereco_uf` VARCHAR(45) NOT NULL,`data_nascimento` VARCHAR(45) NOT NULL,`cpf` VARCHAR(45) NOT NULL,`senha` VARCHAR(45) NOT NULL,PRIMARY KEY (`cpf`));

CREATE TABLE `reservas` (
  `cpf` VARCHAR(45) NOT NULL,
  `nome_estabelecimento` VARCHAR(255) NOT NULL,
  `data_reserva` VARCHAR(45) NOT NULL,
  `horario_reserva` VARCHAR(45) NOT NULL,
  `id_reserva` INT NOT NULL AUTO_INCREMENT,
  `reservantes` INT NOT NULL,
  PRIMARY KEY (`id_reserva`));

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

INSERT INTO usuarios(nome, telefone, email, cep, endereco_logradouro, endereco_numero, endereco_bairro, endereco_cidade, endereco_uf, data_nascimento, cpf, senha) VALUES ('Murilo Souza da Silva', '(13)991919191', 'teste@teste.com', '01234-567', 'Rua Timbó', 409, 'Saúde', 'São Paulo', 'SP', '1999-01-01', '123.456.789-10', 'Teste');
