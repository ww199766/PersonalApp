//import { Mongo } from 'meteor/mongo'

Meteor.startup(() => {
  //owner_id = Meteor.userId();
  // code to run on server at startup
//  List.remove({});  // clear the database
  //List.insert({name:'a',des:'scdsf'});
  List.insert({name:new Date(),des:'updates'});
});
