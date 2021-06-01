import './signin.html'
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


Template.t_signin.events({
  'submit .signin-form'(e) {
    e.preventDefault();

    const target = e.target;
    const emailVar= target.username.value;

    const passwordVar = target.password.value;
//  Meteor.signinWithPassword(username, password){
    Accounts.createUser({
      email:emailVar,
      password: passwordVar
    });

  }
});
