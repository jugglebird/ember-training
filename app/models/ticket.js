import DS from 'ember-data';

var Ticket = DS.Model.extend({
  summary: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string'),
  creator: DS.attr('string')
});

Ticket.reopenClass({
  STATUSES: ["open", "closed"],

  valid: function(fields) {
    return fields.summary && fields.creator;
  }
});

export default Ticket;
