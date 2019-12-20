const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const auth = require('./routes/auth');

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
);

app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/post', postRoute);

app.listen(3000, () => console.log('Server Up and running!'));
