# appjistu:piwik
Meteor package that allows you to use Piwik Analytics with your application.

This package uses piwik-tracker (https://www.npmjs.com/package/piwik-tracker).

#### Installation

```
meteor add appjitsu:piwik
```

#### Setup

In your settings.json file, add:

```
"piwik": {
    "url": "http://your_piwik_server_url/piwik.php",
    "site_id": 0
}
```

#### Usage

```
// to track page in your router
Meteor.Piwik.trackPage(Router.current().route.path(this)); 
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

###### Additional Piwik Documentation:

For trackEvent and trackPageView: 
http://developer.piwik.org/api-reference/tracking-javascript
http://developer.piwik.org/api-reference/tracking-api

	- trackEvent(category, action, [name], [value]) - Logs an event with an event category (Videos, Music, Games...), an event action (Play, Pause, Duration, Add Playlist, Downloaded, Clicked...), and an optional event name and optional numeric value.
	- trackPageView([customTitle]) - Logs a visit to this page


For custom event variables: 
http://piwik.org/blog/2012/10/using-custom-variables-in-piwik-tutorial
