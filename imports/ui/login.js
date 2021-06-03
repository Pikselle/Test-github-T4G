import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './login.html';

Template.t_login.events({
  'submit .loginform'(e) {
    e.preventDefault();

    const target = e.target;

    const username = target.Adressemail.value;
    const password = target.Motdepasse.value;

    Meteor.loginWithPassword(username, password, function (err) {
    if (!err) {
        console.log('You see this because the authentication process was a success')
    } else {
        console.log(err);
    }
  });
}
});
