//import * as hoodie from 'hoodie';

(function () {
    'use strict';

    const hoodie = new Hoodie();

    document.querySelector('.form').onsubmit = function(e) {
      e.preventDefault();

      let email = document.querySelector('[name=email]').value;
      let password = document.querySelector('[name=password]').value;

      hoodie.account.signIn(email, password)
        .done(function(){alert("welcome!")})
        .fail(function(){alert("doei!")});
    }

    console.log('jo!')
})();
