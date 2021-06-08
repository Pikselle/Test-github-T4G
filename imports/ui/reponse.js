import './reponse.html';

Template.repondre_a_une_annonce.events({
  'submit .formulaire_message'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // variables qui stockent les infos du formulaire avec leur nom
    const target = event.target;
    const votre_mail = target.mail.value;
    const reponse = target.reponse.value;
    const contact = Session.get('destinataire');
// Appel à une méthode qu'il va falloir créer : annonces.ajouter !
  Meteor.call('messages.envoyer', contact, votre_mail, reponse);
  Session.set('templateAAfficher', 't_entrez_votre_recherche');
  }

})
