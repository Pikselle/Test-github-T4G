// On doit importer la BDD car on va l'utiliser dans la page aide
import { bdd_annonces } from '../api/annonces.js';

import { ReactiveAggregate } from 'meteor/jcbernack:reactive-aggregate';
import { ReactiveDict } from 'meteor/reactive-dict';

import './aide.html';


// se lance à la création du template t_aide
Template.t_aide.onCreated(function bodyOnCreated() {
  // Sert à rendre l'affichage réactif, sans avoir besoin de recharger la page
  this.state = new ReactiveDict();
  // Je m'abonne à la base de données 'annonces'
  Meteor.subscribe('annonces');
});


// Contient les helpers (toutes les fonctions utiles qu'on doit envoyer à l'html) du template t_aide
Template.t_aide.helpers({
  // Fonction qui récupère et qui envoie toutes les annonces qui sont dans la bdd
  toutes_les_annonces() {
    return bdd_annonces.find({});
  },
})

// Contient les événements de t_aide
Template.t_aide.events({
    // Quand on clique sur le bouton init, on lance la méthode annonces.initialiser
    'click .init'(event){
       Meteor.call('annonces.initialiser');
   },
 })
