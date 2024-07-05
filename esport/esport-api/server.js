const express = require('express');
const mongoose = require('mongoose');
const Player = require('./models/Player');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:8080' // Allow requests from this origin
}));
app.use(express.json());

const MONGODB_URI = process.env.MONGO_URI|| 'mongodb://mongo:27017/esports';

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.get('/players', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/players', async (req, res) => {
    const player = new Player({
        name: req.body.name,
        team: req.body.team,
        role: req.body.role,
        rating: req.body.rating
    });

    try {
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});