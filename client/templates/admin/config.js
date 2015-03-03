Template.config.events({
  'submit form' : function(e){
    e.preventDefault();

    var config = {
      blogPrimaryImage : $(e.target).find('[name=blogPrimaryImage]').val(),
      blogFewWords: $(e.target).find('[name=blogFewWords]').val(),

      personalPhotoUrl: $(e.target).find('[name=personalPhotoUrl]').val(),
      fewWordsSignoff: $(e.target).find('[name=fewWordsSignoff]').val(),

      facebookProfileUrl: $(e.target).find('[name=facebookProfileUrl]').val(),
      twitterProfileUrl: $(e.target).find('[name=twitterProfileUrl]').val(),
      dribbbleProfileUrl: $(e.target).find('[name=dribbbleProfileUrl]').val(),
      githubProfileUrl: $(e.target).find('[name=githubProfileUrl]').val(),
    };

    Meteor.call('adminExtend', config, function(error, result){
      if (error)
        return alert(error.reason);
      Router.go('/admin');
    });

    // bad way to insert posts
    // post._id = Posts.insert(post);
  }
});

Template.config.helpers({
  admin: function(){
    //return admin information
    return Admin.findOne();
  }
});
