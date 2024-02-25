
const express = require('express')
const cors = require('cors')
const pool = require("./db");

const app = express();

app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`SERVER ONLINE ON PORT ${PORT}`)
})

app.get('/products', async (req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM products")
    } catch (error) {
        console.error(error.message)        
    }
})