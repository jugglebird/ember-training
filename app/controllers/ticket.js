import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  prettyId: function() {
    console.log(this.get("model.id"));
    return "#" + this.get("model.id");
  }.property("model.prettyId"),

  actions: {
    saveChanges: function() {
      this.get("model").save();
    }
  }
});
