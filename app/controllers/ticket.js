import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  prettyId: Ember.computed("model.prettyId", function() {
    return "#" + this.get("model.id");
  }),

  isClosed: Ember.computed("model.isClosed", function() {
    return this.get("model.isClosed");
  }),

  actions: {
    saveChanges: function() {
      this.get("model").save();
    },

    toggleStatus: function() {
      var ticket = this.get("model"),
          isClosed = this.get("model.isClosed");

      if (isClosed) {
        ticket.set("status","open");
      } else {
        ticket.set("status","closed");
      }
    }
  }
});
