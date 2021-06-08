import './messagerie.html';
import { bdd_messages } from '../api/messages.js';
import { ReactiveAggregate } from 'meteor/jcbernack:reactive-aggregate';
import { ReactiveDict } from 'meteor/reactive-dict';

// se lance à la création du template t_entrez_votre_recherche
Template.t_messagerie.onCreated(function bodyOnCreated() {
  // Sert à rendre l'affichage réactif, sans avoir besoin de recharger la page
  this.state = new ReactiveDict();
  // Je m'abonne à la base de données 'annonces'
  Meteor.subscribe('messages');
});

Template.t_messagerie.helpers({
  // Fonction qui récupère et qui envoie toutes les annonces qui sont dans la bdd
  tous_les_messages() {
    return bdd_messages.find({destinataire : Meteor.user().emails[0].address});

  },
});
