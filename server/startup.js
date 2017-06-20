//import { Mongo } from 'meteor/mongo'

Meteor.startup(() => {
  // code to run on server at startup
  List.remove({});  // clear the database
  List.insert({name:'a',des:'scdsf'});
  List.insert({name:'Caitlin',des:'sdfdss'});
});
