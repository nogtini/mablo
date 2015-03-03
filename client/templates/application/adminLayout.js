Template.adminLayout.rendered = function(){
  var pathname = window.location.pathname;
  if (pathname ==='/admin/config'){
    console.log(pathname);
    $("#config a").addClass("active");
  } else if (pathname ==='/admin/management'){
    $('#management a').addClass('active');
  }

  $('ul.tabs').tabs();
};

Template.adminLayout.events({
  'click #management' : function(e) {
    Router.go('/admin/management');
  },
  'click #config' : function(e){
    Router.go('/admin/config');
  }
});
