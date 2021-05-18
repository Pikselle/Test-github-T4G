import './poster_une_annonce.html';

Template.t_ajouter_set.events({
  'submit .nouveau_set'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // variables qui stockent les infos du formulaire avec leur nom
    const target = event.target;
    const nom_du_set = target.nom_set.value;
    const lieu_du_set = target.lieu_set_select.value;
    const animateur = Meteor.user().services.google.email;

// Appel à une méthode qu'il va falloir créer : annonces.ajouter !
    Meteor.call('sets.ajouter', nom_du_set, lieu_du_set, animateur);

  }

})
