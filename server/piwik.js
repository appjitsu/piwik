var PiwikTracker = Npm.require('piwik-tracker');
var piwik = new PiwikTracker(Meteor.Settings.piwik.site_id, Meteor.Settings.piwik.url);

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