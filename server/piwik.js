var PiwikTracker = Npm.require('piwik-tracker');
if (typeof(Meteor.settings.piwik) != 'undefined') {
    var piwik = new PiwikTracker(Meteor.settings.piwik.site_id, Meteor.settings.piwik.url);
} else {
    console.log("Piwik settings missing. Add settings to your settings.json file.");
}

Meteor.methods({
    trackPage: function (url, userInfo) {
        check(url,  String);
        check(userInfo,  Match.OneOf(null, {
            uid: Match.OneOf(null,String),
            res: String,
            ua: String,
            urlref: String
        }));
        if (!url) throw new Meteor.Error("Invalid Arguments");
        var trackingVars = {
            url: url,
            token_auth: Meteor.settings.piwik.token,
            cip: this.connection.clientAddress
        };
        if(_.isObject(userInfo)) {
            trackingVars.uid = userInfo.uid;
            trackingVars.res = userInfo.res;
            trackingVars.ua = userInfo.ua;
            trackingVars.urlref = userInfo.urlref;
        }
        Object.keys(trackingVars).forEach(function(k) {
            if (!trackingVars[k]) {
                delete trackingVars[k];
            }
        });
        piwik.track(trackingVars);
    },
    trackDownload: function(url, download, userInfo) {
        check(url,  String);
        check(download,  String);
        check(userInfo,  Match.OneOf(null, {
            uid: Match.OneOf(null,String),
            res: String,
            ua: String,
            urlref: String
        }));
        if (!url || !download) throw new Meteor.Error("Invalid Arguments");
        var trackingVars = {
            url: url,
            download: download,
            token_auth: Meteor.settings.piwik.token,
            cip: this.connection.clientAddress
        };
        if(_.isObject(userInfo)) {
            trackingVars.uid = userInfo.uid;
            trackingVars.res = userInfo.res;
            trackingVars.ua = userInfo.ua;
            trackingVars.urlref = userInfo.urlref;
        }
        Object.keys(trackingVars).forEach(function(k) {
            if (!trackingVars[k]) {
                delete trackingVars[k];
            }
        });
        piwik.track(trackingVars);
    },
    trackLink: function(url, link, userInfo) {
        check(url,  String);
        check(link,  String);
        check(userInfo,  Match.OneOf(null, {
            uid: Match.OneOf(null,String),
            res: String,
            ua: String,
            urlref: String
        }));
        if (!url || !link) throw new Meteor.Error("Invalid Arguments");
        var trackingVars = {
            url: url,
            link: link,
            token_auth: Meteor.settings.piwik.token,
            cip: this.connection.clientAddress
        };
        if(_.isObject(userInfo)) {
            trackingVars.uid = userInfo.uid;
            trackingVars.res = userInfo.res;
            trackingVars.ua = userInfo.ua;
            trackingVars.urlref = userInfo.urlref;
        }
        Object.keys(trackingVars).forEach(function(k) {
            if (!trackingVars[k]) {
                delete trackingVars[k];
            }
        });
        piwik.track(trackingVars);
    },
    trackSearch: function(url, search, userInfo) {
        check(url,  String);
        check(search,  {
            search: String,
            search_cat: String,
            search_count: String
        });
        check(userInfo,  Match.OneOf(null, {
            uid: Match.OneOf(null,String),
            res: String,
            ua: String,
            urlref: String
        }));

        if (!url || !search) throw new Meteor.Error("Invalid Arguments");
        var trackingVars = {
            url: url,
            search: search.search,
            search_cat: search.search_cat,
            search_count: search.search_count,
            token_auth: Meteor.settings.piwik.token,
            cip: this.connection.clientAddress
        };
        if(_.isObject(userInfo)) {
            trackingVars.uid = userInfo.uid;
            trackingVars.res = userInfo.res;
            trackingVars.ua = userInfo.ua;
            trackingVars.urlref = userInfo.urlref;
        }
        Object.keys(trackingVars).forEach(function(k) {
            if (!trackingVars[k]) {
                delete trackingVars[k];
            }
        });
        piwik.track(trackingVars);
    },
    trackGoal: function(url, goalId, userInfo) {
        check(url,  String);
        check(goalId, String);
        check(userInfo,  Match.OneOf(null, {
            uid: Match.OneOf(null,String),
            res: String,
            ua: String,
            urlref: String
        }));
        if (!url || !goalId) throw new Meteor.Error("Invalid Arguments");
        var trackingVars = {
            url: url,
            goalId: goalId,
            token_auth: Meteor.settings.piwik.token,
            cip: this.connection.clientAddress
        };
        if(_.isObject(userInfo)) {
            trackingVars.uid = userInfo.uid;
            trackingVars.res = userInfo.res;
            trackingVars.ua = userInfo.ua;
            trackingVars.urlref = userInfo.urlref;
        }
        Object.keys(trackingVars).forEach(function(k) {
            if (!trackingVars[k]) {
                delete trackingVars[k];
            }
        });
        piwik.track(trackingVars);
    },
    trackEvent: function (url, event, options, userInfo) {
        check(url, String);
        check(userInfo,  Match.OneOf(null, {
            uid: Match.OneOf(null,String),
            res: String,
            ua: String,
            urlref: String
        }));
        check(event, {
            category: String,
            action: String,
            name: String,
            value: String,
            cvar: Object
        });
        check(options, Object);

        if (!url || !event) throw new Meteor.Error("Invalid Arguments");
        var trackingVars = {
            url: url,
            token_auth: Meteor.settings.piwik.token,
            cip: this.connection.clientAddress,
            e_c: event.category,
            e_a: event.action,
            e_n: event.name,
            e_v: event.value,
            cvar: JSON.stringify(options)
        };
        if(_.isObject(userInfo)) {
            trackingVars.uid = userInfo.uid;
            trackingVars.res = userInfo.res;
            trackingVars.ua = userInfo.ua;
            trackingVars.urlref = userInfo.urlref;
        }
        Object.keys(trackingVars).forEach(function(k) {
            if (!trackingVars[k]) {
                delete trackingVars[k];
            }
        });
        piwik.track(trackingVars);
    }
});
