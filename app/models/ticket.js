import DS from 'ember-data';

export default DS.Model.extend({
  summary: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string'),
  creator: DS.attr('string')
});
