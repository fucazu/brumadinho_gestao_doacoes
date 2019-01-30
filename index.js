const app = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')

require('./api/services/database')

require('./api/services/index')

const itemDescriptionCtrl = require('./api/controllers/itemDescription')

app.use(morgan('dev'))

app.use(bodyParser.json({ type: 'application/json' }))

app.use('/api/item-description', itemDescriptionCtrl)

app.listen(process.env.PORT, () =>  console.log(`Server running at port ${process.env.PORT}`))
