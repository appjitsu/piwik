# davidsichau:piwik
Meteor package that allows you to use Piwik Analytics with your application.

An improved fork of https://github.com/appjitsu/piwik/. Thanks for the great work.

This package uses piwik-tracker (https://www.npmjs.com/package/piwik-tracker).

#### Installation

```
meteor add davidsichau:piwik
```

#### Setup

In your settings.json file, add:

```
"piwik": {
    "url": "http://your_piwik_server_url/piwik.php",
    "site_id": 0,
    "token": <YOUR SECRET PIWIK TOKEN>
}
```

#### Usage

On the client serveral helpers functions are provided to track different statistics.

Before any tracking you should call the helper `setUserInfo` with the current UserId or with null.
This helper collects data like the user Agent the referral and the resolution of the users device.

```
Meteor.startup(function() {
    return Tracker.autorun(function() {
        var userId;
        userId = Meteor.userId();
        Meteor.Piwik.setUserInfo(userId);
    });
});
```

To track a specific site use the following method:
```
// to track page in your router (onRun hook)
Meteor.Piwik.trackPage(Router.current().route.path(this));
```

To track a download use:
```
Meteor.Piwik.trackDownload(downloadUrl);
```

To track a external Link use:
```
Meteor.Piwik.trackLink(linkUrl);
```

To track a search use:
```
Meteor.Piwik.trackSearch(url, {
    search: 'my cool keyword', // the search term
    search_cat: 'page search', //the category of the search
    search_count: '42' //the number of search results

});
```

To track a goal use:
```
Meteor.Piwik.trackGoal(url, goalId)
```



```
// track an event
Meteor.Piwik.trackEvent(
	Router.current().route.path(this), // the route: ie - /home, not the full url
	{
		category: "Page or Section",
		action: "Viewed|Completed|Submitted|Etc",
		name: "Name of the Event - Submitted Contact Form",
		value: "Optional Value - like how many rows saved, etc."
	},
	{// any number of extra optional values.
	 // pass and empty hash if you dont want to pass optional values
		"1": ["Name", "Value", "page|visit"],
		"2": ["Name", "Value", "page|visit"],
		"3": ["Name", "Value", "page|visit"],
		"4": ["Name", "Value", "page|visit"],
		"5": ["Name", "Value", "page|visit"],
		"6": ["Name", "Value", "page|visit"]
	}
);
```

#### Additional Piwik Documentation:

For trackEvent and trackPageView:
http://developer.piwik.org/api-reference/tracking-javascript
http://developer.piwik.org/api-reference/tracking-api

	- trackEvent(category, action, [name], [value]) - Logs an event with an event category (Videos, Music, Games...), an event action (Play, Pause, Duration, Add Playlist, Downloaded, Clicked...), and an optional event name and optional numeric value.
	- trackPageView([customTitle]) - Logs a visit to this page


For custom event variables:
http://piwik.org/blog/2012/10/using-custom-variables-in-piwik-tutorial
