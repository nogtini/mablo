Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('admin', function(){
  return Admin.find({}, {fields: {
    magicPhrase : false
  }});
});
