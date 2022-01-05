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
