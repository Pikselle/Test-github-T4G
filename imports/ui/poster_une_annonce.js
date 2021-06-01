import './poster_une_annonce.html';

Template.t_post_annonce.events({
  'submit .formulaire_annonce'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // variables qui stockent les infos du formulaire avec leur nom
    const target = event.target;
    const nom_de_annonce = target.nom_de_l_annonce.value;
    const categorie_de_l_annonce = target.categorie.value;
    const qualifications_requises = target.qualifications.value;
    const description_de_l_annonce = target.description.value;
    const utilisateur  = "michel";
    const date_post_annonce ="18 juin";
// Appel à une méthode qu'il va falloir créer : annonces.ajouter !
    Meteor.call('annonces.ajouter', nom_de_annonce, categorie_de_l_annonce, qualifications_requises, description_de_l_annonce, utilisateur, date_post_annonce);

  }

})
