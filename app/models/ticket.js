import Ember from 'ember';
import DS from 'ember-data';

var Ticket = DS.Model.extend({
  summary: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string', {defaultValue: "open"}),
  creator: DS.attr('string'),
  avatar_url: DS.attr('string'),
  created_at: DS.attr('date'),

  isClosed: Ember.computed("status", function() {
    return this.get("status") === "closed";
  })
});

Ticket.reopenClass({
  STATUSES: ["open", "closed"],

  valid: function(fields) {
    return fields.summary && fields.creator;
  }
});

export default Ticket;
