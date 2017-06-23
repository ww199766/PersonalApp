Template.popular.helpers({
  list: function(){
    return List.find({});
  }
})

Template.popular.events({
  'click button'(elt, instance){
      List.remove(this.r._id)
  }
})
