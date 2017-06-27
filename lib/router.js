Router.configure({
	layoutTemplate: 'layout2',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('else');
Router.route('contact');
Router.route('chat');
Router.route('about');
Router.route('popular')

Router.route('ratings');
Router.route('cuisines')

Router.route('sponsors')
Router.route('mySearchResult')
