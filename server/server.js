import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js';

//routes
import cereals from './routes/cerealApi.js'

const app = express();

//connect to cereal database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true}))

// init middleware
app.use(express.json({ extended: false}))

app.get('/', (req,res) => res.send('Hello from cereal world'))

//use routes
app.use('/api/cereals', cereals)

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`))
