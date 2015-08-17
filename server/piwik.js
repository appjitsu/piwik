var PiwikTracker = Npm.require('piwik-tracker');
if (typeof(Meteor.settings.piwik) != 'undefined') {
  var piwik = new PiwikTracker(Meteor.settings.piwik.site_id, Meteor.settings.piwik.url);
} else {
  console.log("Piwik settings missing. Add settings to your settings.json file.");
}

Meteor.methods({
  trackPage: function (url, uid, ua, res) {
    check(url,  String);
    check(ua,  String);
    check(res,  String);
    check(uid, Match.OneOf(String,null));
    if (!url) throw new Meteor.Error("Invalid Arguments");
    var trackingVars = {
      url: url,
      ua: ua,
      res: res,
      token_auth: Meteor.settings.piwik.token,
      cip: this.connection.clientAddress
    };
    if (typeof uid != 'undefined') trackingVars.uid = uid;
    piwik.track(trackingVars);
  },
  trackEvent: function (url, ua, res, event, options, uid) {
    check(url, String);
    check(ua,  String);
    check(res,  String);
    check(event, {
        category: String,
        action: String,
        name: String,
        value: String,
        cvar: Object
    });
    check(options, Object);
    check(uid, Match.OneOf(String,null));

    if (!url || !event) throw new Meteor.Error("Invalid Arguments");
    console.log('options', options);
    var trackingVars = {
      url: url,
      ua: ua,
      res: res,
      token_auth: Meteor.settings.piwik.token,
      cip: this.connection.clientAddress,
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
