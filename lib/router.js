// Global configure
Router.configure({
  //404
  notFoundTemplate: 'notFound',
});

// 404
Router.onBeforeAction('dataNotFound', {
  only: 'postPage'
});

//===============================================================================================
//begin
//===============================================================================================
Router.route('/start', {
  name: 'start',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('admin');
  },
  onBeforeAction: function() {
    //after subscription, if an admin is found, render adminFound template
    if (Admin.find().count() !== 0) {
      this.render('adminFound');
    } else {
      this.next();
    }
  }
});

//login
Router.route('/login', {
  name: 'login'
});

//===============================================================================================
//PUBLIC
//===============================================================================================
//read routes
Router.route('/', {
  name: 'postsList',
  layoutTemplate: 'layout',
  //load spinner while waiting for global subscription return
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('posts'), Meteor.subscribe('admin')];
  },
  onBeforeAction: function() {
    //redirect to setup if no admins
    if (Admin.find().count() === 0) {
      this.redirect('/start');
    } else {
      this.next();
    }
  }
});

Router.route('/posts/:_id', {
  name: 'postPage',
  waitOn: function() {
    return Meteor.subscribe('admin');
  },
  data: function() {
    return Posts.findOne(this.params._id);
  }
});

//===============================================================================================
//PRIVATE
//===============================================================================================
//TO DO:
//..filter all /admin routes to check for session magicphrase, if not, redirect to login
//..add logout
//..use extend to add configuration options to admin user


// admin routes
Router.route('/admin', {
  onRun: function() {
    this.redirect('/admin/management');
  }
});
Router.route('/admin/management', {
  layoutTemplate: 'adminLayout',
  loadingTemplate: 'loading',
  name: 'management',
  waitOn: function() {
    return Meteor.subscribe('admin');
  },
  onRun: function() {
    if (Session.get('magicPhrase')) {
      return this.next();
    } else {
      this.redirect('/login');
    }
  }
});
Router.route('/admin/config', {
  layoutTemplate: 'adminLayout',
  loadingTemplate: 'loading',
  name: 'config',
  waitOn: function() {
    return Meteor.subscribe('admin');
  },
  onRun: function() {
    if (Session.get('magicPhrase')) {
      return this.next();
    } else {
      this.redirect('/login');
    }
  }
});
Router.route('/admin/add', {
  name: 'addPost',
  onRun: function() {
    if (Session.get('magicPhrase')) {
      return this.next();
    } else {
      this.redirect('/login');
    }
  }
});
Router.route('/admin/edit/:_id', {
  name: 'editPost',
  data: function() {
    return Posts.findOne(this.params._id);
  },
  onRun: function() {
    if (Session.get('magicPhrase')) {
      return this.next();
    } else {
      this.redirect('/login');
    }
  }
});
