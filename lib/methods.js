Meteor.methods({
  'popular.insert': function(recipe){
    List.insert(recipe);
  },

  'popular.remove': function(recipe){
    console.log("userid="+this.userId);
    console.log('recipe.owner='+recipe.owner);
    List.remove(recipe._id);
  },

});
