import './signin.html'
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


Template.t_signin.events({
  'submit .signin-form'(e) {
    e.preventDefault();

    const target = e.target;
    const username = target.username.value;
    const datedenaissance = target.datedenaissance.value;
    const password = target.password.value;

    Meteor.signinWithPassword(username,datedenaissance, password);
  }
});
