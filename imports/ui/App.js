const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();
...

Template.mainContainer.helpers({
  ...,
  isUserLogged() {
    return isUserLogged();
  }
});
