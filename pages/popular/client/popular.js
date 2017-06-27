Template.popular.helpers({
  list: function(){
    return List.find({});
  }
})

Template.teamrow.events({
  'click button'(elt, instance){
      Meteor.call('popular.remove', this.r);
  }
})

Template.teamrow.helpers({
  owner() {return (Meteor.userId()==this.r.owner||!this.r.owner)}
})
