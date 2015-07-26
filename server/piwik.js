var PiwikTracker = Npm.require('piwik-tracker');
if (typeof(Meteor.settings.piwik) != 'undefined') {
  var piwik = new PiwikTracker(Meteor.settings.piwik.site_id, Meteor.settings.piwik.url);
} else {
  console.log("Piwik settings missing. Add settings to your settings.json file.");
}

Meteor.methods({
  trackPage: function (url, uid) {
    if (!url) throw new Meteor.Error("Invalid Arguments");
    var trackingVars = {
      url: url
    };
    if (typeof uid != 'undefined') trackingVars.uid = uid;
    piwik.track(trackingVars);
  },
  trackEvent: function (url, event, options, uid) {
    if (!url || !event) throw new Meteor.Error("Invalid Arguments");
    console.log('options', options);
    var trackingVars = {
      url: url,
      e_c: event.category,
      e_a: event.action,
      e_n: event.name,
      e_v: event.value,
      cvar: JSON.stringify(options)
    };
    if (typeof uid != 'undefined') trackingVars.uid = uid;
    piwik.track(trackingVars);
  }
});
