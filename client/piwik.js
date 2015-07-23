Meteor.Piwik = {
  session_uid: null,
  setUserId: function (uid) {
    Meteor.Piwik.session_uid = uid;
  },
  clearUserId: function (uid) {
    Meteor.Piwik.session_uid = null;
  },
  trackThisPage: function () {
    Meteor.Piwik.trackPage(Router.current().route.path());
  },
  trackPage: function (route) {
    var url = Meteor.absoluteUrl(route);
    url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
    Meteor.call("trackPage", url, Meteor.Piwik.session_uid);
  },
  trackEvent: function (route, event, options) {
    if (typeof options == 'undefined') options = {};
    var url = Meteor.absoluteUrl(route);
    url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
    Meteor.call("trackEvent", url, event, options, Meteor.Piwik.session_uid);
  }
};