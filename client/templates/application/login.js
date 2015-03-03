Template.login.events({
  'submit form' : function(e){
    e.preventDefault();

    var magic = $(e.target).find('[name=magicPhrase]').val();

    // check magic phrase against sever stored password, if passes, store in persistant session
    // else do nothing
    Meteor.call('confirmMagicPhrase', magic, function(e, r) {
      console.log('e', e);
      console.log('r', r);
      if (r === true){
        Session.setDefault('magicPhrase', magic);
        Router.go('/admin');
      }
    });
  }
});
