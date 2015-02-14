Meteor.Piwik = {
	trackPage: function(route){
		var url = Meteor.absoluteUrl(route);
		url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
		Meteor.call("trackPage", url);
	},
	trackEvent: function(route, event, options){
		var url = Meteor.absoluteUrl(route);
		url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
		Meteor.call("trackEvent", url, event, options);
	}
};