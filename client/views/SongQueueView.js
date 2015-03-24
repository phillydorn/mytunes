// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  initialize: function(params) {
    this.collection = params.collection
    this.render();
  },

  render: function() {
    return this.$el.append(
      this.collection.map(function(song){ return new SongQueueEntryView(song);})
    );
  },
  
});
