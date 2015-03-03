Meteor.methods({
  confirmMagicPhrase: function(magicPhrase) {
    //returns magicPhrase from the collection
    // consider using _.pluck as an alternative to .find & fields
    var magicQuery = Admin.find({}, {
      fields: {
        magicPhrase: magicPhrase
      }
    }).fetch()[0].magicPhrase;

    if (magicPhrase === magicQuery){
      return true;
    } else {
      return false;
    }
  }
});

//example call
// Meteor.call('confirmMagicPhrase', 1, function(e, r) {
//   console.log('e', e);
//   console.log('r', r);
// });
