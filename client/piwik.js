Meteor.Piwik = {
  session_uid: null,
  setUserId: function (uid) {
    Meteor.Piwik.session_uid = uid;
  },
  clearUserId: function (uid) {
    Meteor.Piwik.session_uid = null;
  },
  trackThisPage: function () {
    var res = screen.width+'x'+screen.height;
    Meteor.Piwik.trackPage(Router.current().route.path(), null, navigator.userAgent, res);
  },
  trackPage: function (route) {
    var url = Meteor.absoluteUrl(route);
    var res = screen.width+'x'+screen.height;
    url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
    Meteor.call("trackPage", url, Meteor.Piwik.session_uid, navigator.userAgent, res);
  },
  trackEvent: function (route, event, options) {
    if (typeof options == 'undefined') options = {};
    var url = Meteor.absoluteUrl(route);
    var res = screen.width+'x'+screen.height;
    url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
    Meteor.call("trackEvent", url, navigator.userAgent, res, event, options, Meteor.Piwik.session_uid);
  }
};
