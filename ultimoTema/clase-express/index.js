const express = require('express')
const app = express()
const port = 3000
const db = require('better-sqlite3')('Ejercicio.sqlite');
//crearemos la configuracion de la base de datos

app.use(express.json());

app.get('/usuaris', (req, res) => {
  resultadoSelect = 'SELECT * from Usuaris'
  const rows = db.prepare('SELECT * from Usuaris').all();
  res.json(rows)
})

app.get('/usuari', (req, res) => {
    //aqui hare el select
    personaID = req.query.id;
    resultadoSelect = 'SELECT * from Usuaris'
    const row = db.prepare('SELECT * from Usuaris WHERE id = ?').get(personaID);
    res.json(row)
  })


app.get('/productes', (req, res) => {
  resultadoSelect = 'SELECT * from Productes'
  const rows = db.prepare('SELECT * from Productes').all();
  res.json(rows)
})

app.get('/producte', (req, res) => {
    //aqui hare el select
    personaID = req.query.id;
    resultadoSelect = 'SELECT * from Productes'
    const row = db.prepare('SELECT * from Productes WHERE id = ?').get(personaID);
    res.json(row)
  })


app.get('/comandes', (req, res) => {
  resultadoSelect = 'SELECT * from Comandes'
  const rows = db.prepare('SELECT * from Comandes join Usuaris on Comandes.usuari_id = Usuaris.id join Productes on Productes.id = Comandes.producte_id').all();
  res.json(rows)
})

app.get('/comande', (req, res) => {
    //aqui hare el select
    personaID = req.query.id;
    resultadoSelect = 'SELECT * from Comandes'
    const row = db.prepare('SELECT * from Comandes join Usuaris on Comandes.usuari_id = Usuaris.id join Productes on Productes.id = Comandes.producte_id WHERE id = ?').get(personaID);
    res.json(row)
  })
app.post("/persona", (req, res) =>{
    personasid =req.body.id;
    console.log(personasid);
    const rows = db.prepare('SELECT * from personas WHERE id = ?').get(personasid);
    console.log(rows);
    res.json(rows);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})