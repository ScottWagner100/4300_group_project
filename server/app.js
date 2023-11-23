const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const cors = require('cors');
const games = require('./routes/api/games');

// Connect Database
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use('/api/games', games);
app.get('/', (req, res) => res.send('Hello World'));


const conn_str = 'mongodb+srv://scottwagner100:bc9vzmjvEVPuYEr5@4300-project.co4elq6.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology : true,
    useNewUrlParser : true
})
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Succeeded')
})
.catch(err => {
    console.log('Error Connecting to MongoDB ${err}');
});