PlayersList = new Mongo.Collection('players')

if(Meteor.isClient) {
	Template.leaderboard.helpers( {
			'player': function() {
				return PlayersList.find()
				},
			'playerCount': function() {
				return PlayersList.find().count()
				},
			'someHelperFunction': function() {
				return "someHelperFunction\n\n"
				},
			}
		);
	Template.leaderboard.events( {
			'click .player': function() {
				this._id.focus();				
				console.log("You clicked a player li element");		
				},
			'dblclick .player': function() {
				console.log("You doubleClicked a player li element");		
				},	
			'focus .player': function() {
				console.log("You focused a player li element");		
				},
			'blur .player': function() {
				console.log("You blurred a player li element");		
				},
			'mouseover .player': function() {
				console.log("You mouseovered a player li element");
	
				},	
			'change .player': function() {
				console.log("You changed a player li element");		
				},																		
			}
		);
	}
	
if(Meteor.isServer) {
	}
