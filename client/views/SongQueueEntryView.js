// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  //title
  //name
  //url
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function(){
    this.render();
  },
  render: function(){
    return this.$el.html(this.template(this.attributes));
  }
});
