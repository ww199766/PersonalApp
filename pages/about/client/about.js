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
    List.insert({name:name,des:des});
    //People.insert({name,birthyear})
  }
})