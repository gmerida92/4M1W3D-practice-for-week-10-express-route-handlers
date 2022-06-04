// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Basic Phase 1: Handle JSON In Request
app.use(express.json());

//  Now any body in a request that is made with a "Content-Type"
//  header of "application/json" will be deserialized and saved to
//  and saved to the "body" property on the request object, "req.body"

app.use((req, res, next) => {
  console.log("Body: ", req.body);
  next();
});

// Basic Phase 2: Create Route Handlers
app.get("/artists", (req, res) => {
  const allArtists = getAllArtists()
  res.status(200);
  res.json(allArtists);
});

app.post("/artists", (req, res) => {
  const newArtist = addArtist(req.body);
  res.status(201);
  // res.header({
  //   "Content-Type": "application/json"
  // })
  res.json(newArtist);
});

// Long Practice
app.get("/artists/:artistId", (req, res) => {
  const { artistId } = req.params;
  // const artistId = req.params.artistId;

  // req.params property is an object containing
  // properties mapped to the named route “parameters”. 
  // For example, if you have the route /user/:name, then 
  // the “name” property is available as req.params.name.
  // This object defaults to {}.

  const artist = getArtistByArtistId(artistId);
  res.status(200);
  res.json(artist);
});

app.put("/artists/:artistId", (req, res) => {
  const { artistId } = req.params;
  const  name  = req.body;
  // const edit = req.body.name;

  const edit = editArtistByArtistId(artistId, name);
  console.log(artistId);
  console.log(name)
  console.log(edit);

  res.status(200);
  res.json(edit);
});


// app.use(express.json())

// app.get('/artists/:artistId', (req, res) => {
//   const { artistId } = req.params;
//   // const artistId = req.params.artistId;

//   const artist = getArtistByArtistId(artistId);

//   res.status(200);
//   return res.json(artist);
// });

// app.put('/artists/:artistId', (req, res) => {

//   const { artistId } = req.params;
//   const { name } = req.body;

//   editArtistByArtistId(artistId, name);

//   res.status(200);
//   // plain text
//   res.send();

//   // parse json object
//   res.json({
//     name
//   })
// })

// app.get('/artists', (req, res) => {

//   const artists = getAllArtists();
//   res.status(200);
//   res.json(artists);

// });

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
