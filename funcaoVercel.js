module.exports = (req, res) => {
    if (req.method === 'POST') {
      // Lógica de manipulação de solicitações POST aqui
      const requestBody = req.body;
      
      // Realize alguma operação com os dados do corpo da solicitação
      const resultado = requestBody.valor1 + requestBody.valor2;
  
      res.status(200).json({ resultado });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  };