Meteor.methods({
  'popular.insert': function(recipe){
    List.insert(recipe);
  },

  'popular.remove': function(recipe){
    console.log("userid="+this.userId);
    console.log('recipe.owner='+recipe.owner);
    List.remove(recipe._id);
  },

  'popular.update': function(recipe, name, des){
    console.log(name)
    console.log(des)
    List.update(recipe._id, {name: name, des: des})
  }

});
