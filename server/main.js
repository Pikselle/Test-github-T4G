import  '../imports/api/messages.js';
import  '../imports/api/annonce.js';
import { Meteor } from 'meteor/meteor';

  // code to run on server at startup

import { Accounts } from 'meteor/accounts-base';



const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

});
