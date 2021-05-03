// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
const fs = require('fs')
// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => {
    console.log("working");
    fs.readFile('./db/db.json',"utf8",(err,content) => {
      if(err){
        res.status(404).json("failed");
        return
      }
      console.log(content+"content")
      res.json(JSON.parse(content))
    })
  });

  app.post('/api/note', (req, res) => {
    fs.readFile('./db/db.json',"utf8",(err,content) =>{
      if(err) throw err;
      let arraynote = JSON.parse(content);
      arraynote.push(req.body);
      dataTo
    })
   res.json({ NoteData });
  });
};
