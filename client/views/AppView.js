// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.buttonView = new ButtonView();

    this.buttonView.on('removeSongClick', function(){
      console.log('before', this.model.get('songQueue') )
      this.model.get('songQueue').dequeue(this.model.get('songQueue').at(1));
      console.log('after', this.model.get('songQueue') )
    }, this);
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.buttonView.$el
    ]);
  }

});
