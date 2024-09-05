const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('colors');
const student = require('./routes/student');
const studentClass = require('./routes/class');
const connectDB = require('./dbinit');

connectDB();

// usual middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.use('/api/students', student);
app.use('/api/classes', studentClass);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`.rainbow);
});
