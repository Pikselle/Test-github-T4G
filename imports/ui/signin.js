import './signin.html'
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


Template.t_signin.events({
  'submit .signinform'(e) {

    console.log("ACCOUNT DEBUT");
    e.preventDefault();

    const target = e.target;
    const emailVar= target.Adressemail.value;
    const passwordVar = target.Motdepasse.value;
    const usernameVar = target.username.value;
    console.log(usernameVar);
//  Meteor.signinWithPassword(username, password){
    Accounts.createUser({
      email:emailVar,
      password: passwordVar,
      username: usernameVar,
      profile: {
        datenaissance: "23/11/96",
        lastName: "Stewart",
        gender: "Male",
        active: "Yes"
      }
    });
    Session.set('templateAAfficher', 't_compte');
    console.log("ACCOUNT CREE");
  }
});
