import Ember from 'ember';
import Ticket from 'helpdesk/models/ticket';

export default Ember.Controller.extend({
  statuses: Ticket.STATUSES,

  actions: {
    createTicket: function() {
      var self = this,
          fields = this.get("fields");

      if (Ticket.valid(fields)) {
        var ticket = this.store.createRecord("ticket", fields);
        ticket.save().then(function() {
          self.transitionToRoute('ticket', ticket);
        });
      } else {
        this.set('showError', true);
      }
    },

    cancel: function() {
      this.transitionToRoute("tickets");
    }
  }
});
