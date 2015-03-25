// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  playing: false,

  initialize: function(){
    // this.on('add', this.enqueue, this);
    this.on('ended', this.playNext, this);
    this.on('dequeue', this.dequeue, this);
    this.on('enqueue', this.enqueue, this);
    this.on('play', function() {this.playing = true;})
    this.on('stop', function() {this.playing = false;})
  },

  enqueue: function(song) {
    this.add(song)
     if(!this.playing){
      this.playFirst();
      this.playing = true;
      this.dequeue(song);
    } 
  },
 
  playFirst: function() {
    this.at(0).play()
  },

  playNext : function() {
    console.log('playnext')
    if(this.length > 0){
      this.playFirst();
      this.dequeue(this.at(0));
    } else {
      this.trigger('stop');
    }   
  },

  dequeue: function(song){
    // if(this.at(0) === song){
    //   this.playNext();
    // } else {
      this.remove(song);
    // }
  }
  

});