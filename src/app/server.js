const express = require("express");
const bodyParser = require("body-parser");
const { QuickDB } = require("quick.db");
const { v4: uuidv4 } = require("uuid");
const db = new QuickDB();
const app = express();
const PORT = 3000;
const url = "localhost";
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/raw/:name", async (req, res) => {
  const data = req.params.name;

  const code = await db.get(`${data}.code`);

  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Edit Done - Data Share</title>
      <link rel="stylesheet" href="assets/silicon_dark.min.css" />

    </head>
    <body>
 ${code}
    </body>
  </html>`);
});

app.post("/edit/done/:name", async (req, res) => {
  console.log(req.params.name);

  const data = req.params.name;

  console.log(data);

  await db.set(`${data}`, { code: req.body.data });

  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Edit Done - Data Share</title>
      <link rel="stylesheet" href="assets/silicon_dark.min.css" />
    </head>
    <body>
      <h1>Edit Done</h1>
     <p> Your File is Saved use this link to view it!<br><br> <a href="http://${url}:${PORT}/share/${data}">${data}</a></p>
      <footer>
       
          Made by
          <a class="a" href="https://tnsjesper.xyz" target="_blank">tnsjesper</a>
          for <a class="a" href="https://endelon.link" target="_blank">Endelon</a>.
          <br>
          <a class="a" target="_blank" href="https://tnsjesper.xyz/impressum.php">Imprint</a>
      
      </footer>
    </body>
  </html>`);
});

app.get("/edit/:name", async (req, res) => {
  const data = req.params.name;

  const code = await db.get(`${data}.code`);

  console.log(data, code);

  res.send(`<!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Edit File ${data} - Data Share</title>
   </head>
   <body>
     <h1>Edit File ${data}</h1>
     <form action="/edit/done/${data}" method="post">
       <label for="data">Your Input:</label><br />
       <textarea id="data" name="data" rows="20" cols="20">${code}</textarea><br />
       <button type="submit">Submit</button>
     </form>
     <footer>
       <p>
         Made by
         <a class="a" href="https://tnsjesper.xyz" target="_blank">tnsjesper</a>
         for <a class="a" href="https://endelon.link" target="_blank">Endelon</a>.
         <br>
         <a class="a" target="_blank" href="https://tnsjesper.xyz/impressum.php">Imprint</a>
       </p>
     </footer>
   </body>
 </html>
 `);
});

app.post("/done", async (req, res) => {
  const data = req.body.data;

  if (!data) {
    return res.sendFile(__dirname + "/index.html");
  }

  const uuid = uuidv4();

  res.send(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Show URL - Data Share</title>
        <link rel="stylesheet" href="assets/silicon_dark.min.css" />
      </head>
      <body>
        <h1>URL Ready!</h1>
       <p class="p"> Your File is Saved use this link to view it!<br><br> <a href="http://${url}:${PORT}/share/${uuid}">${uuid}</a></p>
        <footer>
         
            Made by
            <a class="a" href="https://tnsjesper.xyz" target="_blank">tnsjesper</a>
            for <a class="a" href="https://endelon.link" target="_blank">Endelon</a>.
            <br>
            <a class="a" target="_blank" href="https://tnsjesper.xyz/impressum.php">Imprint</a>
          
        </footer>
      </body>
    </html>
    `
  );
  await db.set(uuid, { code: data });
});

app.get("/share/:name", async (req, res) => {
  const data = req.params.name;

  const code = await db.get(`${data}.code`);

  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Show File ${data} - Data Share</title>
      
    </head>
    <body>
      <h1>Show File ${data}!</h1>
     <form><code> ${code}</code></form>

     <a href="/"><img src="https://icons.getbootstrap.com/assets/icons/file-earmark-plus.svg" alt="Pencil" width="20" height="20"></a>
     <a href="/edit/${data}"><img src="https://icons.getbootstrap.com/assets/icons/pencil.svg" alt="Pencil" width="20" height="20"></a>
     <a href="/raw/${data}"><img src="https://icons.getbootstrap.com/assets/icons/filetype-raw.svg" alt="Pencil" width="20" height="20"></a>
     <br>
     <br>
     <br>
     <br>
     <br>
     <br>
     <br>
     <br>
     <br>
      <footer>
       
          Made by
          <a class="a" href="https://tnsjesper.xyz" target="_blank">tnsjesper</a>
          for <a class="a" href="https://endelon.link" target="_blank">Endelon</a>.
          <br>
          <a class="a" target="_blank" href="https://tnsjesper.xyz/impressum.php">Imprint</a>
        
      </footer>
    </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://${url}:${PORT}`);
});
