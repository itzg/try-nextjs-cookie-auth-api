const express = require('express');
const uuid = require('uuid/v4');

const port = parseInt(process.env.PORT, 10) || 3001;

const server = express();

server.route('/authenticate')
.get((req, res) => {
  console.log(
      'Got initial request for authenticating. Sending login form back.');

  res.send(`
      <html>
      <body>
        <form method="post">
            <p>
              This is normally where the authentication service has you log in
              and confirm you authorize the application.
            </p>
          <input type="hidden" name="redirect_uri" value="${req.query.redirect_uri}"/>
          <button type="submit">Got it!</button>
        </form>
      </body>
      </html>
    `)
})
.post(express.urlencoded(), (req, res) => {
  const code = `code-${uuid()}`;
  const callback = req.body.redirect_uri;
  console.log(`Generated code ${code} redirecting back to app at ${callback} `);
  res.redirect(`${callback}?code=${code}`);
});

server.listen(port, err => {
  if (err) {
    throw err;
  }

  console.log(`Fake authentication server listening at http://localhost:${port}`);
});

