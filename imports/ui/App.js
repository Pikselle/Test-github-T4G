const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();
...

Template.mainContainer.helpers({
  ...,
  isUserLogged() {
    return isUserLogged();
  }
});
Template.mainContainer.events({
  ...,
  'click .user'() {
    Meteor.logout();
  }
});
Template.mainContainer.helpers({
  ...,
  getUser() {
    return getUser();
  }
});
