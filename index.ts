import express from 'express';

import _qs from 'qs';
const app = express();

app.get('/bmi', (req, res) => {
  console.log(req.query);
  const { height, weight } = req.query;
  res.send({
    height,
    weight,
  });
});

app.post('/calculate', (req, res) => {
  const { value1, value2, op } = req.body;

  const result = calculator(value1, value2, op);
  res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
