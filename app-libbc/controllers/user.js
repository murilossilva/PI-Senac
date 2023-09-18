import { db } from "../db.js";

let emailSessao = ''

export const getAllUsers = ('/', (_, res) => {
  const q = `SELECT * FROM livros`

  db.query(
    q,
    (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json(data);   
    }
  )
})

export const getAllBooks = ('/livros-indicacao', (_, res) => {
  const q = `SELECT * FROM livros`

  db.query(
    q,
    (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json(data);   
    }
  )
})

export const getBooks = ('/buscar-livros', (req, res) => {

  const livro = [
    req.body.livro,
  ]

  const q = "SELECT * FROM `livros` WHERE `nome_livro` LIKE '%" + livro + "%'"
  
  db.query(
    q,
    livro,
    (err, data) => {
      if(data){
        return res.status(200).json(data);
      } else {
        return res.status(200).json(err)
      }
  });
});

export const getUserEmail = ('/getEmail', (req, res) => {

  const q = `SELECT * FROM usuarios WHERE email = '${emailSessao}'`

  db.query(
    q,
    (err, data) => {
      if(data[0]){
        return data[0];
      } else {
        return res.status(200).json("Erro")
      }
  });
  return emailSessao
})

export const getUsers = ('/login', (req, res) => {

  const email = [
    req.body.email,
  ]

  const senha = [
    req.body.senha
  ]

  const q = "SELECT * FROM `usuarios` WHERE `email` = ? AND `senha` = ?"

  db.query(
    q,
    [email, senha],
    (err, data) => {
      if(data[0]){
        emailSessao = email;
        return res.status(200).json("Usuário encontrado");
      } else {
        return res.status(200).json("Email/Senha não conferem")
      }
  });
});

export const addUser = (req, res) => {
  const q =
    "INSERT INTO `usuarios` (`nome`, `email`, `data_nascimento`, `cpf`, `senha`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.data_nascimento,
    req.body.cpf,
    req.body.senha
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Sucesso");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};

export const getBooksUser = (req, res) => {
  const q = "SELECT * FROM `livros_comprados` WHERE `cpf` = ?";

  const cpf = req.body.cpf

  db.query(
    q,
    [cpf],
    (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json(data);
    }
  );
};

export const buyBook = (req, res) => {
  const q =
    "INSERT INTO `livros_comprados` (`cpf`, `codigo_de_barras`, `data_compra`, `hora_compra`, `link_pdf`, id_compra) VALUES(?)";

  const values = [
    req.body.cpf,
    req.body.codigo_de_barras,
    req.body.data_compra,
    req.body.hora_compra,
    req.body.link_pdf,
    req.body.id_compra
  ];

  db.query(q, [values], (err, data) => {
    console.log(err)
    if (err) return res.json(err);

    return res.status(200).json("Sucesso");
  });
};

export const getUserInfo = (req, res) => {
  const q = "SELECT * FROM `usuarios` WHERE `cpf` = ?";
  const cpf = req.body.cpf

  db.query(
    q,
    [cpf],
    (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json(data);
    }
  );
};
