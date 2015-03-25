// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
     this.$el.on('ended', (function(){
       this.model.ended();
     }).bind(this));
     this.model.set('artist', '');
     this.model.set('title', '');
     this.render()
     this.listenTo(this.model, 'play', this.render)
  },

  setSong: function(song){
    this.model = song;  
    this.render();
  },

  render: function(){
    this.$el.parent().find('p').remove();

    return this.$el.attr('src', this.model ? this.model.get('url') : '')
    .after(($('<p>')).html('Now Playing: ' + this.model.get('artist')+ '    ' + this.model.get('title')))
      
      
  }

});
