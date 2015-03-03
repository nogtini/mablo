Template.editPost.rendered = function(){
  $('.modal-trigger').leanModal();
  $('#post_title').focus();
};

Template.editPost.events({
  'click #deleteConfirm' : function(e){
    e.preventDefault();

    Meteor.call('postDelete', this._id, function(error, result){
      if (error){
        return alert(error.reason);
      }
      $('#modal1').closeModal();
      Router.go('/admin');
    });
  },
  'submit form' : function(e){
    e.preventDefault();

    var post = {
      title: $(e.target).find('[name=title]').val(),
      addMarkdown: $(e.target).find('[name=addMarkdown]').val()
    };

    Meteor.call('postUpdate', this._id, post, function(e, r){
      if (e)
        return alert(e.reason);
      Router.go('postPage',{_id: r._id});
    });

    // bad way to insert posts
    // post._id = Posts.insert(post);
  }
});
