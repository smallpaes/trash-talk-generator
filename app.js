// Include packages
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trash_talk')

// Declare server related variables
const port = 3000

// Register ExpressHandlebars instance-level helpers
const hbs = exphbs.create({ helpers: {} })
// Define template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
// Tell express that all templates ahead will be handlebars
app.set('view engine', 'handlebars')
// Ask Express to take the request body and parse it into JS object
app.use(bodyParser.urlencoded({ extended: true }))
// Tell Express where to find static files
app.use(express.static('public'))

// Handle request and response 
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const result = generateTrashTalk(req.body.target)
  res.render('index', {
    result,
    // Specify a helper for this rendering: add checked to selected target input
    helpers: { [req.body.target]() { return 'checked' } }
  })
})

// Start and listen to the server
app.listen(port, () => {
  console.log(`Express server is listening on http://localhost:${port}`)
})