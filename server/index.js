const express = require('express');

const fs = require('fs');

const path = require('path');

const bodyParser = require('body-parser');



const app = express();

const PORT = 3000;

const DB_FILE = path.join(__dirname, 'db.json');



app.use((req, res, next) => {

res.header("Access-Control-Allow-Origin", "http://localhost:4200");

res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

if (req.method === 'OPTIONS') return res.sendStatus(200);

next();

});



app.use(bodyParser.json());



app.get('/', (req, res) => {

res.send('<h1>Бекенд працює!</h1> Дані резюме тут: <a href="/api/resume">/api/resume</a>');

});



// ПУНКТ 1: GET-запит (зчитування)

app.get('/api/resume', (req, res) => {

fs.readFile(DB_FILE, 'utf8', (err, data) => {

if (err) return res.status(500).json({ error: "Файл не знайдено" });

res.json(JSON.parse(data));

});

});



// ПУНКТ 1: POST-запит (запис у файл)

app.post('/api/resume', (req, res) => {

const newData = req.body;

fs.writeFile(DB_FILE, JSON.stringify(newData, null, 2), (err) => {

if (err) return res.status(500).json({ error: "Не вдалося зберегти дані" });

res.json({ message: "Дані успішно оновлено на сервері!" });

});

});



app.listen(PORT, () => {

console.log(`✅ Сервер успішно запущено на: http://localhost:${PORT}`);

});
