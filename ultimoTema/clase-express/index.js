const express = require('express')
const app = express()
const port = 3000
const db = require('better-sqlite3')('Ejercicio.sqlite');
//crearemos la configuracion de la base de datos

app.set("view engine", "ejs");
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.render("index", msgs = {msgs: ["hola", "desde" , "la" , "ruta"]});
  const rows = db.prepare('SELECT * from Usuaris').all();
  res.render("index", msgs = { msgs: rows })
})
app.get('/usuaris', (req, res) => {
  resultadoSelect = 'SELECT * from Usuaris'
  const rows = db.prepare('SELECT * from Usuaris').all();
  res.render('usuaris', usuaris = rows)
})
app.get('/detallitos', (req, res) => {
  id = req.query.id
  console.log(req.query);
  const rows = db.prepare('SELECT * from Usuaris where id = ?').get(id);
  res.render('detallitos', { usuaris: rows })
})
app.get('/detallitosProducto', (req, res) => {
  id = req.query.id
  console.log(req.query);
  const rows = db.prepare('SELECT * from Productes where id = ?').get(id);
  res.render('detallitosProducto', { productes: rows })
})

app.get('/usuari', (req, res) => {
  res.render("usuari");
})
app.post("/usuari", (req, res) => {
  if (req.body) {
    console.log(req.body);
    if (req.body.nombre && req.body.email) {
      //insert
      const statement = db.prepare('INSERT INTO Usuaris (nombre, email) VALUES (?,?)')
      const info = statement.run(req.body.nombre, req.body.email)
      console.log(info)
    }
  }
  res.redirect("usuari");
})

app.get('/productes', (req, res) => {
  resultadoSelect = 'SELECT * from Productes'
  const rows = db.prepare('SELECT * from Productes').all();
  res.render('productes', productes = rows)
})
app.get('/producte', (req, res) => {
  res.render("producte");
})
app.post("/producte", (req, res) => {
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

app.get('/comandas', (req, res) => {
  const rows = db.prepare('SELECT * from Comandes join Usuaris on Comandes.usuari_id = Usuaris.id join Productes on Productes.id = Comandes.producte_id').all();
  res.render('comandas', comandas = rows)
})

// este en realidad es el addComanda
app.get('/comanda', (req, res) =>{
  // select de usuaris
  const rowsUsuaris = db.prepare('SELECT * from Usuaris').all()
  const rowsProductes = db.prepare('SELECT * from Productes').all()
  // select de productes
  res.render("comanda", {usuaris: rowsUsuaris, productes: rowsProductes});
})
app.post('/comanda', (req, res) => {
  if (req.body) {
    console.log(req.body);
    if (req.body.usuari_id && req.body.producte_id) {
      //insert
      const statement = db.prepare('INSERT INTO Comandes (usuari_id, producte_id) VALUES (?,?)')
      const info = statement.run(req.body.usuari_id, req.body.producte_id)
      console.log(info)
    }
  }
  res.redirect("comanda");
})


// UPDATEEES


app.get('/usuariUpdate', (req, res) => {
  const id = req.query.id
  const usuari = db.prepare('select * from Usuaris where id = ?').get(id)
  res.render("usuariUpdate", {usuari: usuari});
})

app.post("/usuariUpdate", (req, res) => {
  console.log(req.body)
  if (req.body) {
    if (req.body.nombre && req.body.email && req.body.id) {
      const statement = db.prepare('UPDATE Usuaris SET nombre = ?, email = ? WHERE id = ?')
      const info = statement.run( req.body.nombre, req.body.email, req.body.id)
      console.log(info)
    }
  }
  res.redirect("usuaris");
})



app.get('/productoUpdate', (req, res) => {
  const id = req.query.id
  const producto = db.prepare('select * from Productes where id = ?').get(id)
  res.render("productoUpdate", {producto: producto});
})

app.post("/productoUpdate", (req, res) => {
  console.log(req.body)
  if (req.body) {
    if (req.body.nom && req.body.preu && req.body.id) {
      const statement = db.prepare('UPDATE Productes SET nom = ?, preu = ? WHERE id = ?')
      const info = statement.run( req.body.nom, req.body.preu, req.body.id)
      console.log(info)
    }
  }
  res.redirect("productes");
})

app.get('/comandaUpdate', (req, res) => {
  const id = req.query.id
  const comanda = db.prepare('select * from Comandes where id = ?').get(id)
  const rowsUsuaris = db.prepare('SELECT * from Usuaris').all()
  const rowsProductes = db.prepare('SELECT * from Productes').all()
  res.render("comandaUpdate", {comanda: comanda, usuaris: rowsUsuaris, productes:rowsProductes});
})

app.post("/comandaUpdate", (req, res) => {
  console.log(req.body)
  if (req.body) {
    if (req.body.usuari_id && req.body.producte_id && req.body.id) {
      const statement = db.prepare('UPDATE Comandes SET usuari_id = ?, producte_id = ? WHERE id = ?')
      const info = statement.run( req.body.usuari_id, req.body.producte_id, req.body.id)
      console.log(info)
    }
  }
  res.redirect("comandas");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})