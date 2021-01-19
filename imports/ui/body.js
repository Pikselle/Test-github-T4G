import './body.html';
import './presentation_projet.js';


Session.set('templateAAfficher', '');


Template.body.helpers({
    currentTrucaffiche: function(truc){
      return Session.get('templateAAfficher');
    },
});

Template.body.events({
    'click .presentation'(event){
     Session.set('templateAAfficher', 't_presentation');
    }
});
