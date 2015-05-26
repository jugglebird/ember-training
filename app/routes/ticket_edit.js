import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor('ticket').set("isEditing", true);
  },
  deactivate: function() {
    this.controllerFor('ticket').set("isEditing", false);
  }
});
