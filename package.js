/* Information about this package */
Package.describe({
  // Short two-sentence summary.
  summary: "Piwik tracking for Meteor.",
  // Version number.
  version: "0.0.2",
  // Optional.  Default is package directory name.
  name: "appjitsu:piwik",
  documentation: 'README.md',
  git: 'https://github.com/appjitsu/piwik.git'
});

/* This defines your actual package */
Package.onUse(function (api) {
  // If no version is specified for an 'api.use' dependency, use the
  // one defined in Meteor 0.9.0.
  api.versionsFrom('0.9.0');
  // Use application-configuration package, version 1.0.0 or newer.
  api.use('application-configuration@1.0.0');

  api.addFiles(['client/piwik.js'], ['client']);
  api.addFiles(['server/piwik.js'], ['server']);
});

/* This lets you use npm packages in your package*/
Npm.depends({
  "piwik-tracker": "0.1.1" 
});