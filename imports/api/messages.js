import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { ReactiveAggregate } from 'meteor/jcbernack:reactive-aggregate';


// Créer la base de données annonces que l'on stocke dans la variable bdd_annonces
export const bdd_messages = new Mongo.Collection('messages');


if (Meteor.isServer) {
  // Permet de rendre disponible pour le client la base de données  bdd_annonces
  Meteor.publish('messages', function messagesPublication() {
    return bdd_messages.find({});
  });
}

Meteor.methods({
  // Pour le moment on a juste une méthode qui ajoute les 2 annonces à la bdd, pour tester
  'messages.envoyer'(destinataire, envoyeur, message) {
    bdd_messages.insert({
        destinataire : destinataire,
          envoyeur : envoyeur,
          message: message
    });
    console.log("MESSAGE AJOUTE");
  }
});
