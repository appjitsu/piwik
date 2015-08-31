Meteor.Piwik = {
    userInfo: null,

    trackThisPage: function () {
        Meteor.Piwik.trackPage(Router.current().route.path());
    },
    setUserInfo: function(uid) {
        var res = screen.width+'x'+screen.height;
        Meteor.Piwik.userInfo = {
            uid: uid,
            res: res,
            ua: navigator.userAgent,
            urlref: document.referrer
        }
    },
    trackPage: function (route) {
        var url = Meteor.absoluteUrl(route);
        url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
        Meteor.call("trackPage", url, Meteor.Piwik.userInfo);
    },
    trackEvent: function (route, event, options) {
        if (typeof options == 'undefined') options = {};
        var url = Meteor.absoluteUrl(route);
        url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
        Meteor.call("trackEvent", url, event, options, Meteor.Piwik.userInfo);
    },
    trackDownload: function (downloadRoute) {
        var url = Meteor.absoluteUrl(downloadRoute);
        url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
        Meteor.call("trackDownload", url, url, Meteor.Piwik.userInfo);
    },
    trackLink: function(linkRoute) {
        var url = Meteor.absoluteUrl(linkRoute);
        url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
        Meteor.call("trackLink", url, url, Meteor.Piwik.userInfo);
    },
    trackSearch: function(route,  search) {
        var url = Meteor.absoluteUrl(route);
        url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
        Meteor.call("trackLink", url, search, Meteor.Piwik.userInfo);
    },
    trackGoal: function(route,  idgoal) {
        var url = Meteor.absoluteUrl(route);
        url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
        Meteor.call("trackGoal", url, idgoal, Meteor.Piwik.userInfo);
    }
};
