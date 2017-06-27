const list =
  [
    {name:"Roast A" , des: "a,b,c,d" },
    {name:"Fried E" , des: "e,d,g" }
  ];

Template.about.helpers(
 {
   list
 })

 Template.about.events({
  'click #addRecipe'(elt,instance) {
    const name = instance.$('#name').val();
    const des = instance.$('#description').val()
    console.log('adding '+name+' des '+des);
    instance.$('#name').val("");
    instance.$('#description').val('');
    Meteor.call('popular.insert',{name:name,des:des,owner:Meteor.userId()},(err,res)=>{console.dir([err,res]);});
    //People.insert({name,birthyear})
  }
})
