-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Endereco (
id_endereco int(5) PRIMARY KEY,
cep char(8),
rua varchar(60),
numero int(6),
bairro varchar(40),
cidade varchar(40)
)

CREATE TABLE Cliente (
id_cliente int(5) PRIMARY KEY,
nome varchar(60),
username varchar(20),
email varchar(60),
telefone char(10),
senha varchar(15),
id_endereco int(5),
FOREIGN KEY(id_endereco) REFERENCES Endereco (id_endereco)
)

CREATE TABLE Servico (
descricao varchar(200),
status varchar(30),
id_servico int(5) PRIMARY KEY,
titulo varchar(40),
id_cliente int(5),
id_equipamento int(5),
FOREIGN KEY(id_cliente) REFERENCES Cliente (id_cliente)
)

CREATE TABLE Equipamento (
id_equipamento int(5) PRIMARY KEY,
tipo varchar(40),
equipamento varchar(50)
)

ALTER TABLE Servico ADD FOREIGN KEY(id_equipamento) REFERENCES Equipamento (id_equipamento)
