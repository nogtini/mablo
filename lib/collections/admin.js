Admin = new Mongo.Collection('admin');

Meteor.methods({
  createMaster: function(formAttributes){
    //Allow create admin only if DB is empty
    if (Admin.find().count() === 0){
      var adminId = Admin.insert(formAttributes);
      return {
        _id: adminId
      };
    } else{
      return 0;
    }
  },
  adminExtend: function(config){
    Admin.update(Admin.findOne()._id, {$set: config});
  }

});
