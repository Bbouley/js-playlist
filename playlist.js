var Song = require('./song');

var Playlist = function(songs){
  this.songs = [];
  this.playing = false;
  this.currentSong = null;
  this.ind = 0;
};

Playlist.prototype.isEmpty = function () {
  if (this.songs.length === 0){
    return true;
  } else {
    return false;
  }
};

Playlist.prototype.addSong = function(song){
  this.songs.push(song);
};

Playlist.prototype.songNames = function(){
  var results = [];
  for (var i = 0; i < this.songs.length; i++) {
    results.push(this.songs[i].name);
  }
  return results;
};

Playlist.prototype.removeSong = function(songName){
  for (var i = 0; i < this.songs.length; i++) {
    if (songName.name === this.songs[i].name){
      this.songs.splice([i],1);
    }
  }
};

Playlist.prototype.totalLength = function(){
  var length = 0;
  for (var i = 0; i < this.songs.length; i++) {
    length += this.songs[i].length;
  }
  return length;
};

Playlist.prototype.swap = function(song1, song2){
   var index1 = this.songs.indexOf(song1);
   var index2 = this.songs.indexOf(song2);
   this.songs[index1] = song2;
   this.songs[index2] = song1;
};



Playlist.prototype.nowPlaying = function(){
  if(this.currentSong === undefined){
    return null;
  } else {
  return this.currentSong;
 }
};

Playlist.prototype.play = function(){
  this.currentSong = this.songs[this.ind];
};

Playlist.prototype.next = function(){
  this.ind +=1;
  this.currentSong = this.songs[this.ind];
};



Playlist.prototype.forNumber = function () {

};

module.exports = Playlist;
