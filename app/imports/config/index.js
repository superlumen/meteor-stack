import {Accounts} from 'meteor/std:accounts-semantic'

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
});
