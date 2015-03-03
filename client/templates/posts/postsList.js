Template.postsList.helpers({
  posts: function() {
    //return cursor for postItem iteration
    return Posts.find();
  },
  admin: function(){
    //return admin information
    return Admin.findOne();
  }
});
