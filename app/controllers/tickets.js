import Ember from 'ember';

export default Ember.ArrayController.extend({
  filter: 'all',
  sortProperties: ["created_at"],
  sortAscending: false,

  allTicketsCount: 20,

  filteredTickets: function() {
    var filter = this.get('filter'),
        tickets = this.get('arrangedContent');

    if (filter !== 'all') {
      return tickets.filter(function(ticket) {
        return ticket.get("status") === filter;
      });
    } else {
      return tickets;
    }
  }.property('filter', 'arrangedContent'),

  actions: {
    filterBy: function(filter) {
      this.set('filter', filter);
    }
  }
});
