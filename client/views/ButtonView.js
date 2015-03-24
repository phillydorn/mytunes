var ButtonView = Backbone.View.extend({
  tagName: "div",

  initialize: function(){
    this.render();
  },
  events:{ 'click':
    function(){
      this.trigger('removeSongClick');
    }
  },
  render: function(){
    this.$el.append(
      '<button class="removeSong">Remove Song</button>'
    );
  }
});
