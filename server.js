const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to fetch the Web App URL
app.get('/api/url', (req, res) => {
    res.json({ url: process.env.WEB_APP_URL });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
