import './body.html';
import './presentation_projet.js';
import './poster_une_annonce.js';
import './infos_pratique.js';
import './qui_sommes_nous.js';
import './entrez_votre_recherche.js';
import './categories.js';
import './aide.js';
import './legislation_travail_mineurs.js';
import './informations_du_compte.js';

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
   'click .post_annonce'(event){

    Session.set('templateAAfficher', 't_post_annonce');
  },
  'click .infos_pratique'(event){

   Session.set('templateAAfficher', 't_infos');
 },
 'click .quisommesnous'(event){

  Session.set('templateAAfficher', 't_qui_sommes_nous');
 },
 'click .entrezvotrerecherche'(event){

  Session.set('templateAAfficher', 't_entrez_votre_recherche');
  },
  'click .categories'(event){

   Session.set('templateAAfficher', 't_categories');
   },
   'click .aide'(event){

    Session.set('templateAAfficher', 't_aide');
    },
    'click .infocompte'(event){

     Session.set('templateAAfficher', 't_infosducompte');
     },
     'click .legislation'(event){

      Session.set('templateAAfficher', 't_legislation');
      },

});
