const express = require('express')
const app = express()
const port = 3000
const db = require('better-sqlite3')('Ejercicio.sqlite');
//crearemos la configuracion de la base de datos
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) =>{
  // res.render("index", msgs = {msgs: ["hola", "desde" , "la" , "ruta"]});
  const rows = db.prepare('SELECT * from Usuaris').all();
  res.render("index", msgs = {msgs: rows})
})
app.get('/usuaris', (req, res) => {
  resultadoSelect = 'SELECT * from Usuaris'
  const rows = db.prepare('SELECT * from Usuaris').all();
  res.json(rows)
})

app.get('/usuari', (req, res) => {
    // personaID = req.query.id;
    // resultadoSelect = 'SELECT * from Usuaris'
    // const row = db.prepare('SELECT * from Usuaris WHERE id = ?').get(personaID);
    // res.json(row)
    res.render("usuari");
  })
app.post("/usuari", (req, res) =>{
    // personasid =req.body.id;
    // console.log(personasid);
    // const rows = db.prepare('SELECT * from Usuaris WHERE id = ?').get(personasid);
    // console.log(rows);
    // res.json(rows);
    try{
    console.log(req.body);
    if (req.body.nombre && req.body.email) {
      //insert
      const statement = db.prepare('INSERT INTO Usuaris (nombre, email) VALUES (?,?)')
      const info = statement.run(req.body.nombre, req.body.email)
      console.log(info)
    }
    res.redirect("usuari");
  } catch (SqliteError) {
    res.redirect("usuari");
  }
})


app.get('/productes', (req, res) => {
  resultadoSelect = 'SELECT * from Productes'
  const rows = db.prepare('SELECT * from Productes').all();
  res.json(rows)
})

app.get('/producte', (req, res) => {
    // personaID = req.query.id;
    // resultadoSelect = 'SELECT * from Productes'
    // const row = db.prepare('SELECT * from Productes WHERE id = ?').get(personaID);
    // res.json(row)
    res.render("producte");
  })
  app.post("/producte", (req, res) =>{
    // personasid =req.body.id;
    // console.log(personasid);
    // const rows = db.prepare('SELECT * from Usuaris WHERE id = ?').get(personasid);
    // console.log(rows);
    // res.json(rows);
    try {
      console.log(req.body);
    if (req.body.nom && req.body.preu) {
      //insert
      const statement = db.prepare('INSERT INTO Productes (nom, preu) VALUES (?,?)')
      const info = statement.run(req.body.nom, req.body.preu)
      console.log(info)
    }
    res.redirect("producte");
    } catch (SqliteError) {
      res.redirect("producte");
    }
    
})

app.get('/comandes', (req, res) => {
  resultadoSelect = 'SELECT * from Comandes'
  const rows = db.prepare('SELECT Comandes.id, Comandes.usuari_id, Comandes.producte_id, Usuaris.nombre, Usuaris.email, Productes.nomb, Productes.preu from Comandes join Usuaris on Comandes.usuari_id = Usuaris.id join Productes on Productes.id = Comandes.producte_id').all();
  res.json(rows)
})

app.get('/comande', (req, res) => {
    personaID = req.query.id;
    resultadoSelect = 'SELECT * from Comandes'
    const row = db.prepare('SELECT Comandes.id, Comandes.usuari_id, Comandes.producte_id, Usuaris.nombre, Usuaris.email, Productes.nom, Productes.preu from Comandes join Usuaris on Comandes.usuari_id = Usuaris.id join Productes on Productes.id = Comandes.producte_id WHERE Comandes.id = ?').get(personaID);
    res.json(row)
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})