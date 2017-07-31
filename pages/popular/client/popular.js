Template.popular.helpers({
  list: function(){
    return List.find({});
  }

})
Template.teamrow.onCreated(
  function(){
      this.edit = new ReactiveVar(false);
  }
)

Template.teamrow.helpers({
  edit: function(){
    return Template.instance().edit.get();
  }
})

Template.popular.onCreated(
  function(){
    Meteor.subscribe('list');
  }
)

Template.teamrow.events({
  'click .glyphicon'(elt, instance){
      Meteor.call('popular.remove', this.r);
  },

  'click #edit'(elt, instance){
    instance.edit.set(true);
    console.dir(this)

  },

  'click #update'(elt, instance){
      name = instance.$('#editName').val();
      description = instance.$('#editDescription').val();
      Meteor.apply('popular.update', [this.r, name, description]);
      instance.edit.set(false);
  }
})

Template.teamrow.helpers({
  owner() {return (Meteor.userId()==this.r.owner||!this.r.owner)}
})
