const express = require('express');
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));

app.get('/api/sumar/:num1/:num2', (req, res) => {
    let { num1, num2 } = req.params;
    const sumaRes=parseInt(num1) + parseInt(num2)
    res.send({ suma:  sumaRes});
});

app.get('/api/sumar', (req, res) => {
    let { num1, num2 } = req.query;
    res.send({ suma: parseInt(num1) + parseInt(num2) });
});

app.get('/api/operacion/:nums', (req, res) => {
    let result = eval(req.params.nums);
    res.send({ result });
});

app.post('/api', (req, res) => res.send('ok'));
app.put('/api', (req, res) => res.send('ok'));
app.delete('/api', (req, res) => res.send('ok'));