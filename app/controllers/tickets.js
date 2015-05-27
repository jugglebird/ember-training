import Ember from 'ember';

export default Ember.ArrayController.extend({
  filter: 'all',
  sortProperties: ["created_at"],
  sortAscending: false,

  meta: function() {
    return this.get('store').metadataFor('ticket');
  }.property('store'),

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
