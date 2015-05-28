import Ember from 'ember';

export default Ember.ArrayController.extend({
  filter: "all",
  sortProperties: ["created_at"],
  sortAscending: false,

  meta: Ember.computed('store', function() {
    return this.get('store').metadataFor('ticket');
  }),

  filteredTickets: Ember.computed('filter', 'arrangedContent', function() {
    var filter = this.get('filter'),
        tickets = this.get('arrangedContent');

    if (filter !== 'all') {
      return tickets.filter(function(ticket) {
        return ticket.get("status") === filter;
      });
    } else {
      return tickets;
    }
  }),

  actions: {
    filterBy: function(filter) {
      this.set('filter', filter);
    }
  }
});
