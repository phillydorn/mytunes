// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.collection.on('add remove', this.render, this);
    // this.collection.on('play', function () {
    //   this.collection.dequeue(this.collection.at(0));
    // }, this)
  },

  events: {'click .removeSong':  function() {
    console.log(this.collection)
      this.collection.dequeue(this.collection.at(this.collection.length-1));
    }
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView(song).render();
      }),
      $('<button class="removeSong">').text('Remove Song')
    );
  },
  
});
