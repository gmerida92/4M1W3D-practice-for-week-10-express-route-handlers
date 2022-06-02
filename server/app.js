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
app.use(express.json())

app.get('/artists/:artistId', (req, res) => {
  const { artistId } = req.params;
  // const artistId = req.params.artistId;

  const artist = getArtistByArtistId(artistId);

  res.status(200);
  return res.json(artist);
});

app.put('/artists/:artistId', (req, res) => {

  const { artistId } = req.params;
  const { name } = req.body;

  editArtistByArtistId(artistId, name);

  res.status(200);
  // plain text
  res.send();

  // parse json object
  res.json({
    name
  })
})

app.get('/artists', (req, res) => {

  const artists = getAllArtists();
  res.status(200);
  res.json(artists);

});



const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
