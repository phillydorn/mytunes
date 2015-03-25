// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>Play Count: <%= playCount %></td>'),

  events: {
    'click': function() {
        console.log(this.model)
      this.model.enqueue(this.model);
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
