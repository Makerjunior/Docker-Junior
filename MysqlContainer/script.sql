
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    endereco VARCHAR(100) NOT NULL
);

INSERT INTO usuarios (nome, idade, endereco) VALUES
('João', 25, 'Rua A'),
('Maria', 30, 'Rua B'),
('Pedro', 28, 'Rua C'),
('Lucas', 21, 'Rua D'),
('Ana', 27, 'Rua E'),
('Márcio', 32, 'Rua F'),
('Fernanda', 24, 'Rua G'),
('Ricardo', 35, 'Rua H'),
('Bianca', 29, 'Rua I'),
('Sandra', 26, 'Rua J'),
('Carlos', 31, 'Rua K'),
('Aline', 23, 'Rua L'),
('Gustavo', 33, 'Rua M'),
('Larissa', 22, 'Rua N'),
('Roberto', 34, 'Rua O'),
('Tatiana', 28, 'Rua P'),
('Bruno', 25, 'Rua Q'),
('Camila', 27, 'Rua R'),
('Paulo', 30, 'Rua S'),
('Júlia', 26, 'Rua T');

SELECT * FROM usuarios;