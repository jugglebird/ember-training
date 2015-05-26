import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("tickets", { path: "/" }, function() {
    this.resource("ticket", { path: "/tickets/:id" });
  });
});

export default Router;
