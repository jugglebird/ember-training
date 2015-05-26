import Ember from 'ember';

export default Ember.Controller.extend({
  statuses: ["open", "closed"],

  actions: {
    saveChanges: function() {
      var self = this;
      this.get("model").save().then(function() {
        self.transitionToRoute("ticket");
      });
    },

    cancel: function() {
      this.get("model").rollback();
      this.transitionToRoute("ticket");
    }
  }
});
