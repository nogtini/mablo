Template.postPage.rendered = function(){
  $('pre').addClass('z-depth-1');
};

Template.postPage.helpers({
  admin: function(){
    //return admin information
    return Admin.findOne();
  }
});
