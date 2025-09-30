const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: '' });
});

const studentRoutes = require('./routes/studentRoutes');
app.use(studentRoutes);

app.use((req, res) => {
    res.status(404).json({ 
        message: 'Route not found',
        requestedPath: req.path,
        method: req.method
    });
});

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'student_db',
    tls: true,
    tlsAllowInvalidCertificates: false,
    retryWrites: true,
    w: "majority"
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});