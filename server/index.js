const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
