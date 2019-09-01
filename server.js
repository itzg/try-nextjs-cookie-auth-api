const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const authenticateUri = process.env.AUTHENTICATE_URI || 'http://localhost:3001/authenticate';
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/login', (req, res) => {
    console.log(`Handling login by redirecting to ${authenticateUri}`);
    res.redirect(`${authenticateUri}?redirect_uri=http://localhost:${port}/callback`)
  });

  server.get('/logout', (req, res) => {
    console.log('Handling logout');
    res.clearCookie('code');
    res.redirect('/');
  });

  server.get('/callback', (req, res) => {
    const code = req.query.code;
    console.log(`Handling authenticate callback, got code ${code}`);
    res.cookie('code', code);
    res.redirect('/');
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;

    console.log(`> Ready on http://localhost:${port}`);
  })
});