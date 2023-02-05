const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const http = require('http').createServer(app)

// Express App Config
app.use(express.json())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else { 
    const corsOptions = {
        origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

const productRoutes = require('./api/product/product.routes')
const cartRoutes = require('./api/cart/cart.routes')


app.use('/api/product', productRoutes)
app.use('/api/cart', cartRoutes)


app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
 
const port = process.env.PORT || 3030
http.listen(port, () => {
  console.log('Server is running on port: ' + port)
})