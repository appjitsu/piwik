var PiwikTracker = Npm.require('piwik-tracker');
if (typeof(Meteor.settings.piwik) != 'undefined') {
	var piwik = new PiwikTracker(Meteor.settings.piwik.site_id, Meteor.settings.piwik.url);
} else {
	console.log("Pikik settings missing. Add settings to your settings.json file.");
}

Meteor.methods({
  trackPage: function (url) {
    piwik.track(url);
  },
  trackEvent: function (url, event, options) {
	piwik.track({
		url: url,
		e_c: event.name,
		e_a: event.action,
		e_n: event.name,
		e_v: event.value,
		cvar: JSON.stringify(options)
	});
  }
});
