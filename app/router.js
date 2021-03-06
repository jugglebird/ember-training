import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("tickets", { path: "/" }, function() {
    this.route("new", { path: "/tickets/new" });
    this.resource("ticket", { path: "/tickets/:id" }, function() {
      this.route("edit", { path: "/edit" });
    });
  });
});

export default Router;
