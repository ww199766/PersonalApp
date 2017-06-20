//import { Mongo } from 'meteor/mongo'

Meteor.startup(() => {
  // code to run on server at startup
  List.remove({});  // clear the database
  List.insert({name:'a',des:['a','c','d']});
  List.insert({name:'Caitlin',des:['e','f','g']});
  console.log(List.find())
});
