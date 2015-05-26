import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    saveChanges: function() {
      this.get("model").save();
    }
  }
});
