import './poster_une_annonce.html';

Template.t_post_annonce.events({
  'submit .nouveau_set'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // variables qui stockent les infos du formulaire avec leur nom
    const target = event.target;
    const nom_du_set = target.nom_de_l_annonce;
    const categorie_de_l_annonce = target.categorie;
    const qualifications_requises = target.qualifications;
    const decription_de_l_annonce = target.description;

// Appel à une méthode qu'il va falloir créer : annonces.ajouter !
    Meteor.call('sets.ajouter', non_de_l_annonce, categorie, qualifications, description);

  }

})
