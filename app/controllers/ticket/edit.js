import Ember from 'ember';
import Ticket from 'helpdesk/models/ticket';

export default Ember.Controller.extend({
  statuses: Ticket.STATUSES,

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
