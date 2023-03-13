import { db } from "../db.js";

let emailSessao = ''

export const getAllUsers = ('/', (_, res) => {
  const q = `SELECT * FROM usuarios`

  db.query(
    q,
    (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json(data);   
    }
  )
})

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
    "INSERT INTO `usuarios` (`nome`, `telefone`, `email`, `cep`, `endereco_logradouro`, `endereco_numero`, `endereco_complemento`, `endereco_bairro`, `endereco_cidade`, `endereco_uf`, `data_nascimento`, `cpf`, `senha`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.telefone,
    req.body.email,
    req.body.cep,
    req.body.endereco_logradouro,
    req.body.endereco_numero,
    req.body.endereco_complemento,
    req.body.endereco_bairro,
    req.body.endereco_cidade,
    req.body.endereco_uf,
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

export const getReservations = (req, res) => {
  const q = "SELECT * FROM `reservas` WHERE `cpf` = ?";

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

export const addReservation = (req, res) => {
  const q =
    "INSERT INTO `reservas` (`cpf`, `nome_estabelecimento`, `data_reserva`, `horario_reserva`, `reservantes`) VALUES(?)";

  const values = [
    req.body.cpf,
    req.body.nome_estabelecimento,
    req.body.data_reserva,
    req.body.horario_reserva,
    req.body.reservantes
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
