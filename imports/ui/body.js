import './body.html';
import './presentation_projet.js';
import './poster_une_annonce.js';
import './qui_sommes_nous.js';


Session.set('templateAAfficher', '');


Template.body.helpers({
    currentTrucaffiche: function(truc){
      console.log("oui");
      return Session.get('templateAAfficher');
    },
});

Template.body.events({
    'click .presentation'(event){
     Session.set('templateAAfficher', 't_presentation');
   },
   'click .post'(event){
    Session.set('templateAAfficher', 't_post_annonce');
  },
  'click .qui'(event){
   Session.set('templateAAfficher', 't_qui_sommes_nous');
  }
});
