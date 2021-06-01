import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { ReactiveAggregate } from 'meteor/jcbernack:reactive-aggregate';


// Créer la base de données annonces que l'on stocke dans la variable bdd_annonces
export const bdd_annonces = new Mongo.Collection('annonces');


// Je crée 2 objets de type annonce
// Un objet annonce doit avoir 3 informations sur lui :
// email_employeur, titre_annonce, contenu
const annonce1 = {email_employeur:"maureen.metge@magicmakers.fr",titre_annonce:"CHERCHE QUELQU'UN POUR GARDER MON CHIEN",contenu:"Bonjour je suis Mau et je pars en vacances 2 jours, gardez mon chien SVP"};
const annonce2 = {email_employeur:"joe.ging@magicmakers.fr",titre_annonce:"Need 1 tank pour le raid",contenu:"Wsh oné 1 gild tré fo on need 1 tank pour natria lol mdr vi1"};
const annonce3 = {email_employeur: "aurelienarjk@gmail.com", titre_annonce:"Besoin de répérer ma cote cassée",contenu:"jme suis pris un coup dans les cotes j'ai mal j'arrive plus a respirer ", date:" 16 avril 2004 , 19h30 ",trancheage:"aucune", contact:"0670225944"};


// Si le code est lancé sur le serveur, on publie la BDD car c'est lui qui va la gérer
if (Meteor.isServer) {
  // Permet de rendre disponible pour le client la base de données  bdd_annonces
  Meteor.publish('annonces', function annoncesPublication() {
    return bdd_annonces.find({});
  });
}


// Ce sont les fonctions que les fichiers côté client, dans 'ui' peuvent utiliser pour modifier la bdd
Meteor.methods({
  // Pour le moment on a juste une méthode qui ajoute les 2 annonces à la bdd, pour tester
  'annonces.initialiser'() {
    // Sert à effacer toutes les annonces
     bdd_annonces.remove({});
    // Sert à ajouter les objets créés plus haut dans la bdd
    //bdd_annonces.insert(annonce1);
    //bdd_annonces.insert(annonce2);
    bdd_annonces.insert(annonce3);

  },


  'annonces.ajouter'(nom_du_set, lieu_du_set, animateur)
    {
    bdd_annonces.insert({
          nom_annonce : nom_de_l_annonce,
          nom_lieu : lieu_du_set,
          email_animateur_responsable: animateur,
          statut : "occupe",
    });
    },
});
