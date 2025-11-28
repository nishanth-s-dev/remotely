import express from 'express';
import ENV from './lib/env.js';

const app = express();

app.get('/', (_req, res) => {
    res.status(200).json({ msg: 'Api is up and running...' });
});

app.listen(ENV.PORT);
