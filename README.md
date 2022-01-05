# Markdown engine

#### Convert any markdown text to html

A live preview of the project [markdown engine](https://markdown-engine.herokuapp.com "live preview"), the engine receives markdown text in a form, converts the markdown to html and downloads for you the converted html.

![project image](https://github.com/ryanmwakio/markdown_engine/blob/master/img_1.png)

---

#### Running the code

```bash
git clone https://github.com/ryanmwakio/markdown_engine.git
```

Navigate into the project folder<br>
For the next step make sure you have node installed [installing node](https://nodejs.org/en/download/ "instructions on installing node into your computer")

```bash
npm install
```

The above step ensures that all dependencies for the project have been installed

```bash
npm start
```

An instance of a running server should now be running<br>
Navigate to your browser and key in the following url

> http://127.0.0.1:8000 <br>This is a local development server listening on port :8000

---

#### Project folder structure

```
MARKDOWN_ENGINE
│   README.md
│   .gitignore
|   .env
|   index.js (the main file all code resides)
|   package.json
│
+ ──generated_html
│   │   g2pc5374ky1l4e51.html
│   │   g2pc5374ky1l4e51.html
│   │   g2pc5374ky1l4e51.html
|
+ ──node_modules
│
│
│
+ ──views
|   │   index.ejs
|
|

1) generated_html: a copy of all generated html
2) views: decoupling the project, the client side views
3) index.js: the main file where the server rendering occurs
```

---

#### The code

```javascript
//The root "/"
app.get("/", (req, res) => {
  return res.render("index", { url: process.env.URL });
});
//1) The server is listening for a get request and responds with a rendered view "index.ejs"
//2) {url: process.en.URL} this is to ensure that the app does not break in production, we pass the url dynamically in the environment variables
```

```javascript
//The convert endpoint "/convert"
app.post("/convert", (req, res, next) => {
  if (typeof req.body.content == "undefined" || req.body.content == null) {
    console.error(["error", "No data found"]);
    return res.redirect("/");
  } else {
    text = req.body.content;
    html = converter.makeHtml(text);

    let filename = uniqid() + ".html";

    //create file
    let pathToFile = path.join(__dirname, "generated_html", filename);
    fs.writeFileSync(pathToFile, html);

    //download the html file
    res.download(pathToFile);
  }
});
//1) We check for falsy edge cases before processing. In the case of false values we redirect to the root.
//2) In case the check passed, we retrieve the form content and make a conversion of the data passed
//3) We then create a file(html file) using the parsed text and save the file in the server.
//4) Then the html file is downloaded and the execution flow is complete.
```

---

#### Tasks:

- [x] Take in markdown input
- [x] process the markdown
- [x] generate html
- [x] output the generated html
- [ ] extended useful error messages
