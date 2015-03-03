Template.start.events({
  'submit form' : function(e){
    e.preventDefault();

    var admin = {
      blogTitle: $(e.target).find('[name=blogTitle]').val(),
      fullName: $(e.target).find('[name=fullName]').val(),
      magicPhrase: $(e.target).find('[name=magicPhrase]').val(),
    };

    Meteor.call('createMaster', admin, function(error, result){
      if (error)
        return alert(error.reason);
      //set magicphrase inside persistent session and redirect to admin page
      Session.setDefault('magicPhrase', admin.magicPhrase);
      Router.go('/admin', {_id: result._id});
    });
  }
});
