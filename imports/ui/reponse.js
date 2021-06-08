import './reponse.html';

Template.t_post_annonce.events({
  'submit .formulaire_annonce'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // variables qui stockent les infos du formulaire avec leur nom
    const target = event.target;
    const votre_mail = mail.value;
    const reponse = reponse.value; 
// Appel à une méthode qu'il va falloir créer : annonces.ajouter !
Session.set('templateAAfficher', 'repondre_a_une_annonce');
  }

})
