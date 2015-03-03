Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert: function(postAttributes){
    var post = _.extend(postAttributes,{
      dateCreated : new Date().toDateString()
    });
    var postId = Posts.insert(post);
    return {
      _id: postId
    };
  },
  postUpdate: function(id, post){
    Posts.update(Posts.findOne(id), {$set: post});
    var id = Posts.findOne(id)._id;
    return {
      _id: id
    };
  },
  postDelete: function(postId){
    Posts.remove(postId);
  },
});
