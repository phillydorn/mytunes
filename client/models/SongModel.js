// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(song){
    this.trigger('enqueue', this, song);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.set('playCount', this.get('playCount')+1);
    console.log(this.get('playCount'));
    this.trigger('ended', this);
  }

});
