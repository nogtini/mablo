Template.management.helpers({
  posts: function() {
    //return cursor for postItem iteration
    return Posts.find();
  }
});
