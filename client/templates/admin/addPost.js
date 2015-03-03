Template.addPost.events({
  'submit form' : function(e){
    e.preventDefault();

    var post = {
      title: $(e.target).find('[name=title]').val(),
      addMarkdown: $(e.target).find('[name=addMarkdown]').val()
    };

    console.log('post');

    Meteor.call('postInsert', post, function(e, r){
      if (e)
        return alert(e.reason);
      Router.go('postPage',{_id: r._id});
    });

    // bad way to insert posts
    // post._id = Posts.insert(post);
  }
});
