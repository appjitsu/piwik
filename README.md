# appjistu:piwik
Meteor package that allows you to use Piwik Analytics with you application.

#### Installation

```
meteor add appjitsu:piwik
```

#### Setup

In your settings.json file, add:

```
"piwik": {
	"url": "URL_TO_PIWIK",
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
	{}
);
```
