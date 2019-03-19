module.exports = (app) => {
    
    const notes = require("../controllers/notes.controller.js");

    app.get("/notes", notes.findAll);

    app.get("/notes/:noteId", notes.findOne);

    app.post("/notes", notes.create);

    app.put("/notes/:noteId", notes.update);

    app.delete("/notes/:noteId", notes.delete);
}