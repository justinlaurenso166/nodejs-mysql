const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")

const port = 8080

//Route 
const MahasiswasRoutes = require('./routes/MahasiswasRoute.js')

app.use(cors({
    origin: '*',
}))

app.use(express.json())

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use('/Mahasiswa', MahasiswasRoutes)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})